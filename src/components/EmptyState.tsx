import React from 'react'
import { Button } from './Button'

interface EmptyStateProps {
  title: string
  description: string
  icon: 'cart' | 'bookmark' | 'list' | 'search' | 'inbox'
  buttonText?: string
  onButtonClick?: () => void
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  buttonText,
  onButtonClick,
}) => {
  const iconSvg = {
    cart: (
      <svg className="w-20 h-20 text-neutral-300 mx-auto mb-space-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    bookmark: (
      <svg className="w-20 h-20 text-neutral-300 mx-auto mb-space-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h6a2 2 0 012 2v16l-7-3.5L5 21V5z" />
      </svg>
    ),
    list: (
      <svg className="w-20 h-20 text-neutral-300 mx-auto mb-space-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    search: (
      <svg className="w-20 h-20 text-neutral-300 mx-auto mb-space-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    inbox: (
      <svg className="w-20 h-20 text-neutral-300 mx-auto mb-space-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
      </svg>
    ),
  }

  return (
    <div className="text-center py-space-3xl px-space-lg">
      {iconSvg[icon]}
      <h2 className="text-h2 text-neutral-900 mb-space-md">{title}</h2>
      <p className="text-body text-neutral-600 max-w-md mx-auto mb-space-lg">{description}</p>
      {buttonText && onButtonClick && (
        <Button variant="primary" onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </div>
  )
}
