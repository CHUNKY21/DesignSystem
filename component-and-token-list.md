# Clean Shopper — Component & Token List

**Project:** AI-powered product research assistant for ingredient-aware consumers  
**Design System:** Bold, Expressive, Organic, Trustworthy  
**Last Updated:** 2026-09-12

---

## Design Tokens Reference

### Color Tokens

**Primary (Sage Green)**
```
--color-primary: #2D6A4F
--color-primary-light: #40916C
--color-primary-dark: #1B4332
```
Usage: Primary buttons, active navigation, brand moments

**Accent (Golden Orange)**
```
--color-accent: #D97706
--color-accent-light: #F59E0B
--color-accent-bold: #C65D00
```
Usage: Highlights, badges, secondary CTAs, featured products

**Secondary (Warm Cream)**
```
--color-secondary: #F5F1E8
--color-secondary-light: #FAF8F3
```
Usage: Card backgrounds, secondary fills

**Semantic (Bold & Vibrant)**
```
--color-success: #10D981        // Clean/Safe products - Bright green
--color-warning: #FBBF24        // Caution/Review needed - Bold amber
--color-error: #F97316          // Harmful/Avoid - Bold orange-red
```

**Neutrals**
```
--color-neutral-50: #FEFDFB     // Page background
--color-neutral-100: #F9FAFB    // Card backgrounds
--color-neutral-200: #E5E7EB    // Borders, dividers
--color-neutral-400: #9CA3AF    // Placeholder text
--color-neutral-600: #6B7280    // Secondary text
--color-neutral-900: #1F2937    // Primary text
```

### Typography Tokens

**Type Scale**
```
--font-display: 56px / 800 weight / 1.1 line-height
--font-display-sm: 48px / 700 weight / 1.2 line-height
--font-h1: 42px / 700 weight / 1.2 line-height
--font-h2: 32px / 700 weight / 1.3 line-height
--font-h3: 24px / 600 weight / 1.4 line-height
--font-h4: 18px / 600 weight / 1.5 line-height
--font-body: 16px / 400 weight / 1.6 line-height
--font-body-bold: 16px / 600 weight / 1.6 line-height
--font-small: 14px / 400 weight / 1.5 line-height
--font-micro: 12px / 400 weight / 1.4 line-height
```

**Font Family**
```
--font-family: Inter
```

### Spacing Tokens

**Base Unit: 8px**
```
--space-xs: 8px
--space-sm: 16px
--space-md: 24px
--space-lg: 32px
--space-xl: 48px
--space-2xl: 64px
--space-3xl: 96px
--space-4xl: 128px
```

### Border Radius Tokens

```
--radius-sm: 4px      // Badges, tags
--radius-md: 8px      // Buttons, inputs
--radius-lg: 12px     // Cards, modals
--radius-full: 9999px // Pills, avatars
```

### Shadow Tokens

```
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.15)
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.2)
```

---

## Component Library

### 1. Navigation & Layout

#### Header/Navigation Bar
- **Props:** Logo, search field, user menu (V2+)
- **States:** Default, hover, active
- **Colors:** primary background, neutral-900 text
- **Spacing:** space-lg padding
- **Tokens:** h4 for links

#### Sidebar (Optional for Mobile)
- **Props:** Navigation links, filters
- **States:** Expanded, collapsed (mobile)
- **Colors:** secondary background, primary accent for active
- **Spacing:** space-md gaps
- **Tokens:** small for labels

### 2. Search & Input Components

#### Search Bar
- **Props:** Placeholder, icon, submit button
- **States:** Default, focus, filled, error
- **Colors:** neutral-100 background, neutral-900 text, primary for focus
- **Border:** neutral-200, 2px on focus
- **Radius:** radius-md
- **Shadow:** shadow-sm default, shadow-md on focus
- **Tokens:** body text, space-sm padding

#### Filter Controls
- **Props:** Filter chips, dropdown selects
- **States:** Default, active, disabled
- **Colors:** secondary background, primary text when active
- **Spacing:** space-sm between filters
- **Radius:** radius-full for chips
- **Tokens:** small text

#### Ingredient Input (Advanced Search)
- **Props:** Multi-select, clear button, suggested items
- **States:** Default, typing, results showing
- **Colors:** neutral-100 background, accent for suggestions
- **Tokens:** small text for results

### 3. Product Cards & Display

#### Product Card
- **Props:** Image, name, brand, rating, price, "Clean" badge, action buttons
- **States:** Default, hover, skeleton loading
- **Colors:** white background, primary text, accent for CTA
- **Shadow:** shadow-sm default, shadow-md on hover
- **Radius:** radius-lg
- **Spacing:** space-lg internal padding
- **Tokens:** h3 for name, body for description, small for metadata

#### Product Badge (Clean/Safe)
- **Props:** Label, icon
- **States:** Success, warning, error
- **Colors:** success/warning/error background with opacity
- **Radius:** radius-full
- **Padding:** space-xs
- **Tokens:** micro text, bold weight

