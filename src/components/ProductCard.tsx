import React from 'react'
import { Button } from './Button'
import { ProductBadge } from './ProductBadge'

interface ProductCardProps {
  id: string
  name: string
  brand: string
  image?: string
  rating: number
  ratingCount: number
  price?: string
  status: 'safe' | 'caution' | 'harmful'
  ingredients?: string[]
  onSave?: (id: string) => void
  onAddToCart?: (id: string) => void
  onViewDetails?: (id: string) => void
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  brand,
  image,
  rating,
  ratingCount,
  price,
  status,
  ingredients = [],
  onSave,
  onAddToCart,
  onViewDetails,
}) => {
  const statusLabel = {
    safe: 'Clean',
    caution: 'Review Needed',
    harmful: 'Avoid',
  }

  return (
    <div className="bg-white rounded-radius-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
      {/* Image */}
      {image && (
        <div className="w-full h-48 bg-neutral-100 flex items-center justify-center overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Content */}
      <div className="p-space-lg flex flex-col flex-grow">
        {/* Badge */}
        <div className="mb-space-md">
          <ProductBadge label={statusLabel[status]} status={status} />
        </div>

        {/* Brand & Name */}
        <p className="text-small text-neutral-600 mb-space-xs">{brand}</p>
        <h3 className="text-h3 text-neutral-900 mb-space-md line-clamp-2">{name}</h3>

        {/* Ingredients Preview */}
        {ingredients.length > 0 && (
          <div className="mb-space-md">
            <p className="text-small text-neutral-600 mb-space-xs">Key Ingredients:</p>
            <div className="flex flex-wrap gap-space-xs">
              {ingredients.slice(0, 3).map((ingredient, idx) => (
                <span key={idx} className="text-micro bg-neutral-100 px-space-sm py-space-xs rounded-radius-sm text-neutral-900">
                  {ingredient}
                </span>
              ))}
              {ingredients.length > 3 && (
                <span className="text-micro text-neutral-600">+{ingredients.length - 3} more</span>
              )}
            </div>
          </div>
        )}

        {/* Rating */}
        <div className="flex items-center gap-space-sm mb-space-md">
          <div className="flex items-center gap-space-xs">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-accent text-accent' : 'fill-neutral-200 text-neutral-200'}`}
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="text-small text-neutral-600">({ratingCount})</span>
        </div>

        {/* Price & Actions */}
        <div className="mt-auto pt-space-md border-t border-neutral-200 space-y-space-sm">
          {price && (
            <p className="text-h4 text-primary font-bold">{price}</p>
          )}

          <div className="flex gap-space-sm">
            <Button
              variant="primary"
              size="sm"
              onClick={() => onAddToCart?.(id)}
              className="flex-1"
            >
              Add to Cart
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onSave?.(id)}
              className="flex-1"
            >
              Save
            </Button>
          </div>

          <Button
            variant="secondary"
            size="sm"
            onClick={() => onViewDetails?.(id)}
            className="w-full"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  )
}
