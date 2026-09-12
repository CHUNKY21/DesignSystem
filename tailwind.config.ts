import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D6A4F',
        'primary-light': '#40916C',
        'primary-dark': '#1B4332',
        secondary: '#F5F1E8',
        'secondary-light': '#FAF8F3',
        accent: '#D97706',
        'accent-light': '#F59E0B',
        'accent-bold': '#C65D00',
        success: '#10D981',
        warning: '#FBBF24',
        error: '#F97316',
        neutral: {
          50: '#FEFDFB',
          100: '#F9FAFB',
          200: '#E5E7EB',
          400: '#9CA3AF',
          600: '#6B7280',
          900: '#1F2937',
        },
      },
      spacing: {
        'space-xs': '8px',
        'space-sm': '16px',
        'space-md': '24px',
        'space-lg': '32px',
        'space-xl': '48px',
        'space-2xl': '64px',
        'space-3xl': '96px',
        'space-4xl': '128px',
      },
      borderRadius: {
        'radius-sm': '4px',
        'radius-md': '8px',
        'radius-lg': '12px',
        'radius-full': '9999px',
      },
      boxShadow: {
        'shadow-sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'shadow-md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'shadow-lg': '0 10px 15px rgba(0, 0, 0, 0.15)',
        'shadow-xl': '0 20px 25px rgba(0, 0, 0, 0.2)',
      },
      fontSize: {
        display: ['56px', { lineHeight: '1.1', fontWeight: '800' }],
        'display-sm': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        h1: ['42px', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['32px', { lineHeight: '1.3', fontWeight: '700' }],
        h3: ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        h4: ['18px', { lineHeight: '1.5', fontWeight: '600' }],
        body: ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-bold': ['16px', { lineHeight: '1.6', fontWeight: '600' }],
        small: ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        micro: ['12px', { lineHeight: '1.4', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
} satisfies Config
