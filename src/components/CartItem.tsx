import React from 'react'
import { Button } from './Button'

interface CartItemProps {
  id: string
  name: string
  brand: string
  price: string
  quantity: number
  image?: string
  onQuantityChange?: (id: string, quantity: number) => void
  onRemove?: (id: string) => void
}

export const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  brand,
  price,
  quantity,
  image,
  onQuantityChange,
  onRemove,
}) => {
  const pricePerUnit = parseFloat(price.replace('$', ''))
  const totalPrice = (pricePerUnit * quantity).toFixed(2)

  return (
    <div className="bg-white rounded-radius-lg shadow-sm border border-neutral-200 p-space-lg flex gap-space-lg">
      {/* Product Image */}
      {image && (
        <div className="w-20 h-20 bg-neutral-100 rounded-radius-md flex-shrink-0 flex items-center justify-center overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="text-small text-neutral-600 mb-space-xs">{brand}</p>
          <h3 className="text-h4 text-neutral-900 font-bold">{name}</h3>
        </div>

        {/* Price Info */}
        <div className="flex items-center justify-between">
          <span className="text-body text-neutral-600">
            {price} each
          </span>
          <span className="text-h4 text-primary font-bold">
            ${totalPrice}
          </span>
        </div>
      </div>

      {/* Quantity & Actions */}
      <div className="flex flex-col gap-space-md items-end">
        {/* Quantity Selector */}
        <div className="flex items-center border border-neutral-200 rounded-radius-md">
          <button
            onClick={() => onQuantityChange?.(id, Math.max(1, quantity - 1))}
            className="px-space-sm py-space-xs hover:bg-neutral-50 transition-colors"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="px-space-sm py-space-xs text-body font-body-bold border-l border-r border-neutral-200">
            {quantity}
          </span>
          <button
            onClick={() => onQuantityChange?.(id, quantity + 1)}
            className="px-space-sm py-space-xs hover:bg-neutral-50 transition-colors"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        {/* Remove Button */}
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
