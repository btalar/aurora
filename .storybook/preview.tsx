import addonA11y from '@storybook/addon-a11y'
import addonDocs from '@storybook/addon-docs'
import { definePreview } from '@storybook/react-vite'
import type { ReactRenderer } from '@storybook/react'
import { create } from '@storybook/theming/create'
import '../src/tokens.css'

const storybookTheme = create({
  base: 'light',
  brandTitle: 'Aurora Design System',
  brandUrl: '/',
  brandTarget: '_self',

  colorPrimary: '#45beaa',
  colorSecondary: '#0ba5ec',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#e9eaeb',
  appBorderRadius: 4,

  // Typography
  fontBase: "'Inter', system-ui, -apple-system, sans-serif",
  fontCode: 'monospace',

  // Text colors
  textColor: '#101828',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#717680',
  barSelectedColor: '#45beaa',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#d5d7da',
  inputTextColor: '#101828',
  inputBorderRadius: 4,
})

export default definePreview({
  addons: [addonA11y(), addonDocs()],
  tags: ['autodocs'],
  parameters: {
    a11y: {
      options: { xpath: true },
    },
    backgrounds: {
      disable: true,
    },
    designToken: {
      defaultTab: 'Colors',
    },
    docs: {
      toc: true,
      theme: storybookTheme,
    },
  },
  decorators: [
    (Story, context) => {
      const theme = (context.globals.theme || 'light') as 'light' | 'dark'

      // Apply theme to document
      if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(theme)
      }

      return (
        <div
          style={{
            backgroundColor: 'var(--wl-background-base-default)',
            color: 'var(--wl-content-neutral-base)',
            minHeight: '100vh',
            padding: '20px',
          }}
        >
          <Story />
        </div>
      )
    },
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
})
