import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './Divider'

const meta = {
  title: 'Foundation/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Visual separator line for dividing content horizontally or vertically.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Divider direction',
    },
    spacing: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Spacing around divider',
    },
    color: {
      control: 'select',
      options: ['default', 'subtle'],
      description: 'Divider color intensity',
    },
    withText: {
      control: 'text',
      description: 'Optional text label',
    },
  },
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

// Orientation Stories
export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    spacing: 'md',
  },
  render: (args) => (
    <div className="space-y-space-md">
      <div className="text-body">Content above</div>
      <Divider {...args} />
      <div className="text-body">Content below</div>
    </div>
  ),
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    spacing: 'md',
  },
  render: (args) => (
    <div className="flex items-center gap-space-md h-20">
      <div className="text-body">Left</div>
      <Divider {...args} />
      <div className="text-body">Right</div>
    </div>
  ),
}

// Spacing Stories
export const SpacingNone: Story = {
  args: {
    orientation: 'horizontal',
    spacing: 'none',
  },
  render: (args) => (
    <div>
      <div className="text-body">Above</div>
      <Divider {...args} />
      <div className="text-body">Below</div>
    </div>
  ),
}

export const SpacingSmall: Story = {
  args: {
    orientation: 'horizontal',
    spacing: 'sm',
  },
  render: (args) => (
    <div>
      <div className="text-body">Above</div>
      <Divider {...args} />
      <div className="text-body">Below</div>
    </div>
  ),
}

export const SpacingMedium: Story = {
  args: {
    orientation: 'horizontal',
    spacing: 'md',
  },
  render: (args) => (
    <div>
      <div className="text-body">Above</div>
      <Divider {...args} />
      <div className="text-body">Below</div>
    </div>
  ),
}

export const SpacingLarge: Story = {
  args: {
    orientation: 'horizontal',
    spacing: 'lg',
  },
  render: (args) => (
    <div>
      <div className="text-body">Above</div>
      <Divider {...args} />
      <div className="text-body">Below</div>
    </div>
  ),
}

// Color Stories
export const Default: Story = {
  args: {
    orientation: 'horizontal',
    spacing: 'md',
    color: 'default',
  },
  render: (args) => (
    <div>
      <div className="text-body">Above</div>
      <Divider {...args} />
      <div className="text-body">Below</div>
    </div>
  ),
}

export const Subtle: Story = {
  args: {
    orientation: 'horizontal',
    spacing: 'md',
    color: 'subtle',
  },
  render: (args) => (
    <div>
      <div className="text-body">Above</div>
      <Divider {...args} />
      <div className="text-body">Below</div>
    </div>
  ),
}

// Text Label Stories
export const WithLabel: Story = {
  args: {
    withText: 'OR',
    spacing: 'md',
  },
  render: (args) => (
    <div className="space-y-space-md">
      <button className="w-full px-space-md py-space-sm bg-primary text-white rounded-radius-md">
        Sign in with Email
      </button>
      <Divider {...args} />
      <button className="w-full px-space-md py-space-sm bg-secondary text-neutral-900 rounded-radius-md">
        Sign in with Google
      </button>
    </div>
  ),
}

export const WithCustomLabel: Story = {
  args: {
    withText: 'More Options',
    spacing: 'md',
    color: 'subtle',
  },
  render: (args) => (
    <div className="space-y-space-md">
      <div className="text-body">Initial content</div>
      <Divider {...args} />
      <div className="text-body">Additional content</div>
    </div>
  ),
}

// Section Divider Example
export const InSection: Story = {
  render: () => (
    <div className="max-w-md">
      <section className="bg-neutral-50 p-space-md rounded-radius-md">
        <h2 className="text-h3 mb-space-md">Section Title</h2>
        <p className="text-body mb-space-md text-neutral-600">Some content goes here.</p>
        <Divider spacing="md" />
        <h3 className="text-h4 mt-space-md mb-space-sm">Subsection</h3>
        <p className="text-body text-neutral-600">More content below the divider.</p>
      </section>
    </div>
  ),
}

// All Variants Grid
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-space-lg">
      <div>
        <p className="text-small text-neutral-600 mb-space-sm">Default Color</p>
        <Divider color="default" spacing="md" />
      </div>
      <div>
        <p className="text-small text-neutral-600 mb-space-sm">Subtle Color</p>
        <Divider color="subtle" spacing="md" />
      </div>
      <div>
        <p className="text-small text-neutral-600 mb-space-sm">With Label</p>
        <Divider withText="OR" spacing="md" />
      </div>
    </div>
  ),
}

// Playground
export const Playground: Story = {
  args: {
    orientation: 'horizontal',
    spacing: 'md',
    color: 'default',
  },
  render: (args) => (
    <div>
      <div className="text-body">Above</div>
      <Divider {...args} />
      <div className="text-body">Below</div>
    </div>
  ),
}
