/* eslint-disable react-refresh/only-export-components */
'use client'

import {
  createContext,
  use,
  useEffect,
  useLayoutEffect,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react'

import { useLocalStorage } from '../hooks'

type Theme = 'light' | 'dark' | 'system'
type ResolvedTheme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  resolvedTheme: ResolvedTheme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'aurora-theme',
}: ThemeProviderProps): ReactElement {
  const [theme, setTheme] = useLocalStorage<Theme>(storageKey, defaultTheme)
  const [mounted, setMounted] = useState(false)

  const getSystemTheme = (): ResolvedTheme => {
    if (typeof window === 'undefined') return 'light'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }

  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemTheme)

  // Detect system theme preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handler = (e: MediaQueryListEvent): void => {
      setSystemTheme(e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handler)
    return (): void => {
      mediaQuery.removeEventListener('change', handler)
    }
  }, [])

  // Use layout effect to avoid hydration mismatch
  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect, @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    setMounted(true)
  }, [])

  // Resolve the actual theme to apply
  const resolvedTheme: ResolvedTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(resolvedTheme)
  }, [resolvedTheme, mounted])

  const toggleTheme = (): void => {
    setTheme((prev) => {
      if (prev === 'system') return resolvedTheme === 'light' ? 'dark' : 'light'
      return prev === 'light' ? 'dark' : 'light'
    })
  }

  const handleSetTheme = (newTheme: Theme): void => {
    setTheme(newTheme)
  }

  const value: ThemeContextType = {
    theme,
    resolvedTheme,
    toggleTheme,
    setTheme: handleSetTheme,
  }

  return <ThemeContext value={value}>{children}</ThemeContext>
}

export function useTheme(): ThemeContextType {
  const context = use(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