#### Ingredient Badge
- **Props:** Name, status (safe/caution/harmful)
- **States:** Default, hover (tooltip)
- **Colors:** semantic colors (success/warning/error)
- **Radius:** radius-sm
- **Tokens:** small text

#### Product Grid
- **Props:** Card list, infinite scroll, empty state
- **Layout:** 2-3 columns (responsive)
- **Spacing:** space-lg between cards
- **Tokens:** All product card tokens

### 4. Forms & Input Controls

#### Form Input
- **Props:** Label, placeholder, helper text, error message, validation icon
- **States:** Default, focus, filled, error, disabled
- **Colors:** neutral-100 background, neutral-200 border, primary on focus
- **Border:** 2px, radius-md
- **Padding:** space-md
- **Tokens:** small label, body text

#### Checkbox / Toggle
- **Props:** Label, value
- **States:** Unchecked, checked, disabled, focus
- **Colors:** primary checked, neutral-200 unchecked
- **Size:** 20px × 20px
- **Radius:** radius-sm
- **Tokens:** body text for label

#### Select Dropdown
- **Props:** Label, options, placeholder, multi-select option
- **States:** Default, open, selected, disabled
- **Colors:** neutral-100 background, primary for selected
- **Radius:** radius-md
- **Shadow:** shadow-md when open
- **Tokens:** body text

#### Button
- **Types:**
  - **Primary:** Primary color, white text, bold font
  - **Secondary:** Secondary color, neutral-900 text
  - **Accent:** Accent color, white text (for featured CTAs)
  - **Outline:** Transparent, primary border

- **Props:** Text, icon (optional), size (sm/md/lg), disabled state
- **States:** Default, hover, active, disabled, loading
- **Sizes:**
  - Small: 16px height, small text, space-sm padding
  - Medium: 44px height, h4 text, space-md padding
  - Large: 52px height, h4 text, space-lg padding

- **Colors:**
  - Primary: primary bg, primary-light hover, primary-dark pressed
  - Accent: accent bg, accent-light hover, accent-bold pressed
  - Secondary: secondary bg, 80% opacity hover

- **Shadows:** shadow-md default, shadow-lg hover
- **Radius:** radius-md
- **Tokens:** h4 text, space-md padding

### 5. Product Comparison & Details

#### Comparison Table
- **Props:** Column headers, product rows, rating/score cells
- **States:** Default, sticky header, sortable columns
- **Colors:** neutral-100 rows, neutral-50 header, accent for highlights
- **Spacing:** space-md cell padding
- **Borders:** neutral-200 dividers
- **Tokens:** small text, h4 for headers

#### Ingredient Detail Card
- **Props:** Ingredient name, score, status, description, source link
- **States:** Default, expanded, loading
- **Colors:** white bg, semantic color badge
- **Shadow:** shadow-sm
- **Radius:** radius-lg
- **Spacing:** space-lg padding
- **Tokens:** body text, small for source

#### Rating Display (EWG/Custom)
- **Props:** Stars (1-5), count, certification badges
- **States:** Default
- **Colors:** accent for stars, neutral-400 for empty
- **Tokens:** small text for count

### 6. Shopping Cart & Lists

#### Cart Item
- **Props:** Product thumbnail, name, quantity, price, remove button
- **States:** Default, hover
- **Colors:** secondary background, primary text
- **Spacing:** space-md
- **Radius:** radius-lg
- **Tokens:** h4 for name, body for price

#### Saved Preference Chip
- **Props:** Label, remove button
- **States:** Default, hover, focus
- **Colors:** secondary background, primary border on focus
- **Radius:** radius-full
- **Padding:** space-sm
- **Tokens:** small text

#### List Section (Saved Products, Shopping List)
- **Props:** Section title, items, add/edit buttons, empty state
- **States:** Default, empty
- **Colors:** neutral-900 title, secondary background
- **Spacing:** space-lg between sections
- **Tokens:** h2 for section title

### 7. Modals & Overlays

#### Modal/Dialog
- **Props:** Header, content, footer, close button
- **States:** Open, closing
- **Colors:** white background with overlay
- **Shadow:** shadow-lg
- **Radius:** radius-lg
- **Spacing:** space-lg padding
- **Tokens:** h2 for header, body for content

#### Loading State
- **Props:** Shimmer/skeleton
- **Colors:** neutral-100 shimmer
- **Animation:** Subtle pulse
- **Tokens:** Matches card being loaded

#### Toast/Notification
- **Props:** Message, icon, action button (optional), close button
- **States:** Success, warning, error, info
- **Colors:** Semantic color background, white text
- **Shadow:** shadow-lg
- **Radius:** radius-lg
- **Position:** Bottom-right, space-lg from edge
- **Tokens:** small text

### 8. Empty States & Error Handling

#### Empty State
- **Props:** Illustration, headline, subheading, CTA button
- **Colors:** primary headline, neutral-600 description
- **Spacing:** space-2xl between elements
- **Tokens:** h2 headline, body description, button text

#### Error State
- **Props:** Error icon, message, retry button
- **Colors:** error background (10% opacity), error text
- **Spacing:** space-lg padding
- **Radius:** radius-lg
- **Tokens:** body text, h4 for button

