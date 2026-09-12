# Clean Shopper Design System Skill

## Overview
This skill enforces the Clean Shopper design system on all UI work. Use this skill when building or modifying any component, page, or UI element.

## When to Use
- Building new React components
- Styling existing components
- Creating new pages or views
- Implementing designs from Figma
- Fixing visual bugs or inconsistencies
- Refactoring component styles

## Key Rules

### Colors: Never Hardcode
Use Tailwind classes that reference `tailwind.config.js` instead of hex values:

❌ **Don't:**
```jsx
<button style={{ backgroundColor: '#2D6A4F' }}>Save</button>
<div className="bg-[#D97706]">Accent</div>
```

✅ **Do:**
```jsx
<button className="bg-primary hover:bg-primary-light">Save</button>
<div className="bg-accent">Accent</div>
```

**Primary color token usage:**
- `bg-primary` — primary buttons, active nav, brand moments
- `bg-primary-light` — hover states
- `bg-primary-dark` — pressed states, focus

**Other color tokens:**
- `bg-secondary` — card backgrounds, secondary fills, warm organic feeling
- `bg-accent` — **highlights, badges, secondary CTAs, expressive moments** (use boldly)
- `bg-accent-bold` — pressed states, strong emphasis, alternative primary CTAs
- `bg-success` — **#10D981** safe/clean states only (bold vibrant green)
- `bg-warning` — **#FBBF24** caution states only (bold vibrant amber)
- `bg-error` — **#F97316** harmful ingredients only (bold vibrant orange-red)
- `text-neutral-900` — primary text
- `text-neutral-600` — secondary text
- `border-neutral-200` — borders and dividers

### Typography: Use the Type Scale
Never set a custom font size. Always use the defined scale:

❌ **Don't:**
```jsx
<h1 className="text-5xl">Title</h1>
<p className="text-base">Body text</p>
```

✅ **Do:**
```jsx
<h1 className="display">Hero Headline</h1>
<h1 className="h1">Page Title</h1>
<h2 className="h2">Section Header</h2>
<h3 className="h3">Card Title</h3>
<h4 className="h4">Label</h4>
<p className="body">Body copy, descriptions, product details</p>
<p className="small">Supporting text, metadata, tags</p>
<p className="micro">Legal, timestamps, footer</p>
```

**Type Scale (Bold & Expressive):**
- `display` — 56px/800 — **hero moments with maximum boldness**
- `display-sm` — 48px/700 — **large sections, campaign moments**
- `h1` — 42px/700 — **main page titles with authority**
- `h2` — 32px/700 — **section headers, strong presence**
- `h3` — 24px/600 — card titles, subsection headers
- `h4` — 18px/600 — labels, button text, confident instruction
- `body` — 16px/400 — main content (line-height 1.6)
- `body-bold` — 16px/600 — **emphasized body copy, key information**
- `small` — 14px/400 — supporting text (line-height 1.5)
- `micro` — 12px/400 — legal text (line-height 1.4)

### Spacing: Use the Spacing Scale
Never set custom margins/padding. Use the 8px-based scale:

❌ **Don't:**
```jsx
<div className="p-6 m-10">Card</div>
<div className="gap-5">Grid</div>
```

✅ **Do:**
```jsx
<div className="p-space-lg m-space-xl">Card content</div>
<div className="gap-space-md">Grid items</div>
```

**Spacing tokens:**
- `space-xs` — 8px — icon padding, tight spacing
- `space-sm` — 16px — button padding, compact spacing
- `space-md` — 24px — standard component padding
- `space-lg` — 32px — card padding, section spacing
- `space-xl` — 48px — between page components
- `space-2xl` — 64px — between major sections
- `space-3xl` — 96px — page margins, large gaps
- `space-4xl` — 128px — hero sections, full-bleed

**In Tailwind classes:**
```jsx
<div className="p-space-lg gap-space-md">Content</div>
<div className="mb-space-2xl">Section break</div>
```

### Shadows: Restraint Over Drama
Use subtle shadows. Never over-shadow.

❌ **Don't:**
```jsx
<div className="shadow-xl rounded-lg">Card</div>
```

✅ **Do:**
```jsx
<div className="shadow-sm rounded-lg hover:shadow-md">Card (resting)</div>
<div className="shadow-md">Card (hover/interaction)</div>
<div className="shadow-lg rounded-lg">Modal (overlay only)</div>
```

**Shadow tokens:**
- `shadow-sm` — 0 1px 2px rgba(0,0,0,0.05) — resting state
- `shadow-md` — 0 4px 6px rgba(0,0,0,0.1) — hover/active
- `shadow-lg` — 0 10px 15px rgba(0,0,0,0.15) — modals/overlays

### Border Radius: Choose Once Per Component Type
Use consistent rounding within component families.

✅ **Button (radius-md):**
```jsx
<button className="rounded-radius-md">Save</button>
```

✅ **Card (radius-lg):**
```jsx
<div className="rounded-radius-lg">Product card</div>
```

✅ **Badge (radius-sm):**
```jsx
<span className="rounded-radius-sm">Clean</span>
```

✅ **Avatar (radius-full):**
```jsx
<img className="rounded-radius-full" src="..." />
```

**Border radius tokens:**
- `radius-sm` — 4px — badges, tags
- `radius-md` — 8px — buttons, inputs, small cards
- `radius-lg` — 12px — cards, modals
- `radius-full` — 9999px — pills, avatars

### Semantic Color Usage: Carry Meaning
Colors must only be used for their intended semantic purpose:

✅ **Safe/Clean Product:**
```jsx
<div className="bg-success text-white">
  <CheckIcon /> This product is clean
</div>
```

