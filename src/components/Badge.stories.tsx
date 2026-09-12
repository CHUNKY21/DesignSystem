import type { Meta, StoryObj } from '@storybook/react'
import { Badge, BadgeGroup } from './Badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

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
    label: 'Success',
    variant: 'success',
    size: 'md',
  },
}

export const Warning: Story = {
  args: {
    label: 'Warning',
    variant: 'warning',
    size: 'md',
  },
}

export const Error: Story = {
  args: {
    label: 'Error',
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

export const Small: Story = {
  args: {
    label: 'Small',
    variant: 'primary',
    size: 'sm',
  },
}

export const WithIcon: Story = {
  args: {
    label: 'Featured',
    variant: 'accent',
    size: 'md',
    icon: '⭐',
  },
}

export const BadgeGroupExample: Story = {
  render: () => (
    <BadgeGroup
      badges={[
        { label: 'React', variant: 'primary' },
        { label: 'TypeScript', variant: 'secondary' },
        { label: 'Vite', variant: 'success' },
      ]}
    />
  ),
}
