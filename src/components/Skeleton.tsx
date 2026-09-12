import React from 'react'

interface SkeletonProps {
  variant?: 'text' | 'card' | 'avatar' | 'button'
  width?: string
  height?: string
  className?: string
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  width,
  height,
  className,
}) => {
  const variants = {
    text: 'h-4 w-full rounded-radius-sm',
    card: 'h-80 w-full rounded-radius-lg',
    avatar: 'h-12 w-12 rounded-radius-full',
    button: 'h-10 w-24 rounded-radius-md',
  }

  return (
    <div
      className={`bg-neutral-200 animate-pulse ${variants[variant]} ${className || ''}`}
      style={{
        width: width || undefined,
        height: height || undefined,
      }}
      aria-hidden="true"
    />
  )
}

interface SkeletonGroupProps {
  count?: number
  variant?: 'text' | 'card'
  spacing?: string
}

export const SkeletonGroup: React.FC<SkeletonGroupProps> = ({
  count = 3,
  variant = 'text',
  spacing = 'space-y-sm',
}) => {
  return (
    <div className={`space-${spacing.split('-')[1]}`}>
      {[...Array(count)].map((_, i) => (
        <Skeleton key={i} variant={variant} />
      ))}
    </div>
  )
}
