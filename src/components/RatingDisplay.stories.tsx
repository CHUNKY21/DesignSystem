import type { Meta, StoryObj } from '@storybook/react'
import { RatingDisplay } from './RatingDisplay'

const meta = {
  title: 'Composite/RatingDisplay',
  component: RatingDisplay,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Display star ratings with optional review count and percentage breakdown.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    rating: {
      control: { type: 'range', min: 0, max: 5, step: 0.5 },
    },
    count: {
      control: 'number',
    },
  },
} satisfies Meta<typeof RatingDisplay>

export default meta
type Story = StoryObj<typeof meta>

export const FiveStars: Story = {
  args: {
    rating: 5,
    count: 256,
  },
}

export const FourStars: Story = {
  args: {
    rating: 4.5,
    count: 128,
  },
}

export const ThreeStars: Story = {
  args: {
    rating: 3.0,
    count: 42,
  },
}

export const TwoStars: Story = {
  args: {
    rating: 2.5,
    count: 15,
  },
}

export const NoReviews: Story = {
  args: {
    rating: 0,
    count: 0,
  },
}

export const AllRatings: Story = {
  render: () => (
    <div className="space-y-space-md">
      <div className="text-h4">All Rating Levels</div>
      <div className="space-y-space-sm">
        <RatingDisplay rating={5} count={250} />
        <RatingDisplay rating={4} count={180} />
        <RatingDisplay rating={3} count={95} />
        <RatingDisplay rating={2} count={30} />
        <RatingDisplay rating={1} count={5} />
        <RatingDisplay rating={0} count={0} />
      </div>
    </div>
  ),
}

export const Playground: Story = {
  args: {
    rating: 4.5,
    count: 128,
  },
}
