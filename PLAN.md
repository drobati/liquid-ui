# Liquid UI Development Plan

## Current State

**Version**: 0.1.0
**Components**: 1 (Button)
**Documentation**: Storybook with MDX
**Deployment**: GitHub Pages via gh-pages branch

### Existing Component
- **Button**: Full-featured with sizes (xs-xl), variants (solid, outline, ghost, link), custom colors, and Framer Motion animations

## Deployment Architecture

### How GitHub Pages Deployment Works

1. **Trigger**: Push to `main` branch triggers `.github/workflows/storybook.yml`
2. **Build**: Storybook compiles to `docs-build/` directory
3. **Deploy**: Files are pushed to `gh-pages` branch under `docs/` folder
4. **Serve**: GitHub Pages serves from `gh-pages` branch
5. **Domain**: Custom domain `liquidui.dev` points to the GitHub Pages site

To check deployment status:
- View the Actions tab in GitHub for build logs
- Check the `gh-pages` branch for deployed files
- Visit https://liquidui.dev to see the live Storybook

---

## Phase 1: Storybook Fixes (Priority: High)

### Known Issues to Investigate

- [ ] **Display Issues**: Investigate reported Storybook display problems
  - Check if styles are loading correctly
  - Verify Tailwind CSS purging isn't removing needed classes
  - Test Canvas rendering in different browsers
  - Check if `--docs` flag in build-storybook is causing issues

- [ ] **Deployment Verification**
  - Confirm `gh-pages` branch structure is correct
  - Verify custom domain CNAME file is present
  - Check if `docs/` target folder is correct for GitHub Pages setup
  - Test that assets (logo, images) are loading from correct URLs

### Potential Fixes

1. Update Storybook to latest 6.x or migrate to 7.x
2. Review `preview.js` for any conflicting configurations
3. Ensure public assets are correctly referenced in stories
4. Add explicit viewport settings for consistent rendering

---

## Phase 2: Core Components (Priority: High)

Essential components for any UI library:

### Form Components
- [ ] **Input** - Text input with variants, sizes, states (error, disabled, focused)
- [ ] **Textarea** - Multi-line input with auto-resize option
- [ ] **Select** - Dropdown with search, multi-select options
- [ ] **Checkbox** - With indeterminate state support
- [ ] **Radio** - Radio button group
- [ ] **Switch/Toggle** - Animated toggle switch
- [ ] **Slider** - Range input with marks and tooltips

### Layout Components
- [ ] **Card** - Container with header, body, footer sections
- [ ] **Modal/Dialog** - Overlay modal with animations
- [ ] **Drawer** - Side panel drawer
- [ ] **Tabs** - Tab navigation with panels
- [ ] **Accordion** - Collapsible sections

### Feedback Components
- [ ] **Alert** - Status messages (info, success, warning, error)
- [ ] **Toast/Notification** - Pop-up notifications with auto-dismiss
- [ ] **Badge** - Small status indicators
- [ ] **Spinner/Loader** - Loading states with animation
- [ ] **Progress** - Progress bar with percentage

### Navigation Components
- [ ] **Breadcrumb** - Navigation breadcrumbs
- [ ] **Pagination** - Page navigation
- [ ] **Menu** - Dropdown menu
- [ ] **Navbar** - Top navigation bar

---

## Phase 3: Advanced Components (Priority: Medium)

- [ ] **Tooltip** - Hover tooltips with positioning
- [ ] **Popover** - Click-triggered popovers
- [ ] **Avatar** - User avatars with fallback
- [ ] **Tag/Chip** - Removable tags
- [ ] **Table** - Data table with sorting, filtering
- [ ] **Calendar** - Date picker calendar
- [ ] **Stepper** - Multi-step wizard

---

## Phase 4: Infrastructure Improvements (Priority: Medium)

### Build & Tooling
- [ ] Consider migrating to Vite for faster builds
- [ ] Upgrade Storybook to v7+ for better performance
- [ ] Add Chromatic or similar for visual regression testing
- [ ] Set up component publishing to npm

### Testing
- [ ] Add unit tests for all components
- [ ] Add accessibility tests with jest-axe
- [ ] Add visual regression tests
- [ ] Add interaction tests with Storybook

### Documentation
- [ ] Create getting started guide
- [ ] Add theming documentation
- [ ] Add migration guides for version updates
- [ ] Create changelog

---

## Phase 5: Theming & Customization (Priority: Low)

- [ ] Implement comprehensive theme system
- [ ] Add light/dark mode support
- [ ] Create theme generator tool
- [ ] Support CSS-in-JS alternative (optional)
- [ ] Add design tokens export

---

## Component Implementation Checklist

When adding a new component, ensure:

1. [ ] TypeScript props interface with JSDoc comments
2. [ ] Size variants (xs, sm, md, lg, xl) where applicable
3. [ ] Style variants appropriate to component
4. [ ] Framer Motion animations
5. [ ] Tailwind CSS styling with `@apply`
6. [ ] Storybook MDX documentation
7. [ ] All interactive states (hover, focus, active, disabled)
8. [ ] Keyboard navigation support
9. [ ] Screen reader compatibility
10. [ ] Unit tests
11. [ ] Accessibility tests

---

## Milestones

### v0.2.0 - Foundation
- Fix Storybook display issues
- Add Input, Checkbox, Select components
- Add Card, Alert components

### v0.3.0 - Forms
- Complete form components suite
- Add form validation examples
- Add Toast notifications

### v0.4.0 - Layout
- Add Modal, Drawer, Tabs, Accordion
- Add navigation components

### v0.5.0 - Polish
- Visual regression testing
- Comprehensive theming
- npm package publishing

### v1.0.0 - Production Ready
- All core components complete
- Full test coverage
- Complete documentation
- Stable API

---

## Notes

- Focus on quality over quantity - each component should be fully featured
- Maintain consistent API patterns across all components
- Prioritize accessibility from the start
- Keep bundle size minimal with tree-shaking support
