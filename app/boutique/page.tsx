"use client"
import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import { products, categories } from '@/data/products'

export default function Boutique() {
  const [activeCategory, setActiveCategory] = useState("Tous")

  const filteredProducts = activeCategory === "Tous" 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#800020] mb-4">Notre Boutique</h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre collection complète de bijoux artisanaux. Chaque pièce est réalisée avec passion 
            et respect des traditions pour sublimer votre beauté.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat 
                  ? "bg-[#D4AF37] text-white shadow-md" 
                  : "bg-white text-gray-700 border border-gray-200 hover:border-[#D4AF37] hover:text-[#D4AF37]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Aucun produit trouvé dans cette catégorie pour le moment.</p>
          </div>
        )}

      </div>
    </div>
  )
}