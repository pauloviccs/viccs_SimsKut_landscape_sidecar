

# 🔮 Reconstrução da Lenscape — Landing Page SimsKut

## Visão Geral
Reconstruir a página inicial (Lenscape) do SimsKut como uma landing page completa e imersiva, usando o design system **Liquid Glass** do repo original, com animações elegantes, seções de marketing e portal de notícias.

---

## 1. Design System Liquid Glass (CSS + Componentes Base)
- Importar todo o sistema de variáveis CSS do `liquid-glass.css` original (cores glass, blur, raios, tipografia, animações spring)
- Criar componente **FluidBackground** com 3-4 blobs animados (CSS keyframes + mix-blend-mode screen) sobre fundo `#050508`
- Criar componente **GlassCard** (backdrop-filter blur, borda translúcida, specular highlight no topo)
- Criar componente **GlassButton** com variantes primary/secondary/ghost, hover scale com spring transition
- Adicionar textura de noise anti-banding sobre o background

## 2. Seção Hero (Tela cheia)
- Logo SimsKut com ícone ✨ em gradient box (azul → roxo → verde), animação de entrada com scale + rotate
- Título "SimsKut" com "Kut" em gradient text (azul → verde)
- Subtítulo "Rede social privada para comunidades de The Sims"
- Badge "Acesso exclusivo por convite • Aprovação manual"
- Botões CTA: "Criar Conta" (primary) e "Entrar" (secondary glass)
- Todas as entradas com staggered fade-in + slide-up animations

## 3. Seção Features — "Por que SimsKut?"
- 3-4 GlassCards em grid responsivo mostrando pontos fortes:
  - 🎨 **Galeria Privada** — Compartilhe screenshots e builds dos seus Sims
  - 👨‍👩‍👧‍👦 **Famílias & Comunidades** — Crie grupos e interaja com famílias
  - 📰 **Feed Social** — Posts, reações, comentários em tempo real
  - 🔒 **Privacidade Total** — Acesso por convite, aprovação manual
- Animação scroll-triggered (fade-in ao entrar na viewport)
- Cards com hover glow effect

## 4. Seção Showcase Visual
- Mockup/preview estilizado mostrando como o feed/perfil se parece (usando imagens placeholder ou ilustrações glass)
- GlassCard grande com "screenshot" do app, borda luminosa
- Texto descritivo lateral sobre a experiência

## 5. Seção Notícias / Mini Blog
- Grid de cards com notícias estáticas (placeholder para futuro admin posts)
- Cada card: título, data, badge de categoria (Patch Note, Evento, Novidade), preview de texto
- Design glass com hover effects
- Preparado para futura integração com backend (dados mock por agora)

## 6. Footer
- Copyright "© 2026 SimsKut • Feito com 💎 por VICCS"
- Links de navegação em glass style
- Estilo minimalista integrado ao background

## 7. Cookie Banner
- Banner glass no canto inferior com texto de privacidade
- Botão "Aceitar tudo e fechar"
- Persistência via localStorage

---

## Notas Técnicas
- **Sem backend por agora** — Todo conteúdo estático/mock, preparado para futura conexão Supabase
- **Framer Motion não disponível** — Animações implementadas com CSS keyframes + transitions (Tailwind animate)
- **Responsivo** — Mobile-first, todas as seções adaptáveis
- **Dark-only** — Background escuro #050508 com elementos glass translúcidos
- **Scroll suave** — Seções com snap ou scroll behavior smooth

