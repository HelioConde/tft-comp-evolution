# Contrato de dados — TFT Comp Evolution

O MVP aceita um array JSON com até 100 partidas. O formato foi mantido simples para permitir futura alimentação pelo banco de jogos, telemetria pós-partida ou importação manual.

## Exemplo mínimo

```json
[
  {
    "id": "match-001",
    "patch": "Patch A",
    "playedAt": "2026-10-05T22:10:00Z",
    "placement": 2,
    "stage": "6-1",
    "compName": "Feiticeiros Flex",
    "traits": ["Feiticeiro", "Guardião"],
    "augments": ["Aumento A", "Aumento B", "Aumento C"],
    "level": 9,
    "goldLeft": 8,
    "units": [
      {
        "name": "Ahri",
        "stars": 2,
        "items": ["Item A", "Item B"],
        "row": 3,
        "col": 3
      }
    ]
  }
]
```

## Regras

- `id`, `patch` e `compName` são obrigatórios.
- `placement` deve estar entre 1 e 8.
- cada partida deve ter pelo menos uma unidade.
- `row` vai de 0 a 3 e `col` de 0 a 6.
- `stars` é normalizado entre 1 e 3.
- até 12 unidades, 10 traits, 3 augments e 3 itens por unidade são usados pelo MVP.
- IDs duplicados são rejeitados.
- a importação fica apenas no `localStorage` do navegador.

## Integração futura

Quando o banco de jogos `zerotwo` estiver acessível pela integração, o backend deve transformar os dados reais neste contrato antes de enviá-los ao front-end. O navegador não deve receber credenciais Riot nem segredos do Supabase.
