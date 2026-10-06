# TFT Comp Evolution

Produto TFT-first para entender **como as composições de um jogador evoluem entre partidas e patches**.

**Area:** TFT  
**Priority:** P2  
**Queue position original:** #22

## Estado atual

MVP funcional iniciado em 06/10/2026.

- histórico visual de partidas;
- filtros por patch e composição;
- colocação média e taxa de Top 4;
- agrupamento por arquétipo;
- tabuleiro TFT 4x7;
- comparação direta entre duas partidas;
- similaridade de unidades e traits;
- leitura rápida das mudanças;
- importação de partidas por JSON;
- persistência local;
- dataset demonstrativo claramente identificado;
- testes automatizados do núcleo;
- CI com Static QA.

## Dados

O MVP não usa o banco geral dos projetos.

O destino correto é o banco gamer `zerotwo`. Como ele não está disponível no conector Supabase atual, esta etapa não grava dados em outro banco como fallback.

Veja `DATA_CONTRACT.md` para o contrato que permitirá ligar partidas reais sem reescrever a interface.

## Rodar localmente

Sirva os arquivos com qualquer servidor HTTP estático e abra `index.html`.

## Próxima versão

- conectar partidas reais pós-jogo;
- autenticação compartilhada com os produtos gamer;
- assets reais de unidades/itens/augments;
- comparação de itemização e augments;
- evolução por patch com mais partidas;
- link compartilhável de comparação.

## Organização

Prioridades gerais continuam centralizadas em:

https://github.com/HelioConde/ideias-ia-lab

Este repositório contém apenas o produto TFT Comp Evolution.
