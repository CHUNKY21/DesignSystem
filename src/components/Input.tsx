import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  error?: boolean
  errorMessage?: string
  icon?: React.ReactNode
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, error = false, errorMessage, icon, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-small font-h4 text-neutral-900 mb-space-xs">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-space-md top-1/2 transform -translate-y-1/2 text-neutral-600">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`
              w-full px-space-md py-space-sm rounded-radius-md
              bg-neutral-100 text-neutral-900 text-body
              border-2 border-neutral-200
              placeholder-neutral-400
              transition-all
              focus:outline-none focus:border-primary focus:shadow-md focus:ring-0
              disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed
              ${icon ? 'pl-space-xl' : ''}
              ${error ? 'border-error focus:border-error' : ''}
              ${className || ''}
            `}
            {...props}
          />
        </div>
        {error && errorMessage && (
          <p className="text-micro text-error mt-space-xs" role="alert">
            {errorMessage}
          </p>
        )}
        {helperText && !error && (
          <p className="text-micro text-neutral-600 mt-space-xs">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
