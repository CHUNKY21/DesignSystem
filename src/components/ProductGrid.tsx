import React from 'react'
import { ProductCard } from './ProductCard'

interface Product {
  id: string
  name: string
  brand: string
  image?: string
  rating: number
  ratingCount: number
  price?: string
  status: 'safe' | 'caution' | 'harmful'
  ingredients?: string[]
}

interface ProductGridProps {
  products: Product[]
  isLoading?: boolean
  isEmpty?: boolean
  onSave?: (id: string) => void
  onAddToCart?: (id: string) => void
  onViewDetails?: (id: string) => void
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  isLoading = false,
  isEmpty = false,
  onSave,
  onAddToCart,
  onViewDetails,
}) => {
  if (isEmpty) {
    return (
      <div className="text-center py-space-3xl">
        <svg className="w-16 h-16 mx-auto mb-space-lg text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 0 0 8.646 3.646 9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z" />
        </svg>
        <h3 className="text-h2 text-neutral-900 mb-space-sm">No products found</h3>
        <p className="text-body text-neutral-600">Try a different search or adjust your filters</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-radius-lg shadow-sm animate-pulse">
            <div className="w-full h-48 bg-neutral-100" />
            <div className="p-space-lg space-y-space-md">
              <div className="h-4 bg-neutral-100 rounded w-1/3" />
              <div className="h-6 bg-neutral-100 rounded w-2/3" />
              <div className="space-y-space-sm">
                <div className="h-4 bg-neutral-100 rounded" />
                <div className="h-4 bg-neutral-100 rounded w-5/6" />
              </div>
              <div className="flex gap-space-sm pt-space-md">
                <div className="h-10 bg-neutral-100 rounded flex-1" />
                <div className="h-10 bg-neutral-100 rounded flex-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          onSave={onSave}
          onAddToCart={onAddToCart}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  )
}
