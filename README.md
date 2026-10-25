<div align="center">
  <h1>♟️ TFT Comp Evolution</h1>
  <p><strong>Compare seus tabuleiros de Teamfight Tactics e veja como suas composições evoluem entre partidas.</strong></p>
  <p><img alt="Status" src="https://img.shields.io/badge/status-MVP%20local-64748b"> <img alt="Dados" src="https://img.shields.io/badge/dados-JSON%20%2F%20demo-2563eb"></p>
  <p><a href="DATA_CONTRACT.md"><strong>Contrato de dados</strong></a> · <a href="FULLSTACK.md"><strong>Arquitetura</strong></a></p>
</div>

## Para que serve?

O **TFT Comp Evolution** foi criado para identificar o que mudou entre composições: unidades, traits, resultados, arquétipos e patches. A interface apresenta tabuleiros em uma **grade TFT 4 × 7**, com filtros e comparação de duas partidas.

## O que o protótipo oferece

| Área | Função |
| --- | --- |
| Histórico | Lista e filtros por patch ou composição |
| Tabuleiro | Representação visual de unidades e traits |
| Comparador | Diferenças entre duas partidas |
| Métricas | Colocação média e Top 4 da amostra |
| Dados | Importação de partidas em JSON |
| Persistência | Estado guardado no navegador |

**Atenção:** esta implementação **não consulta automaticamente a Riot API**. Ela usa dados importados ou demonstrativos, que devem estar identificados. O contrato para conectar uma fonte real existe em [DATA_CONTRACT.md](DATA_CONTRACT.md).

### O que a comparação não prova

Se uma composição teve melhor colocação que outra, isso **não significa** que a alteração específica causou o resultado. Patch, itens, economia, lobby, estágio e decisões também influenciam cada partida.

## Testar localmente

```bash
git clone https://github.com/HelioConde/tft-comp-evolution.git
cd tft-comp-evolution
python -m http.server 8000
```

Abra `http://localhost:8000`. A lógica está em `core.js`, a UI em `app.js` e há testes em `tests/`. O pacote define `npm run screenshots` para captura de interface, mas não há comando `check` declarado no `package.json` desta versão.

## Estado e evolução

**MVP local funcional, ainda em validação.** A próxima etapa é integrar dados reais apenas depois de definir fonte, permissões e cobertura, mantendo o fallback demonstrativo explícito.

Projeto não oficial e independente da Riot Games. Criado por [Hélio Conde](https://github.com/HelioConde).
