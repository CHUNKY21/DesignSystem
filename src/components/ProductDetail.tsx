import React, { useState } from 'react'
import { Button } from './Button'
import { ProductBadge } from './ProductBadge'
import { RatingDisplay } from './RatingDisplay'
import { IngredientDetailCard } from './IngredientDetailCard'

interface ProductDetailProps {
  id: string
  name: string
  brand: string
  image?: string
  status: 'safe' | 'caution' | 'harmful'
  rating: number
  ratingCount: number
  price: string
  description: string
  ingredients: Array<{
    name: string
    status: 'safe' | 'caution' | 'harmful'
    hazardScore: number
    description: string
  }>
  certifications?: string[]
  whereToBuy?: Array<{ name: string; url: string }>
  onAddToCart?: () => void
  onSave?: () => void
}

export const ProductDetail: React.FC<ProductDetailProps> = ({
  name,
  brand,
  image,
  status,
  rating,
  ratingCount,
  price,
  description,
  ingredients,
  certifications = [],
  whereToBy = [],
  onAddToCart,
  onSave,
}) => {
  const [quantity, setQuantity] = useState(1)

  const statusLabels = {
    safe: 'Clean & Safe',
    caution: 'Review Needed',
    harmful: 'Not Recommended',
  }

  return (
    <div className="space-y-space-2xl">
      {/* Product Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-2xl">
        {/* Product Image */}
        {image && (
          <div className="bg-neutral-100 rounded-radius-lg h-96 flex items-center justify-center">
            <img src={image} alt={name} className="w-full h-full object-cover rounded-radius-lg" />
          </div>
        )}

        {/* Product Info */}
        <div className="space-y-space-lg">
          <div>
            <p className="text-small text-neutral-600 mb-space-sm">{brand}</p>
            <h1 className="text-h1 text-neutral-900 mb-space-md">{name}</h1>
            <ProductBadge label={statusLabels[status]} status={status} />
          </div>

          {/* Rating */}
          <RatingDisplay score={rating} count={ratingCount} certifications={certifications} size="lg" />

          {/* Price & Quantity */}
          <div className="space-y-space-md">
            <div>
              <p className="text-h2 text-primary font-bold">{price}</p>
            </div>

            <div className="flex items-center gap-space-md">
              <div className="flex items-center border border-neutral-200 rounded-radius-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-space-md py-space-sm hover:bg-neutral-50 transition-colors"
                >
                  −
                </button>
                <span className="px-space-md py-space-sm text-body font-body-bold border-l border-r border-neutral-200">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-space-md py-space-sm hover:bg-neutral-50 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-space-sm">
              <Button variant="primary" size="lg" onClick={onAddToCart} className="flex-1">
                Add {quantity} to Cart
              </Button>
              <Button variant="outline" size="lg" onClick={onSave}>
                Save
              </Button>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-body text-neutral-700 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>

      {/* Ingredients Breakdown */}
      <div>
        <h2 className="text-h2 text-neutral-900 mb-space-lg">Ingredient Analysis</h2>
        <div className="space-y-space-md">
          {ingredients.map((ingredient) => (
            <IngredientDetailCard
              key={ingredient.name}
              name={ingredient.name}
              status={ingredient.status}
              hazardScore={ingredient.hazardScore}
              description={ingredient.description}
              hazards={
                ingredient.status === 'harmful'
                  ? ['May cause irritation', 'Contains synthetic chemicals']
                  : ingredient.status === 'caution'
                    ? ['Requires further research', 'Use with caution']
                    : ['Natural origin', 'Generally recognized as safe']
              }
              alternatives={ingredient.status !== 'safe' ? ['Plant-based alternative', 'Natural substitute'] : []}
            />
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        <div className="bg-secondary rounded-radius-lg p-space-lg">
          <h3 className="text-h3 text-neutral-900 mb-space-md">Why we recommend this</h3>
          <ul className="space-y-space-sm text-body text-neutral-700">
            <li className="flex gap-space-sm">
              <span className="text-success font-bold">✓</span>
              <span>Certified non-toxic by EWG</span>
            </li>
            <li className="flex gap-space-sm">
              <span className="text-success font-bold">✓</span>
              <span>Biodegradable formula</span>
            </li>
            <li className="flex gap-space-sm">
              <span className="text-success font-bold">✓</span>
              <span>No harmful chemicals detected</span>
            </li>
          </ul>
        </div>

        <div className="bg-secondary rounded-radius-lg p-space-lg">
          <h3 className="text-h3 text-neutral-900 mb-space-md">Certifications</h3>
          <div className="space-y-space-sm">
            {certifications.length > 0 ? (
              certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-space-sm text-body text-neutral-700">
                  <svg className="w-5 h-5 text-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{cert}</span>
                </div>
              ))
            ) : (
              <p className="text-neutral-600">No certifications</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
