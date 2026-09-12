// Export all design tokens from a single entry point
export { colors } from './colors'
export type { ColorToken } from './colors'

export { spacing, spacingNumeric } from './spacing'
export type { SpacingToken, SpacingSize } from './spacing'

export { typography } from './typography'
export type { TypographySize, FontWeight } from './typography'

export { borderRadius, borderRadiusNumeric } from './borderRadius'
export type { BorderRadiusToken, BorderRadiusSize } from './borderRadius'

export { shadows } from './shadows'
export type { ShadowToken } from './shadows'

export { transitions } from './transitions'
export type { DurationToken, EasingToken } from './transitions'

// Aggregated for convenience
export const tokens = {
  colors: (await import('./colors')).colors,
  spacing: (await import('./spacing')).spacing,
  typography: (await import('./typography')).typography,
  borderRadius: (await import('./borderRadius')).borderRadius,
  shadows: (await import('./shadows')).shadows,
  transitions: (await import('./transitions')).transitions,
}
