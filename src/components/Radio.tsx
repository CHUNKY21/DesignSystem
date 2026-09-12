import React from 'react'

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, helperText, className, id, name, value, ...props }, ref) => {
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="flex flex-col">
        <label className="flex items-center gap-space-sm cursor-pointer group">
          <input
            ref={ref}
            id={radioId}
            type="radio"
            name={name}
            value={value}
            className={`
              w-5 h-5 rounded-radius-full
              border-2 border-neutral-200
              accent-primary
              cursor-pointer
              transition-all
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              disabled:opacity-50 disabled:cursor-not-allowed
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

Radio.displayName = 'Radio'

interface RadioGroupProps {
  legend?: string
  name: string
  options: Array<{
    value: string
    label: string
    helperText?: string
    disabled?: boolean
  }>
  value?: string
  onChange?: (value: string) => void
  error?: boolean
  className?: string
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  legend,
  name,
  options,
  value,
  onChange,
  error = false,
  className,
}) => {
  return (
    <fieldset className={`space-y-space-md ${className || ''}`}>
      {legend && <legend className="text-h4 font-h4 text-neutral-900 mb-space-md">{legend}</legend>}
      <div className="space-y-space-md">
        {options.map((option) => (
          <Radio
            key={option.value}
            name={name}
            value={option.value}
            label={option.label}
            helperText={option.helperText}
            checked={value === option.value}
            onChange={(e) => onChange?.(e.target.value)}
            disabled={option.disabled}
          />
        ))}
      </div>
    </fieldset>
  )
}
