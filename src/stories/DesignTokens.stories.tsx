import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Design System/Design Tokens',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

/**
 * Color tokens including neutral, mint, blue, red, green, orange, and brand colors.
 * Open the "Design Tokens" tab in the addons panel below to view all color tokens.
 */
export const Colors: Story = {
  parameters: {
    designToken: {
      defaultTab: 'Colors',
    },
  },
  render: () => (
    <div style={{ padding: '40px' }}>
      <h1 style={{ marginBottom: '8px' }}>Color Tokens</h1>
      <p style={{ color: 'var(--wl-content-neutral-secondary)', marginBottom: '32px' }}>
        All color palettes with shades from 50 to 900
      </p>
      <div
        style={{
          padding: '24px',
          backgroundColor: 'var(--wl-mint-50)',
          borderRadius: '8px',
          border: '2px solid var(--wl-brand-primary)',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '18px', marginBottom: '16px' }}>
          View all color tokens in the <strong>"Design Tokens"</strong> tab below
        </p>
        <p style={{ fontSize: '14px', opacity: 0.8 }}>
          Scroll down to the addons panel and click the "Design Tokens" tab
        </p>
      </div>
    </div>
  ),
}

/**
 * Spacing tokens including dimensions, padding, and border widths.
 * Open the "Design Tokens" tab in the addons panel below to view all spacing tokens.
 */
export const Spacing: Story = {
  parameters: {
    designToken: {
      defaultTab: 'Spacing',
    },
  },
  render: () => (
    <div style={{ padding: '40px' }}>
      <h1 style={{ marginBottom: '8px' }}>Spacing Tokens</h1>
      <p style={{ color: 'var(--wl-content-neutral-secondary)', marginBottom: '32px' }}>
        Dimensions, padding values, and spacing scale from 0 to 32px
      </p>
      <div
        style={{
          padding: '24px',
          backgroundColor: 'var(--wl-blue-50)',
          borderRadius: '8px',
          border: '2px solid var(--wl-blue-500)',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '18px', marginBottom: '16px' }}>
          View all spacing tokens in the <strong>"Design Tokens"</strong> tab below
        </p>
        <p style={{ fontSize: '14px', opacity: 0.8 }}>
          Scroll down to the addons panel and click the "Design Tokens" tab
        </p>
      </div>
    </div>
  ),
}

/**
 * Typography tokens including font families and font weights.
 * Open the "Design Tokens" tab in the addons panel below to view all typography tokens.
 */
export const Typography: Story = {
  parameters: {
    designToken: {
      defaultTab: 'Typography',
    },
  },
  render: () => (
    <div style={{ padding: '40px' }}>
      <h1 style={{ marginBottom: '8px' }}>Typography Tokens</h1>
      <p style={{ color: 'var(--wl-content-neutral-secondary)', marginBottom: '32px' }}>
        Font families (Inter, Coiny) and font weights
      </p>
      <div
        style={{
          padding: '24px',
          backgroundColor: 'var(--wl-orange-50)',
          borderRadius: '8px',
          border: '2px solid var(--wl-orange-500)',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '18px', marginBottom: '16px' }}>
          View all typography tokens in the <strong>"Design Tokens"</strong> tab below
        </p>
        <p style={{ fontSize: '14px', opacity: 0.8 }}>
          Scroll down to the addons panel and click the "Design Tokens" tab
        </p>
      </div>
    </div>
  ),
}

/**
 * Border tokens including border widths and border radius values.
 * Open the "Design Tokens" tab in the addons panel below to view all border tokens.
 */
export const Borders: Story = {
  parameters: {
    designToken: {
      defaultTab: 'Borders',
    },
  },
  render: () => (
    <div style={{ padding: '40px' }}>
      <h1 style={{ marginBottom: '8px' }}>Border Tokens</h1>
      <p style={{ color: 'var(--wl-content-neutral-secondary)', marginBottom: '32px' }}>
        Border widths (none to heavy) and radius values (none to fully rounded)
      </p>
      <div
        style={{
          padding: '24px',
          backgroundColor: 'var(--wl-green-50)',
          borderRadius: '8px',
          border: '2px solid var(--wl-green-500)',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '18px', marginBottom: '16px' }}>
          View all border tokens in the <strong>"Design Tokens"</strong> tab below
        </p>
        <p style={{ fontSize: '14px', opacity: 0.8 }}>
          Scroll down to the addons panel and click the "Design Tokens" tab
        </p>
      </div>
    </div>
  ),
}

