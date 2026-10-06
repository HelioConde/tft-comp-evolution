(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.TFTCompCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const allowedPlacement = value => Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 8;

  function normalizeText(value) {
    return String(value || '').trim();
  }

  function normalizeMatch(match, index) {
    if (!match || typeof match !== 'object') return null;
    const units = Array.isArray(match.units) ? match.units : [];
    const traits = Array.isArray(match.traits) ? match.traits : [];
    const augments = Array.isArray(match.augments) ? match.augments : [];
    const placement = Number(match.placement);
    if (!normalizeText(match.id) || !normalizeText(match.patch) || !normalizeText(match.compName) || !allowedPlacement(placement)) return null;
    if (!units.length) return null;

    const normalizedUnits = units.slice(0, 12).map((unit, unitIndex) => ({
      name: normalizeText(unit?.name) || `Unidade ${unitIndex + 1}`,
      stars: Math.min(3, Math.max(1, Number(unit?.stars) || 1)),
      items: Array.isArray(unit?.items) ? unit.items.slice(0, 3).map(normalizeText).filter(Boolean) : [],
      row: Math.min(3, Math.max(0, Number(unit?.row) || 0)),
      col: Math.min(6, Math.max(0, Number(unit?.col) || 0)),
    }));

    return {
      id: normalizeText(match.id),
      patch: normalizeText(match.patch),
      playedAt: Number.isFinite(Date.parse(match.playedAt)) ? new Date(match.playedAt).toISOString() : new Date(Date.now() - index * 3600000).toISOString(),
      placement,
      stage: normalizeText(match.stage) || '—',
      compName: normalizeText(match.compName),
      traits: traits.map(normalizeText).filter(Boolean).slice(0, 10),
      augments: augments.map(normalizeText).filter(Boolean).slice(0, 3),
      units: normalizedUnits,
      level: Math.min(10, Math.max(1, Number(match.level) || 8)),
      goldLeft: Math.max(0, Number(match.goldLeft) || 0),
    };
  }

  function validateMatches(input) {
    if (!Array.isArray(input)) return { ok: false, error: 'O JSON precisa ser um array de partidas.' };
    if (!input.length) return { ok: false, error: 'Inclua pelo menos uma partida.' };
    if (input.length > 100) return { ok: false, error: 'O MVP aceita até 100 partidas por importação.' };
    const matches = input.map(normalizeMatch);
    if (matches.some(match => !match)) return { ok: false, error: 'Uma ou mais partidas não seguem o contrato mínimo.' };
    const ids = new Set(matches.map(match => match.id));
    if (ids.size !== matches.length) return { ok: false, error: 'Cada partida precisa ter um id único.' };
    return { ok: true, matches: matches.sort((a, b) => Date.parse(b.playedAt) - Date.parse(a.playedAt)) };
  }

  function averagePlacement(matches) {
    if (!matches.length) return 0;
    return matches.reduce((sum, match) => sum + Number(match.placement), 0) / matches.length;
  }

  function top4Rate(matches) {
    if (!matches.length) return 0;
    return matches.filter(match => Number(match.placement) <= 4).length / matches.length;
  }

  function jaccard(a, b) {
    const left = new Set(a);
    const right = new Set(b);
    const union = new Set([...left, ...right]);
    if (!union.size) return 1;
    let shared = 0;
    left.forEach(value => { if (right.has(value)) shared += 1; });
    return shared / union.size;
  }

  function unitNames(match) {
    return (match.units || []).map(unit => unit.name);
  }

  function evolutionByComp(matches) {
    const groups = new Map();
    matches.forEach(match => {
      const group = groups.get(match.compName) || [];
      group.push(match);
      groups.set(match.compName, group);
    });
    return [...groups.entries()].map(([name, games]) => ({
      name,
      games: games.length,
      averagePlacement: averagePlacement(games),
      top4Rate: top4Rate(games),
      patches: [...new Set(games.map(game => game.patch))],
    })).sort((a, b) => b.games - a.games || a.averagePlacement - b.averagePlacement);
  }

  function compareMatches(a, b) {
    if (!a || !b) return null;
    const aUnits = unitNames(a);
    const bUnits = unitNames(b);
    const aSet = new Set(aUnits);
    const bSet = new Set(bUnits);
    const sharedUnits = aUnits.filter(name => bSet.has(name));
    const addedUnits = bUnits.filter(name => !aSet.has(name));
    const removedUnits = aUnits.filter(name => !bSet.has(name));
    const sharedTraits = a.traits.filter(name => new Set(b.traits).has(name));
    const unitSimilarity = jaccard(aUnits, bUnits);
    const traitSimilarity = jaccard(a.traits, b.traits);
    const placementDelta = Number(b.placement) - Number(a.placement);

    let insight = 'A estrutura mudou pouco entre as duas partidas.';
    if (unitSimilarity < .45) insight = 'Você reconstruiu boa parte da composição entre as partidas — sinal de adaptação forte.';
    else if (placementDelta <= -2) insight = 'Você preservou boa parte do núcleo e terminou melhor na partida B; vale investigar itens, estrelas e posicionamento.';
    else if (placementDelta >= 2) insight = 'A composição ficou parecida, mas o resultado caiu na partida B; posicionamento, upgrades e economia merecem revisão.';
    if (traitSimilarity < .4 && unitSimilarity >= .55) insight = 'O núcleo de unidades permaneceu, mas a combinação de traits mudou bastante — um bom ponto para revisar flexibilidade.';

    return {
      unitSimilarity,
      traitSimilarity,
      placementDelta,
      sharedUnits,
      addedUnits,
      removedUnits,
      sharedTraits,
      insight,
    };
  }

  return { validateMatches, averagePlacement, top4Rate, evolutionByComp, compareMatches, jaccard };
});
