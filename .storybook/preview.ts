import type { Preview } from '@storybook/react'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    layout: 'padded',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  decorators: [
    (Story) => {
      // Theme switcher functionality
      const handleThemeChange = (event: Event) => {
        const select = event.target as HTMLSelectElement
        const theme = select.value
        const html = document.documentElement
        if (theme === 'system') {
          html.removeAttribute('data-theme')
        } else {
          html.setAttribute('data-theme', theme)
        }
      }

      return (
        <div style={{ minHeight: '100vh' }}>
          <div style={{ padding: '20px', backgroundColor: 'var(--color-bg)', transition: 'background-color 200ms' }}>
            <label htmlFor="theme-select" style={{ marginRight: '10px', color: 'var(--color-text)' }}>
              Theme:
            </label>
            <select
              id="theme-select"
              defaultValue="system"
              onChange={handleThemeChange}
              style={{
                padding: '8px 12px',
                borderRadius: '4px',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-bg-secondary)',
                color: 'var(--color-text)',
                cursor: 'pointer',
              }}
            >
              <option value="system">System (Auto)</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <Story />
        </div>
      )
    },
  ],
}

export default preview
