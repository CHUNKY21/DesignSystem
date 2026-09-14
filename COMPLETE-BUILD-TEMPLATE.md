# Complete Build Process Template
## Fill in [PLACEHOLDERS] and copy-paste everything

**Replace these throughout:**
- `[PROJECT_NAME]` → Your project (CleanShopper, Meridian, etc.)
- `[DOMAIN]` → Domain (e-commerce, trading, healthcare, etc.)
- `[PRIMARY_COLOR_HEX]` → Your primary color (#2D6A4F, #071421, etc.)
- `[SECONDARY_COLOR_HEX]` → Your secondary color (#F5F1E8, #0F3A52, etc.)
- `[ACCENT_COLOR_HEX]` → Your accent color (#D97706, #0F7DA1, etc.)
- `[BODY_FONT]` → Font family (Inter, Roboto, etc.)
- `[DISPLAY_FONT]` → Font family (Fraunces, Playfair, etc.)
- `[X DAYS]` → Timeline (7-10, 10-14, etc.)
- `[X COMPONENTS]` → Total components (20, 25, etc.)

---

## PHASE 0: FOUNDATION (Day 1)

### Step 0.1: Use Design System Generator Skill

```
/design-system-generator
```

**Answer these questions:**
1. Brand Personality: "[YOUR PERSONALITY WORDS]"
2. Colors: "Primary [PRIMARY_COLOR_HEX], Secondary [SECONDARY_COLOR_HEX], Accent [ACCENT_COLOR_HEX]"
3. Typography: "[BODY_FONT] (body), [DISPLAY_FONT] (display)"
4. Spacing: "[TIGHT/BALANCED/GENEROUS]"
5. References: "[3 REFERENCE PRODUCTS/APPS]"
6. Constraints: "Mobile-first, WCAG AA, [DOMAIN-SPECIFIC CONSTRAINTS]"

**Output:**
- `docs/design-system.md` (source of truth)
- `design-system-visual.html` (visual reference)

---

### Step 0.2: Create CLAUDE.md

```markdown
# [PROJECT_NAME] Context

## Project Purpose
[ONE SENTENCE: What does this product do?]

## Design System
- **Colors:** [PRIMARY_COLOR_NAME] ([PRIMARY_COLOR_HEX]), [SECONDARY_COLOR_NAME] ([SECONDARY_COLOR_HEX]), [ACCENT_COLOR_NAME] ([ACCENT_COLOR_HEX])
- **Typography:** [BODY_FONT] (body), [DISPLAY_FONT] (display)
- **Spacing:** Base [BASE_UNIT]px
- **Accessibility:** WCAG AA

## Component Architecture
[X] components across 6 phases:
- Phase 1: [FEATURE AREA] ([X] components)
- Phase 2: [FEATURE AREA] ([X] components)
- Phase 3: [FEATURE AREA] ([X] components)
- Phase 4: [FEATURE AREA] ([X] components)
- Phase 5: [FEATURE AREA] ([X] components)
- Phase 6: [FEATURE AREA] ([X] components)

## Development Rules
1. Design system locked (no changes mid-project)
2. Phase-based builds (test after each phase)
3. Mobile-first responsive (375px minimum)
4. WCAG AA accessibility
5. One commit per phase
6. All components tested in browser
```

---

### Step 0.3: Initialize Project

```bash
npm create vite@latest [PROJECT_NAME]-app -- --template react-ts
cd [PROJECT_NAME]-app
npm install
npm install -D tailwindcss postcss autoprefixer
mkdir -p src/components/phase{1,2,3,4,5,6}
mkdir -p .claude docs
npm run dev
```

---

### Step 0.4: Create Config Files

**File: tailwind.config.ts**
```typescript
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '[PRIMARY_COLOR_HEX]',
        'primary-light': '[PRIMARY_LIGHT_HEX]',
        'primary-dark': '[PRIMARY_DARK_HEX]',
        secondary: '[SECONDARY_COLOR_HEX]',
        accent: '[ACCENT_COLOR_HEX]',
        success: '[SUCCESS_COLOR_HEX]',
        warning: '[WARNING_COLOR_HEX]',
        error: '[ERROR_COLOR_HEX]',
      },
      fontFamily: {
        display: ['[DISPLAY_FONT]', 'serif'],
        body: ['[BODY_FONT]', 'system-ui', 'sans-serif'],
      },
      spacing: {
        xs: '[XS_SIZE]',
        sm: '[SM_SIZE]',
        md: '[MD_SIZE]',
        lg: '[LG_SIZE]',
        xl: '[XL_SIZE]',
        '2xl': '[2XL_SIZE]',
      },
    },
  },
} satisfies Config
```

**File: postcss.config.js**
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**File: vite.config.ts**
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: true },
})
```

**File: .claude/launch.json**
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

### Step 0.5: Initialize Git

```bash
git init
git add .
git commit -m "Initialize [PROJECT_NAME] with design system and project context

- Design system locked: [PRIMARY_COLOR_NAME], [SECONDARY_COLOR_NAME], [ACCENT_COLOR_NAME]
- Project context documented: [DOMAIN]
- CLAUDE.md references both
- [X] phases planned ([Y] total components)

