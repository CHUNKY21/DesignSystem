import type { Meta, StoryObj } from '@storybook/react'
import { SearchBar } from './SearchBar'
import { useState } from 'react'

const meta = {
  title: 'Composite/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Advanced search component with filtering, typing indicators, and animations.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Search products or ingredients...',
  },
}

export const WithCallback: Story = {
  render: () => {
    const [query, setQuery] = useState('')
    const [isTyping, setIsTyping] = useState(false)

    return (
      <div className="space-y-space-md">
        <SearchBar
          onSearch={(q) => setQuery(q)}
          onTyping={(typing) => setIsTyping(typing)}
        />
        {query && <p className="text-body">Search query: {query}</p>}
        {isTyping && <p className="text-small text-neutral-600">Typing...</p>}
      </div>
    )
  },
}

export const WithFilters: Story = {
  render: () => {
    const [filters, setFilters] = useState({})

    return (
      <div className="space-y-space-md">
        <SearchBar
          onFilterChange={(f) => setFilters(f)}
        />
        {Object.keys(filters).length > 0 && (
          <div className="p-space-md bg-neutral-50 rounded-radius-md">
            <p className="text-small text-neutral-600">Active filters:</p>
            <pre className="text-micro text-neutral-900 mt-space-sm">
              {JSON.stringify(filters, null, 2)}
            </pre>
          </div>
        )}
      </div>
    )
  },
}

export const InteractiveExample: Story = {
  render: () => {
    const [results, setResults] = useState<string[]>([])
    const [isTyping, setIsTyping] = useState(false)

    const mockProducts = [
      'Natural Dish Soap',
      'Eco-friendly Laundry Detergent',
      'Non-toxic Window Cleaner',
      'Plant-based Hand Soap',
      'Organic All-purpose Cleaner',
    ]

    const handleSearch = (query: string) => {
      if (query) {
        const filtered = mockProducts.filter((p) =>
          p.toLowerCase().includes(query.toLowerCase())
        )
        setResults(filtered)
      } else {
        setResults([])
      }
    }

    return (
      <div className="space-y-space-md">
        <SearchBar
          onSearch={handleSearch}
          onTyping={setIsTyping}
        />
        {isTyping && <p className="text-small text-neutral-600">Searching...</p>}
        {results.length > 0 && (
          <div className="space-y-space-sm">
            <p className="text-small font-body-bold">
              Found {results.length} product{results.length !== 1 ? 's' : ''}
            </p>
            <div className="space-y-space-xs">
              {results.map((product) => (
                <div key={product} className="p-space-sm bg-neutral-50 rounded-radius-md">
                  {product}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  },
}

export const Playground: Story = {
  args: {
    placeholder: 'Search products or ingredients...',
  },
}
