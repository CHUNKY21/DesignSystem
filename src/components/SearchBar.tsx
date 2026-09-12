import React, { useState, useRef, useEffect } from 'react'
import { Input } from './Input'
import { Button } from './Button'

interface SearchBarProps {
  onSearch?: (query: string) => void
  onFilterChange?: (filters: SearchFilters) => void
  placeholder?: string
  onTyping?: (isTyping: boolean) => void
}

interface SearchFilters {
  category?: string
  safe?: boolean
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  onFilterChange,
  placeholder = 'Search for products or ingredients...',
  onTyping,
}) => {
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState<SearchFilters>({})
  const [showFilters, setShowFilters] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const typingTimeoutRef = useRef<NodeJS.Timeout>()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current)
    }
  }, [])

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault()
    setIsTyping(false)
    onTyping?.(false)
    onSearch?.(query)
  }

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)

    setIsTyping(!!newQuery)
    onTyping?.(!!newQuery)

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current)
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false)
      onTyping?.(false)
    }, 800)
  }

  const handleClearSearch = () => {
    setQuery('')
    setIsTyping(false)
    onTyping?.(false)
    inputRef.current?.focus()
  }

  const handleFilterChange = (newFilters: SearchFilters) => {
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  return (
    <div className="w-full">
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        @keyframes searchPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .search-filters-enter {
          animation: slideDown 0.3s ease-out;
        }

        .typing-indicator {
          animation: pulse-subtle 1.4s infinite;
        }

        .search-icon {
          transition: transform 0.2s ease-out;
        }

        .search-focused .search-icon {
          animation: searchPulse 0.6s ease-out;
        }

        .input-wrapper {
          position: relative;
          transition: all 0.2s ease-out;
        }

        .clear-button {
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease-out;
        }

        .input-wrapper.has-value .clear-button {
          opacity: 1;
          pointer-events: auto;
        }
      `}</style>

      <form onSubmit={handleSearch} className="flex gap-space-sm items-end">
        <div className={`flex-1 input-wrapper ${query ? 'has-value' : ''}`}>
          <div className={`relative ${isFocused ? 'search-focused' : ''}`}>
            <Input
              ref={inputRef}
              type="text"
              placeholder={placeholder}
              value={query}
              onChange={handleQueryChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              icon={
                <svg
                  className="w-5 h-5 search-icon text-neutral-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              }
            />
            {query && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="clear-button absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
                aria-label="Clear search"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                </svg>
              </button>
            )}
          </div>
          {isTyping && (
            <div className="mt-space-xs text-small text-neutral-600 typing-indicator flex items-center gap-1">
              <span>Searching</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          )}
        </div>

        <Button
          type="button"
          variant="secondary"
          size="md"
          onClick={() => setShowFilters(!showFilters)}
          className={`mb-0 transition-all duration-200 ${showFilters ? 'ring-2 ring-primary ring-offset-1' : ''}`}
          aria-label="Toggle filters"
          title={showFilters ? 'Hide filters' : 'Show filters'}
        >
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </Button>

        <Button
          type="submit"
          variant="primary"
          size="md"
          className={`mb-0 transition-all duration-200 ${isTyping ? 'opacity-80' : 'opacity-100'}`}
        >
          Search
        </Button>
      </form>

      {showFilters && (
        <div className="search-filters-enter mt-space-md p-space-md bg-secondary rounded-radius-lg border-2 border-primary/20 shadow-md">
          <div className="space-y-space-md">
            <div>
              <label className="block text-small font-h4 text-neutral-900 mb-space-xs">
                Category
              </label>
              <select
                value={filters.category || ''}
                onChange={(e) => handleFilterChange({ ...filters, category: e.target.value || undefined })}
                className="w-full px-space-md py-space-sm rounded-radius-md bg-neutral-100 border-2 border-neutral-200 text-neutral-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              >
                <option value="">All Categories</option>
                <option value="cleaning">Cleaning Products</option>
                <option value="personal">Personal Care</option>
                <option value="food">Food & Pantry</option>
              </select>
            </div>

            <label className="flex items-center gap-space-sm cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.safe || false}
                onChange={(e) => handleFilterChange({ ...filters, safe: e.target.checked })}
                className="w-5 h-5 accent-primary rounded-radius-sm cursor-pointer transition-transform group-hover:scale-110"
              />
              <span className="text-body text-neutral-900">Show only clean-rated products</span>
            </label>
          </div>
        </div>
      )}
    </div>
  )
}
