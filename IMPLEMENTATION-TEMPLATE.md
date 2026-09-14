# Component Library Template
## Fill in your product name, copy & paste everything

**REPLACE THIS:** `[PRODUCT_NAME]` with your actual product name (e.g., "CleanShopper")

---

## COMMANDS TO RUN

### Setup (Copy-Paste)
```
npm create vite@latest [PRODUCT_NAME]-app -- --template react-ts
cd [PRODUCT_NAME]-app
npm install
npm install -D tailwindcss postcss autoprefixer
mkdir -p src/components/phase{1,2,3,4,5,6}
mkdir -p .claude
npm run dev
```

---

## FILES TO CREATE

### 1. tailwind.config.ts
```typescript
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2D6A4F',
        'primary-light': '#40916C',
        'primary-dark': '#1B4332',
        secondary: '#F5F1E8',
        accent: '#D97706',
        success: '#10D981',
        warning: '#FBBF24',
        error: '#F97316',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
    },
  },
} satisfies Config
```

### 2. postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 3. vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
})
```

### 4. .claude/launch.json
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

## PHASE 1: BUTTON COMPONENT

### File: src/components/phase1/Button.tsx
```typescript
import React from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  children: React.ReactNode
  disabled?: boolean
  loading?: boolean
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  onClick,
  children,
  disabled = false,
  loading = false,
  className = '',
}) => {
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-light',
    secondary: 'bg-secondary text-primary hover:bg-gray-200',
    accent: 'bg-accent text-white hover:bg-orange-500',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10',
  }

  const sizeStyles = {
    sm: 'px-md py-sm text-sm',
    md: 'px-lg py-md text-base',
    lg: 'px-xl py-lg text-lg',
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        rounded-md
        font-semibold
        transition-all
        disabled:opacity-50
        disabled:cursor-not-allowed
        focus:outline-none
        focus:ring-2
        focus:ring-primary/50
        ${className}
      `}
    >
      {loading ? '...' : children}
    </button>
  )
}
```

---

## PHASE 1: INPUT COMPONENT

### File: src/components/phase1/Input.tsx
```typescript
import React from 'react'

interface InputProps {
  label?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  icon?: React.ReactNode
  className?: string
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  icon,
  className = '',
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-primary mb-sm">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-md top-1/2 -translate-y-1/2 text-primary">
            {icon}
          </div>
        )}
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`
            w-full
            px-lg
            py-md
            border-2
            border-gray-300
            rounded-md
            focus:border-primary
            focus:outline-none
            focus:ring-2
            focus:ring-primary/20
            transition-all
            ${icon ? 'pl-xl' : ''}
            ${error ? 'border-error' : ''}
            ${className}
          `}
        />
      </div>
      {error && (
        <p className="text-sm text-error mt-sm">{error}</p>
      )}
    </div>
  )
}
```

---

## PHASE 1: HEADER COMPONENT

### File: src/components/phase1/Header.tsx
```typescript
import React from 'react'

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-primary text-white px-lg py-md shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">[PRODUCT_NAME]</h1>
        <nav className="flex gap-lg">
          <a href="#" className="hover:text-secondary transition">Home</a>
          <a href="#" className="hover:text-secondary transition">Saved</a>
          <a href="#" className="hover:text-secondary transition">Cart</a>
        </nav>
      </div>
    </header>
  )
}
```

---

## PHASE 1: SEARCHBAR COMPONENT

### File: src/components/phase1/SearchBar.tsx
```typescript
import React, { useState } from 'react'
import { Input } from './Input'
import { Button } from './Button'

export const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="w-full">
      <div className="flex gap-md items-end">
        <div className="flex-1">
          <Input
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            icon={<span>🔍</span>}
          />
        </div>
        <Button
          variant="secondary"
          size="md"
          onClick={() => setShowFilters(!showFilters)}
        >
          Filter
        </Button>
        <Button
          variant="primary"
          size="md"
          onClick={() => console.log('Search:', query)}
        >
          Search
        </Button>
      </div>

      {showFilters && (
        <div className="mt-lg p-lg bg-secondary rounded-lg border-2 border-gray-200">
          <label className="block text-sm font-semibold mb-md">Category</label>
          <select className="w-full px-md py-sm rounded-md border-2 border-gray-300">
            <option>All</option>
            <option>Category 1</option>
            <option>Category 2</option>
          </select>
        </div>
      )}
    </div>
  )
}
```

---

## PHASE 1: COMPONENT EXPORTS

### File: src/components/index.ts
```typescript
export { Button } from './phase1/Button'
export { Input } from './phase1/Input'
export { Header } from './phase1/Header'
export { SearchBar } from './phase1/SearchBar'
```

---

## PHASE 1: TEST IN APP

### File: src/App.tsx
```typescript
import { Header, SearchBar, Button } from './components'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto px-lg py-xl">
        <h2 className="text-3xl font-bold text-primary mb-lg">Products</h2>
        <SearchBar />
        
        <div className="mt-2xl flex gap-md">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="accent">Accent Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
      </main>
    </div>
  )
}

export default App
```

---

## PHASE 1: COMMIT

```bash
git add src/components/phase1/
git add src/components/index.ts
git commit -m "Build Phase 1: Navigation & Search

Implemented 4 core components:
- Button (4 variants × 3 sizes)
- Input (with label, error state, icon)
- Header (sticky navigation)
- SearchBar (search + filters)

All components use design tokens."
```

---

## NEXT PHASES (Copy This Pattern)

For **Phase 2-6**, follow the same pattern:
1. Create component file in `src/components/phaseX/ComponentName.tsx`
2. Copy the component code
3. Add to `src/components/index.ts`
4. Test in App.tsx
5. Commit with clear message

---

## QUICK CHECKLIST

- [ ] Setup complete (ran all commands)
- [ ] All config files created
- [ ] Phase 1 components created
- [ ] Components exported
- [ ] App.tsx updated with test components
- [ ] Dev server running at localhost:5173
- [ ] All components visible and interactive
- [ ] Phase 1 committed
- [ ] Ready for Phase 2

---

## DEPLOYMENT

When all 6 phases complete:
```bash
npm run build
```

Creates `dist/` folder ready to deploy.