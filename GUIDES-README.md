# Component Build System Guides
## Complete Process from Design System to Production (5 Guides)

You now have a complete, proven system for building component-driven projects. Everything from locking the design system on Day 1 to shipping production components on Day 10.

---

## THE FIVE GUIDES

### 1️⃣ **HOW-TO-USE-THESE-GUIDES.md** ← START HERE
Your navigation guide to the entire ecosystem.
- Decision tree: "Which guide should I read?"
- Reading paths: 30 min overview, 2 hour implementation, copy-paste ready
- Day-by-day reference
- Maps which guide solves which problem

**Read time:** 15 minutes  
**Then read:** One of the other 4 guides based on your choice

---

### 2️⃣ **MASTER-BUILD-TEMPLATE.md**
Universal template for ANY component-driven project.
- Fill-in-the-blank structure
- Proven on Clean Shopper (e-commerce) ✅ and Meridian (trading) ✅
- How to adapt the process to your domain
- Time estimates: 5-21 days depending on project size
- Example domains: healthcare, SaaS, social, fintech, e-commerce, etc.

**Read time:** 20 minutes  
**Use when:** Starting a brand new project (not Clean Shopper or Meridian)

---

### 3️⃣ **ENHANCED-INTEGRATED-WORKFLOW.md**
How three Claude Code skills integrate into one seamless process.
- `/design-system-generator` → locks visual foundation (Day 1)
- `/project-context` → documents goals and ICP (Day 1)
- Component build → 6 phases with design system enforced
- CLAUDE.md as single reference point for future sessions
- Phase 0-2 fully detailed with code examples

**Read time:** 30 minutes  
**Use when:** You want to understand HOW the system works, or you're implementing Clean Shopper

---

### 4️⃣ **CLEAN-SHOPPER-COMPLETE-PROCESS.md**
Complete end-to-end guide for Clean Shopper (e-commerce platform).
- Every command (npm, git, etc.)
- Every config file (tailwind.config.ts, vite.config.ts, etc.)
- Every component code (Phase 1-6)
- Copy-paste ready
- Days 1-10 walkthrough

**Read time:** 40 minutes to understand, 2+ hours to implement Day 1  
**Use when:** Building Clean Shopper or another e-commerce project

---

### 5️⃣ **MERIDIAN-INTEGRATED-BUILD.md**
Same process adapted for trading platform (financial domain).
- Design system for trading: Navy, Teal, semantic colors for gains/losses
- 6 phases specific to trading: Portfolio, Market, AI, Trading, etc.
- 25+ components vs 20 in Clean Shopper
- Financial accuracy patterns (decimals, percentages)
- Real-time data handling
- Copy-paste ready

**Read time:** 30 minutes to understand, 2+ hours to implement Day 1  
**Use when:** Building Meridian or another trading/financial project

---

## QUICK START (Choose One Path)

### Path A: Understand the System (40 minutes)
```
1. Read: HOW-TO-USE-THESE-GUIDES.md (15 min)
2. Read: MASTER-BUILD-TEMPLATE.md (20 min)
3. Read: ENHANCED-INTEGRATED-WORKFLOW.md (15 min)

→ You now understand the complete approach
→ You can adapt it to any project
```

### Path B: Build Clean Shopper (Today + 9 Days)
```
1. Read: ENHANCED-INTEGRATED-WORKFLOW.md - Phase 0 (15 min)
2. Run: /design-system-generator + /project-context (30 min)
3. Follow: CLEAN-SHOPPER-COMPLETE-PROCESS.md Days 1-10

→ Complete e-commerce component library
→ 20 production components
→ Design system locked, fully accessible, mobile-first
```

### Path C: Build Meridian (Today + 13 Days)
```
1. Read: MERIDIAN-INTEGRATED-BUILD.md - Phase 0 (15 min)
2. Run: /design-system-generator + /project-context (30 min)
3. Follow: MERIDIAN-INTEGRATED-BUILD.md Days 1-13

→ Complete trading platform component library
→ 25+ production components
→ Real-time data ready, financial accuracy, mobile-first
```

### Path D: Build Something Else (Your Project)
```
1. Read: MASTER-BUILD-TEMPLATE.md (20 min)
2. Copy: Template structure
3. Replace: [PLACEHOLDERS] with your project
4. Run: /design-system-generator + /project-context
5. Follow: 6-phase build cycle

→ Component library for your domain
→ Same process, proven system, your product
```

---

## WHAT THIS SYSTEM INCLUDES

### ✅ Integration with Claude Code Skills
- `/design-system-generator` — locks visual foundation
- `/project-context` — documents product goals
- Both feed into CLAUDE.md as session context

### ✅ Design System Enforcement
- Zero hardcoded colors (all use Tailwind tokens)
- Zero hardcoded spacing (all use scale classes)
- Zero hardcoded font sizes (all use type scale)
- Automatic consistency across all components

### ✅ Accessibility Built-In
- WCAG AA compliance (not optional)
- Focus states on all interactive elements (focus:ring-2)
- Semantic HTML (button, input, nav, not divs)
- Keyboard navigation throughout
- Proper color contrast

