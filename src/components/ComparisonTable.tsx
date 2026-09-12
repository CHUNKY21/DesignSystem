import React from 'react'

interface ComparisonProduct {
  id: string
  name: string
  brand: string
  price: string
  rating: number
  status: 'safe' | 'caution' | 'harmful'
  ingredients: string[]
  features: Record<string, boolean | string>
}

interface ComparisonTableProps {
  products: ComparisonProduct[]
  criteria?: string[]
  onProductRemove?: (id: string) => void
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  products,
  criteria = ['Eco-Friendly', 'Hypoallergenic', 'Cruelty-Free', 'Vegan', 'Fragrance-Free'],
  onProductRemove,
}) => {
  const statusBgColor = {
    safe: 'bg-success/10',
    caution: 'bg-warning/10',
    harmful: 'bg-error/10',
  }

  const statusBorder = {
    safe: 'border-success/30',
    caution: 'border-warning/30',
    harmful: 'border-error/30',
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        {/* Header */}
        <thead>
          <tr className="bg-neutral-50 border-b-2 border-neutral-200">
            <th className="text-left p-space-md text-h4 text-neutral-900 sticky left-0 bg-neutral-50">
              Criteria
            </th>
            {products.map((product) => (
              <th
                key={product.id}
                className={`text-center p-space-md text-h4 text-neutral-900 border-l border-neutral-200 ${statusBgColor[product.status]} ${statusBorder[product.status]}`}
              >
                <div className="space-y-space-xs">
                  <button
                    onClick={() => onProductRemove?.(product.id)}
                    className="float-right p-space-xs hover:bg-neutral-200 rounded-radius-md transition-colors"
                    aria-label="Remove product"
                  >
                    <svg className="w-4 h-4 text-neutral-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className="pr-space-lg">
                    <p className="font-body-bold">{product.name}</p>
                    <p className="text-small text-neutral-600">{product.brand}</p>
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {/* Price Row */}
          <tr className="border-b border-neutral-200">
            <td className="text-left p-space-md text-body font-body-bold text-neutral-900 sticky left-0 bg-white">
              Price
            </td>
            {products.map((product) => (
              <td
                key={product.id}
                className={`text-center p-space-md text-body text-neutral-900 border-l border-neutral-200 ${statusBgColor[product.status]}`}
              >
                {product.price}
              </td>
            ))}
          </tr>

          {/* Rating Row */}
          <tr className="border-b border-neutral-200">
            <td className="text-left p-space-md text-body font-body-bold text-neutral-900 sticky left-0 bg-white">
              Rating
            </td>
            {products.map((product) => (
              <td
                key={product.id}
                className={`text-center p-space-md border-l border-neutral-200 ${statusBgColor[product.status]}`}
              >
                <div className="flex items-center justify-center gap-space-xs">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'fill-neutral-200 text-neutral-200'
                      }`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </td>
            ))}
          </tr>

          {/* Criteria Rows */}
          {criteria.map((criterion, idx) => (
            <tr key={criterion} className={idx % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}>
              <td className="text-left p-space-md text-body text-neutral-900 sticky left-0 font-medium border-b border-neutral-200">
                {criterion}
              </td>
              {products.map((product) => {
                const value = product.features[criterion]
                return (
                  <td
                    key={product.id}
                    className={`text-center p-space-md border-l border-neutral-200 border-b border-neutral-200 ${
                      idx % 2 === 0 ? 'bg-neutral-50' : 'bg-white'
                    } ${statusBgColor[product.status]}`}
                  >
                    {typeof value === 'boolean' ? (
                      value ? (
                        <svg className="w-6 h-6 text-success mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-neutral-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )
                    ) : (
                      <span className="text-small text-neutral-700">{value}</span>
                    )}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
