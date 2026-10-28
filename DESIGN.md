# DESIGN.md — Tatiane Garcia Studio de Beleza

Direção: **editorial, quente e premium** — como uma revista de beleza impressa, não um app.
O ponto de partida é a própria marca: assinatura caligráfica em preto sobre branco + "STUDIO DE BELEZA"
em caixa alta espaçada. Tudo gira em torno desse contraste: tinta preta, papel marfim, um único dourado.

> Esta direção **não** foi comparada com sites reais (UXKIN não está conectado). Ela parte do logo,
> do mockup da vitrine e do visual dos posts do Instagram (@tatianegarciastudio).

## Cor

| Token | Claro | Escuro | Papel |
|---|---|---|---|
| `--ink` | `#141210` | `#F3EEE6` | Texto principal, títulos, logo |
| `--ink-soft` | `#5A534B` | `#B8AFA3` | Texto secundário, legendas |
| `--paper` | `#FAF7F2` | `#141210` | Fundo da página (marfim) |
| `--paper-2` | `#F1EBE1` | `#1D1A17` | Faixas alternadas, cartões |
| `--line` | `#E2D9CB` | `#34302B` | Bordas, divisores |
| `--gold` | `#86642F` | `#C9A46A` | **Único acento**: links, detalhes, números, foco |
| `--cta` | `#141210` | `#F3EEE6` | Botão principal (preto sólido / marfim no escuro) |
| `--cta-text` | `#FAF7F2` | `#141210` | Texto do botão principal |
| `--night` / `--night-text` | `#141210` / `#F3EEE6` | igual | Faixa final e rodapé (sempre escuros) |
| `--whats` | `#1F7A4D` | `#1F7A4D` | Só no botão flutuante de WhatsApp |

Contraste: `--ink` sobre `--paper` 17:1; `--ink-soft` sobre `--paper` 7.4:1; `--gold` sobre `--paper` 5.1:1 e sobre `--paper-2` 4.6:1;
ouro claro `#C9A46A` sobre `--night` 8:1.
Sem gradientes, sem glassmorphism.

## Tipografia

- **Display:** *Cormorant Garamond* (500, 600, itálico 500) — títulos; o itálico ecoa a assinatura.
- **Texto / rótulos:** *Jost* (400, 500) — corpo e os rótulos em caixa alta com `letter-spacing: .28em`, ecoando "STUDIO DE BELEZA".

| Nome | Tamanho | Linha | Uso |
|---|---|---|---|
| `display` | clamp(3rem, 8vw, 6.5rem) | 0.95 | Hero |
| `h1` | clamp(2.4rem, 5vw, 4rem) | 1.05 | Títulos de seção |
| `h2` | 1.75rem | 1.2 | Títulos de cartão |
| `lead` | 1.25rem | 1.6 | Introduções |
| `body` | 1.0625rem (17px) | 1.7 | Texto corrido, máx. 65ch |
| `small` | 0.875rem | 1.5 | Legendas |
| `label` | 0.75rem, caixa alta, .28em | 1.4 | Rótulos, navegação |

## Espaçamento

Escala de 8px: 4, 8, 16, 24, 32, 48, 64, 96, 128.
Seções: 96px (desktop) / 64px (mobile). Largura do conteúdo: 1200px; texto: 65ch. Margem lateral mínima: 20px.

## Forma e profundidade

- Raio: **0** em fotos e cartões (editorial); `999px` só em botões e chips.
- Sombra: nenhuma. Profundidade vem de fio fino (`1px solid var(--line)`) e de fundo alternado.

## Componentes

- **Botão principal:** fundo `--cta`, texto `--cta-text`, Jost 500, caixa alta .18em, padding 16×28, pílula. Hover: fundo `--gold`. Foco: anel 2px `--gold` com 3px de offset.
- **Botão secundário:** contorno 1px `--ink`, transparente. Hover: fundo `--ink`, texto `--paper`.
- **Link:** `--ink`, sublinhado 1px `--gold`, offset 4px.
- **Rótulo:** `label` em `--gold`, precedido por um traço de 32px.
- **Cartão de serviço:** sem caixa; número em Cormorant itálico dourado, título `h2`, texto, fio superior.
- **Navegação:** logo à esquerda, links em `label`, CTA WhatsApp à direita; no mobile, menu em tela cheia.
- **Rodapé:** fundo `--night`, logo marfim, contato, Instagram, link para /brand.

## Imagens e ícones

- Fotos reais do salão e de resultados (antes/depois), recorte vertical 4:5, sem bordas arredondadas, sem filtros.
- Enquanto não houver fotos: blocos marcados como **[FOTO]** em `--paper-2`.
- Ícones: traço fino 1.5px (estilo Lucide), só onde ajudam (WhatsApp, Instagram, mapa, relógio). Nunca emoji.
- O logo é sempre a assinatura original; nunca redesenhar com fonte.
- Arquivos: `assets/logo-preto.png`, `logo-branco.png`, `logo-dourado.png` (PNG transparente, gerados do JPG original).