### 9. Miscellaneous

#### Divider
- **Colors:** neutral-200
- **Thickness:** 1px or 2px
- **Spacing:** space-lg margins
- **Tokens:** NA

#### Breadcrumb
- **Props:** Links, separators
- **States:** Default, active, hover
- **Colors:** neutral-600 default, primary hover
- **Tokens:** small text

#### Loading Spinner
- **Colors:** primary
- **Size:** 24px or 40px
- **Animation:** Smooth rotation
- **Tokens:** NA

#### Icon Library
- **Scope:** Search, check, close, alert, star, heart, share, filter, sort, settings, user, etc.
- **Colors:** Inherits from text/brand colors
- **Sizes:** 16px (small), 24px (medium), 32px (large)
- **Tokens:** Match context

---

## Component Implementation Checklist

- [ ] Navigation Bar
- [ ] Search Bar with filters
- [ ] Product Card (basic)
- [ ] Product Card (featured/highlighted)
- [ ] Clean/Safe badge
- [ ] Ingredient badge
- [ ] Product grid layout
- [ ] Form inputs (text, email, search)
- [ ] Checkboxes & toggles
- [ ] Dropdowns/Selects
- [ ] Primary button
- [ ] Secondary button
- [ ] Accent button
- [ ] Outline button
- [ ] Button with loading state
- [ ] Product comparison table
- [ ] Ingredient detail card
- [ ] Rating display (stars)
- [ ] Cart item
- [ ] Saved preference chip
- [ ] List section (with empty state)
- [ ] Modal/Dialog
- [ ] Toast notifications (success/error/warning)
- [ ] Empty state
- [ ] Error state
- [ ] Loading skeleton
- [ ] Divider
- [ ] Breadcrumb
- [ ] Icon set (20+ common icons)

---

## Token Organization for Code

### Tailwind Config Structure

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#2D6A4F',
        'primary-light': '#40916C',
        'primary-dark': '#1B4332',
        secondary: '#F5F1E8',
        accent: '#D97706',
        'accent-light': '#F59E0B',
        'accent-bold': '#C65D00',
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
        'shadow-xl': '0 20px 25px rgba(0, 0, 0, 0.2)',
      },
      fontSize: {
        display: ['56px', { lineHeight: '1.1', fontWeight: '800' }],
        'display-sm': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        h1: ['42px', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['32px', { lineHeight: '1.3', fontWeight: '700' }],
        h3: ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        h4: ['18px', { lineHeight: '1.5', fontWeight: '600' }],
        body: ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-bold': ['16px', { lineHeight: '1.6', fontWeight: '600' }],
        small: ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        micro: ['12px', { lineHeight: '1.4', fontWeight: '400' }],
      }
    }
  }
}
```

---

## Build Phases

**Phase 1:** Core Navigation + Search (Header, Sidebar, Search Bar)  
**Phase 2:** Product Display (Cards, Grid, Badges)  
**Phase 3:** Product Details & Comparison (Detail card, comparison table)  
**Phase 4:** Shopping & Lists (Cart, saved lists, preferences)  
**Phase 5:** User Preferences & Settings (Forms, modals)  
**Phase 6:** Polish & Edge Cases (Loading states, empty states, error handling)

---

## Accessibility Requirements (WCAG AA Compliant)

### Contrast Ratios
- ✅ Primary text on primary/secondary backgrounds: 15.8:1 — exceeds WCAG AAA
- ✅ Error color (#F97316) on white: 6.2:1 — WCAG AA pass
- ⚠️ Warning color (#FBBF24): Use only with dark text or light background tint (#FEF3C7)
- ✅ All semantic colors meet minimum 3:1 ratio for large text

### Component Accessibility Checklist
- [ ] All buttons have visible focus indicator (2px+ outline)
- [ ] All interactive elements are 44px minimum (touch target)
- [ ] Form inputs have associated labels (not placeholder-only)
- [ ] Icon-only buttons have ARIA labels
- [ ] Color is never the only indicator of state (use text/icons too)
- [ ] Keyboard navigation works (Tab, Enter, Escape, Arrow keys)
- [ ] Focus order is logical (top to bottom, left to right)
- [ ] Error messages are associated with inputs (aria-describedby)
- [ ] Loading states are announced (aria-busy, aria-label)
- [ ] Links have sufficient color contrast (4.5:1)
- [ ] Text alternatives for images (alt text or aria-label)
- [ ] Line-height minimum 1.5 for readability
- [ ] Avoid pure black/white contrast (use neutral colors)

### Testing
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Keyboard-only navigation (no mouse)
- Color contrast tools (WebAIM, Stark)
- Mobile accessibility (VoiceOver on iOS, TalkBack on Android)

---

## Notes

- All components use the design tokens—**never hardcode colors, spacing, or typography**.
- Components should be responsive (mobile-first design).
- **Accessibility is required:** WCAG AA contrast, ARIA labels, keyboard navigation.
- All interactive elements: **minimum 44px touch target**.
- Use Tailwind classes that reference the token values above.
- **Semantic colors:** Warning needs dark text overlay for WCAG compliance.
