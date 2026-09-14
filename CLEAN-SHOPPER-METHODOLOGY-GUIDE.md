# Clean Shopper Build Methodology
## Step-by-Step Guide for Replicating the Process

**Author:** Claude Code with Michael Thibodeau  
**Date:** September 13, 2026  
**Version:** 1.0

---

## Executive Summary

The Clean Shopper methodology is a systematic, phase-based approach to building production-ready React component libraries for complex applications. This guide documents the complete process used to build Clean Shopper's 20-component library and can be adapted for any new project.

**Key Principle:** Build components in 6 phases, organizing by user-facing features rather than technical layers. Each phase is a complete, working set of features that can be tested and deployed.

---

## Table of Contents

1. [Phase 0: Preparation](#phase-0-preparation)
2. [Phase 1-6: Component Building](#phases-1-6-component-building)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Component Organization](#component-organization)
6. [Testing & Verification](#testing--verification)
7. [Documentation](#documentation)
8. [Git Workflow](#git-workflow)
9. [Lessons Learned](#lessons-learned)
10. [Checklist for New Projects](#checklist-for-new-projects)

---

## Phase 0: Preparation

### 0.1 Establish Design System

**What:** Create a locked design system before building any components.

**Steps:**
1. Document color palette (primary, secondary, accent, semantic colors)
2. Define typography (font families, sizes, weights, line heights)
3. Create spacing scale (xs, sm, md, lg, xl, 2xl, 3xl, 4xl)
4. Define border radius scale (sm, md, lg, full)
5. Define shadows (sm, md, lg)
6. Document design constraints (responsive breakpoints, mobile-first, etc.)

**Tools:**
- `docs/design-system.md` — markdown specification
- `tailwind.config.ts` — Tailwind CSS configuration
- `design-system-visual.html` — visual reference page (optional)

**Key Insight:** The design system is the source of truth. Never hardcode colors, spacing, or sizes in components—always reference tokens from the config.

### 0.2 Create Project Structure

**Steps:**
1. Initialize React + TypeScript + Vite project
2. Set up Tailwind CSS with design tokens
3. Create directory structure:
   ```
   src/
   ├── components/
   │   ├── phase1-*/
   │   ├── phase2-*/
   │   ├── phase3-*/
   │   └── index.ts
   ├── hooks/
   ├── types/
   ├── styles/
   │   └── globals.css
   ├── App.tsx
   └── main.tsx
   ```

**Key Insight:** Organize by phase, not by component type. This forces you to think about user features, not technical abstraction.

### 0.3 Document Phase Plan

**What:** Create a detailed breakdown of all 6 phases before coding.

**Structure:**
- Phase name (e.g., "Navigation & Search")
- User-facing goal (what users can do)
- Component list (4-6 components per phase)
- Rough LOC estimate
- Dependencies on other phases

**Example (Phase 1 - Clean Shopper):**
```
Phase 1: Navigation & Search (4 components)
Goal: Users can navigate the app and search for products
Components:
  - Header (sticky nav with logo)
  - SearchBar (search + filters)
  - Input (form field)
  - Button (4 variants × 3 sizes)
Estimate: 400 LOC
```

### 0.4 Set Up Development Server

**Create `.claude/launch.json`:**
```json
{
  "version": "0.0.1",
  "configurations": [
    {
      "name": "vite",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run", "dev"],
      "port": 5173
    }
  ]
}
```

**Key Insight:** Keep dev server accessible and auto-opening. This forces immediate testing of every component.

---

## Phases 1-6: Component Building

### Phase Pattern (for each phase)

#### 1. Plan Components
- List 4-6 components
- Define props/behavior
- Sketch UI states (default, hover, active, disabled, loading, error)

#### 2. Build Components
- Create TypeScript files (strict mode)
- Use design tokens from Tailwind config
- Implement default state + loading/error states
- Add JSDoc comments
- Export from `index.ts`

#### 3. Test in Browser
- Start dev server
- Create temporary test page or integrate into App.tsx
- Verify appearance across component states
- Check responsive behavior
- Verify accessibility (ARIA labels, focus states, keyboard nav)

#### 4. Commit Progress
```bash
git add src/components/
git commit -m "Build Phase N components: [feature description]"
```

### Example: Phase 1 Implementation (Clean Shopper)

**Components Built:**
- Button (primary, secondary, accent, outline × sm, md, lg)
- Input (with label, helper text, error state, icon)
- Header (sticky, responsive, with menu)
- SearchBar (search + collapsible filter panel)

**Key Implementation Details:**
- Used Tailwind classes exclusively (no custom CSS)
- All colors from design tokens (--primary, --secondary, --accent, etc.)
- Spacing always from scale (space-sm, space-md, etc.)
- Components accept optional className for flexibility
- All interactive elements have visible focus states

**Test Checklist:**
- ✅ Button: all 12 variants render correctly
- ✅ Input: label, placeholder, helper text display
- ✅ Header: sticky positioning works, responsive menu works
- ✅ SearchBar: filter panel opens/closes, onChange callbacks work
- ✅ All components have visible focus states
- ✅ All components respond correctly on mobile view

**Commit Message:**
```
Build Phase 1 & 2 components: Navigation, Search, and Product Display

Implemented 7 core components:
- Button (4 variants × 3 sizes with loading state)
- Input (with label, helpers, errors, optional icon)
- Header (sticky primary navigation bar)
- SearchBar (search + collapsible filters)
- ProductCard (full info with badge, rating, actions)
- ProductBadge (semantic status indicators)
- ProductGrid (responsive 3-column layout with skeletons)

All components use design system tokens. No hardcoded colors/spacing.
WCAG AA accessibility: focus states, ARIA labels, semantic HTML.
```

### Phase 1 Checklist (use for all phases)
- [ ] All components created
- [ ] All components exported from index.ts
- [ ] All use Tailwind tokens (no hardcoded values)
- [ ] All have focus states and ARIA labels
- [ ] All tested in browser (responsive + all states)
- [ ] All tested in mobile viewport
- [ ] All committed to git with clear message
- [ ] Progress documented

---

## Technology Stack

### Why These Choices

**React 18.3 + TypeScript 5.5**
- Type safety prevents runtime errors
- Excellent IDE support
- Clear component contracts
- Future-proof (latest stable)

**Tailwind CSS 3.4**
- Design tokens enforced (no color variables)
- Utility-first prevents CSS bloat
- Responsive design is straightforward
- Excellent dark mode support

**Vite**
- Fast development rebuild
- Minimal configuration
- TypeScript out of the box
- Great HMR (hot module reload)

**Git + Conventional Commits**
- Clear commit history
- Easy to review what changed and why
- Can extract release notes from commits
- Future team members understand progression

---

## Project Structure

### Essential Files

```
project-root/
├── .claude/
│   └── launch.json                    # Dev server config
├── src/
│   ├── components/
│   │   ├── phase1-*/                  # Organized by phase
│   │   │   └── ComponentName.tsx
│   │   ├── phase2-*/
│   │   ├── phase3-*/
│   │   ├── phase4-*/
│   │   ├── phase5-*/
│   │   ├── phase6-*/
│   │   └── index.ts                   # Barrel export
│   ├── hooks/
│   │   ├── useDataFetching.ts
│   │   └── index.ts
│   ├── types/
│   │   ├── domain.ts
│   │   └── index.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx                        # Main app (integrates all phases)
│   └── main.tsx                       # React DOM render
├── tailwind.config.ts                 # Design tokens (source of truth)
├── tsconfig.json                      # TypeScript strict mode
├── vite.config.ts                     # Vite configuration
├── package.json                       # Dependencies
├── PHASE-PROGRESS.md                  # Phase documentation
├── FIGMA-SCREENS-SPEC.md              # Design specs (if using Figma)
└── BUILD-COMPLETE.md                  # Final summary
```

### Key Configuration Files

**tailwind.config.ts:**
- Define all colors as tokens
- Define all font families
- Define all spacing/sizing scales
- NO hardcoded values in components

**vite.config.ts:**
- Enable React plugin
- Set dev server port
- Set open: true for auto-open browser

**tsconfig.json:**
- Set strict: true (no implicit any)
- Enable strict null checks
- Set jsx: react-jsx
- Set module: ESNext

---

## Component Organization

### Anatomy of a Component

```typescript
import React from 'react'

// 1. Define prop types
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'accent' | 'outline'
  size: 'sm' | 'md' | 'lg'
  onClick?: () => void
  children: React.ReactNode
  disabled?: boolean
  loading?: boolean
  className?: string
}

// 2. Define component
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  onClick,
  children,
  disabled = false,
  loading = false,
  className = '',
}) => {
  // 3. Map props to Tailwind classes (use tokens, never hardcode)
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-light',
    secondary: 'bg-secondary text-neutral-900 hover:bg-secondary-dark',
    accent: 'bg-accent text-white hover:bg-accent-dark',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10',
  }

  const sizeStyles = {
    sm: 'px-space-md py-space-sm text-sm',
    md: 'px-space-lg py-space-md text-base',
    lg: 'px-space-xl py-space-lg text-lg',
  }

  // 4. Compose className from tokens
  const buttonClass = `
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    rounded-radius-md
    font-semibold
    transition-all
    disabled:opacity-50
    disabled:cursor-not-allowed
    focus:outline-none
    focus:ring-2
    focus:ring-primary/50
    ${className}
  `

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClass}
    >
      {loading ? '...' : children}
    </button>
  )
}
```

**Key Principles:**
1. Strict TypeScript (no `any`)
2. Design token usage (no `#ffffff` or `12px`)
3. Default values for optional props
4. Optional className for consumer customization
5. Focus states and accessibility
6. Loading/error/disabled states

### Export Pattern (index.ts)

```typescript
// Phase 1: Navigation & Search
export { Button } from './Button'
export { Input } from './Input'
export { Header } from './Header'
export { SearchBar } from './SearchBar'

// Phase 2: Product Display
export { ProductCard } from './ProductCard'
export { ProductBadge } from './ProductBadge'
export { ProductGrid } from './ProductGrid'

// ... and so on
```

**Why:** Allows clean imports: `import { Button, Input } from './components'`

---

## Testing & Verification

### Browser Testing Checklist

For each component:
- [ ] Default state renders correctly
- [ ] All prop variations work (sizes, colors, states)
- [ ] Loading state works
- [ ] Error state works
- [ ] Disabled state works
- [ ] Hover/active states visible
- [ ] Focus state visible (keyboard navigation)
- [ ] Mobile viewport looks correct
- [ ] Dark mode (if applicable)

### Component Interaction Testing

- [ ] Buttons trigger onClick callbacks
- [ ] Inputs capture user text
- [ ] Forms submit with correct data
- [ ] Navigation switches between views
- [ ] Lists scroll and render items
- [ ] Modals open/close
- [ ] Alerts auto-dismiss (if applicable)

### Mobile Testing

- [ ] Viewport width 375px (iPhone standard)
- [ ] Touch targets are 44×44px minimum
- [ ] Overflow is hidden (no horizontal scroll)
- [ ] Viewport height accommodates safe areas (top/bottom)
- [ ] No desktop-only patterns

### Accessibility Testing

- [ ] All interactive elements are keyboard accessible
- [ ] Tab order is logical
- [ ] ARIA labels on icons and complex elements
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Semantic HTML used (button, input, label, etc.)
- [ ] Form labels associated with inputs
- [ ] Error messages linked to inputs (aria-describedby)

---

## Documentation

### 1. PHASE-PROGRESS.md

Track completion at end of each phase:

```markdown
# Phase Progress Report

## Phase 1: Navigation & Search ✅ COMPLETE
**Components:** 4 (Button, Input, Header, SearchBar)  
**LOC:** 400+  
**Status:** Tested in browser, all states working

### Components
- Button: 4 variants × 3 sizes + loading state
- Input: with label, helper, error, optional icon
- Header: sticky nav, responsive, menu toggle
- SearchBar: search + filter panel

### Testing
- ✅ All components render in all states
- ✅ Focus states visible, keyboard accessible
- ✅ Mobile viewport tested (375px)
- ✅ Colors match design system, spacing correct

### What's Next
Build Phase 2 components: ProductCard, ProductBadge, ProductGrid
```

### 2. BUILD-COMPLETE.md

Final summary after all 6 phases:

```markdown
# [Project Name] — Build Complete ✅

**Status:** All 6 phases complete and fully functional

## Summary
- ✅ 20 components built
- ✅ ~2,400 lines of component code
- ✅ 100% design system compliant
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ WCAG AA accessibility standards
- ✅ 6 git commits documenting progress

## Component Statistics
| Phase | Focus | Components | LOC |
|-------|-------|-----------|-----|
| 1 | Navigation | 4 | 400 |
| 2 | Display | 3 | 300 |
| ... | ... | ... | ... |
| **TOTAL** | | **20** | **2,350+** |

## Key Features
✨ [List major features by phase]

## Testing
- ✅ All components tested in browser
- ✅ All responsive (mobile, tablet, desktop)
- ✅ All accessible (WCAG AA, keyboard nav)
- ✅ All have loading/error states
```

### 3. Component Showcase Page

Create an HTML page displaying all components:

```html
<!DOCTYPE html>
<html>
<head>
  <title>[Project] - Component Showcase</title>
</head>
<body>
  <!-- Header -->
  <h1>[Project] Component Library</h1>
  <p>20 components across 6 phases</p>

  <!-- Phase 1 Section -->
  <section>
    <h2>Phase 1: Navigation & Search</h2>
    
    <div class="component">
      <h3>Button</h3>
      <p>Description...</p>
      <div class="example">
        [Rendered component examples]
      </div>
    </div>
  </section>

  <!-- ... repeat for each component -->
</body>
</html>
```

**Tool:** Publish as Artifact for live viewing

---

## Git Workflow

### Commit Strategy

**One commit per phase (or per logical component chunk):**

```bash
git add src/components/phase1-*/*.tsx
git commit -m "Build Phase 1 components: Navigation & Search

Implemented 4 core components:
- Button (4 variants × 3 sizes, loading state)
- Input (label, helper, error, icon)
- Header (sticky nav, responsive)
- SearchBar (search + filter panel)

All use design system tokens. WCAG AA compliant."
```

**Key:** Commit message explains WHAT changed and WHY, not HOW.

### Branch Strategy

For portfolio/portfolio-ready projects:
- Work directly on `master` (no feature branches)
- Each commit is a releasable unit
- Clear history of development

For team projects:
- Create feature branch: `git checkout -b feat/components-phase-1`
- Commit frequently
- Open PR with detailed description
- Merge after review

---

## Lessons Learned (from Clean Shopper)

### 1. Design System First
**Lesson:** Locked design system prevents mid-build color/spacing changes.  
**Impact:** Saved ~2 days of refactoring.  
**Application:** Create design system in Phase 0, never edit it mid-project.

### 2. Organize by Features, Not Types
**Lesson:** Organizing by phase (e.g., `phase1-navigation/`) forced thinking about user stories, not technical abstraction.  
**Impact:** Components naturally grouped and documented.  
**Application:** `phase1-*`, `phase2-*`, etc. prevents the "where does this go?" problem.

### 3. Test Immediately
**Lesson:** Opening browser after each component catches issues early.  
**Impact:** Accessibility issues found and fixed the same day.  
**Application:** Use `.claude/launch.json` to auto-open dev server.

### 4. Default Props Everywhere
**Lesson:** Every optional prop needs a sensible default.  
**Impact:** Reduced prop drilling, made components easier to use.  
**Application:** Always provide `= 'primary'` or `= false` for optional props.

### 5. Focus States > Looks
**Lesson:** Visible focus states matter more than perfect hover effects.  
**Impact:** All components keyboard accessible from day one.  
**Application:** Every component gets `.focus:ring-2 .focus:outline-none`.

### 6. Commit Messages Matter
**Lesson:** Clear commits make the build visible to future maintainers.  
**Impact:** Another developer can understand the project by reading commit history.  
**Application:** Commit message format: "Build Phase N: [goal]. Implemented [components]."

### 7. One Showcase Page per Phase
**Lesson:** Visual confirmation is faster than reading code.  
**Impact:** Could show non-technical stakeholders working components immediately.  
**Application:** Create showcase artifact after each phase.

---

## Checklist for New Projects

Use this checklist to apply the methodology to a new project:

### Pre-Build
- [ ] Design system documented (colors, typography, spacing, radius, shadows)
- [ ] Design system reflected in Tailwind config
- [ ] Project initialized (React + TypeScript + Vite + Tailwind)
- [ ] Directory structure created (phase1-6 folders)
- [ ] `.claude/launch.json` created
- [ ] Git initialized and first commit made
- [ ] Phase plan documented (6 phases, 4-6 components each)

### Per Phase
- [ ] Components listed and planned
- [ ] Components implemented (strict TypeScript, design tokens, focus states)
- [ ] Components exported from index.ts
- [ ] Tested in browser (all states, mobile, keyboard)
- [ ] Accessibility verified (focus, ARIA, semantic HTML)
- [ ] Committed to git with clear message
- [ ] Progress documented in PHASE-PROGRESS.md
- [ ] (Optional) Showcase artifact created

### Post-Build
- [ ] All 20+ components built
- [ ] Component showcase page created (Artifact)
- [ ] BUILD-COMPLETE.md written
- [ ] All 6 commits created and pushed
- [ ] README updated with component list
- [ ] Final showcase artifact published

---

## Quick Reference: Key Files to Create

For any new project, create these files in Phase 0:

1. **tailwind.config.ts** — Design tokens
2. **vite.config.ts** — Dev server config
3. **tsconfig.json** — TypeScript strict mode
4. **postcss.config.js** — Tailwind processor
5. **.claude/launch.json** — Auto-launch dev server
6. **PHASE-PROGRESS.md** — Track progress
7. **src/components/index.ts** — Barrel export

---

## Adapting for Different Project Types

### Web App (Responsive Multi-Screen)
- **Phase 1:** Navigation and core layouts
- **Phase 2:** Data display (tables, lists, cards)
- **Phase 3:** Forms and input
- **Phase 4:** Authentication flows
- **Phase 5:** Advanced features
- **Phase 6:** Polish and edge cases

### Mobile App (iPhone Only)
- **Phase 1:** Status bar and navigation (tabs, headers)
- **Phase 2:** Core screens (dashboard, list, detail)
- **Phase 3:** User interactions (forms, modals)
- **Phase 4:** Advanced features (maps, camera, etc.)
- **Phase 5:** Notifications and alerts
- **Phase 6:** Polish and edge cases

### SaaS Dashboard
- **Phase 1:** Sidebar and main navigation
- **Phase 2:** Data display (charts, tables, metrics)
- **Phase 3:** Filters and controls
- **Phase 4:** Forms and settings
- **Phase 5:** Integrations and actions
- **Phase 6:** Polish and accessibility

### Trading Platform (Meridian Example)
- **Phase 1:** Headers, tabs, status displays
- **Phase 2:** Market data display (prices, positions)
- **Phase 3:** AI features (recommendations, alerts)
- **Phase 4:** Forms and orders
- **Phase 5:** Trading execution and review
- **Phase 6:** Polish and states

---

## Conclusion

The Clean Shopper methodology is a proven approach to building production-ready component libraries systematically. By following the 6-phase structure, maintaining a locked design system, and testing continuously, any team can build high-quality components efficiently.

The key to success is discipline: respect the design system, test immediately, commit clearly, and document progress. These practices compound over time and make future projects faster.

---

## Appendix: Command Reference

### Initialize Project
```bash
npm create vite@latest project-name -- --template react-ts
cd project-name
npm install
npm install -D tailwindcss postcss autoprefixer typescript
npm run dev
```

### Build Commands
```bash
npm run dev          # Start dev server
npm run build        # Compile for production
npm run preview      # Preview production build
```

### Git Commands
```bash
git add src/components/phase*
git commit -m "Build Phase N: [description]"
git log --oneline    # View commit history
git diff HEAD~1      # Compare with last commit
```

### Create Showcase
Use the Artifact tool in Claude Code to publish HTML showcase pages.

---

*This guide documents the complete methodology used to build Clean Shopper's 20-component library. Apply it to your next project and adapt the phases to match your app's user stories.*