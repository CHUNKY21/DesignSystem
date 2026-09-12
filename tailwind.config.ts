import type { Config } from 'tailwindcss'
import { colors } from './src/tokens/colors'
import { spacing } from './src/tokens/spacing'
import { borderRadius } from './src/tokens/borderRadius'
import { shadows } from './src/tokens/shadows'
import { typography } from './src/tokens/typography'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors,
      spacing,
      borderRadius,
      boxShadow: {
        'shadow-sm': shadows['shadow-sm'],
        'shadow-md': shadows['shadow-md'],
        'shadow-lg': shadows['shadow-lg'],
        'shadow-xl': shadows['shadow-xl'],
      },
      fontSize: {
        display: [typography.fontSize.display.size, {
          lineHeight: typography.fontSize.display.lineHeight,
          fontWeight: typography.fontSize.display.fontWeight,
        }],
        'display-sm': [typography.fontSize['display-sm'].size, {
          lineHeight: typography.fontSize['display-sm'].lineHeight,
          fontWeight: typography.fontSize['display-sm'].fontWeight,
        }],
        h1: [typography.fontSize.h1.size, {
          lineHeight: typography.fontSize.h1.lineHeight,
          fontWeight: typography.fontSize.h1.fontWeight,
        }],
        h2: [typography.fontSize.h2.size, {
          lineHeight: typography.fontSize.h2.lineHeight,
          fontWeight: typography.fontSize.h2.fontWeight,
        }],
        h3: [typography.fontSize.h3.size, {
          lineHeight: typography.fontSize.h3.lineHeight,
          fontWeight: typography.fontSize.h3.fontWeight,
        }],
        h4: [typography.fontSize.h4.size, {
          lineHeight: typography.fontSize.h4.lineHeight,
          fontWeight: typography.fontSize.h4.fontWeight,
        }],
        body: [typography.fontSize.body.size, {
          lineHeight: typography.fontSize.body.lineHeight,
          fontWeight: typography.fontSize.body.fontWeight,
        }],
        'body-bold': [typography.fontSize['body-bold'].size, {
          lineHeight: typography.fontSize['body-bold'].lineHeight,
          fontWeight: typography.fontSize['body-bold'].fontWeight,
        }],
        small: [typography.fontSize.small.size, {
          lineHeight: typography.fontSize.small.lineHeight,
          fontWeight: typography.fontSize.small.fontWeight,
        }],
        micro: [typography.fontSize.micro.size, {
          lineHeight: typography.fontSize.micro.lineHeight,
          fontWeight: typography.fontSize.micro.fontWeight,
        }],
      },
    },
  },
  plugins: [],
} satisfies Config
