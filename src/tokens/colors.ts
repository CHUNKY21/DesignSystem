export const colors = {
  // Primary palette
  primary: '#2D6A4F',
  'primary-light': '#40916C',
  'primary-dark': '#1B4332',

  // Secondary palette
  secondary: '#F5F1E8',
  'secondary-light': '#FAF8F3',

  // Accent palette
  accent: '#D97706',
  'accent-light': '#F59E0B',
  'accent-bold': '#C65D00',

  // Semantic colors
  success: '#10D981',
  warning: '#FBBF24',
  error: '#F97316',

  // Neutral palette (grayscale)
  neutral: {
    50: '#FEFDFB',
    100: '#F9FAFB',
    200: '#E5E7EB',
    400: '#9CA3AF',
    600: '#6B7280',
    900: '#1F2937',
  },

  // Extended semantic colors for dark mode
  'success-light': '#34D399',
  'warning-light': '#FCD34D',
  'error-light': '#FB7185',
} as const

export type ColorToken = keyof typeof colors
