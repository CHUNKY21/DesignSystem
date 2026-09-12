import React from 'react'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  helperText?: string
  error?: boolean
  errorMessage?: string
  maxLength?: number
  showCharacterCount?: boolean
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, helperText, error = false, errorMessage, maxLength, showCharacterCount = false, className, ...props }, ref) => {
    const [charCount, setCharCount] = React.useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length)
      props.onChange?.(e)
    }

    return (
      <div className="w-full">
        {label && (
          <label className="block text-small font-h4 text-neutral-900 mb-space-xs">
            {label}
          </label>
        )}
        <div className="relative">
          <textarea
            ref={ref}
            className={`
              w-full px-space-md py-space-sm rounded-radius-md
              bg-neutral-100 text-neutral-900 text-body
              border-2 border-neutral-200
              placeholder-neutral-400
              resize-none
              transition-all
              focus:outline-none focus:border-primary focus:shadow-md focus:ring-0
              disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed
              ${error ? 'border-error focus:border-error' : ''}
              ${className || ''}
            `}
            maxLength={maxLength}
            onChange={handleChange}
            {...props}
          />
          {showCharacterCount && maxLength && (
            <div className="text-micro text-neutral-600 mt-space-xs text-right">
              {charCount} / {maxLength}
            </div>
          )}
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

Textarea.displayName = 'Textarea'
