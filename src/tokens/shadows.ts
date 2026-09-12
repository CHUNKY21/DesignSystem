export const shadows = {
  'shadow-sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
  'shadow-md': '0 4px 6px rgba(0, 0, 0, 0.1)',
  'shadow-lg': '0 10px 15px rgba(0, 0, 0, 0.15)',
  'shadow-xl': '0 20px 25px rgba(0, 0, 0, 0.2)',

  // Elevation system
  elevation: {
    raised: '0 2px 8px rgba(0, 0, 0, 0.08)',
    floating: '0 8px 24px rgba(0, 0, 0, 0.12)',
    modal: '0 20px 60px rgba(0, 0, 0, 0.3)',
  },

  // Dark mode variants
  'shadow-sm-dark': '0 1px 2px rgba(0, 0, 0, 0.2)',
  'shadow-md-dark': '0 4px 6px rgba(0, 0, 0, 0.25)',
  'shadow-lg-dark': '0 10px 15px rgba(0, 0, 0, 0.4)',
  'shadow-xl-dark': '0 20px 25px rgba(0, 0, 0, 0.5)',
} as const

export type ShadowToken = keyof typeof shadows