/**
 * Semantic color tokens for light mode.
 * Open the "Design Tokens" tab in the addons panel below to view all semantic tokens.
 */
export const SemanticLight: Story = {
  parameters: {
    designToken: {
      defaultTab: 'Semantic Colors - Light Mode',
    },
  },
  render: () => (
    <div style={{ padding: '40px' }}>
      <h1 style={{ marginBottom: '8px' }}>Semantic Tokens - Light Mode</h1>
      <p style={{ color: 'var(--wl-content-neutral-secondary)', marginBottom: '32px' }}>
        Context-aware colors for borders, backgrounds, content, and feedback
      </p>
      <div
        style={{
          padding: '24px',
          backgroundColor: 'var(--wl-neutral-100)',
          borderRadius: '8px',
          border: '2px solid var(--wl-neutral-300)',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '18px', marginBottom: '16px' }}>
          View all semantic light mode tokens in the <strong>"Design Tokens"</strong> tab below
        </p>
        <p style={{ fontSize: '14px', opacity: 0.8 }}>
          Scroll down to the addons panel and click the "Design Tokens" tab
        </p>
      </div>
    </div>
  ),
}

/**
 * Semantic color tokens for dark mode.
 * Open the "Design Tokens" tab in the addons panel below to view all semantic tokens.
 */
export const SemanticDark: Story = {
  parameters: {
    designToken: {
      defaultTab: 'Semantic Colors - Dark Mode',
    },
  },
  render: () => (
    <div style={{ padding: '40px' }}>
      <h1 style={{ marginBottom: '8px' }}>Semantic Tokens - Dark Mode</h1>
      <p style={{ color: 'var(--wl-content-neutral-secondary)', marginBottom: '32px' }}>
        Context-aware colors for borders, backgrounds, content, and feedback
      </p>
      <div
        style={{
          padding: '24px',
          backgroundColor: 'var(--wl-neutral-800)',
          borderRadius: '8px',
          border: '2px solid var(--wl-neutral-600)',
          textAlign: 'center',
          color: 'var(--wl-neutral-50)',
        }}
      >
        <p style={{ fontSize: '18px', marginBottom: '16px' }}>
          View all semantic dark mode tokens in the <strong>"Design Tokens"</strong> tab below
        </p>
        <p style={{ fontSize: '14px', opacity: 0.8 }}>
          Scroll down to the addons panel and click the "Design Tokens" tab
        </p>
      </div>
    </div>
  ),
}

/**
 * Overview and usage guide for all design tokens.
 */
