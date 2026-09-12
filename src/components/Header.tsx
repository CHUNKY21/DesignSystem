import React from 'react'

interface HeaderProps {
  onMenuClick?: () => void
  showMenu?: boolean
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, showMenu = false }) => {
  return (
    <header className="bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="px-space-lg py-space-md max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-space-md">
          {onMenuClick && (
            <button
              onClick={onMenuClick}
              className="p-space-xs rounded-radius-md hover:bg-primary-light transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
          <div>
            <h1 className="text-h3 font-bold">Clean Shopper</h1>
            <p className="text-small opacity-90">Product Research Assistant</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-space-lg items-center">
          <a href="/" className="text-body hover:opacity-80 transition-opacity">
            Home
          </a>
          <a href="/saved" className="text-body hover:opacity-80 transition-opacity">
            Saved Products
          </a>
          <a href="/cart" className="text-body hover:opacity-80 transition-opacity flex items-center gap-space-xs">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Cart
          </a>
        </nav>

        <div className="md:hidden">
          <button
            onClick={onMenuClick}
            className="p-space-xs rounded-radius-md hover:bg-primary-light transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
