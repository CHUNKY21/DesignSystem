import React, { useState } from 'react'
import { Button } from '../components/Button'
import { Badge } from '../components/Badge'
import { Divider } from '../components/Divider'

type Section = 'overview' | 'colors' | 'spacing' | 'typography' | 'components'

export default function Showcase() {
  const [activeSection, setActiveSection] = useState<Section>('overview')

  const colors = {
    Primary: { light: '#226644', dark: '#1a4d33' },
    Secondary: { light: '#4a6fa5', dark: '#3a5580' },
    Accent: { light: '#e8c547', dark: '#d4a820' },
    Success: { light: '#10b981', dark: '#059669' },
    Warning: { light: '#f59e0b', dark: '#d97706' },
    Error: { light: '#ef4444', dark: '#dc2626' },
  }

  const spacing = {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
  }

  const typography = [
    { name: 'Display', size: '48px', weight: '700' },
    { name: 'H1', size: '36px', weight: '700' },
    { name: 'H2', size: '28px', weight: '700' },
    { name: 'H3', size: '24px', weight: '600' },
    { name: 'H4', size: '20px', weight: '600' },
    { name: 'Body', size: '16px', weight: '400' },
    { name: 'Small', size: '14px', weight: '400' },
    { name: 'Micro', size: '12px', weight: '400' },
  ]

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-space-lg py-space-lg">
          <h1 className="text-h1">CleanShopper Design System</h1>
          <p className="text-body text-neutral-600 mt-space-sm">
            A comprehensive showcase of components, tokens, and design patterns
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-space-lg py-space-lg">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-space-lg">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-radius-lg shadow-sm p-space-md">
              <nav className="space-y-space-xs">
                {[
                  { id: 'overview' as const, label: 'Overview' },
                  { id: 'colors' as const, label: 'Colors' },
                  { id: 'spacing' as const, label: 'Spacing' },
                  { id: 'typography' as const, label: 'Typography' },
                  { id: 'components' as const, label: 'Components' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full text-left px-space-md py-space-sm rounded-radius-md transition-colors ${
                      activeSection === item.id
                        ? 'bg-primary text-white font-body-bold'
                        : 'text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-space-lg">
            {/* OVERVIEW */}
            {activeSection === 'overview' && (
              <div className="bg-white rounded-radius-lg p-space-lg shadow-sm space-y-space-lg">
                <div>
                  <h2 className="text-h2 mb-space-md">Welcome to the Design System</h2>
                  <p className="text-body text-neutral-700 mb-space-md">
                    This showcase displays all the design tokens, components, and patterns used in the CleanShopper
                    design system. Use this guide to ensure consistency across all products and features.
                  </p>
                </div>

                <Divider />

                <div className="grid grid-cols-2 gap-space-lg">
                  <div>
                    <h3 className="text-h4 mb-space-md">Design Tokens</h3>
                    <ul className="space-y-space-sm text-body">
                      <li>✓ Color system with light/dark themes</li>
                      <li>✓ 8px spacing scale</li>
                      <li>✓ Semantic typography scales</li>
                      <li>✓ Elevation system</li>
                      <li>✓ Animation easing & timing</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-h4 mb-space-md">Components</h3>
                    <ul className="space-y-space-sm text-body">
                      <li>✓ 5+ Foundation components</li>
                      <li>✓ 6+ Composite components</li>
                      <li>✓ 2+ Interactive flows</li>
                      <li>✓ Responsive layouts</li>
                      <li>✓ Accessibility built-in</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* COLORS */}
            {activeSection === 'colors' && (
              <div className="bg-white rounded-radius-lg p-space-lg shadow-sm space-y-space-lg">
                <h2 className="text-h2">Color Palette</h2>
                <p className="text-body text-neutral-600">
                  Our color system is designed to support both light and dark themes with excellent contrast ratios.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                  {Object.entries(colors).map(([name, shades]) => (
                    <div key={name}>
                      <h3 className="text-h4 mb-space-md">{name}</h3>
                      <div className="space-y-space-sm">
                        {Object.entries(shades).map(([variant, hex]) => (
                          <div key={variant} className="flex items-center gap-space-md">
                            <div
                              className="w-16 h-16 rounded-radius-md shadow-sm border-2 border-neutral-200"
                              style={{ backgroundColor: hex }}
                            />
                            <div>
                              <p className="font-body-bold capitalize">{variant}</p>
                              <p className="text-small text-neutral-600">{hex}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SPACING */}
            {activeSection === 'spacing' && (
              <div className="bg-white rounded-radius-lg p-space-lg shadow-sm space-y-space-lg">
                <h2 className="text-h2">Spacing Scale</h2>
                <p className="text-body text-neutral-600">
                  Built on an 8px base unit. All spacing values scale proportionally from xs (4px) to 2xl (48px).
                </p>

                <div className="space-y-space-lg">
                  {Object.entries(spacing).map(([name, value]) => (
                    <div key={name}>
                      <div className="flex items-center justify-between mb-space-sm">
                        <h3 className="text-body-bold capitalize">
                          space-{name} <span className="text-small text-neutral-600">({value})</span>
                        </h3>
                      </div>
                      <div className="bg-primary/20 rounded-radius-md" style={{ height: value }} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TYPOGRAPHY */}
            {activeSection === 'typography' && (
              <div className="bg-white rounded-radius-lg p-space-lg shadow-sm space-y-space-lg">
                <h2 className="text-h2">Typography Scales</h2>
                <p className="text-body text-neutral-600">
                  Semantic typography that scales with purpose. Each level has a defined size, weight, and line height.
                </p>

                <div className="space-y-space-lg">
                  {typography.map((type) => (
                    <div key={type.name}>
                      <div
                        style={{
                          fontSize: type.size,
                          fontWeight: parseInt(type.weight),
                        }}
                        className="text-neutral-900 mb-space-sm"
                      >
                        {type.name} Text Example
                      </div>
                      <p className="text-small text-neutral-600">
                        {type.size} / Weight {type.weight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* COMPONENTS */}
            {activeSection === 'components' && (
              <div className="bg-white rounded-radius-lg p-space-lg shadow-sm space-y-space-lg">
                <h2 className="text-h2">Components</h2>

                <div className="space-y-space-xl">
                  {/* Buttons */}
                  <div>
                    <h3 className="text-h3 mb-space-md">Buttons</h3>
                    <div className="flex flex-wrap gap-space-md">
                      <Button variant="primary">Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="primary" size="sm">
                        Small
                      </Button>
                      <Button variant="primary" disabled>
                        Disabled
                      </Button>
                    </div>
                  </div>

                  <Divider />

                  {/* Badges */}
                  <div>
                    <h3 className="text-h3 mb-space-md">Badges</h3>
                    <div className="flex flex-wrap gap-space-md">
                      <Badge label="Default" />
                      <Badge label="Success" variant="success" />
                      <Badge label="Warning" variant="warning" />
                      <Badge label="Error" variant="error" />
                      <Badge label="Small" variant="success" size="sm" />
                    </div>
                  </div>

                  <Divider />

                  {/* Foundation Components Info */}
                  <div>
                    <h3 className="text-h3 mb-space-md">Foundation Components</h3>
                    <div className="grid grid-cols-2 gap-space-md">
                      {[
                        'Button',
                        'Input',
                        'Badge',
                        'Divider',
                        'Skeleton',
                        'Select',
                        'Textarea',
                        'Checkbox',
                        'Radio',
                      ].map((comp) => (
                        <div key={comp} className="p-space-md bg-neutral-50 rounded-radius-md border border-neutral-200">
                          <p className="font-body-bold">{comp}</p>
                          <p className="text-small text-neutral-600">Foundation component</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Divider />

                  {/* Composite Components Info */}
                  <div>
                    <h3 className="text-h3 mb-space-md">Composite Components</h3>
                    <div className="grid grid-cols-2 gap-space-md">
                      {['SearchBar', 'ProductCard', 'RatingDisplay', 'FormComponents'].map((comp) => (
                        <div key={comp} className="p-space-md bg-primary/10 rounded-radius-md border border-primary/20">
                          <p className="font-body-bold">{comp}</p>
                          <p className="text-small text-neutral-600">Composite component</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Divider />

                  {/* Flows Info */}
                  <div>
                    <h3 className="text-h3 mb-space-md">Interactive Flows</h3>
                    <div className="space-y-space-sm">
                      <div className="p-space-md bg-success/10 rounded-radius-md border border-success/20">
                        <p className="font-body-bold">Browse to Add to Cart</p>
                        <p className="text-small text-neutral-600">Full e-commerce browsing and cart flow</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-neutral-200 mt-space-2xl">
        <div className="max-w-7xl mx-auto px-space-lg py-space-lg text-center text-small text-neutral-600">
          <p>CleanShopper Design System v1.0 • Built with React, TypeScript & Tailwind CSS</p>
          <p className="mt-space-sm">
            <a href="https://github.com/CHUNKY21/DesignSystem" className="text-primary hover:underline">
              View on GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
