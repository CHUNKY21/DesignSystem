import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', isLoading = false, className, disabled, children, ...props }, ref) => {
    const baseStyles = 'font-h4 rounded-radius-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variantStyles = {
      primary: 'bg-primary text-white shadow-md hover:bg-primary-light hover:shadow-lg active:bg-primary-dark',
      secondary: 'bg-secondary text-neutral-900 shadow-md hover:opacity-80 active:opacity-70',
      accent: 'bg-accent text-white shadow-md hover:bg-accent-light hover:shadow-lg active:bg-accent-bold',
      outline: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white',
    }

    const sizeStyles = {
      sm: 'px-space-sm py-space-xs text-small',
      md: 'px-space-md py-space-sm min-h-[44px]',
      lg: 'px-space-lg py-space-md min-h-[52px]',
    }

    const focusRingColor = {
      primary: 'focus:ring-primary',
      secondary: 'focus:ring-primary',
      accent: 'focus:ring-accent',
      outline: 'focus:ring-primary',
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${focusRingColor[variant]} ${className || ''}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-space-sm">
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            {children}
          </span>
        ) : (
          children
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
