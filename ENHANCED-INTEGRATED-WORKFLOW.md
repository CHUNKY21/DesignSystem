# Enhanced Integrated Workflow
## Connect Design System Generator → Project Context → Component Build

This workflow integrates three Claude Code skills into one seamless process: **design-system-generator** → **project-context** → **complete component build**.

---

## OVERVIEW

**Total Time:** 8-12 days  
**Result:** Complete design system + documented project context + 20 production components + showcase

**Three integrated phases:**
1. **Design System Lock** (Day 1): Use skill to establish visual foundation
2. **Project Context** (Day 1): Document project goals, constraints, ICP
3. **6-Phase Build** (Days 2-11): Build components against locked design system

---

## PHASE 0: INTEGRATED FOUNDATION (Day 1)

### Step 0.1: Run Design System Generator Skill

In Claude Code, invoke:

```
/design-system-generator
```

**Answer the skill's interview questions:**

1. **Project Context:** "This is Clean Shopper, an AI-powered research assistant helping users find clean, non-toxic household products"

2. **Brand Personality:** "Clean, trustworthy, modern, educational. Similar to Patagonia and Honest Company."

3. **Colors:** "Primary: sage green (#2D6A4F), Secondary: cream (#F5F1E8), Accent: orange (#D97706), Success: green, Warning: yellow, Error: red"

4. **Typography:** "Inter for body, Fraunces for display. Generous spacing throughout."

5. **Spacing:** "Generous whitespace, breathing room between elements"

6. **References:** "Patagonia, Honest Company, Good Fill"

7. **Constraints:** "Mobile-first, WCAG AA accessibility, e-commerce focus"

**Skill outputs:**
- ✅ `/docs/design-system.md` (source of truth for colors, typography, spacing, shadows)
- ✅ `design-system-visual.html` (browser-viewable reference page)
- ✅ Updated project documentation

**This file becomes the single source of truth** — all components reference tokens from here, never hardcoded values.

---

### Step 0.2: Run Project Context Skill

In Claude Code, invoke:

```
/project-context
```

**When prompted, provide:**

```
Project: Clean Shopper
Purpose: AI-powered product research assistant helping users find clean, non-toxic household products
Users: Eco-conscious consumers wanting ingredient transparency
Pain Points:
- No centralized source for ingredient safety data
- Confusing marketing claims on product labels
- Time-consuming manual research
- Unclear which products are genuinely non-toxic

Success Metrics:
- Users can search and find product ratings in <30 seconds
- 90%+ WCAG AA accessibility compliance
- Mobile-first responsive design
- Component library ready for scaling to web/mobile apps

Constraints:
- React 18.3 + TypeScript 5.5 (strict mode)
- Tailwind CSS with locked design system
- Vite dev server
- 6-phase component organization
```

**Skill outputs:**
- ✅ `/docs/project-context.md` (project goals, ICP, success metrics)
- ✅ CLAUDE.md updated with references to both design system and project context

---

### Step 0.3: Create CLAUDE.md (Project Context File)

**File: CLAUDE.md**

