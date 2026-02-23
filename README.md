# Liquid UI

Liquid UI is an animated component library built with React, TypeScript, Tailwind CSS v4, shadcn/ui, and Motion (Framer Motion). Storybook documentation is deployed to [liquidui.dev](https://liquidui.dev).

## Tech Stack

- **React 19** + **TypeScript 5**
- **Vite** for builds
- **Tailwind CSS v4** (CSS-first config)
- **shadcn/ui** components as the base
- **Motion** (Framer Motion) for animations
- **Storybook 8** for documentation

## Development

```bash
pnpm install          # Install dependencies
pnpm dev              # Vite dev server (localhost:5173)
pnpm build            # Production build
pnpm storybook        # Storybook (localhost:6006)
pnpm build-storybook  # Static Storybook build
```

## Components

- **Button** — shadcn button with 6 variants and 3 sizes
- **AnimatedButton** — Motion-wrapped button with hover/tap scale animations
- **Badge** — Status indicators with 4 variants
- **Card** — Container with header, content, and footer sections
- **Input** — Text input with label support
- **Dialog** — Modal dialog with overlay and animations
