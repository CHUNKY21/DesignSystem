import React from 'react'

interface SettingItemProps {
  label: string
  description?: string
  value?: string | React.ReactNode
  onChange?: (value: any) => void
  type?: 'toggle' | 'select' | 'text' | 'display'
  options?: Array<{ label: string; value: string }>
  disabled?: boolean
}

interface SettingsSectionProps {
  title: string
  description?: string
  items: SettingItemProps[]
}

export const SettingsSection: React.FC<SettingsSectionProps> = ({
  title,
  description,
  items,
}) => {
  return (
    <div className="bg-white rounded-radius-lg shadow-sm border border-neutral-200 p-space-lg mb-space-lg">
      {/* Header */}
      <div className="mb-space-lg pb-space-lg border-b border-neutral-200">
        <h2 className="text-h3 text-neutral-900 font-bold">{title}</h2>
        {description && (
          <p className="text-body text-neutral-600 mt-space-xs">{description}</p>
        )}
      </div>

      {/* Settings Items */}
      <div className="space-y-space-lg">
        {items.map((item, idx) => (
          <SettingItem key={idx} {...item} />
        ))}
      </div>
    </div>
  )
}

const SettingItem: React.FC<SettingItemProps> = ({
  label,
  description,
  value,
  onChange,
  type = 'display',
  options = [],
  disabled = false,
}) => {
  return (
    <div className="flex items-center justify-between py-space-sm">
      <div className="flex-1">
        <p className="text-body font-body-bold text-neutral-900">{label}</p>
        {description && (
          <p className="text-small text-neutral-600 mt-space-xs">{description}</p>
        )}
      </div>

      {type === 'toggle' && (
        <button
          onClick={() => onChange?.(!value)}
          disabled={disabled}
          className={`ml-space-md px-space-md py-space-xs rounded-radius-full text-small font-body-bold transition-all ${
            value
              ? 'bg-success text-white'
              : 'bg-neutral-200 text-neutral-600'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-md'}`}
        >
          {value ? 'On' : 'Off'}
        </button>
      )}

      {type === 'select' && (
        <select
          value={value || ''}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          className="ml-space-md px-space-sm py-space-xs rounded-radius-md bg-neutral-100 border-2 border-neutral-200 text-neutral-900 text-small focus:outline-none focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="">Select...</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {type === 'text' && (
        <input
          type="text"
          value={value || ''}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          className="ml-space-md px-space-sm py-space-xs rounded-radius-md bg-neutral-100 border-2 border-neutral-200 text-neutral-900 text-small w-48 focus:outline-none focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Enter value..."
        />
      )}

      {type === 'display' && (
        <span className="ml-space-md text-small text-neutral-600">{value}</span>
      )}
    </div>
  )
}
