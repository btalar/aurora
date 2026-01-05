import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
      description: 'Visual style variant of the button',
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: "'primary' | 'secondary' | 'danger'" },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the button',
      table: {
        defaultValue: { summary: 'medium' },
        type: { summary: "'small' | 'medium' | 'large'" },
      },
    },
    children: {
      control: 'text',
      description: 'Button contents (text or React elements)',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    isDisabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    onPress: {
      action: 'pressed',
      description:
        'Handler called when the button is pressed (React Aria uses onPress instead of onClick)',
      table: {
        type: { summary: '(e: PressEvent) => void' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class name',
      table: {
        type: { summary: 'string' },
      },
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type',
      table: {
        defaultValue: { summary: 'button' },
        type: { summary: "'button' | 'submit' | 'reset'" },
      },
    },
    autoFocus: {
      control: 'boolean',
      description: 'Whether the button should receive focus on mount',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Playground: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Delete',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
}

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Medium Button',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    children: 'Disabled Button',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
}
