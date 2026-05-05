"use client"
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div>
      <Hero />
      
      {/* Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-[#800020] font-bold mb-6">Tradi’s Art</h2>
        <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Nous confectionnons et vendons des bijoux artisanaux uniques, faits à la main avec des perles traditionnelles. 
          Que ce soit pour un mariage, une cérémonie culturelle ou un événement de fashion, Tradi’s Art sublime votre 
          allure avec l’authenticité de notre art.
        </p>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900">Nos Catégories</h2>
              <p className="text-gray-500 mt-2">Découvrez l’étendue de notre savoir-faire</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { name: 'Couronnes Royales', img: '/images/cat-couronne.jpeg' },
              { name: 'Colliers', img: '/images/cat-collier.jpeg' },
              { name: 'Chaînes de Chevilles', img: '/images/cat-cheville.jpeg' },
              { name: 'Chaînes de Hanches', img: '/images/cat-hanche.jpeg' }
            ].map((cat, index) => (
              <Link href="/boutique" key={index} className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center text-xs text-center text-gray-400 p-2">
                  Image: {cat.img.split('/').pop()}
                </div>
                <Image 
                  src={cat.img} 
                  alt={cat.name} 
                  fill
                  className="object-cover z-10 transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20"></div>
                <div className="absolute bottom-4 left-4 right-4 z-30">
                  <h3 className="font-serif text-white text-lg md:text-xl font-bold">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Coups de Cœur</h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
            <p className="text-gray-600">Sélection de nos plus belles créations artisanales.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/boutique" className="inline-block bg-[#800020] hover:bg-[#5a0016] text-white font-medium px-8 py-3 rounded transition-colors shadow-md">
              Voir toute la boutique
            </Link>
          </div>
        </div>
      </section>

      {/* Occasions Banner */}
      <section className="relative py-24 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 flex items-center justify-center text-stone-600 text-sm">bg-occasions.jpg</div>
          <Image src="/images/bg-occasions.jpg" alt="Occasions" fill className="object-cover" onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-white font-bold mb-8 leading-tight">
            Sublimez Vos Moments Uniques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="text-[#D4AF37] font-serif text-2xl font-bold mb-3">Mariages</h3>
              <p className="text-gray-300">Des parures complètes et couronnes royales pour faire de vous la reine de votre grand jour.</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="text-[#D4AF37] font-serif text-2xl font-bold mb-3">Cérémonies</h3>
              <p className="text-gray-300">Des créations authentiques honorant nos traditions pour chaque événement culturel.</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="text-[#D4AF37] font-serif text-2xl font-bold mb-3">Fashion</h3>
              <p className="text-gray-300">L’alliance parfaite entre art traditionnel et tendances actuelles pour vos défilés.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}