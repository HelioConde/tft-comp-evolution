# Arquitetura fullstack — TFT Comp Evolution

## Estado do MVP

A primeira versão funciona sem API externa:

- dataset demonstrativo explícito;
- importação JSON local;
- filtros por patch e composição;
- métricas pessoais;
- histórico visual;
- tabuleiro 4x7;
- comparação direta de duas partidas;
- análise de unidades/traits mantidos, adicionados e removidos;
- persistência local de imports.

## Banco de jogos

Este projeto **não deve usar o `pizzaria-db`**.

Destino planejado: banco de jogos `zerotwo`.

O conector Supabase disponível nesta sessão não expõe esse projeto, então nenhuma migration foi aplicada em outro banco como atalho.

## Contrato futuro

A camada de dados deve entregar partidas normalizadas conforme `DATA_CONTRACT.md`.

Estrutura sugerida quando o backend estiver disponível:

- `tft_comp_evolution_matches` — snapshot pós-partida normalizado por jogador;
- `tft_comp_evolution_units` — unidades, estrelas, itens e posição;
- `tft_comp_evolution_traits` — traits ativados por partida;
- `tft_comp_evolution_augments` — augments escolhidos;
- views/queries agregadas para evolução por patch e arquétipo.

Dados devem ser derivados apenas de fontes permitidas e exibidos pós-partida; nada deste projeto exige informações proibidas em tempo real.

## Próxima etapa

1. ligar autenticação/identidade já usada pelos produtos gamer;
2. carregar partidas reais do banco `zerotwo`;
3. mapear nomes/IDs para assets TFT;
4. adicionar comparação de itens e augments mais profunda;
5. validar com partidas reais no desktop e mobile.

## QA gates

- import inválido não pode quebrar a tela;
- IDs duplicados devem ser rejeitados;
- filtros vazios devem renderizar estado vazio;
- comparação não pode falhar com poucas partidas;
- posições devem respeitar a grade 4x7;
- mobile deve manter comparação legível;
- dados demo devem permanecer claramente identificados.
