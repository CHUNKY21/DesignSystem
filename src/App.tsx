import { useState } from 'react'
import { Header, SearchBar, ProductGrid } from './components'

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

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    console.log('Search for:', query)
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      <main className="px-space-lg py-space-2xl max-w-6xl mx-auto">
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
            <ProductGrid products={SAMPLE_PRODUCTS} />
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
      </main>
    </div>
  )
}
