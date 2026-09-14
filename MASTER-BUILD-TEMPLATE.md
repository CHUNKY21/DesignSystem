# Master Build Template
## Universal Process for Component-Driven Projects

This template generalizes the Clean Shopper + Meridian workflow so it can be replicated for any product.

---

## THE UNIVERSAL PROCESS

**Duration:** 10-14 days  
**Effort:** 1 person, focused work  
**Result:** 15-30 production components, design system locked, fully accessible, documented

### Three Integration Points

1. **Design System Generator** → Locks visual foundation (colors, typography, spacing)
2. **Project Context** → Documents ICP, success metrics, architecture
3. **6-Phase Build** → Component development following domain-specific features

### Success Criteria (Always)

- ✅ 0 hardcoded colors, spacing, font sizes
- ✅ WCAG AA accessibility (focus states, contrast, semantic HTML)
- ✅ Mobile-first responsive (375px and up)
- ✅ One commit per phase
- ✅ Browser testing after each phase
- ✅ Design system compliance enforced

---

## TEMPLATE: FILL IN BLANKS

### Project Name: **[PROJECT_NAME]**
### Domain: **[DOMAIN]** (e.g., e-commerce, trading, healthcare, SaaS)
### Timeline: **[DAYS]** days

---

## PHASE 0: FOUNDATION (Day 1)

### Step 0.1: Design System Generator

```
Run: /design-system-generator

Provide:
- Project: "[PROJECT_NAME] - [ONE SENTENCE DESCRIPTION]"
- Personality: "[THREE WORDS]"
- Colors: "Primary [COLOR_HEX], Secondary [COLOR_HEX], Accent [COLOR_HEX]"
- Typography: "[FONT_FAMILY] for body, [FONT_FAMILY] for display"
- Spacing: "[TIGHT/BALANCED/GENEROUS]"
- References: "[3 PRODUCTS WITH SIMILAR FEEL]"
- Constraints: "[WCAG AA, MOBILE-FIRST, DOMAIN-SPECIFIC REQUIREMENTS]"

Output:
- /docs/design-system.md (source of truth)
- design-system-visual.html (browser reference)
- Tailwind config template
```

### Step 0.2: Project Context

```
Run: /project-context

Provide:
- Project: "[PROJECT_NAME]"
- Purpose: "[WHAT DOES IT DO]"
- Users: "[WHO USES IT, BEHAVIORALLY]"
- Pain Points: "[3-5 CURRENT PROBLEMS IT SOLVES]"
- Success Metrics: "[HOW WE KNOW IT'S WORKING]"
- Constraints: "[TECH STACK, ACCESSIBILITY, PLATFORM]"

Output:
- /docs/project-context.md
- CLAUDE.md updated
```

### Step 0.3: Create CLAUDE.md

```markdown
# [PROJECT_NAME] Context

## Architecture: 6 Phases ([X] Components)

### Phase 1: [FEATURE AREA] ([X] components)
- Component1
- Component2
- ComponentX

### Phase 2: [FEATURE AREA] ([X] components)
- Component1
- ComponentX

### Phase 3-6: [Continue pattern...]

## Design System
- Colors: [Primary, Secondary, Accent, Semantic colors]
- Typography: [Body, Display, Scale]
- Spacing: [Base unit and scale]

## Success Rules
1. Design system enforced (no hardcoded values)
2. Phase-based organization (feature-driven)
3. Mobile-first responsive
4. WCAG AA accessible
5. One commit per phase
```

### Step 0.4: Initialize Project

```bash
npm create vite@latest [PROJECT_NAME]-app -- --template react-ts
cd [PROJECT_NAME]-app
npm install
npm install -D tailwindcss postcss autoprefixer
mkdir -p src/components/phase{1,2,3,4,5,6}
mkdir -p .claude docs
npm run dev
```

### Step 0.5: Update Tailwind

Create `tailwind.config.ts` using tokens from design system output.

### Step 0.6: Commit Phase 0

```bash
git add .
git commit -m "Initialize [PROJECT_NAME] with design system and project context

- Design system locked: [COLORS, TYPOGRAPHY, SPACING]
- Project context documented: [ICP, SUCCESS METRICS]
- CLAUDE.md references both
- [X] phases planned ([Y] total components)

Ready to build Phase 1: [PHASE 1 NAME]"
```

---

## PHASES 1-6: BUILD (Days 2-[N])

**For each phase:**

