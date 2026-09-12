import React from 'react'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  error?: boolean
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, helperText, error = false, className, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="flex flex-col">
        <label className="flex items-center gap-space-sm cursor-pointer group">
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            className={`
              w-5 h-5 rounded-radius-sm
              border-2 border-neutral-200
              accent-primary
              cursor-pointer
              transition-all
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              disabled:opacity-50 disabled:cursor-not-allowed
              ${error ? 'border-error' : ''}
              ${className || ''}
            `}
            {...props}
          />
          {label && (
            <span className="text-body text-neutral-900 group-hover:text-primary transition-colors">
              {label}
            </span>
          )}
        </label>
        {helperText && (
          <p className="text-micro text-neutral-600 mt-space-xs ml-7">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

interface CheckboxGroupProps {
  legend?: string
  options: Array<{
    value: string
    label: string
    helperText?: string
    disabled?: boolean
  }>
  value?: string[]
  onChange?: (values: string[]) => void
  error?: boolean
  className?: string
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  legend,
  options,
  value = [],
  onChange,
  error = false,
  className,
}) => {
  const handleChange = (val: string, checked: boolean) => {
    const newValue = checked ? [...value, val] : value.filter((v) => v !== val)
    onChange?.(newValue)
  }

  return (
    <fieldset className={`space-y-space-md ${className || ''}`}>
      {legend && <legend className="text-h4 font-h4 text-neutral-900 mb-space-md">{legend}</legend>}
      <div className="space-y-space-md">
        {options.map((option) => (
          <Checkbox
            key={option.value}
            value={option.value}
            label={option.label}
            helperText={option.helperText}
            checked={value.includes(option.value)}
            onChange={(e) => handleChange(option.value, e.target.checked)}
            disabled={option.disabled}
            error={error}
          />
        ))}
      </div>
    </fieldset>
  )
}
