import React from 'react'

interface SelectOption {
  value: string | number
  label: string
  disabled?: boolean
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  helperText?: string
  error?: boolean
  errorMessage?: string
  options: SelectOption[]
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, helperText, error = false, errorMessage, options, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-small font-h4 text-neutral-900 mb-space-xs">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={`
            w-full px-space-md py-space-sm rounded-radius-md
            bg-neutral-100 text-neutral-900 text-body
            border-2 border-neutral-200
            transition-all
            focus:outline-none focus:border-primary focus:shadow-md focus:ring-0
            disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed
            ${error ? 'border-error focus:border-error' : ''}
            ${className || ''}
          `}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
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

Select.displayName = 'Select'
