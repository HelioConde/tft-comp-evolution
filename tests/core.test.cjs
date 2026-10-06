const { test } = require('node:test');
const assert = require('node:assert/strict');
const core = require('../core.js');

const base = {
  id: 'a', patch: 'Patch A', playedAt: '2026-10-01T00:00:00Z', placement: 4,
  stage: '5-1', compName: 'Flex', traits: ['A','B'], augments: [],
  level: 8, goldLeft: 4,
  units: [{name:'Ahri',stars:2,items:['Item'],row:3,col:3},{name:'Shen',stars:2,items:[],row:0,col:3}]
};

test('valida e normaliza partidas', () => {
  const result = core.validateMatches([base]);
  assert.equal(result.ok, true);
  assert.equal(result.matches[0].placement, 4);
  assert.equal(result.matches[0].units.length, 2);
});

test('rejeita placement fora de 1 a 8 e ids duplicados', () => {
  assert.equal(core.validateMatches([{...base, placement: 9}]).ok, false);
  assert.equal(core.validateMatches([base, {...base}]).ok, false);
});

test('calcula colocação média e top 4', () => {
  const matches = [{...base, id:'a', placement:2},{...base,id:'b',placement:6}];
  assert.equal(core.averagePlacement(matches), 4);
  assert.equal(core.top4Rate(matches), .5);
});

test('agrupa evolução por composição', () => {
  const matches = [{...base,id:'a',placement:2},{...base,id:'b',placement:4},{...base,id:'c',compName:'Reroll',placement:7}];
  const groups = core.evolutionByComp(matches);
  assert.equal(groups[0].name, 'Flex');
  assert.equal(groups[0].games, 2);
  assert.equal(groups[0].averagePlacement, 3);
});

test('compara mudanças de unidades e traits', () => {
  const a = {...base,id:'a'};
  const b = {...base,id:'b',placement:2,traits:['A','C'],units:[
    {name:'Ahri',stars:2,items:[],row:3,col:3},{name:'Garen',stars:2,items:[],row:0,col:2}
  ]};
  const diff = core.compareMatches(a,b);
  assert.deepEqual(diff.sharedUnits,['Ahri']);
  assert.deepEqual(diff.addedUnits,['Garen']);
  assert.deepEqual(diff.removedUnits,['Shen']);
  assert.deepEqual(diff.sharedTraits,['A']);
  assert.equal(diff.placementDelta,-2);
});
