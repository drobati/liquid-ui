# Liquid UI Development Plan

## Current State (Post-Migration)

**Version**: 0.1.0
**Stack**: React 19, TypeScript 5, Vite, Tailwind CSS v4, shadcn/ui, Motion, Storybook 8
**Components**: Button, AnimatedButton, Badge, Card, Input, Label, Dialog
**Documentation**: Storybook 8 with CSF3 stories and autodocs
**Deployment**: GitHub Pages via gh-pages branch (pnpm + Storybook 8)

## Deployment Architecture

1. **Trigger**: Push to `main` branch triggers `.github/workflows/storybook.yml`
2. **Build**: `pnpm build-storybook` outputs to `docs-build/`
3. **Deploy**: Files are pushed to `gh-pages` branch under `docs/` folder
4. **Serve**: GitHub Pages serves from `gh-pages` branch
5. **Domain**: Custom domain `liquidui.dev` points to the GitHub Pages site

---

## Next Steps

### More shadcn Components

Install additional components as needed:

```bash
pnpm dlx shadcn@latest add accordion alert-dialog avatar dropdown-menu tabs tooltip
```

### Animation Strategy

Liquid UI's differentiator is Motion animations layered on top of shadcn/ui components. The `AnimatedButton` pattern can be extended:

```tsx
// Pattern: wrap any shadcn component with motion
const MotionCard = motion.create(Card);

export function AnimatedCard(props) {
  return (
    <MotionCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      {...props}
    />
  );
}
```

### Infrastructure

- [ ] Add Chromatic or similar for visual regression testing
- [ ] Set up component publishing to npm
- [ ] Add interaction tests with Storybook
- [ ] Consider adding Vitest for unit testing

### Theming

- [ ] Implement theme switcher (light/dark mode)
- [ ] Create custom color themes beyond neutral
- [ ] Add design tokens export
