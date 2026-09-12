export const typography = {
  // Font families
  fontFamily: {
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },

  // Font sizes with line heights and weights
  fontSize: {
    display: {
      size: '56px',
      lineHeight: '1.1',
      fontWeight: '800',
    },
    'display-sm': {
      size: '48px',
      lineHeight: '1.2',
      fontWeight: '700',
    },
    h1: {
      size: '42px',
      lineHeight: '1.2',
      fontWeight: '700',
    },
    h2: {
      size: '32px',
      lineHeight: '1.3',
      fontWeight: '700',
    },
    h3: {
      size: '24px',
      lineHeight: '1.4',
      fontWeight: '600',
    },
    h4: {
      size: '18px',
      lineHeight: '1.5',
      fontWeight: '600',
    },
    body: {
      size: '16px',
      lineHeight: '1.6',
      fontWeight: '400',
    },
    'body-bold': {
      size: '16px',
      lineHeight: '1.6',
      fontWeight: '600',
    },
    small: {
      size: '14px',
      lineHeight: '1.5',
      fontWeight: '400',
    },
    micro: {
      size: '12px',
      lineHeight: '1.4',
      fontWeight: '400',
    },
  },

  // Font weights
  fontWeight: {
    regular: '400',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  // Line heights
  lineHeight: {
    tight: '1.1',
    snug: '1.2',
    normal: '1.4',
    relaxed: '1.5',
    loose: '1.6',
  },
} as const

export type TypographySize = keyof typeof typography.fontSize
export type FontWeight = keyof typeof typography.fontWeight
