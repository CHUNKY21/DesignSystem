import React from 'react'

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
type BadgeSize = 'sm' | 'md'

interface BadgeProps {
  label: string
  variant?: BadgeVariant
  size?: BadgeSize
  icon?: React.ReactNode
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'primary',
  size = 'md',
  icon,
  className,
}) => {
  const variantStyles = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-neutral-900',
    success: 'bg-success text-white',
    warning: 'bg-warning text-neutral-900',
    error: 'bg-error text-white',
    info: 'bg-primary text-white',
  }

  const sizeStyles = {
    sm: 'px-space-sm py-space-xs text-micro',
    md: 'px-space-md py-space-xs text-small',
  }

  return (
    <span
      className={`inline-flex items-center gap-space-xs rounded-radius-full font-body-bold ${
        variantStyles[variant]
      } ${sizeStyles[size]} ${className || ''}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{label}</span>
    </span>
  )
}

interface BadgeGroupProps {
  badges: Array<{ label: string; variant?: BadgeVariant }>
  maxDisplay?: number
  size?: BadgeSize
}

export const BadgeGroup: React.FC<BadgeGroupProps> = ({
  badges,
  maxDisplay = 3,
  size = 'md',
}) => {
  const visible = badges.slice(0, maxDisplay)
  const remaining = badges.length - maxDisplay

  return (
    <div className="flex flex-wrap gap-space-xs">
      {visible.map((badge, idx) => (
        <Badge
          key={idx}
          label={badge.label}
          variant={badge.variant || 'secondary'}
          size={size}
        />
      ))}
      {remaining > 0 && (
        <Badge
          label={`+${remaining} more`}
          variant="secondary"
          size={size}
        />
      )}
    </div>
  )
}