1. **Create Components**
   ```bash
   # Create component file(s)
   touch src/components/phase[X]/ComponentName.tsx
   
   # Code pattern:
   # - Use design tokens only (no hardcoded colors)
   # - Props for customization
   # - TypeScript interfaces
   # - Semantic HTML
   # - Focus states (focus:ring-2)
   # - aria-labels where needed
   ```

2. **Export from Index**
   ```typescript
   // src/components/index.ts
   export { ComponentName } from './phase[X]/ComponentName'
   ```

3. **Test in Browser**
   ```bash
   npm run dev
   # Visit localhost:5173
   # Check: all variants render, colors correct, spacing consistent, responsive at 375px
   ```

4. **Commit Phase**
   ```bash
   git add src/components/phase[X]/
   git commit -m "Build Phase [X]: [PHASE NAME]
   
   Implemented [N] components:
   - ComponentName (description)
   - ComponentName (description)
   
   All use design tokens. WCAG AA. Mobile-first responsive."
   ```

---

## COMPONENT ANATOMY (Pattern to Repeat)

```typescript
import React from 'react'

interface ComponentNameProps {
  label?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children?: React.ReactNode
  className?: string
}

export const ComponentName: React.FC<ComponentNameProps> = ({
  label,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  className = '',
}) => {
  // Color variants from design system
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-light',
    secondary: 'bg-secondary text-primary hover:bg-secondary-light',
    accent: 'bg-accent text-white hover:bg-accent-light',
  }

  // Size variants from design system spacing
  const sizeStyles = {
    sm: 'px-sm py-xs text-sm',
    md: 'px-md py-sm text-base',
    lg: 'px-lg py-md text-lg',
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        rounded-md
        font-semibold
        transition-all
        disabled:opacity-50
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-primary/50
        ${className}
      `}
    >
      {children || label}
    </button>
  )
}
```

**Key patterns:**
- Props for variants, not inline styling
- Design token class names (never `bg-red-500`)
- Focus states with ring-2
- Accessibility attributes (aria-label, role)
- Semantic HTML (`<button>`, `<input>`, not divs)

---

## TESTING AFTER EACH PHASE

```
Browser (localhost:5173):
- [ ] All component variants visible
- [ ] Colors match design-system-visual.html
- [ ] Spacing is consistent
- [ ] No console errors
- [ ] Responsive at 375px, 768px, 1024px
- [ ] All buttons/inputs keyboard focusable
- [ ] Focus ring visible (ring-2)
- [ ] Text readable on any background (contrast check)

Git:
- [ ] Phase directory created
- [ ] Components exported from index.ts
- [ ] Phase committed with clear message
```

---

## FINAL: DOCUMENTATION (Days N-1 to N)

### Create PHASE-PROGRESS.md

```markdown
# [PROJECT_NAME] Build Progress

## Completed
- [x] Phase 0: Design System + Project Context
- [x] Phase 1: [NAME] ([X]/[X] components)
- [x] Phase 2: [NAME] ([X]/[X] components)
- [x] Phase 3: [NAME] ([X]/[X] components)
- [x] Phase 4: [NAME] ([X]/[X] components)
- [x] Phase 5: [NAME] ([X]/[X] components)
- [x] Phase 6: [NAME] ([X]/[X] components)

## Statistics
- Total Components: [X]
- Total LOC: [Y]+
- Design System: 100% compliant
- Accessibility: WCAG AA
- Responsive: Mobile-first

## Design System Compliance
✅ 0 hardcoded colors
✅ 0 hardcoded spacing
✅ 0 hardcoded font sizes
✅ All have focus:ring-2
✅ All keyboard accessible
✅ All semantic HTML

