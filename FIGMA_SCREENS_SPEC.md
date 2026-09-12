# Clean Shopper — Figma Screens Specification

**Version:** 1.0  
**Date:** 2026-09-12  
**Status:** All phases (1, 2, 3) complete and functional  
**Figma Base URL:** https://www.figma.com/design/DcEzvhAF7koEbm39s1Qi4k

---

## Overview

This document specifies all screens built for Clean Shopper across Phase 1, 2, and 3. Each screen definition includes:
- **Screen name** and purpose
- **Components used** with references
- **Layout specification** with spacing and grid
- **Data/Content** shown on the screen
- **Interactions** and state changes
- **Responsive behavior** (mobile, tablet, desktop)

All colors, typography, spacing, and shadows follow the design system defined in `/docs/design-system.md`.

---

## Phase 1: Core Navigation & Search Screens

### Screen 1: Homepage / Search Landing
**Purpose:** Entry point for new users. Hero section with value proposition, search interface, and "How it works" explanation.

**Components:**
- Header (sticky, primary color background)
- Hero section (h1 headline with primary accent on "clean")
- Search section with SearchBar component
- "How it works" card grid (3 cards with step numbers)

**Layout:**
- Max width: 1200px centered
- Hero section: Full width, space-3xl vertical padding
- Search bar: Full width within container, white background card with shadow-md
- Cards grid: 3 columns (responsive: 1 col mobile, 2 col tablet)

**Content:**
- Headline: "Find **clean** products for your home"
- Subheading: "Research ingredient safety, avoid harmful chemicals, and make informed purchasing decisions with AI-powered product analysis."
- Search placeholder: "Search for products or ingredients..."
- Steps: "1. Search / Describe what you're looking for", "2. Analyze / We check ingredients against safety data", "3. Compare / See recommendations with detailed reasoning"

**States:**
- Default: Hero visible, "How it works" cards shown
- After search: Hero hidden, results visible below search bar

**Responsive:**
- Mobile: Cards stack 1 column, header shows hamburger
- Tablet: Cards 2 columns
- Desktop: Cards 3 columns, full navigation visible

---

### Screen 2: Search Results with Product Grid
**Purpose:** Display search results as a responsive product grid with filtering capability.

**Components:**
- Header (with back navigation if from detail page)
- SearchBar (with filter toggle and results count)
- ProductGrid (containing 6 ProductCard components)
- "Compare selected products" link at bottom

**Layout:**
- Grid: 3 columns (responsive: 1 mobile, 2 tablet, 3 desktop)
- Card spacing: space-lg between cards
- Results heading: space-lg below search bar

**Content:**
- Results heading: "Results for "**[search query]**""
- 6 sample products displayed
- Compare link: "Compare selected products →"

**Interactions:**
- Click ProductCard → Navigate to Product Detail screen
- Click filter toggle → Filter panel expands/collapses
- Click "Compare products" → Navigate to Comparison Table screen

**Sample Products:**
1. EWG Verified All Purpose Cleaner (Safe, $12.99, 4/5 stars, 324 reviews)
2. Seventh Generation Free & Clear Laundry (Safe, $8.49, 5/5 stars, 892 reviews)
3. Method All-Purpose Cleaner (Caution, $4.29, 3/5 stars, 156 reviews)
4. Ecos Hypoallergenic Laundry (Safe, $7.99, 4/5 stars, 445 reviews)
5. Dr. Bronner Pure Castile Soap (Safe, $9.99, 5/5 stars, 1203 reviews)
6. Clorox Regular Bleach (Harmful, $3.49, 4/5 stars, 523 reviews)

---

## Phase 2: Product Display Screens

### Screen 3: Product Card (within Grid)
**Purpose:** Individual product card showing key product information with action buttons.

**Components:**
- ProductBadge (status indicator)
- Product image placeholder
- Star rating with count
- Ingredient chips (max 3 + counter)
- Pricing
- Action buttons (Add to Cart, Save, View Details)

