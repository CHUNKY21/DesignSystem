import React from 'react'

interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  spacing?: 'none' | 'sm' | 'md' | 'lg'
  color?: 'default' | 'subtle'
  withText?: string
  className?: string
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  spacing = 'md',
  color = 'default',
  withText,
  className,
}) => {
  const spacingMap = {
    none: '',
    sm: orientation === 'horizontal' ? 'my-space-sm' : 'mx-space-sm',
    md: orientation === 'horizontal' ? 'my-space-md' : 'mx-space-md',
    lg: orientation === 'horizontal' ? 'my-space-lg' : 'mx-space-lg',
  }

  const colorStyles = {
    default: 'border-neutral-200',
    subtle: 'border-neutral-100',
  }

  if (orientation === 'vertical') {
    return (
      <div
        className={`border-l-2 ${colorStyles[color]} ${spacingMap[spacing]} ${className || ''}`}
        aria-hidden="true"
      />
    )
  }

  if (withText) {
    return (
      <div className={`flex items-center gap-space-md ${spacingMap[spacing]} ${className || ''}`}>
        <div className={`flex-1 border-t-2 ${colorStyles[color]}`} />
        <span className="text-small text-neutral-600 font-body-bold px-space-sm flex-shrink-0">
          {withText}
        </span>
        <div className={`flex-1 border-t-2 ${colorStyles[color]}`} />
      </div>
    )
  }

  return (
    <hr
      className={`border-t-2 border-b-0 border-x-0 ${colorStyles[color]} ${spacingMap[spacing]} ${className || ''}`}
      aria-hidden="true"
    />
  )
}