### ✅ Mobile-First Architecture
- Designed for 375px viewport
- Tablet/desktop as enhancements
- Not "responsive" — explicitly mobile-first
- Guaranteed to work on phones

### ✅ Phase-Based Organization
- 6 phases per project (not technical types)
- Phases follow user journeys (feature-driven)
- One commit per phase
- Clear git history
- Easy to review and iterate

### ✅ Copy-Paste Ready
- All commands included
- All config files included
- All component code included
- All git commands included
- Nothing to figure out

### ✅ Production Ready
- Tested after each phase
- Verified in browser (localhost:5173)
- Keyboard navigable
- Mobile responsive
- Ready for `npm run build`

---

## THE GUIDES COVER

| Topic | Master | Enhanced | Clean Shopper | Meridian |
|-------|--------|----------|---|---|
| Universal structure | ✅ | | | |
| Skill integration | | ✅ | ✅ | ✅ |
| Phase 0 setup | ✅ | ✅ | ✅ | ✅ |
| Phase 1 code | | ✅ | ✅ | ✅ |
| All 6 phases | ✅ | ✅ | ✅ | ✅ |
| Domain adaptation | ✅ | | ✅ | ✅ |
| Copy-paste ready | | | ✅ | ✅ |
| E-commerce example | | | ✅ | |
| Trading example | | | | ✅ |
| Healthcare/SaaS tips | ✅ | | | |
| Time estimates | ✅ | | | |

---

## HOW THE GUIDES CONNECT

```
You start here:
    ↓
HOW-TO-USE-THESE-GUIDES.md
    ↓
    ├─→ "New project?" ──→ MASTER-BUILD-TEMPLATE.md
    │       ↓
    │   Adapt template
    │   Run skills
    │   Build 6 phases
    │       ↓
    │   Your component library
    │
    ├─→ "Clean Shopper?" ──→ ENHANCED-INTEGRATED-WORKFLOW.md
    │       ↓
    │   Understand integration
    │       ↓
    │   CLEAN-SHOPPER-COMPLETE-PROCESS.md
    │       ↓
    │   Build 20 components
    │
    └─→ "Meridian?" ──→ MERIDIAN-INTEGRATED-BUILD.md
            ↓
        Understand trading domain
            ↓
        Build 25+ components
```

---

## FILE SIZES & READING TIME

| Guide | Size | Read Time | Use Time |
|-------|------|-----------|----------|
| HOW-TO-USE-THESE-GUIDES.md | 12 KB | 15 min | - |
| MASTER-BUILD-TEMPLATE.md | 18 KB | 20 min | - |
| ENHANCED-INTEGRATED-WORKFLOW.md | 22 KB | 30 min | Day 1 |
| CLEAN-SHOPPER-COMPLETE-PROCESS.md | 25 KB | 40 min | Days 1-10 |
| MERIDIAN-INTEGRATED-BUILD.md | 20 KB | 30 min | Days 1-13 |
| **Total** | **97 KB** | **135 min** | **10-14 days** |

---

## YOUR QUESTIONS ANSWERED

### "Will the guides connect skills, context, design system generator?"
**YES** — See ENHANCED-INTEGRATED-WORKFLOW.md

✅ Design system generator creates /docs/design-system.md  
✅ Project context creates /docs/project-context.md  
✅ CLAUDE.md references both  
✅ Components enforce both  
✅ Future sessions auto-load CLAUDE.md  

Complete integration from Day 1.

---

### "Can I repeat this for other projects?"
**YES** — Use MASTER-BUILD-TEMPLATE.md

Proven on:
- ✅ Clean Shopper (e-commerce, 20 components)
- ✅ Meridian (trading, 25+ components)
- ✅ Generalizable to healthcare, SaaS, social, any domain

Same system, different domain = different components, same process.

---

### "Can I copy-paste and run immediately?"
**YES** — Use CLEAN-SHOPPER-COMPLETE-PROCESS.md or MERIDIAN-INTEGRATED-BUILD.md

Every command, every file, every component code is ready to copy.

---

### "How long will this take?"
**7-14 days** depending on complexity

- Small projects (15 components): 5-7 days
- Medium projects (20 components): 7-10 days ← Clean Shopper
- Large projects (25+ components): 10-14 days ← Meridian
- Very large projects (35+ components): 16-21 days

---

## START HERE

👉 **Open: HOW-TO-USE-THESE-GUIDES.md**

It will guide you to the exact next step based on your situation:
- Starting a brand new project?
- Building Clean Shopper?
- Building Meridian?
- Want to understand the system first?

---

## REPOSITORY STATUS

✅ 5 comprehensive guides created  
✅ Proven on 2 different domains  
✅ All commands copy-paste ready  
✅ All code copy-paste ready  
✅ Skill integration documented  
✅ Universal template included  
✅ Navigation guide included  
✅ All files committed to git  

**The system is complete and ready to use.**

---

**Choose your path in HOW-TO-USE-THESE-GUIDES.md and start building.**