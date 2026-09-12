export const spacing = {
  'space-xs': '8px',
  'space-sm': '16px',
  'space-md': '24px',
  'space-lg': '32px',
  'space-xl': '48px',
  'space-2xl': '64px',
  'space-3xl': '96px',
  'space-4xl': '128px',
} as const

// Numeric equivalents for JavaScript usage
export const spacingNumeric = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
  '2xl': 64,
  '3xl': 96,
  '4xl': 128,
} as const

export type SpacingToken = keyof typeof spacing
export type SpacingSize = keyof typeof spacingNumeric
