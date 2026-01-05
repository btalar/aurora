import type { Meta, StoryObj } from '@storybook/react-vite'

const WelcomePage = () => (
  <div
    style={{
      fontFamily: 'var(--wl-fonts-primary)',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem',
      color: 'var(--wl-content-neutral-base)',
    }}
  >
    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <h1
        style={{
          fontSize: '48px',
          fontWeight: 'var(--wl-fontweight-bold)',
          color: 'var(--wl-brand-primary)',
          marginBottom: '1rem',
        }}
      >
        Welcome to Aurora
      </h1>
      <p
        style={{
          fontSize: '20px',
          color: 'var(--wl-content-neutral-secondary)',
          marginBottom: '2rem',
        }}
      >
        A modern, accessible component library built with React Aria and CSS
        Modules
      </p>
    </div>

    <div style={{ marginBottom: '2.5rem' }}>
      <h2
        style={{
          fontSize: '28px',
          fontWeight: 'var(--wl-fontweight-semibold)',
          color: 'var(--wl-content-neutral-base)',
          marginBottom: '1rem',
          borderBottom: '2px solid var(--wl-border-default-primary)',
          paddingBottom: '0.5rem',
        }}
      >
        Getting Started
      </h2>
      <p
        style={{
          fontSize: '16px',
          lineHeight: '1.6',
          color: 'var(--wl-content-neutral-secondary)',
          marginBottom: '1rem',
        }}
      >
        Aurora is a comprehensive design system that provides ready-to-use,
        accessible React components. Built on top of{' '}
        <span
          style={{
            color: 'var(--wl-brand-primary)',
            fontWeight: 'var(--wl-fontweight-semibold)',
          }}
        >
          React Aria
        </span>
        , every component follows WAI-ARIA best practices and provides excellent
        keyboard navigation and screen reader support.
      </p>
      <div
        style={{
          backgroundColor: 'var(--wl-background-soft-default)',
          border: '1px solid var(--wl-border-default-primary)',
          borderRadius: 'var(--wl-border-radius-medium)',
          padding: '1rem',
          fontFamily: '"Courier New", monospace',
          fontSize: '14px',
          overflowX: 'auto',
          margin: '1rem 0',
        }}
      >
        <pre style={{ margin: 0 }}>{"import { Button } from '@.........'"}</pre>
      </div>
    </div>

    <div style={{ marginBottom: '2.5rem' }}>
      <h2
        style={{
          fontSize: '28px',
          fontWeight: 'var(--wl-fontweight-semibold)',
          color: 'var(--wl-content-neutral-base)',
          marginBottom: '1rem',
          borderBottom: '2px solid var(--wl-border-default-primary)',
          paddingBottom: '0.5rem',
        }}
      >
        Theme Support
      </h2>
      <p
        style={{
          fontSize: '16px',
          lineHeight: '1.6',
          color: 'var(--wl-content-neutral-secondary)',
          marginBottom: '1rem',
        }}
      >
        Aurora comes with built-in light and dark themes. More about theme
        provider....
      </p>
    </div>

    <div style={{ marginBottom: '2.5rem' }}>
      <h2
        style={{
          fontSize: '28px',
          fontWeight: 'var(--wl-fontweight-semibold)',
          color: 'var(--wl-content-neutral-base)',
          marginBottom: '1rem',
          borderBottom: '2px solid var(--wl-border-default-primary)',
          paddingBottom: '0.5rem',
        }}
      >
        Browse Components
      </h2>
      <p
        style={{
          fontSize: '16px',
          lineHeight: '1.6',
          color: 'var(--wl-content-neutral-secondary)',
          marginBottom: '1rem',
        }}
      >
        Explore our component library using the sidebar on the left. Each
        component includes:
      </p>
      <ul
        style={{
          color: 'var(--wl-content-neutral-secondary)',
          lineHeight: 1.8,
        }}
      >
        <li>Interactive playground with live controls</li>
        <li>Multiple variants and states</li>
        <li>Accessibility features and keyboard support</li>
        <li>TypeScript type definitions</li>
        <li>Usage examples and best practices</li>
      </ul>
    </div>

    <div style={{ marginBottom: '2.5rem' }}>
      <h2
        style={{
          fontSize: '28px',
          fontWeight: 'var(--wl-fontweight-semibold)',
          color: 'var(--wl-content-neutral-base)',
          marginBottom: '1rem',
          borderBottom: '2px solid var(--wl-border-default-primary)',
          paddingBottom: '0.5rem',
        }}
      >
        Design Philosophy
      </h2>
      <p
        style={{
          fontSize: '16px',
          lineHeight: '1.6',
          color: 'var(--wl-content-neutral-secondary)',
          marginBottom: '1rem',
        }}
      >
        Aurora is designed with three core principles in mind:
      </p>
      <ul
        style={{
          color: 'var(--wl-content-neutral-secondary)',
          lineHeight: 1.8,
        }}
      >
        <li>
          <strong>Accessible by default</strong> - Every component works for
          everyone
        </li>
        <li>
          <strong>Developer friendly</strong> - Simple APIs with TypeScript
          support
        </li>
      </ul>
    </div>
  </div>
)

const meta: Meta<typeof WelcomePage> = {
  title: 'Welcome/Introduction',
  component: WelcomePage,
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof WelcomePage>

export const Welcome: Story = {}