**Layout:**
- Card height: Flexible (varies by content)
- Image: Full width, h-48 (192px)
- Content section: p-space-lg with flexbox column layout
- Buttons: Flex row with space-sm gap

**Content Example (EWG Verified Cleaner):**
- Badge: "Clean" (green/success)
- Brand: "Grove Collaborative" (small, gray)
- Name: "EWG Verified All Purpose Cleaner" (h3, bold)
- Ingredients: "Water", "Coconut Oil", "Plant-based Enzymes" (chips, max 3 shown)
- Rating: 4 stars out of 5 (324 reviews)
- Price: "$12.99" (h4, primary color)
- Buttons: "Add to Cart" (primary), "Save" (outline), "View Details" (secondary)

**States:**
- Default: shadow-sm
- Hover: shadow-md, slight scale up
- Loading: Skeleton variant with pulse animation

**Responsive:**
- Mobile: 1 column grid
- Tablet: 2 columns
- Desktop: 3 columns

---

### Screen 4: Product Card - All Status Types
**Purpose:** Show all three status badge variants in the grid.

**Variants:**
- Safe badge (green/success) on compatible products
- Review Needed badge (amber/warning) on mixed products
- Avoid badge (red/error) on harmful products

**Layout:** Same as Screen 3, varies only by badge color and product data

**Example Cards:**
- Clean (safe): Grove Collaborative, Seventh Generation, Ecos, Dr. Bronner's
- Review Needed (caution): Method
- Avoid (harmful): Clorox

---

## Phase 3: Product Details & Comparison Screens

### Screen 5: Product Detail Page
**Purpose:** Full product information with ingredient analysis, certifications, and action buttons.

**Components:**
- Header with "Back to Results" navigation
- Product image (left) / Product info (right) - 2 column grid
- RatingDisplay with certifications
- Quantity selector
- Action buttons (Add to Cart, Save)
- Product description
- Ingredient Analysis section with IngredientDetailCard components
- "Why we recommend this" info box
- "Certifications" info box

**Layout:**
- Two-column grid (responsive: stacks to 1 column on mobile/tablet)
- Image: h-96 (384px) aspect-square
- Info section: flex column with space-lg gaps
- Ingredients: Full width, space-md gaps between cards
- Info boxes: 2-column grid at bottom (responsive: 1 column on tablet)

**Content (EWG Verified Cleaner):**
- Image: Product photo placeholder
- Brand: "Grove Collaborative" (small text)
- Name: "EWG Verified All Purpose Cleaner" (h1)
- Badge: "Clean & Safe" (green)
- Rating: 4.5/5 with 324 reviews
- Certifications: EWG Verified, Biodegradable, Cruelty-Free (green checkmark badges)
- Price: "$12.99" (h2, primary color)
- Quantity: 1 (with +/- buttons)
- Buttons: "Add 1 to Cart" (primary), "Save" (outline)
- Description: "This all-purpose cleaner is made with plant-based ingredients..."
- Ingredients: 3 expandable cards (Water, Coconut Oil Surfactant, Plant-based Enzymes)
- Why section: "Certified non-toxic by EWG", "Biodegradable formula", "No harmful chemicals detected"
- Certifications section: EWG Verified, Biodegradable, Cruelty-Free

**Interactions:**
- Click ingredient card → Expands to show hazards and alternatives
- Click action buttons → Confirm action (console log in prototype)
- Click back button → Return to search results

**Responsive:**
- Mobile: Single column (image, then info)
- Tablet: Single column (image, then info)
- Desktop: Two columns (image left, info right)

---

### Screen 6: Ingredient Detail Card (Expanded)
**Purpose:** Show detailed ingredient information including hazards, benefits, and alternatives.

**Components:**
- Ingredient title and status badge
- Hazard score with color-coded progress bar
- Full description
- Potential hazards section with warning icons
- Safer alternatives tags
- External link to source (EWG Skin Deep)

