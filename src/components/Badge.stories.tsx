import type { Meta, StoryObj } from '@storybook/react'
import { Badge, BadgeGroup as BadgeGroupComponent } from './Badge'

const meta = {
  title: 'Foundation/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Compact label for categories, tags, or status indicators.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Badge label text',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'Badge color variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Badge size',
    },
    icon: {
      control: 'text',
      description: 'Optional icon emoji',
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

// Variant Stories
export const Primary: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
    size: 'md',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    variant: 'secondary',
    size: 'md',
  },
}

export const Success: Story = {
  args: {
    label: 'Completed',
    variant: 'success',
    size: 'md',
  },
}

export const Warning: Story = {
  args: {
    label: 'Pending',
    variant: 'warning',
    size: 'md',
  },
}

export const Error: Story = {
  args: {
    label: 'Failed',
    variant: 'error',
    size: 'md',
  },
}

export const Info: Story = {
  args: {
    label: 'Info',
    variant: 'info',
    size: 'md',
  },
}

// Size Stories
export const Small: Story = {
  args: {
    label: 'Small Badge',
    variant: 'primary',
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    label: 'Medium Badge',
    variant: 'primary',
    size: 'md',
  },
}

// With Icon
export const WithIcon: Story = {
  args: {
    label: 'Featured',
    variant: 'success',
    size: 'md',
    icon: '⭐',
  },
}

export const WithIconSmall: Story = {
  args: {
    label: 'New',
    variant: 'primary',
    size: 'sm',
    icon: '✨',
  },
}

// All Variants
export const AllVariants: Story = {
  args: {
    label: '',
    variant: 'primary',
  },
  render: () => (
    <div className="flex flex-wrap gap-space-md">
      <Badge label="Primary" variant="primary" />
      <Badge label="Secondary" variant="secondary" />
      <Badge label="Success" variant="success" />
      <Badge label="Warning" variant="warning" />
      <Badge label="Error" variant="error" />
      <Badge label="Info" variant="info" />
    </div>
  ),
}

// All Sizes
export const AllSizes: Story = {
  args: {
    label: '',
    variant: 'primary',
  },
  render: () => (
    <div className="flex gap-space-md items-center">
      <Badge label="Small" variant="primary" size="sm" />
      <Badge label="Medium" variant="primary" size="md" />
    </div>
  ),
}

// Badge Group
export const Group: Story = {
  args: {
    label: '',
    variant: 'primary',
  },
  render: () => (
    <BadgeGroupComponent
      badges={[
        { label: 'React', variant: 'primary' },
        { label: 'TypeScript', variant: 'secondary' },
        { label: 'Vite', variant: 'success' },
      ]}
    />
  ),
}

export const GroupWithOverflow: Story = {
  args: {
    label: '',
    variant: 'primary',
  },
  render: () => (
    <BadgeGroupComponent
      badges={[
        { label: 'JavaScript', variant: 'primary' },
        { label: 'TypeScript', variant: 'primary' },
        { label: 'React', variant: 'secondary' },
        { label: 'Vue', variant: 'secondary' },
        { label: 'Angular', variant: 'secondary' },
      ]}
      maxDisplay={3}
    />
  ),
}

// Status Indicators
export const StatusIndicators: Story = {
  args: {
    label: '',
    variant: 'primary',
  },
  render: () => (
    <div className="space-y-space-md max-w-sm">
      <div className="flex items-center gap-space-md">
        <span className="text-body">Active</span>
        <Badge label="Online" variant="success" icon="🟢" />
      </div>
      <div className="flex items-center gap-space-md">
        <span className="text-body">Pending</span>
        <Badge label="In Progress" variant="warning" icon="⏳" />
      </div>
      <div className="flex items-center gap-space-md">
        <span className="text-body">Inactive</span>
        <Badge label="Offline" variant="secondary" icon="⚫" />
      </div>
      <div className="flex items-center gap-space-md">
        <span className="text-body">Error</span>
        <Badge label="Failed" variant="error" icon="❌" />
      </div>
    </div>
  ),
}

// Tag Cloud Example
export const TagCloud: Story = {
  args: {
    label: '',
    variant: 'primary',
  },
  render: () => (
    <div className="flex flex-wrap gap-space-sm max-w-lg">
      {['React', 'JavaScript', 'TypeScript', 'Web Dev', 'Frontend', 'UI/UX', 'Performance', 'Testing', 'Accessibility'].map(
        (tag) => (
          <Badge key={tag} label={tag} variant="secondary" size="sm" />
        )
      )}
    </div>
  ),
}

// Accessibility
export const Accessibility: Story = {
  args: {
    label: '',
    variant: 'primary',
  },
  render: () => (
    <div className="space-y-space-md">
      <div>
        <p className="text-small text-neutral-600 mb-space-sm">Semantic HTML</p>
        <Badge label="Badge" variant="primary" />
        <p className="text-small text-neutral-600 mt-space-sm">Uses &lt;span&gt; element</p>
      </div>
      <div>
        <p className="text-small text-neutral-600 mb-space-sm">Status Badges with Icons</p>
        <div className="flex gap-space-md">
          <Badge label="Active" variant="success" icon="✓" />
          <Badge label="Pending" variant="warning" icon="⏳" />
          <Badge label="Inactive" variant="error" icon="✕" />
        </div>
      </div>
    </div>
  ),
}

// Playground
export const Playground: Story = {
  args: {
    label: 'Badge Text',
    variant: 'primary',
    size: 'md',
  },
}