Ready to build Phase 1: [PHASE_1_NAME]"
```

---

## PHASE 1: [PHASE_1_NAME] (Day 2)

### Components to Build
1. [COMPONENT_NAME_1] ([DESCRIPTION])
2. [COMPONENT_NAME_2] ([DESCRIPTION])
3. [COMPONENT_NAME_3] ([DESCRIPTION])
4. [COMPONENT_NAME_4] ([DESCRIPTION])

### Step 1.1: Create [COMPONENT_NAME_1]

**File: src/components/phase1/[COMPONENT_NAME_1].tsx**
```typescript
import React from 'react'

interface [COMPONENT_NAME_1]Props {
  // Add your props here
  children?: React.ReactNode
  className?: string
}

export const [COMPONENT_NAME_1]: React.FC<[COMPONENT_NAME_1]Props> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`bg-primary text-white px-lg py-md ${className}`}>
      {children}
    </div>
  )
}
```

### Step 1.2-1.4: Create remaining components
[Follow same pattern for each component]

### Step 1.5: Export Phase 1

**File: src/components/index.ts**
```typescript
export { [COMPONENT_NAME_1] } from './phase1/[COMPONENT_NAME_1]'
export { [COMPONENT_NAME_2] } from './phase1/[COMPONENT_NAME_2]'
export { [COMPONENT_NAME_3] } from './phase1/[COMPONENT_NAME_3]'
export { [COMPONENT_NAME_4] } from './phase1/[COMPONENT_NAME_4]'
```

### Step 1.6: Test in Browser

```bash
npm run dev
# Visit localhost:5173
# Verify all components render correctly
```

### Step 1.7: Commit Phase 1

```bash
git add src/components/phase1/ src/components/index.ts
git commit -m "Build Phase 1: [PHASE_1_NAME]

Implemented [X] components:
- [COMPONENT_NAME_1] ([DESCRIPTION])
- [COMPONENT_NAME_2] ([DESCRIPTION])
- [COMPONENT_NAME_3] ([DESCRIPTION])
- [COMPONENT_NAME_4] ([DESCRIPTION])

All use design tokens. WCAG AA. Mobile-first responsive."
```

---

## PHASES 2-6: CONTINUE THE PATTERN

**Phase 2 (Day 3):** [PHASE_2_NAME]
- [COMPONENT_NAME_1]
- [COMPONENT_NAME_2]
- [COMPONENT_NAME_3]

**Phase 3 (Day 4):** [PHASE_3_NAME]
- [COMPONENT_NAME_1]
- [COMPONENT_NAME_2]
- [COMPONENT_NAME_3]
- [COMPONENT_NAME_4]

**Phase 4 (Day 5-6):** [PHASE_4_NAME]
- [COMPONENT_1] through [COMPONENT_N]

**Phase 5 (Day 7):** [PHASE_5_NAME]
- [COMPONENT_1] through [COMPONENT_N]

**Phase 6 (Day 8-9):** [PHASE_6_NAME]
- [COMPONENT_1] through [COMPONENT_N]

**For each phase:**
1. Create components in `src/components/phaseX/`
2. Export from `src/components/index.ts`
3. Test in browser
4. Commit with clear message
5. Move to next phase

---

## FINAL: DOCUMENTATION (Days [X]-[Y])

### Create PHASE-PROGRESS.md

```markdown
# [PROJECT_NAME] Build Progress

## Completed
- [x] Phase 0: Design System + Project Context
- [x] Phase 1: [PHASE_1_NAME] ([X]/[X] components)
- [x] Phase 2: [PHASE_2_NAME] ([X]/[X] components)
- [x] Phase 3: [PHASE_3_NAME] ([X]/[X] components)
- [x] Phase 4: [PHASE_4_NAME] ([X]/[X] components)
- [x] Phase 5: [PHASE_5_NAME] ([X]/[X] components)
- [x] Phase 6: [PHASE_6_NAME] ([X]/[X] components)

## Statistics
- Total Components: [X]
- Total LOC: [Y]+
- Design System: 100% compliant
- Accessibility: WCAG AA
- Responsive: Mobile-first

## Ready for Production
```

### Create Component Showcase

Update `src/App.tsx` with all components and variants displayed.

---

## COMPLETE CHECKLIST

- [ ] Phase 0: Design system locked
- [ ] Phase 0: CLAUDE.md created
- [ ] Phase 0: All config files created
- [ ] Phase 0: Git initialized
- [ ] Phase 1: All components built, tested, committed
- [ ] Phase 2: All components built, tested, committed
- [ ] Phase 3: All components built, tested, committed
- [ ] Phase 4: All components built, tested, committed
- [ ] Phase 5: All components built, tested, committed
- [ ] Phase 6: All components built, tested, committed
- [ ] Documentation: PHASE-PROGRESS.md created
- [ ] Documentation: Component showcase built
- [ ] All phases committed
- [ ] Ready for `npm run build`

---

## TEMPLATE SUMMARY

**Total Time:** [X DAYS]  
**Total Components:** [X COMPONENTS]  
**Phases:** 6 (organized by feature area, not technical type)  
**Accessibility:** WCAG AA  
**Responsive:** Mobile-first (375px minimum)  
**Design System:** 100% token-based (no hardcoded colors/spacing/fonts)  

**Just fill in the [PLACEHOLDERS] above and follow the steps exactly.**