**Layout:**
- Card: Full width, border-1 neutral-200, rounded-lg
- Header: Flex row with expand/collapse arrow
- Content (expanded): Border-top, p-space-lg, bg-neutral-50
- Hazards/Alternatives: Flex column with space-sm gaps
- Source link: Flex row with external link icon

**Content Example (Water - Safe):**
- Title: "Water" (h3)
- Badge: "Safe" (green)
- Hazard Score: 0/10 (empty green bar)
- Description: "Pure water, an inert solvent that is completely safe."
- When expanded:
  - Full description repeated
  - Potential Hazards: "Natural origin", "Generally recognized as safe"
  - Safer Alternatives: None shown (safe ingredient)
  - Source link: "Learn more on EWG Skin Deep" with external icon

**Content Example (Clorox ingredient - Harmful):**
- Title: "Sodium Hypochlorite" (h3)
- Badge: "Avoid" (red)
- Hazard Score: 9/10 (nearly full red bar)
- Description: "Strong chemical oxidizer used for bleaching..."
- When expanded:
  - Full description
  - Potential Hazards: "May cause skin/eye irritation", "Respiratory irritant", "Harmful to aquatic life"
  - Safer Alternatives: "Plant-based enzymatic cleaner", "Hydrogen peroxide alternative"
  - Source link: "Learn more on EWG Skin Deep"

**States:**
- Collapsed: Shows preview text
- Expanded: Shows full content with arrow pointing up
- Hover: bg-neutral-50 transition

---

### Screen 7: Comparison Table
**Purpose:** Side-by-side product comparison with color-coded status columns.

**Components:**
- Header with "Compare Products" title and "Back to Results" button
- ComparisonTable with:
  - Sticky left column (Criteria)
  - Color-coded product columns (Green/Amber/Red)
  - Product name, brand, remove buttons in header
  - Price, Rating, and Feature rows
  - Check/X mark icons for boolean values

**Layout:**
- Full width, horizontal scroll on mobile/tablet
- Sticky header: bg-neutral-50
- Sticky left column: bg-white
- Color-coded columns:
  - Safe (Green): bg-success/10, border-success/30
  - Caution (Amber): bg-warning/10, border-warning/30
  - Harmful (Red): bg-error/10, border-error/30
- Cell padding: p-space-md
- Row borders: border-b border-neutral-200

**Content (3 Product Comparison):**

| Criteria | Grove Collab | Method | Clorox |
|---|---|---|---|
| Product Name | EWG Verified All Purpose Cleaner | Method All-Purpose Cleaner | Clorox Regular Bleach |
| Brand | Grove Collaborative | Method | Clorox |
| Status | Safe (Green) | Caution (Amber) | Harmful (Red) |
| Price | $12.99 | $4.29 | $3.49 |
| Rating | ⭐⭐⭐⭐ (324) | ⭐⭐⭐ (156) | ⭐⭐⭐⭐ (523) |
| Eco-Friendly | ✓ | ✓ | ✗ |
| Hypoallergenic | ✓ | ✗ | ✗ |
| Cruelty-Free | ✓ | ✓ | ✗ |
| Vegan | ✓ | ✓ | ✗ |
| Fragrance-Free | ✗ | ✗ | ✓ |

**Interactions:**
- Click X button on product column → Remove that product
- Horizontal scroll on mobile/tablet to see all columns
- Click feature rows → Visual feedback (highlight)

**Responsive:**
- Mobile: Sticky left column, horizontal scroll for products
- Tablet: Same as mobile
- Desktop: Full table visible without scroll

---

## Design System Specifications

