import { useState } from 'react'
import { Header, SearchBar, ProductGrid, ProductDetail, ComparisonTable } from './components'

const SAMPLE_PRODUCT_DETAIL = {
  id: '1',
  name: 'EWG Verified All Purpose Cleaner',
  brand: 'Grove Collaborative',
  image: 'https://images.unsplash.com/photo-1584622181563-430f63602d4b?w=500&h=500&fit=crop',
  status: 'safe' as const,
  rating: 4.5,
  ratingCount: 324,
  price: '$12.99',
  description: 'This all-purpose cleaner is made with plant-based ingredients and is certified by the Environmental Working Group (EWG). It effectively cleans all household surfaces without harsh chemicals, making it safe for families with children and pets.',
  certifications: ['EWG Verified', 'Biodegradable', 'Cruelty-Free'],
  ingredients: [
    {
      name: 'Water',
      status: 'safe' as const,
      hazardScore: 0,
      description: 'Pure water, an inert solvent that is completely safe.',
    },
    {
      name: 'Coconut Oil Surfactant',
      status: 'safe' as const,
      hazardScore: 1,
      description: 'Plant-derived surfactant from coconut oil, biodegradable and gentle.',
    },
    {
      name: 'Plant-based Enzymes',
      status: 'safe' as const,
      hazardScore: 2,
      description: 'Natural enzymes that break down dirt and grime, safe for all surfaces.',
    },
  ],
}

const SAMPLE_PRODUCTS = [
  {
    id: '1',
    name: 'EWG Verified All Purpose Cleaner',
    brand: 'Grove Collaborative',
    rating: 4,
    ratingCount: 324,
    price: '$12.99',
    status: 'safe' as const,
    ingredients: ['Water', 'Coconut Oil', 'Plant-based Enzymes'],
  },
  {
    id: '2',
    name: 'Seventh Generation Free & Clear Laundry',
    brand: 'Seventh Generation',
    rating: 5,
    ratingCount: 892,
    price: '$8.49',
    status: 'safe' as const,
    ingredients: ['Plant Cellulose', 'Mineral-based', 'Hypoallergenic'],
  },
  {
    id: '3',
    name: 'Method All-Purpose Cleaner',
    brand: 'Method',
    rating: 3,
    ratingCount: 156,
    price: '$4.29',
    status: 'caution' as const,
    ingredients: ['Sodium Lauryl Sulfate', 'Water', 'Essential Oils'],
  },
  {
    id: '4',
    name: 'Ecos Hypoallergenic Laundry Detergent',
    brand: 'Earth Friendly Products',
    rating: 4,
    ratingCount: 445,
    price: '$7.99',
    status: 'safe' as const,
    ingredients: ['Plant-derived', 'Enzyme-based', 'Fragrance-free'],
  },
  {
    id: '5',
    name: 'Dr. Bronner Pure Castile Soap',
    brand: 'Dr. Bronner\'s',
    rating: 5,
    ratingCount: 1203,
    price: '$9.99',
    status: 'safe' as const,
    ingredients: ['Coconut Oil', 'Olive Oil', 'Jojoba Oil'],
  },
  {
    id: '6',
    name: 'Clorox Regular Bleach',
    brand: 'Clorox',
    rating: 4,
    ratingCount: 523,
    price: '$3.49',
    status: 'harmful' as const,
    ingredients: ['Sodium Hypochlorite', 'Water', 'Sodium Hydroxide'],
  },
]