export const Overview: Story = {
  render: () => (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Design Tokens</h1>
        <p style={{ fontSize: '20px', color: 'var(--wl-content-neutral-secondary)', lineHeight: '1.6' }}>
          All design tokens are automatically parsed from{' '}
          <code
            style={{
              backgroundColor: 'var(--wl-background-soft-default)',
              padding: '4px 8px',
              borderRadius: '4px',
              fontWeight: 600,
            }}
          >
            src/tokens.css
          </code>
        </p>
      </div>

      <h2 style={{ marginBottom: '24px' }}>Available Token Categories</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '48px',
        }}
      >
        <TokenCard
          icon="🎨"
          title="Colors"
          count="70+"
          description="Neutral, Mint, Blue, Red, Green, Orange, and Brand color palettes with all shades (50-900)"
          examples={['--wl-neutral-900', '--wl-mint-500', '--wl-brand-primary']}
        />
        <TokenCard
          icon="📏"
          title="Spacing"
          count="17"
          description="Dimensions, padding values, and spacing scale from 0 to 32px"
          examples={['--wl-dimensions-8', '--wl-padding-medium', '--wl-dimensions-24']}
        />
        <TokenCard
          icon="✍️"
          title="Typography"
          count="10+"
          description="Font families (Inter, Coiny), weights, and responsive type scales"
          examples={['--wl-fonts-primary', '--wl-heading2-xxl', '--wl-label2-medium']}
        />
        <TokenCard
          icon="🔲"
          title="Borders"
          count="10"
          description="Border widths (none to heavy) and radius values (none to fully rounded)"
          examples={['--wl-border-width-default', '--wl-border-radius-medium']}
        />
        <TokenCard
          icon="🌞"
          title="Semantic - Light"
          count="20+"
          description="Context-aware colors for light theme: borders, backgrounds, content, and feedback"
          examples={['--wl-content-neutral-base', '--wl-background-soft-default']}
        />
        <TokenCard
          icon="🌙"
          title="Semantic - Dark"
          count="20+"
          description="Context-aware colors for dark theme: borders, backgrounds, content, and feedback"
          examples={['--wl-content-neutral-base', '--wl-background-soft-default']}
        />
      </div>

      <div
        style={{
          padding: '32px',
          background: 'linear-gradient(135deg, var(--wl-blue-50) 0%, var(--wl-mint-50) 100%)',
          borderRadius: '12px',
          marginBottom: '32px',
        }}
      >
        <h2 style={{ marginTop: 0 }}>Quick Start Guide</h2>
        <p style={{ marginBottom: '16px', fontSize: '16px', lineHeight: '1.6' }}>
          Import tokens in your component and use CSS variables:
        </p>
        <pre
          style={{
            backgroundColor: 'var(--wl-neutral-white)',
            padding: '24px',
            borderRadius: '8px',
            overflow: 'auto',
            fontSize: '14px',
            lineHeight: '1.6',
            border: '2px solid var(--wl-border-default-primary)',
          }}
        >
          {`import '../tokens.css'

// Use in inline styles
const styles = {
  color: 'var(--wl-brand-primary)',
  padding: 'var(--wl-padding-medium)',
  borderRadius: 'var(--wl-border-radius-medium)',
  backgroundColor: 'var(--wl-background-base-default)'
}

// Or in CSS/SCSS
.my-component {
  color: var(--wl-content-neutral-base);
  background: var(--wl-background-soft-default);
  border: var(--wl-border-width-default) solid
         var(--wl-border-default-primary);
}`}
        </pre>
      </div>

      <div
        style={{
          padding: '24px',
          backgroundColor: 'var(--wl-orange-50)',
          borderRadius: '8px',
          borderLeft: '4px solid var(--wl-orange-500)',
          marginBottom: '32px',
        }}
      >
        <h3 style={{ marginTop: 0, color: 'var(--wl-orange-900)' }}>Important Notes</h3>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8', marginBottom: 0 }}>
          <li>
            The file <code>tokens.css</code> is <strong>auto-generated</strong> - do not edit
            directly
          </li>
          <li>
            All tokens use the <code>--wl-</code> prefix for namespacing
          </li>
          <li>Semantic tokens automatically adapt to light/dark theme</li>
          <li>
            Prefer semantic tokens (e.g., <code>--wl-content-neutral-base</code>) over raw colors for
            theme support
          </li>
          <li>Each token includes inline comments with descriptions</li>
        </ul>
      </div>
    </div>
  ),
}

interface TokenCardProps {
  icon: string
  title: string
  count: string
  description: string
  examples: string[]
}

const TokenCard = ({ icon, title, count, description, examples }: TokenCardProps) => (
  <div
    style={{
      padding: '24px',
      border: '2px solid var(--wl-border-default-primary)',
      borderRadius: '12px',
      transition: 'all 0.2s ease',
      backgroundColor: 'var(--wl-background-base-default)',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = 'var(--wl-brand-primary)'
      e.currentTarget.style.transform = 'translateY(-4px)'
      e.currentTarget.style.boxShadow = '0 8px 20px rgba(69, 190, 170, 0.2)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'var(--wl-border-default-primary)'
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = 'none'
    }}
  >
    <div style={{ fontSize: '36px', marginBottom: '12px' }}>{icon}</div>
    <h3 style={{ marginTop: 0, marginBottom: '8px', fontSize: '20px' }}>{title}</h3>
    <div
      style={{
        display: 'inline-block',
        padding: '4px 12px',
        backgroundColor: 'var(--wl-mint-100)',
        borderRadius: '999px',
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--wl-mint-900)',
        marginBottom: '12px',
      }}
    >
      {count} tokens
    </div>
    <p
      style={{
        fontSize: '14px',
        lineHeight: '1.6',
        color: 'var(--wl-content-neutral-secondary)',
        marginBottom: '16px',
      }}
    >
      {description}
    </p>
    <div style={{ fontSize: '12px', fontFamily: 'monospace' }}>
      {examples.map((example, idx) => (
        <div
          key={idx}
          style={{
            padding: '4px 8px',
            backgroundColor: 'var(--wl-background-soft-default)',
            borderRadius: '4px',
            marginBottom: '4px',
            color: 'var(--wl-brand-primary)',
          }}
        >
          {example}
        </div>
      ))}
    </div>
  </div>
)
