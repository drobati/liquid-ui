# CLAUDE.md - AI Assistant Guidelines for Liquid UI

## Project Overview

Liquid UI is a React component library built with TypeScript, Tailwind CSS, and Framer Motion. The library provides animated, accessible UI components with comprehensive Storybook documentation.

## Tech Stack

- **React** 17.x
- **TypeScript** 4.x
- **Tailwind CSS** (PostCSS 7 compat version)
- **Framer Motion** 5.x for animations
- **Storybook** 6.4.9 for documentation
- **Create React App** with Craco for build customization
- **pnpm** as package manager

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm start

# Run Storybook locally (port 6006)
pnpm storybook

# Build Storybook for deployment
pnpm build-storybook

# Run tests
pnpm test

# Production build
pnpm build
```

## Project Structure

```
liquid-ui/
├── .github/workflows/     # CI/CD workflows
│   └── storybook.yml      # Deploys Storybook to GitHub Pages
├── .storybook/            # Storybook configuration
│   ├── main.js            # Addons and stories config
│   ├── preview.js         # Global decorators and parameters
│   ├── manager.js         # Manager UI settings
│   └── LiquidUITheme.js   # Custom dark theme
├── src/
│   ├── components/        # UI components
│   │   └── Button/        # Example component structure
│   │       ├── Button.tsx
│   │       ├── button.css
│   │       └── Button.stories.mdx
│   ├── index.tsx          # App entry point
│   └── index.css          # Global styles + CSS variables
├── craco.config.js        # Webpack/PostCSS customization
└── tailwind.config.js     # Tailwind theme configuration
```

## Component Development Guidelines

### Creating a New Component

1. Create a folder under `src/components/ComponentName/`
2. Include these files:
   - `ComponentName.tsx` - Main component with TypeScript props interface
   - `componentname.css` - Tailwind-based styles using `@apply`
   - `ComponentName.stories.mdx` - Storybook documentation with examples

### Component Conventions

- Use TypeScript interfaces for all props
- Export props interface for consumers
- Use Framer Motion for animations (hover, tap, etc.)
- Support a `color` prop that accepts any valid CSS color
- Include size variants: `xs`, `sm`, `md`, `lg`, `xl`
- Include style variants as appropriate: `solid`, `outline`, `ghost`, `link`
- Use CSS custom properties for theming (see `--color-primary` in index.css)

### Styling

- Use Tailwind utility classes via `@apply` in component CSS files
- Primary color is defined as RGB values: `--color-primary: 24, 113, 227`
- Access via Tailwind: `bg-primary`, `text-primary`, etc.
- Dynamic colors use canvas-based conversion (see Button.tsx)

### Storybook Stories

- Use MDX format for rich documentation
- Include a Meta block with title under "Components/"
- Provide Canvas examples for each variant/size
- Document all props with JSDoc comments in the interface
- Include usage notes and accessibility considerations

## Deployment

### GitHub Pages (Storybook)

- **Trigger**: Push to `main` branch
- **Build**: `npm run build-storybook` outputs to `docs-build/`
- **Deploy**: To `gh-pages` branch under `docs/` folder
- **Live Site**: https://liquidui.dev (custom domain pointing to GitHub Pages)

The workflow uses `JamesIves/github-pages-deploy-action@3.6.2`.

## Testing

- Use React Testing Library for component tests
- Place test files alongside components: `ComponentName.test.tsx`
- Run with `pnpm test`

## Accessibility

- Storybook a11y addon is enabled - check the Accessibility tab
- Use semantic HTML elements
- Ensure keyboard navigation works
- Test with screen readers when possible

## CSS Variables

```css
:root {
  --color-primary: 24, 113, 227;  /* RGB values only */
}
```

Use in Tailwind as `rgb(var(--color-primary))`.

## Known Issues

- Storybook display issues may occur - check PLAN.md for fixes in progress
- Using PostCSS 7 compat version of Tailwind due to CRA constraints
