export const transitions = {
  // Timing
  duration: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
  },

  // Easing functions
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)',
  },

  // Common transitions
  common: {
    background: 'background-color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    color: 'color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: 'box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const

export type DurationToken = keyof typeof transitions.duration
export type EasingToken = keyof typeof transitions.easing
