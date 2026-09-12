import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('system')
  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>('light')

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    if (stored) {
      setTheme(stored)
    } else {
      setTheme('system')
    }
  }, [])

  // Update effective theme based on system preference and theme setting
  useEffect(() => {
    const updateEffectiveTheme = () => {
      if (theme === 'system') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setEffectiveTheme(isDark ? 'dark' : 'light')
        document.documentElement.removeAttribute('data-theme')
      } else {
        setEffectiveTheme(theme)
        document.documentElement.setAttribute('data-theme', theme)
      }
    }

    updateEffectiveTheme()

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', updateEffectiveTheme)

    return () => mediaQuery.removeEventListener('change', updateEffectiveTheme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark'
    setTheme(newTheme)
    if (newTheme === 'system') {
      localStorage.removeItem('theme')
    } else {
      localStorage.setItem('theme', newTheme)
    }
  }

  return {
    theme,
    effectiveTheme,
    setTheme,
    toggleTheme,
  }
}