```markdown
# Clean Shopper Project Context

## Project Purpose
Build a React component library for an AI-powered product research assistant that helps users find clean, non-toxic household products.

## Core Users
Eco-conscious consumers (18-65) who want ingredient transparency and product safety information without marketing noise.

## Success Metrics
- Users complete product search in <30 seconds
- 90%+ WCAG AA accessibility compliance
- 100% mobile-first responsive (works at 375px and up)
- 20 production-ready components across 6 phases
- Design system compliance: 0 hardcoded colors/spacing/fonts

## Design System
- **Source:** /docs/design-system.md (locked, do not change mid-project)
- **Visual Reference:** design-system-visual.html (open in browser)
- **Colors:** Sage green (#2D6A4F), cream (#F5F1E8), orange (#D97706)
- **Typography:** Inter (body), Fraunces (display)
- **Spacing:** Base 16px (4-64px scale)
- **Accessibility:** WCAG AA

## Architecture: 6 Phases
### Phase 1: Navigation & Search (4 components)
- Button (4 variants × 3 sizes)
- Input (form field with validation)
- Header (sticky navigation)
- SearchBar (search + collapsible filters)

### Phase 2: Product Display (3 components)
- ProductCard (product info with actions)
- ProductBadge (safe/caution/harmful status)
- ProductGrid (responsive 1-3 column layout)

### Phase 3: Details & Comparison (4 components)
- ProductDetail (full product page)
- RatingDisplay (star ratings + breakdown)
- IngredientDetailCard (ingredient analysis)
- ComparisonTable (side-by-side products)

### Phase 4: Shopping & Lists (6 components)
- CartItem (cart item with quantity)
- SavedProductCard (saved products list)
- ShoppingList (multi-item list view)
- EmptyState (no results fallback)
- Modal (dialog container)
- Toast (notification)

### Phase 5: Preferences (3 components)
- PreferenceChip (toggle option)
- SettingsSection (grouped settings)
- PreferencesForm (complete form)

### Phase 6: Polish (4 components)
- Skeleton (loading placeholder)
- Badge (inline status tag)
- Divider (visual separator)
- ErrorBoundary (error handling)

## Development Rules
1. **Design System First:** Every color, spacing, font size comes from /docs/design-system.md
2. **Phase-Based:** Build one complete phase per day, test, commit
3. **Browser Test:** Run dev server after each phase to verify
4. **Git Workflow:** One commit per phase with detailed message
5. **Accessibility:** All components must have focus states + ARIA labels + semantic HTML
6. **Mobile First:** Design for 375px viewport, scale up

## Reference Files
- Design System: `/docs/design-system.md` (colors, typography, spacing, shadows, usage rules)
- Project Context: `/docs/project-context.md` (goals, ICP, constraints, metrics)
- Build Plan: `PHASE-PROGRESS.md` (tracks completion)
- Complete Guide: `CLEAN-SHOPPER-COMPLETE-PROCESS.md` (all steps + code)

## Git & CI
- Init: `git init && git add . && git commit -m "Initial setup"`
- Per Phase: `git add src/components/phaseX/ && git commit -m "Build PhaseX: [Component Names]"`
- Final: All 6 phases committed, ready for `npm run build`
```

---

### Step 0.4: Initialize Project

```bash
npm create vite@latest clean-shopper -- --template react-ts
cd clean-shopper
npm install
npm install -D tailwindcss postcss autoprefixer
mkdir -p src/components/phase{1,2,3,4,5,6}
mkdir -p .claude
mkdir -p docs
npm run dev
```

---

### Step 0.5: Create Config Files

**Tailwind: tailwind.config.ts**
```typescript
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2D6A4F',
        'primary-light': '#40916C',
        secondary: '#F5F1E8',
        accent: '#D97706',
        success: '#10D981',
        warning: '#FBBF24',
        error: '#F97316',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
      },
    },
  },
} satisfies Config
```

**Build: postcss.config.js**
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**Dev Server: vite.config.ts**
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: true },
})
```

**Launcher: .claude/launch.json**
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

---

### Step 0.6: Commit Foundation

```bash
git init
git add .
git commit -m "Initialize Clean Shopper with design system and project context

- Design system locked in /docs/design-system.md
- Project context documented in /docs/project-context.md  
- CLAUDE.md references both
- Tailwind config with all design tokens
- Vite dev server configured on port 5173
- Phase directories ready (phase1-phase6)

Ready to build Phase 1 components."
```

---

## PHASES 1-6: BUILD (Days 2-11)

### Follow the Complete Process

For each phase, follow the exact steps in **CLEAN-SHOPPER-COMPLETE-PROCESS.md**:

- **Phase 1** (Day 2): Navigation & Search (4 components)
- **Phase 2** (Day 3): Product Display (3 components)
- **Phase 3** (Day 4): Details & Comparison (4 components)
- **Phase 4** (Days 5-6): Shopping & Lists (6 components)
- **Phase 5** (Day 7): Preferences (3 components)
- **Phase 6** (Days 8-9): Polish (4 components)

**Each phase:**
1. Create component file(s) in `src/components/phaseX/ComponentName.tsx`
2. Export from `src/components/index.ts`
3. Test in App.tsx with dev server running
4. Commit with detailed message
5. Move to next phase

---

## INTEGRATION BENEFITS

### Design System ↔ Components
- **Design system generator** locks colors, typography, spacing at start
- All components reference design tokens (no hardcoded hex, px, padding)
- Visual consistency guaranteed across all 20 components
- Easy to update (change tailwind.config.ts, all components update instantly)

### Project Context ↔ Architecture
- **Project context skill** documents goals and success metrics
- CLAUDE.md references both design system and project context
- Phase-based architecture aligns with user stories (not technical types)
- Success metrics guide testing priorities

### Claude Code Integration
- **CLAUDE.md** becomes session context (loaded automatically)
- Future sessions reference design system and project context automatically
- Design token enforcement is built into the architecture
- No per-session setup needed

---

## TESTING & VERIFICATION

After each phase:

1. **Browser Check** (localhost:5173):
   - All component variants render
   - Colors match design-system-visual.html
   - Spacing is consistent
   - Responsive at 375px, 768px, 1024px viewports
   - Focus states visible (ring-2 indicator)

2. **Design System Compliance**:
   - No hardcoded hex values in component code
   - All spacing uses token classes (sm, md, lg, xl, etc.)
   - All fonts use design-display or design-body
   - All colors use primary, secondary, accent, success, warning, error

3. **Accessibility**:
   - Tab through with keyboard (all interactive elements focusable)
   - Screen reader test: all text readable, ARIA labels present
   - Color contrast check: text vs background passes WCAG AA

4. **Git State**:
   - Phase committed before moving to next phase
   - Commit message describes what was built and why

---

## FINAL: DOCUMENTATION & SHOWCASE (Days 10-11)

### Create PHASE-PROGRESS.md

```markdown
# Clean Shopper Build Progress

