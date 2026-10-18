# Week 5 — Handoff notes (SIS 2 starter design)

Routes (from the prototype):
- `/` — Posts page displaying three post cards.
- `/posts/:id` — Individual post page with a title, date, tags, content, Like button, and All posts link.
- `*` — 404 page for routes that do not exist.

Components → React files:
- Header → `src/components/Header.tsx`
- PostCard → `src/components/ui/Card.tsx`
- Button → `src/components/ui/Button.tsx`
- Tag → `src/components/ui/Tag.tsx`

Button variants → prop:
- `variant = "primary"` — blue filled button.
- `variant = "secondary"` — white button with a blue border.

PostCard layout:
- Direction: vertical.
- Gap: 12 px.
- Padding: 16 px.
- Radius: 8 px.

Breakpoint change:
- Phone: one column; header navigation is stacked vertically.
- Desktop: three columns; header navigation is horizontal.

Tokens (all ten):
- `color/primary` = `#1D4ED8`
- `color/on-primary` = `#FFFFFF`
- `color/text` = `#1F2937`
- `color/text-muted` = `#6B7280`
- `color/surface` = `#FFFFFF`
- `color/border` = `#D1D5DB`
- `space/2` = 8 px
- `space/4` = 16 px
- `space/6` = 24 px
- `radius/md` = 8 px

Contrast fix:
- `color/text-muted`: `#9CA3AF` → `#6B7280`
- Contrast on white: approximately 2.54:1 → 4.83:1