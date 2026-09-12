import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton, SkeletonGroup } from './Skeleton'

const meta = {
  title: 'Foundation/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Placeholder loading indicator for skeleton screens. Shows animated placeholder while content loads.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'card', 'avatar', 'button'],
      description: 'Skeleton shape preset',
    },
    width: {
      control: 'text',
      description: 'Custom width',
    },
    height: {
      control: 'text',
      description: 'Custom height',
    },
  },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

// Variant Stories
export const TextSkeleton: Story = {
  args: {
    variant: 'text',
  },
}

export const CardSkeleton: Story = {
  args: {
    variant: 'card',
  },
}

export const AvatarSkeleton: Story = {
  args: {
    variant: 'avatar',
  },
}

export const ButtonSkeleton: Story = {
  args: {
    variant: 'button',
  },
}

// Custom Sizing
export const CustomSize: Story = {
  args: {
    variant: 'text',
    width: '200px',
    height: '20px',
  },
}

// All Variants
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-space-md">
      <div>
        <p className="text-small text-neutral-600 mb-space-sm">Text Skeleton</p>
        <Skeleton variant="text" />
      </div>
      <div>
        <p className="text-small text-neutral-600 mb-space-sm">Avatar Skeleton</p>
        <Skeleton variant="avatar" />
      </div>
      <div>
        <p className="text-small text-neutral-600 mb-space-sm">Button Skeleton</p>
        <Skeleton variant="button" />
      </div>
      <div>
        <p className="text-small text-neutral-600 mb-space-sm">Card Skeleton</p>
        <Skeleton variant="card" width="300px" />
      </div>
    </div>
  ),
}

// Skeleton Group Variants
export const SkeletonGroupText: Story = {
  render: () => (
    <SkeletonGroup count={3} variant="text" spacing="space-y-sm" />
  ),
}

export const SkeletonGroupCard: Story = {
  render: () => (
    <SkeletonGroup count={2} variant="card" />
  ),
}

// Loading Skeleton Pattern
export const LoadingCardPattern: Story = {
  render: () => (
    <div className="bg-white p-space-md rounded-radius-lg border border-neutral-200 max-w-sm">
      <div className="flex gap-space-md mb-space-md">
        <Skeleton variant="avatar" />
        <div className="flex-1">
          <Skeleton variant="text" />
          <Skeleton variant="text" width="80%" className="mt-space-xs" />
        </div>
      </div>
      <Skeleton variant="text" className="mb-space-sm" />
      <Skeleton variant="text" width="90%" className="mb-space-md" />
      <Skeleton variant="button" />
    </div>
  ),
}

// Loading List Pattern
export const LoadingListPattern: Story = {
  render: () => (
    <div className="space-y-space-md max-w-md">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex gap-space-md">
          <Skeleton variant="avatar" width="50px" height="50px" />
          <div className="flex-1">
            <Skeleton variant="text" width="100px" />
            <Skeleton variant="text" width="70%" className="mt-space-xs" />
          </div>
        </div>
      ))}
    </div>
  ),
}

// Complex Loading Layout
export const ComplexLoadingLayout: Story = {
  render: () => (
    <div className="space-y-space-md max-w-2xl">
      <div>
        <Skeleton variant="text" width="200px" className="mb-space-sm" />
        <SkeletonGroup count={2} variant="text" spacing="space-y-xs" />
      </div>
      <Skeleton variant="card" width="100%" height="200px" />
      <div className="grid grid-cols-2 gap-space-md">
        <Skeleton variant="card" height="150px" />
        <Skeleton variant="card" height="150px" />
      </div>
    </div>
  ),
}

// Accessibility
export const AccessibilitySkeleton: Story = {
  render: () => (
    <div className="space-y-space-md">
      <div>
        <p className="text-small text-neutral-600 mb-space-sm">Skeleton uses aria-hidden="true"</p>
        <Skeleton variant="text" />
        <p className="text-small text-neutral-600 mt-space-sm">Screen readers skip skeleton placeholders</p>
      </div>
      <div>
        <p className="text-small text-neutral-600 mb-space-sm">With ARIA Live Region</p>
        <div role="status" aria-live="polite" aria-label="Loading content...">
          <SkeletonGroup count={2} variant="text" />
        </div>
      </div>
    </div>
  ),
}

// Product Card Loading State
export const ProductCardLoading: Story = {
  render: () => (
    <div className="bg-white rounded-radius-lg overflow-hidden border border-neutral-200 max-w-xs">
      <Skeleton variant="card" height="200px" width="100%" />
      <div className="p-space-md">
        <Skeleton variant="text" width="80%" className="mb-space-md" />
        <Skeleton variant="text" className="mb-space-md" />
        <div className="flex gap-space-sm">
          <Skeleton variant="button" />
          <Skeleton variant="button" />
        </div>
      </div>
    </div>
  ),
}

// Playground
export const Playground: Story = {
  args: {
    variant: 'text',
  },
}
