import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'Foundation/Button',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Primary action button with multiple variants and sizes. Supports loading and disabled states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'outline'],
      description: 'Button style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
    },
    isLoading: {
      control: 'boolean',
      description: 'Show loading spinner',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Variant Stories
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
}

export const Accent: Story = {
  args: {
    children: 'Accent Button',
    variant: 'accent',
    size: 'md',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    size: 'md',
  },
}

// Size Stories
export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    variant: 'primary',
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'lg',
  },
}

// State Stories
export const Loading: Story = {
  args: {
    children: 'Processing...',
    variant: 'primary',
    size: 'md',
    isLoading: true,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
}

// All Variants Grid
export const AllVariants: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
  render: () => (
    <div className="space-y-space-md">
      <div className="flex gap-space-md">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="outline">Outline</Button>
      </div>
    </div>
  ),
}

// All Sizes Grid
export const AllSizes: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
  render: () => (
    <div className="flex gap-space-md items-center">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

// State Combinations
export const StateVariations: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
  render: () => (
    <div className="space-y-space-md">
      <div className="flex gap-space-md">
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
        <Button isLoading>Loading</Button>
      </div>
    </div>
  ),
}

// Accessibility Story
export const Accessibility: Story = {
  args: {
    children: 'Accessible Button',
    variant: 'primary',
    size: 'md',
  },
  render: (args) => (
    <div className="space-y-space-md">
      <div>
        <h3 className="text-h4 mb-space-sm">Keyboard Navigation</h3>
        <p className="text-small text-neutral-600 mb-space-md">Use Tab to focus, Enter to activate</p>
        <Button {...args} />
      </div>
      <div>
        <h3 className="text-h4 mb-space-sm">Focus Indicator</h3>
        <p className="text-small text-neutral-600 mb-space-md">Click to see focus ring</p>
        <Button {...args} autoFocus />
      </div>
    </div>
  ),
}

// Playground for exploration
export const Playground: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
    disabled: false,
    isLoading: false,
  },
}