## Completed Phases
- [x] Phase 0: Foundation + Design System + Context
- [x] Phase 1: Navigation & Search (4/4 components)
- [x] Phase 2: Product Display (3/3 components)
- [x] Phase 3: Details & Comparison (4/4 components)
- [x] Phase 4: Shopping & Lists (6/6 components)
- [x] Phase 5: Preferences (3/3 components)
- [x] Phase 6: Polish (4/4 components)

## Statistics
- Total Components: 20
- Total LOC: 2,400+
- Design System: 100% compliant
- Accessibility: WCAG AA
- Responsive: Mobile-first, 375px+

## Design System Compliance
✅ 0 hardcoded colors (all use token names)
✅ 0 hardcoded spacing (all use scale classes)
✅ 0 hardcoded font sizes (all use type scale)
✅ All components have focus:ring-2 states
✅ All interactive elements are keyboard accessible
✅ All text has sufficient color contrast

## Architecture
✅ Phase-based organization (not technical type-based)
✅ Barrel exports from src/components/index.ts
✅ Component isolation (no cross-component imports except index.ts)
✅ One commit per phase (6 commits total)

## Ready for Production
```

### Create Component Showcase

Ask Claude Code to generate `src/App.tsx` with all 20 components displayed with multiple variants.

---

## COMPLETE INTEGRATION CHECKLIST

### Day 1: Foundation
- [ ] Run `/design-system-generator` skill → `/docs/design-system.md`
- [ ] Run `/project-context` skill → `/docs/project-context.md`
- [ ] Create CLAUDE.md with references
- [ ] Create all config files
- [ ] Initialize git
- [ ] Commit Phase 0

### Days 2-9: Component Build
- [ ] Phase 1: Build 4 components, test, commit
- [ ] Phase 2: Build 3 components, test, commit
- [ ] Phase 3: Build 4 components, test, commit
- [ ] Phase 4: Build 6 components, test, commit
- [ ] Phase 5: Build 3 components, test, commit
- [ ] Phase 6: Build 4 components, test, commit

### Days 10-11: Documentation
- [ ] Create PHASE-PROGRESS.md
- [ ] Create component showcase (App.tsx with all variants)
- [ ] Final git status check
- [ ] Ready for `npm run build`

---

## HOW THIS ANSWERS YOUR QUESTION

**"Will the guide connect skills, context, design system generator?"**

✅ **Yes — this workflow connects all three:**

1. **Design System Generator** (`/design-system-generator`) creates `/docs/design-system.md` with locked visual foundation
2. **Project Context** (`/project-context`) creates `/docs/project-context.md` with goals and ICP
3. **CLAUDE.md** references both files as source of truth
4. **Component build** follows CLEAN-SHOPPER-COMPLETE-PROCESS.md, enforcing design token usage from day 1
5. **Future sessions** automatically load CLAUDE.md → know about design system and project context → apply them to all new work

**Integration points:**
- Design system enforces visual consistency (no hardcoded values)
- Project context documents "why" behind architecture (phase-based, not type-based)
- Both are version-controlled with code
- Both are referenced by CLAUDE.md (becomes session context)

**Result:** Repeatable process for any new project — just swap product name and run the same skills/process in the same order.

---

**Total Investment:** 8-12 days of focused component building  
**Total Payoff:** Production-ready 20-component library, fully documented, design system locked, project context clear, ready to scale to web/mobile/additional products