### Color Tokens Used
- **Primary:** #2D6A4F (sage green) — buttons, active states, badges
- **Primary-light:** #40916C — hover states
- **Primary-dark:** #1B4332 — pressed states
- **Secondary:** #F5F1E8 (cream) — card backgrounds, filters
- **Accent:** #D97706 (golden orange) — highlights, featured items
- **Accent-light:** #F59E0B — hover states
- **Success:** #10D981 (bright green) — clean/safe products
- **Warning:** #FBBF24 (bold amber) — review needed, caution
- **Error:** #F97316 (orange-red) — harmful, avoid
- **Neutral-50:** #FEFDFB — page background
- **Neutral-100:** #F9FAFB — card backgrounds
- **Neutral-200:** #E5E7EB — borders, dividers
- **Neutral-400:** #9CA3AF — placeholder text
- **Neutral-600:** #6B7280 — secondary text
- **Neutral-900:** #1F2937 — primary text

### Typography
- **Font Family:** Inter (Google Fonts)
- **Type Scale:**
  - display: 56px / 800 weight / 1.1 LH
  - h1: 42px / 700 weight / 1.2 LH
  - h2: 32px / 700 weight / 1.3 LH
  - h3: 24px / 600 weight / 1.4 LH
  - h4: 18px / 600 weight / 1.5 LH
  - body: 16px / 400 weight / 1.6 LH
  - small: 14px / 400 weight / 1.5 LH
  - micro: 12px / 400 weight / 1.4 LH

### Spacing
- Base unit: 8px
- space-xs: 8px, space-sm: 16px, space-md: 24px, space-lg: 32px
- space-xl: 48px, space-2xl: 64px, space-3xl: 96px, space-4xl: 128px

### Border Radius
- radius-sm: 4px, radius-md: 8px, radius-lg: 12px, radius-full: 9999px

### Shadows
- shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
- shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1)
- shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.15)
- shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.2)

---

## Screen Summary Table

| Screen | Purpose | Phase | Components | Responsive |
|---|---|---|---|---|
| 1. Homepage | Entry point with search | Phase 1 | Header, SearchBar, Cards | Yes |
| 2. Search Results | Product grid display | Phase 2 | Header, SearchBar, ProductGrid | Yes |
| 3. Product Card | Individual product | Phase 2 | ProductCard, ProductBadge | Yes |
| 4. Product Card Variants | All status types | Phase 2 | ProductCard (3 variants) | Yes |
| 5. Product Detail | Full product info | Phase 3 | ProductDetail, RatingDisplay, IngredientDetailCard | Yes |
| 6. Ingredient Expanded | Detailed ingredient | Phase 3 | IngredientDetailCard (expanded) | Yes |
| 7. Comparison Table | Side-by-side compare | Phase 3 | ComparisonTable | Yes |

---

## Implementation Notes

### For Figma
1. Create separate artboards for each screen (iPhone 375w for mobile, iPad 768w for tablet, 1440w for desktop)
2. Use components for:
   - ProductCard (8 variants: 3 status × responsive)
   - Header (with/without back button)
   - SearchBar (default/with filters)
   - RatingDisplay (3 sizes)
   - IngredientDetailCard (collapsed/expanded)
   - ComparisonTable cell (3 status × value types)
3. Create color styles for all tokens
4. Create text styles for each typography level
5. Use auto-layout for grids and button rows
6. Document interaction flows with prototype connections

### For Developers
All screens are fully implemented in React/TypeScript at `src/components/` with:
- Full TypeScript interfaces
- Tailwind CSS styling using design tokens
- Responsive behavior with grid/flexbox
- Interactive states (hover, focus, active)
- Accessibility features (ARIA labels, semantic HTML)

### Status
✅ Phase 1 (Navigation & Search) — Complete and functional
✅ Phase 2 (Product Display) — Complete and functional  
✅ Phase 3 (Product Details & Comparison) — Complete and functional

All screens tested in dev server (localhost:5173) and responsive across mobile, tablet, and desktop viewports.

---

**Last Updated:** 2026-09-12  
**Next Phase:** Phase 4 (Shopping & Lists)
