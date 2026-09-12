import React, { useState } from 'react'
import { Input } from './Input'
import { Button } from './Button'

interface SearchBarProps {
  onSearch?: (query: string) => void
  onFilterChange?: (filters: SearchFilters) => void
  placeholder?: string
}

interface SearchFilters {
  category?: string
  safe?: boolean
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  onFilterChange,
  placeholder = 'Search for products or ingredients...',
}) => {
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState<SearchFilters>({})
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault()
    onSearch?.(query)
  }

  const handleFilterChange = (newFilters: SearchFilters) => {
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="flex gap-space-sm items-end">
        <div className="flex-1">
          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            }
          />
        </div>

        <Button
          type="button"
          variant="secondary"
          size="md"
          onClick={() => setShowFilters(!showFilters)}
          className="mb-0"
          aria-label="Toggle filters"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </Button>

        <Button type="submit" variant="primary" size="md" className="mb-0">
          Search
        </Button>
      </form>

      {showFilters && (
        <div className="mt-space-md p-space-md bg-secondary rounded-radius-lg border-2 border-neutral-200">
          <div className="space-y-space-md">
            <div>
              <label className="block text-small font-h4 text-neutral-900 mb-space-xs">
                Category
              </label>
              <select
                value={filters.category || ''}
                onChange={(e) => handleFilterChange({ ...filters, category: e.target.value || undefined })}
                className="w-full px-space-md py-space-sm rounded-radius-md bg-neutral-100 border-2 border-neutral-200 text-neutral-900 focus:outline-none focus:border-primary"
              >
                <option value="">All Categories</option>
                <option value="cleaning">Cleaning Products</option>
                <option value="personal">Personal Care</option>
                <option value="food">Food & Pantry</option>
              </select>
            </div>

            <label className="flex items-center gap-space-sm cursor-pointer">
              <input
                type="checkbox"
                checked={filters.safe || false}
                onChange={(e) => handleFilterChange({ ...filters, safe: e.target.checked })}
                className="w-5 h-5 accent-primary rounded-radius-sm cursor-pointer"
              />
              <span className="text-body text-neutral-900">Show only clean-rated products</span>
            </label>
          </div>
        </div>
      )}
    </div>
  )
}
