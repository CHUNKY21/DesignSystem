import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ProductCard } from './ProductCard'

const meta = {
  title: 'Composite/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Product card with image, rating, status badge, and action buttons.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['safe', 'caution', 'harmful'],
    },
  },
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

export const SafeProduct: Story = {
  args: {
    id: '1',
    name: 'Eco-Friendly Dish Soap',
    brand: 'EcoClean',
    rating: 4.5,
    ratingCount: 128,
    price: '$12.99',
    status: 'safe',
    image: 'https://via.placeholder.com/200x150?text=Dish+Soap',
    ingredients: ['Water', 'Plant extract', 'Natural oils'],
  },
}

export const CautionProduct: Story = {
  args: {
    id: '2',
    name: 'All-Purpose Cleaner',
    brand: 'CleanPro',
    rating: 3.8,
    ratingCount: 95,
    price: '$8.99',
    status: 'caution',
    ingredients: ['Water', 'Ammonia', 'Surfactants'],
  },
}

export const HarmfulProduct: Story = {
  args: {
    id: '3',
    name: 'Strong Chemical Cleaner',
    brand: 'ChemCo',
    rating: 2.5,
    ratingCount: 42,
    price: '$6.99',
    status: 'harmful',
    ingredients: ['Chlorine', 'Ammonia', 'Toxic chemicals'],
  },
}

export const WithInteractions: Story = {
  render: () => {
    const [saved, setSaved] = React.useState(false)
    const [inCart, setInCart] = React.useState(false)

    return (
      <div className="max-w-xs">
        <ProductCard
          id="1"
          name="Natural Hand Soap"
          brand="Pure & Natural"
          rating={4.8}
          ratingCount={256}
          price="$10.99"
          status="safe"
          image="https://via.placeholder.com/200x150?text=Hand+Soap"
          onSave={() => setSaved(!saved)}
          onAddToCart={() => setInCart(!inCart)}
        />
        <div className="mt-space-md text-small text-neutral-600">
          {saved && <p>✓ Saved</p>}
          {inCart && <p>✓ In cart</p>}
        </div>
      </div>
    )
  },
}

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md max-w-4xl">
      <ProductCard
        id="1"
        name="Eco Dish Soap"
        brand="EcoClean"
        rating={4.5}
        ratingCount={128}
        price="$12.99"
        status="safe"
      />
      <ProductCard
        id="2"
        name="Multi-Purpose Cleaner"
        brand="CleanPro"
        rating={3.8}
        ratingCount={95}
        price="$8.99"
        status="caution"
      />
      <ProductCard
        id="3"
        name="Strong Degreaser"
        brand="ChemCo"
        rating={2.5}
        ratingCount={42}
        price="$6.99"
        status="harmful"
      />
    </div>
  ),
}

export const Playground: Story = {
  args: {
    id: 'p1',
    name: 'Product Name',
    brand: 'Brand Name',
    rating: 4.5,
    ratingCount: 128,
    price: '$12.99',
    status: 'safe',
  },
}
