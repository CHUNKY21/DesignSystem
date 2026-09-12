import React from 'react'

interface PreferenceChipProps {
  label: string
  type: 'ingredient-to-avoid' | 'trusted-brand' | 'certification' | 'category'
  onRemove?: () => void
  onClick?: () => void
  isSelected?: boolean
}

export const PreferenceChip: React.FC<PreferenceChipProps> = ({
  label,
  type,
  onRemove,
  onClick,
  isSelected = false,
}) => {
  const typeStyles = {
    'ingredient-to-avoid': 'bg-error/10 border-error/30 text-error',
    'trusted-brand': 'bg-success/10 border-success/30 text-success',
    'certification': 'bg-primary/10 border-primary/30 text-primary',
    'category': 'bg-accent/10 border-accent/30 text-accent',
  }

  const typeIcons = {
    'ingredient-to-avoid': (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 2.524a6 6 0 018.367 8.367L13.477 14.89zm1.414-1.414L2.939 3.939a6 6 0 018.485 8.486l3.467 3.467a1 1 0 001.414-1.414L12.728 12.31z" clipRule="evenodd" />
      </svg>
    ),
    'trusted-brand': (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 3.062v6.372a3.066 3.066 0 01-2.812 3.062 3.066 3.066 0 01-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 01-1.745-.723 3.066 3.066 0 01-2.812-3.062V6.517a3.066 3.066 0 012.812-3.062zm7.75 4.5a.75.75 0 00-1.06-1.061L9 10.939 7.56 9.499a.75.75 0 00-1.06 1.061l2 2a.75.75 0 001.06 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    'certification': (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-1.429 5.951 1.429A1 1 0 0017.894 16.553l-7-14z" />
      </svg>
    ),
    'category': (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM15 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2h-2zM5 13a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM15 13a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z" />
      </svg>
    ),
  }

  return (
    <div
      className={`inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-radius-full border-2 text-small font-body-bold transition-all cursor-pointer ${
        typeStyles[type]
      } ${isSelected ? 'ring-2 ring-offset-2 ring-primary' : 'hover:shadow-md'}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.()
        }
      }}
    >
      {typeIcons[type]}
      <span>{label}</span>
      {onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onRemove()
          }}
          className="ml-space-xs hover:opacity-70 transition-opacity p-0 focus:outline-none"
          aria-label={`Remove ${label}`}
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </div>
  )
}
