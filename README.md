# Clean Shopper Design System & Components

AI-powered product research assistant for ingredient-aware consumers.

## Project Setup (Phase 0 - Complete ✅)

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
# Start dev server
npm run dev

# Start Storybook (component documentation)
npm run storybook

# Run tests
npm run test

# Type check
npm run type-check
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Build Storybook
npm run build-storybook
```

## Project Structure

```
src/
├── components/          # Reusable React components (Phase 1-2)
├── pages/              # Page-level components
├── lib/
│   ├── api/            # External API integrations
│   ├── utils/          # Utility functions
│   └── hooks/          # Custom React hooks
└── styles/
    └── globals.css     # Global styles

.storybook/            # Storybook configuration
.env.local.example     # Environment variables template
```

## Design System

Design tokens are configured in `tailwind.config.ts`:
- **Colors:** Primary (sage green), accent (golden orange), semantic colors
- **Typography:** Inter font with 8-level type scale
- **Spacing:** 8px-based spacing scale
- **Border Radius:** 4 levels (sm → full)
- **Shadows:** 4 levels (sm → xl)

See `/docs/design-system.md` for complete specifications.

## Development Guidelines

### Component Building (Phase 1-2)

1. Create component file in `src/components/`
2. Write TypeScript interface for props
3. Implement using Tailwind tokens (never hardcode colors/spacing)
4. Write unit tests in `.test.tsx` file
5. Create Storybook story in `.stories.tsx` file
6. Verify in Storybook: `npm run storybook`

### Load Design Skill

When building components, load the design system enforcement skill:
```
/skills/clean-shopper-design.md
```

This ensures all components use design tokens consistently.

## Next Steps

- **Phase 1:** Build 15 core navigation & search components
- **Phase 2:** Build 11 product display components
- **Phase 3:** Add product details & comparison features
- **Phase 4:** Implement shopping cart & lists
- **Phase 5:** User preferences & settings
- **Phase 6:** Polish & edge cases

See `/plans/greedy-doodling-pebble.md` for the complete implementation plan.

## Tech Stack

- **React 18.3** - UI library
- **Vite 5** - Build tool
- **TypeScript 5.5** - Type safety
- **Tailwind CSS 3.4** - Styling with design tokens
- **Storybook 8.5** - Component documentation
- **Vitest 2.1** - Unit testing
- **React Testing Library** - Component testing

## Accessibility

All components follow WCAG AA standards:
- Color contrast ratios (4.5:1 for body text)
- Keyboard navigation
- ARIA labels
- Focus indicators
- Screen reader friendly

## Resources

- Design System: `/docs/design-system.md`
- Component Specs: `/component-and-token-list.md`
- Implementation Plan: `/plans/greedy-doodling-pebble.md`
- Design Skill: `/.claude/skills/clean-shopper-design.md`
- Figma File: https://www.figma.com/design/DcEzvhAF7koEbm39s1Qi4k

---

Phase 0 initialized: 2026-09-12
Ready for Phase 1 component development
