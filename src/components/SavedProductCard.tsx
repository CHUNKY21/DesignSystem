import React from 'react'
import { Button } from './Button'
import { ProductBadge } from './ProductBadge'

interface SavedProductCardProps {
  id: string
  name: string
  brand: string
  price: string
  status: 'safe' | 'caution' | 'harmful'
  rating: number
  ratingCount: number
  savedDate: string
  onAddToCart?: (id: string) => void
  onRemove?: (id: string) => void
  onViewDetails?: (id: string) => void
}

export const SavedProductCard: React.FC<SavedProductCardProps> = ({
  id,
  name,
  brand,
  price,
  status,
  rating,
  ratingCount,
  savedDate,
  onAddToCart,
  onRemove,
  onViewDetails,
}) => {
  return (
    <div className="bg-white rounded-radius-lg shadow-sm hover:shadow-md transition-shadow border border-neutral-200 p-space-lg">
      <div className="flex justify-between items-start mb-space-md">
        <div className="flex-1">
          <p className="text-small text-neutral-600 mb-space-xs">{brand}</p>
          <h3 className="text-h3 text-neutral-900 mb-space-sm">{name}</h3>
          <ProductBadge
            label={status === 'safe' ? 'Clean' : status === 'caution' ? 'Review Needed' : 'Avoid'}
            status={status}
          />
        </div>
        <p className="text-small text-neutral-500">Saved {savedDate}</p>
      </div>

      {/* Rating and Price */}
      <div className="flex items-center justify-between mb-space-md">
        <div className="flex items-center gap-space-sm">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating) ? 'fill-accent text-accent' : 'fill-neutral-200 text-neutral-200'
              }`}
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
          <span className="text-small text-neutral-600">({ratingCount})</span>
        </div>
        <p className="text-h4 text-primary font-bold">{price}</p>
      </div>

      {/* Actions */}
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
          variant="secondary"
          size="sm"
          onClick={() => onViewDetails?.(id)}
          className="flex-1"
        >
          View Details
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onRemove?.(id)}
          className="text-error border-error"
        >
          Remove
        </Button>
      </div>
    </div>
  )
}
