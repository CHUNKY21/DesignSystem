import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { SearchBar } from './SearchBar'
import { ProductCard } from './ProductCard'
import { Button } from './Button'
import { Badge } from './Badge'

const meta = {
  title: 'Flows/Browse to Add to Cart',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete product browsing and add-to-cart flow demonstrating component integration.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// Mock product database
const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Natural Dish Soap',
    brand: 'EcoClean',
    rating: 4.8,
    ratingCount: 256,
    price: '$12.99',
    status: 'safe' as const,
    image: 'https://via.placeholder.com/200x150?text=Dish+Soap',
    category: 'cleaning',
    ingredients: ['Water', 'Plant extract', 'Natural oils'],
  },
  {
    id: '2',
    name: 'Eco Laundry Detergent',
    brand: 'EcoClean',
    rating: 4.6,
    ratingCount: 189,
    price: '$14.99',
    status: 'safe' as const,
    image: 'https://via.placeholder.com/200x150?text=Detergent',
    category: 'cleaning',
    ingredients: ['Plant-based surfactants', 'Essential oils'],
  },
  {
    id: '3',
    name: 'Organic Hand Soap',
    brand: 'Pure & Natural',
    rating: 4.9,
    ratingCount: 412,
    price: '$10.99',
    status: 'safe' as const,
    image: 'https://via.placeholder.com/200x150?text=Hand+Soap',
    category: 'personal',
    ingredients: ['Organic oils', 'Natural moisturizers'],
  },
  {
    id: '4',
    name: 'Multi-Purpose Cleaner',
    brand: 'CleanPro',
    rating: 3.8,
    ratingCount: 95,
    price: '$8.99',
    status: 'caution' as const,
    image: 'https://via.placeholder.com/200x150?text=Cleaner',
    category: 'cleaning',
    ingredients: ['Water', 'Ammonia', 'Surfactants'],
  },
  {
    id: '5',
    name: 'Natural Glass Cleaner',
    brand: 'EcoClean',
    rating: 4.5,
    ratingCount: 128,
    price: '$9.99',
    status: 'safe' as const,
    image: 'https://via.placeholder.com/200x150?text=Glass+Cleaner',
    category: 'cleaning',
    ingredients: ['Water', 'Vinegar', 'Essential oils'],
  },
  {
    id: '6',
    name: 'Moisturizing Lotion',
    brand: 'Pure & Natural',
    rating: 4.7,
    ratingCount: 234,
    price: '$13.99',
    status: 'safe' as const,
    image: 'https://via.placeholder.com/200x150?text=Lotion',
    category: 'personal',
    ingredients: ['Organic oils', 'Shea butter', 'Aloe vera'],
  },
]

interface CartItem {
  id: string
  name: string
  price: string
  quantity: number
}

export const BrowseToCart: Story = {
  render: () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState<string>()
    const [cart, setCart] = useState<CartItem[]>([])
    const [addedProduct, setAddedProduct] = useState<string | null>(null)
    const [showCart, setShowCart] = useState(false)

    // Filter products
    const filteredProducts = MOCK_PRODUCTS.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = !selectedCategory || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    // Handle add to cart
    const handleAddToCart = (product: (typeof MOCK_PRODUCTS)[0]) => {
      setCart((prev) => {
        const existing = prev.find((item) => item.id === product.id)
        if (existing) {
          return prev.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        }
        return [
          ...prev,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
          },
        ]
      })
      setAddedProduct(product.id)
      setTimeout(() => setAddedProduct(null), 2000)
    }

    const cartTotal = cart.reduce((sum, item) => {
      const price = parseFloat(item.price.replace('$', ''))
      return sum + price * item.quantity
    }, 0)

    return (
      <div className="min-h-screen bg-neutral-50">
        {/* Header */}
        <div className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-space-md py-space-md flex justify-between items-center">
            <h1 className="text-h2">Clean Shop</h1>
            <Button
              variant="primary"
              onClick={() => setShowCart(!showCart)}
              className="relative"
            >
              🛒 Cart {cart.length > 0 && <Badge label={cart.length.toString()} variant="error" size="sm" />}
            </Button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-space-md py-space-lg">
          {showCart ? (
            // Cart View
            <div className="space-y-space-md">
              <h2 className="text-h2">Shopping Cart</h2>
              {cart.length === 0 ? (
                <div className="text-center py-space-xl text-neutral-600">
                  <p className="text-h4 mb-space-md">Your cart is empty</p>
                  <Button variant="primary" onClick={() => setShowCart(false)}>
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <>
                  <div className="space-y-space-sm">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center p-space-md bg-white rounded-radius-md">
                        <div>
                          <p className="font-body-bold">{item.name}</p>
                          <p className="text-small text-neutral-600">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-body-bold">
                          {(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-space-lg p-space-md bg-white rounded-radius-md border-2 border-primary">
                    <div className="flex justify-between items-center mb-space-md">
                      <p className="text-h4">Total:</p>
                      <p className="text-h3 text-primary">${cartTotal.toFixed(2)}</p>
                    </div>
                    <Button variant="primary" className="w-full mb-space-sm">
                      Proceed to Checkout
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => setShowCart(false)}>
                      Continue Shopping
                    </Button>
                  </div>
                </>
              )}
            </div>
          ) : (
            // Browse View
            <div className="space-y-space-lg">
              {/* Search and Filter */}
              <div className="space-y-space-md">
                <SearchBar
                  placeholder="Search products or ingredients..."
                  onSearch={setSearchQuery}
                  onFilterChange={(filters) => {
                    setSelectedCategory(filters.category as string)
                  }}
                />
              </div>

              {/* Category Filter Chips */}
              <div className="flex gap-space-sm flex-wrap">
                <Button
                  variant={!selectedCategory ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setSelectedCategory(undefined)}
                >
                  All Products
                </Button>
                {['cleaning', 'personal'].map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? 'primary' : 'secondary'}
                    size="sm"
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </Button>
                ))}
              </div>

              {/* Products Grid */}
              {filteredProducts.length === 0 ? (
                <div className="text-center py-space-xl text-neutral-600">
                  <p className="text-h4">No products found</p>
                  <p className="text-small">Try adjusting your search or filters</p>
                </div>
              ) : (
                <>
                  <p className="text-small text-neutral-600">
                    Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
                    {filteredProducts.map((product) => (
                      <div key={product.id} className="relative">
                        <ProductCard
                          {...product}
                          onAddToCart={() => handleAddToCart(product)}
                          onViewDetails={(id) => console.log('View details:', id)}
                        />
                        {addedProduct === product.id && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-radius-lg">
                            <div className="bg-white p-space-md rounded-radius-md text-center">
                              <p className="text-h4 text-success">✓ Added to cart!</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    )
  },
}
