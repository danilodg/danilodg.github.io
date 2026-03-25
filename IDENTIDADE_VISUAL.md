# Identidade Visual

Este documento registra a identidade visual deste portfolio para reutilizar a mesma linguagem em outros projetos.

## Direcao visual

- Estetica tecnologica, premium e contemporanea.
- Mistura de superficie em glassmorphism com fundo atmosferico e pontos de luz.
- Sensacao visual de produto digital bem acabado, sem cair em layout generico.
- Interface pensada para parecer leve, sofisticada e clara tanto no desktop quanto no mobile.

## Paleta principal

As cores sao controladas por variaveis CSS no tema em `src/App.tsx`.

### Tema escuro

- Fundo base: `#050916`
- Texto principal: `#f8fbff`
- Texto suave: `#c5d0ef`
- Texto secundario: `#94a3c7`
- Accent soft: `#9be8ff`
- Accent line: `#7ee7ff`
- Gradient start: `#6fe0ff`
- Gradient mid: `#687eff`
- Gradient end: `#8b66ff`

### Tema claro

- Fundo base: `#edf4ff`
- Texto principal: `#13203f`
- Texto suave: `#42557d`
- Texto secundario: `#607297`
- Accent soft: `#1b78d4`
- Accent line: `#49a6ff`
- Gradient start: `#38bdf8`
- Gradient mid: `#4f7cff`
- Gradient end: `#7c69ff`

## Fundos

- Base com gradiente vertical e radial, nunca chapado.
- Grid sutil no fundo para reforcar linguagem tecnica.
- Dois glows grandes desfocados para criar profundidade.
- Fundo sempre serve como ambiente, nao como protagonista.

Referencia: `src/App.tsx`

## Tipografia

- Fonte principal de interface: `Outfit`
- Fonte de titulos: `Space Grotesk`
- Fonte auxiliar tecnica: `IBM Plex Mono`

### Regras

- Titulos usam `Space Grotesk` com peso forte e tracking levemente negativo.
- Textos corridos usam `Outfit` para leitura mais suave.
- Labels pequenos e elementos tecnicos podem usar caixa alta com tracking maior.

Referencia: `src/index.css`, `src/App.tsx`, `src/components/ui.ts`

## Componentes-base

### Glass panel

Uso principal para blocos, cards e secoes com destaque.

Caracteristicas:

- borda suave
- fundo semitransparente com gradiente
- sombra profunda, mas difusa
- `backdrop-blur`
- cantos arredondados grandes

Classe base: `glassPanel` em `src/components/ui.ts`

### Labels de secao

Uso para pequenos titulos antes do heading principal.

Caracteristicas:

- caixa alta
- tracking alto
- linha decorativa antes do texto
- cor ligada ao accent

Classe base: `labelClass` em `src/components/ui.ts`

### Botoes

#### Primario

- formato pill
- gradiente principal da marca
- texto branco
- hover com leve elevacao vertical

Classe base: `primaryButtonClass`

#### Secundario

- fundo translúcido
- borda suave
- sem competir com o CTA principal

Classe base: `secondaryButtonClass`

## Cards

### Linguagem dos cards

- borda arredondada generosa
- fundo glass ou translucido
- espacamento interno confortavel
- imagem ou conteudo com respiracao
- hover discreto, sem exagero de brilho

### Regra importante

- evitar glow agressivo ao redor no hover
- preferir elevacao sutil, zoom leve na imagem ou reforco de borda

Referencia: `src/components/ProjectsSection.tsx`, `src/components/ServicesSection.tsx`, `src/components/SiteFooter.tsx`

## Tags e chips

Uso para tecnologias, highlights e categorias.

Caracteristicas:

- formato arredondado
- borda fina
- fundo translúcido
- texto pequeno em caixa alta
- tracking levemente aberto

Esses elementos ajudam a reforcar a linguagem de produto digital.

## Modais

Uso para detalhamento de projetos.

Caracteristicas:

- overlay escuro com blur
- painel central glass
- imagem forte no topo ou na lateral
- conteudo dividido em titulo, descricao, stack e highlights
- fechamento simples e claro

Referencia: `src/components/ServicesSection.tsx`

## Animacao e movimento

- usar animacao com moderacao
- preferir transicoes suaves de 250ms a 500ms
- hover com micro movimento vertical ou pequeno scale
- evitar efeitos chamativos demais, especialmente aura intensa em cards
- respeitar `prefers-reduced-motion`

Referencia: `src/index.css`, `src/App.tsx`

## Espacamento e composicao

- secoes com bastante respiro vertical
- titulos com bloco introdutorio antes do conteudo
- grids responsivos com 2 ou 3 colunas no desktop
- mobile com pilha simples, sem perder impacto visual
- largura maxima centralizada para manter aspecto editorial e premium

## Iconografia

- icones simples, limpos e com traco consistente
- usar somente quando acrescentarem leitura rapida
- evitar excesso de icones decorativos sem funcao

## Imagens e ilustracoes

- imagens devem seguir clima tecnologico e sofisticado
- preferir screenshots reais dos projetos quando existirem
- se usar placeholders, manter mesma paleta e atmosfera do site

## O que manter em outros projetos

- atmosfera com gradiente, grid e glow suave no fundo
- contraste forte entre texto e fundo
- superfícies glass com blur e borda delicada
- tipografia expressiva em titulos
- chips tecnicos para stack, categorias ou highlights
- CTA principal com gradiente da marca

## O que evitar

- fundo branco liso sem profundidade
- cards sem contraste ou sem borda
- fontes genericas como Arial ou Roboto como base principal
- excesso de sombras duras
- animacoes exageradas
- layouts com cara de template pronto

## Arquivos-chave desta identidade

- `src/App.tsx`
- `src/index.css`
- `src/components/ui.ts`
- `src/components/ProjectsSection.tsx`
- `src/components/ServicesSection.tsx`
- `src/components/SiteFooter.tsx`

## Como reaplicar rapido em outro projeto

1. Recriar as variaveis de tema do `src/App.tsx`
2. Levar as classes utilitarias de `src/components/ui.ts`
3. Importar as mesmas familias tipograficas de `src/index.css`
4. Reproduzir fundo com gradiente, grid e glows suaves
5. Montar cards, chips e botoes seguindo as regras deste documento

## Resumo da identidade

Se for resumir esta identidade em poucas palavras:

`tecnologica`, `sofisticada`, `atmosferica`, `premium`, `clara`, `responsiva`
