export const borderRadius = {
  'radius-sm': '4px',
  'radius-md': '8px',
  'radius-lg': '12px',
  'radius-full': '9999px',
} as const

// Numeric equivalents for JavaScript usage
export const borderRadiusNumeric = {
  sm: 4,
  md: 8,
  lg: 12,
  full: 9999,
} as const

export type BorderRadiusToken = keyof typeof borderRadius
export type BorderRadiusSize = keyof typeof borderRadiusNumeric
