import '../src/tokens/tokens.css'
import type { Decorator, Preview } from '@storybook/react-vite'
import { useEffect, type FC } from 'react'

const ThemeWrapper: FC<{ theme: string; children: React.ReactNode }> = ({
  theme,
  children,
}) => {
  useEffect(() => {
    const root = document.documentElement
    const body = document.body

    root.classList.remove('light', 'dark')
    root.classList.add(theme)

    // Also add to body in case components check parent
    body.classList.remove('light', 'dark')
    body.classList.add(theme)

    // Apply theme colors using CSS variables
    body.style.backgroundColor = 'var(--wl-background-base-default)'
    body.style.color = 'var(--wl-content-neutral-base)'
  }, [theme])

  return <>{children}</>
}

const withTheme: Decorator = (Story, context) => {
  const theme = (context.globals.theme as string) || 'light'

  return (
    <ThemeWrapper theme={theme}>
      <Story />
    </ThemeWrapper>
  )
}

export default {
  decorators: [withTheme],
  globalTypes: {
    theme: {
      description: 'Theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    backgrounds: { disable: true },
  },
} satisfies Preview