✅ **Ingredient Needs Review:**
```jsx
<div className="bg-warning text-neutral-900">
  <AlertIcon /> Review this ingredient
</div>
```

✅ **Harmful Ingredient:**
```jsx
<div className="bg-error text-white">
  <XIcon /> Contains harmful chemical
</div>
```

❌ **Don't use success green for decoration** or warning amber for accents. These carry meaning.

## Common Component Patterns

### Button (Primary Action — Bold)
```jsx
<button className="bg-primary hover:bg-primary-light text-white px-space-md py-space-sm rounded-radius-md h4 font-bold shadow-md hover:shadow-lg transition-all">
  Save Product
</button>
```

### Button (Accent/Secondary — Expressive)
```jsx
<button className="bg-accent hover:bg-accent-light text-white px-space-md py-space-sm rounded-radius-md h4 font-bold shadow-md">
  Discover Clean Products
</button>
```

### Secondary Button
```jsx
<button className="bg-secondary text-neutral-900 hover:bg-opacity-80 px-space-md py-space-sm rounded-radius-md h4 font-semibold">
  Learn More
</button>
```

### Card (Expressive)
```jsx
<div className="bg-white rounded-radius-lg p-space-lg shadow-md hover:shadow-lg transition-shadow">
  <h3 className="h3 text-neutral-900 font-bold mb-space-sm">Product Name</h3>
  <p className="body text-neutral-600 mb-space-md">Description here</p>
  <button className="bg-accent hover:bg-accent-light text-white px-space-md py-space-xs rounded-radius-md h4 font-bold">
    View Details
  </button>
</div>
```

### Featured Card (Bold & Expressive)
```jsx
<div className="bg-secondary rounded-radius-lg p-space-lg shadow-xl border-2 border-accent">
  <h3 className="display-sm text-primary font-bold mb-space-md">Clean Pick</h3>
  <p className="body-bold text-neutral-900 mb-space-md">Highly rated • Verified safe</p>
  <p className="body text-neutral-600 mb-space-lg">Why this product stands out</p>
</div>
```

### Form Input
```jsx
<input
  className="border-2 border-neutral-200 rounded-radius-md px-space-md py-space-sm body text-neutral-900 placeholder-neutral-400"
  placeholder="Search products..."
/>
```

### Badge (Safe/Clean)
```jsx
<span className="bg-success bg-opacity-10 text-success rounded-radius-sm px-space-sm py-space-xs small">
  ✓ Clean
</span>
```

### Text Hierarchy
```jsx
<div>
  <h2 className="h2 text-neutral-900 mb-space-lg">Product Recommendations</h2>
  <p className="body text-neutral-600 mb-space-xl">Based on your saved preferences</p>
  
  <div className="space-y-space-lg">
    {products.map(product => (
      <div key={product.id} className="bg-secondary rounded-radius-lg p-space-lg">
        <h3 className="h3 text-neutral-900 mb-space-sm">{product.name}</h3>
        <p className="small text-neutral-600">{product.description}</p>
      </div>
    ))}
  </div>
</div>
```

## Tailwind Config Reference
Your `tailwind.config.js` should extend the default theme with these tokens:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#2D6A4F',
      'primary-light': '#40916C',
      'primary-dark': '#1B4332',
      secondary: '#F5F1E8',
      accent: '#D97706',
      'accent-light': '#F59E0B',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      neutral: {
        50: '#FEFDFB',
        100: '#F9FAFB',
        200: '#E5E7EB',
        400: '#9CA3AF',
        600: '#6B7280',
        900: '#1F2937',
      }
    },
    spacing: {
      'space-xs': '8px',
      'space-sm': '16px',
      'space-md': '24px',
      'space-lg': '32px',
      'space-xl': '48px',
      'space-2xl': '64px',
      'space-3xl': '96px',
      'space-4xl': '128px',
    },
    borderRadius: {
      'radius-sm': '4px',
      'radius-md': '8px',
      'radius-lg': '12px',
      'radius-full': '9999px',
    },
    boxShadow: {
      'shadow-sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
      'shadow-md': '0 4px 6px rgba(0, 0, 0, 0.1)',
      'shadow-lg': '0 10px 15px rgba(0, 0, 0, 0.15)',
    },
    fontSize: {
      display: ['56px', { lineHeight: '1.1', fontWeight: '700' }],
      h1: ['42px', { lineHeight: '1.2', fontWeight: '700' }],
      h2: ['32px', { lineHeight: '1.3', fontWeight: '700' }],
      h3: ['24px', { lineHeight: '1.4', fontWeight: '600' }],
      h4: ['18px', { lineHeight: '1.5', fontWeight: '600' }],
      body: ['16px', { lineHeight: '1.6', fontWeight: '400' }],
      small: ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      micro: ['12px', { lineHeight: '1.4', fontWeight: '400' }],
    }
  }
}
```

## Quick Checklist
- [ ] No hardcoded hex colors—using token names
- [ ] No custom font sizes—using type scale
- [ ] No custom spacing—using space-* scale
- [ ] Shadows are subtle (shadow-sm default)
- [ ] Primary color used for single most important action
- [ ] Text is neutral-900 (primary) or neutral-600 (secondary)
- [ ] Semantic colors only used for their intended meaning
- [ ] Border radius consistent with component type
- [ ] Spacing reflects calm, intentional layout
- [ ] Accessible contrast ratios confirmed

## See Also
- `/docs/design-system.md` — Full design system specification with all token details
- `design-system-visual.html` — Open in browser to review the visual guide
- `tailwind.config.js` — Where token values are configured