## Ready for Production
```

### Create Component Showcase

Build `src/App.tsx` showing all components with multiple variants and states.

---

## COMPLETE CHECKLIST

**Day 1: Foundation**
- [ ] Design system locked (`/docs/design-system.md`)
- [ ] Project context documented (`/docs/project-context.md`)
- [ ] CLAUDE.md created with architecture
- [ ] All config files created
- [ ] Project initialized with git
- [ ] Phase 0 committed

**Days 2-N: Build**
- [ ] Phase 1: Components built, tested, committed
- [ ] Phase 2: Components built, tested, committed
- [ ] Phase 3: Components built, tested, committed
- [ ] Phase 4: Components built, tested, committed
- [ ] Phase 5: Components built, tested, committed
- [ ] Phase 6: Components built, tested, committed

**Days N-1 to N: Documentation**
- [ ] PHASE-PROGRESS.md created
- [ ] Component showcase built
- [ ] All phases committed
- [ ] Ready for `npm run build`

---

## EXAMPLES OF THIS PROCESS IN ACTION

### Clean Shopper (E-Commerce)
- **File:** `CLEAN-SHOPPER-COMPLETE-PROCESS.md`
- **File:** `ENHANCED-INTEGRATED-WORKFLOW.md`
- **Components:** 20 across 6 phases
- **Timeline:** 7-10 days
- **Domain:** Product research + shopping

**Phases:**
1. Navigation & Search (4)
2. Product Display (3)
3. Details & Comparison (4)
4. Shopping & Lists (6)
5. Preferences (3)
6. Polish (4)

### Meridian (Trading)
- **File:** `MERIDIAN-INTEGRATED-BUILD.md` (in Meridian project)
- **Components:** 25+ across 6 phases
- **Timeline:** 10-14 days
- **Domain:** Mobile trading platform

**Phases:**
1. Core Navigation (5)
2. Portfolio Overview (6)
3. Market & Search (5)
4. AI & Recommendations (5)
5. Trading & Execution (4+)
6. Polish & Account (4)

---

## HOW TO ADAPT FOR YOUR PROJECT

**Step 1: Name your project**
```
Replace [PROJECT_NAME] everywhere
Replace [DOMAIN] with your domain (e.g., healthcare, SaaS, social)
```

**Step 2: Define your phases**
```
Think in user stories, not technical types:
- Phase 1: What's the first thing a user sees?
- Phase 2: What's the second thing they do?
- Phase 3: How do they see detailed info?
- Phase 4: How do they perform main action?
- Phase 5: How do they customize?
- Phase 6: How do we handle edge cases?

Example (Healthcare):
1. Patient Registration & Auth
2. Health Dashboard
3. Symptom Checker
4. Appointment Booking
5. Medical Records
6. Settings & Notifications
```

**Step 3: Run design system generator**
```
Answer the 7 interview questions with your domain in mind
Output: design system tailored to your product
```

**Step 4: Run project context**
```
Document your ICP, success metrics, constraints
Output: project context tailored to your goals
```

**Step 5: Follow the build process**
```
Days 2-N: One phase per day (or per 1-2 days depending on complexity)
Each phase: Components → Test → Commit → Move to next
```

**Step 6: Document**
```
Create PHASE-PROGRESS.md
Create component showcase
Commit all 6 phases
Ready for production
```

---

## KEY PRINCIPLES (Always Apply)

1. **Design System Is Law**
   - Every color comes from tokens
   - Every spacing comes from scale
   - Every font from type scale
   - Checked at commit time

2. **Phase-Based Is Intentional**
   - Phases follow user journeys (not technical)
   - One phase = one coherent feature set
   - One commit per phase = clear git history

3. **Mobile-First Is Non-Negotiable**
   - 375px viewport is minimum
   - Tablet/desktop are enhancements
   - Not "responsive" — explicitly mobile-first

4. **Accessibility Is Built-In**
   - Every interactive element: focus:ring-2
   - Semantic HTML (button, input, nav)
   - Proper contrast (all text readable)
   - WCAG AA standard (not optional)

5. **Testing Is Immediate**
   - After each phase: open dev server
   - Verify visually in browser
   - Check mobile at 375px
   - Tab through keyboard
   - Only then commit

---

## TIME ESTIMATES

| Project Size | Phases | Components | Timeline | Effort |
|---|---|---|---|---|
| Small | 4-5 | 12-15 | 5-7 days | Solo |
| Medium | 6 | 15-25 | 7-12 days | Solo |
| Large | 6-7 | 25-35 | 12-16 days | Solo-2 person |
| Very Large | 7-8 | 35+ | 16-21 days | 2 person |

**Clean Shopper:** Medium (20 components, 6 phases, 7-10 days)  
**Meridian:** Large (25+ components, 6 phases, 10-14 days)  
**Your Project:** [Estimate based on component count]

---

## NEXT STEPS

1. **For your project:**
   - Copy this template
   - Replace [PLACEHOLDERS] with your project details
   - Run `/design-system-generator` with your answers
   - Run `/project-context` with your project info
   - Start building Day 1

2. **During build:**
   - Follow the 6-phase structure
   - Test after each phase
   - Commit per phase
   - Refer to design system constantly

3. **After completion:**
   - Create PHASE-PROGRESS.md
   - Build component showcase
   - Ready for production deployment
   - Ready to share/extend

---

**This is the universal template. Clean Shopper and Meridian are proof it works across different domains. Apply it to your project.**