const COMPARISON_PRODUCTS = [
  {
    id: '1',
    name: 'EWG Verified All Purpose Cleaner',
    brand: 'Grove Collaborative',
    price: '$12.99',
    rating: 4.5,
    status: 'safe' as const,
    ingredients: ['Water', 'Coconut Oil', 'Plant-based Enzymes'],
    features: {
      'Eco-Friendly': true,
      'Hypoallergenic': true,
      'Cruelty-Free': true,
      'Vegan': true,
      'Fragrance-Free': false,
    },
  },
  {
    id: '3',
    name: 'Method All-Purpose Cleaner',
    brand: 'Method',
    price: '$4.29',
    rating: 3.5,
    status: 'caution' as const,
    ingredients: ['Sodium Lauryl Sulfate', 'Water', 'Essential Oils'],
    features: {
      'Eco-Friendly': true,
      'Hypoallergenic': false,
      'Cruelty-Free': true,
      'Vegan': true,
      'Fragrance-Free': false,
    },
  },
  {
    id: '6',
    name: 'Clorox Regular Bleach',
    brand: 'Clorox',
    price: '$3.49',
    rating: 4,
    status: 'harmful' as const,
    ingredients: ['Sodium Hypochlorite', 'Water', 'Sodium Hydroxide'],
    features: {
      'Eco-Friendly': false,
      'Hypoallergenic': false,
      'Cruelty-Free': false,
      'Vegan': false,
      'Fragrance-Free': true,
    },
  },
]

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentView, setCurrentView] = useState<'home' | 'detail' | 'comparison'>('home')
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    console.log('Search for:', query)
  }

  const handleViewDetails = (id: string) => {
    setSelectedProductId(id)
    setCurrentView('detail')
  }

  const handleCompare = () => {
    setCurrentView('comparison')
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      {/* Back Button for Detail View */}
      {currentView !== 'home' && (
        <div className="bg-white border-b border-neutral-200 px-space-lg py-space-md">
          <button
            onClick={() => setCurrentView('home')}
            className="text-primary hover:text-primary-light transition-colors font-body-bold flex items-center gap-space-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Results
          </button>
        </div>
      )}

      <main className="px-space-lg py-space-2xl max-w-6xl mx-auto">
        {/* Product Detail View */}
        {currentView === 'detail' && selectedProductId === '1' && (
          <ProductDetail
            {...SAMPLE_PRODUCT_DETAIL}
            onAddToCart={() => console.log('Added to cart')}
            onSave={() => console.log('Saved product')}
          />
        )}

        {/* Comparison View */}
        {currentView === 'comparison' && (
          <section>
            <h2 className="text-h2 text-neutral-900 mb-space-lg">Compare Products</h2>
            <div className="bg-white rounded-radius-lg shadow-md overflow-hidden">
              <ComparisonTable products={COMPARISON_PRODUCTS} />
            </div>
          </section>
        )}

        {/* Home/Search View */}
        {currentView === 'home' && (
          <>
            {/* Hero Section */}
            <section className="mb-space-3xl">
              <div className="space-y-space-lg">
                <h1 className="text-h1 text-neutral-900">
                  Find <span className="text-primary">clean</span> products for your home
                </h1>
                <p className="text-body text-neutral-600 max-w-2xl">
                  Research ingredient safety, avoid harmful chemicals, and make informed purchasing decisions with AI-powered product analysis.
                </p>
              </div>
            </section>

            {/* Search Section */}
            <section className="mb-space-3xl">
              <div className="bg-white rounded-radius-lg p-space-lg shadow-md">
                <SearchBar onSearch={handleSearch} />
              </div>
            </section>

            {/* Results */}
            {searchQuery && (
              <section>
                <h2 className="text-h2 text-neutral-900 mb-space-lg">
                  Results for "<span className="text-primary">{searchQuery}</span>"
                </h2>
                <ProductGrid
                  products={SAMPLE_PRODUCTS}
                  onViewDetails={handleViewDetails}
                />
                <div className="mt-space-2xl text-center">
                  <button
                    onClick={handleCompare}
                    className="text-primary hover:text-primary-light font-body-bold text-body"
                  >
                    Compare selected products →
                  </button>
                </div>
              </section>
            )}

            {!searchQuery && (
              <section>
                <h2 className="text-h2 text-neutral-900 mb-space-lg">How it works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                  {[
                    { step: '1', title: 'Search', desc: 'Describe what youre looking for' },
                    { step: '2', title: 'Analyze', desc: 'We check ingredients against safety data' },
                    { step: '3', title: 'Compare', desc: 'See recommendations with detailed reasoning' },
                  ].map((item) => (
                    <div key={item.step} className="bg-white rounded-radius-lg p-space-lg shadow-sm">
                      <div className="w-10 h-10 rounded-radius-full bg-primary text-white flex items-center justify-center text-h4 font-bold mb-space-md">
                        {item.step}
                      </div>
                      <h3 className="text-h3 text-neutral-900 mb-space-sm">{item.title}</h3>
                      <p className="text-body text-neutral-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </main>
    </div>
  )
}
