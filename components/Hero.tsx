"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'

const CAROUSEL_IMAGES = [
  { id: 1, src: '/images/hero-mariage.jpg', title: 'Bijoux pour Mariage', name: 'hero-mariage.jpg' },
  { id: 2, src: '/images/hero-couronne.jpg', title: 'Couronnes Royales', name: 'hero-couronne.jpg' },
  { id: 3, src: '/images/hero-defile.jpg', title: 'Événements Fashion', name: 'hero-defile.jpg' },
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length)

  return (
    <div className="relative h-[80vh] min-h-[600px] w-full bg-stone-900 overflow-hidden">
      {/* Background Images */}
      {CAROUSEL_IMAGES.map((img, index) => (
        <div 
          key={img.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 relative z-10' : 'opacity-0 z-0'}`}
        >
          {/* Fallback pattern / Placeholder for missing image */}
          <div className="absolute inset-0 bg-stone-800 flex items-center justify-center text-stone-500 flex-col">
            <span className="text-xl">Image à placer : {img.name}</span>
            <span>(Taille recommandée : 1920x1080)</span>
          </div>
          
          <img 
            src={img.src} 
            alt={img.title} 
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
          />
          
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 rounded-full overflow-hidden border-4 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)] w-32 h-32 md:w-40 md:h-40 relative bg-white"
        >
          <img 
            src="/images/logo.jpeg" 
            alt="Tradis Art Logo" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h1 
          key={`title-${currentIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
        >
          L'Élégance des <span className="text-[#D4AF37]">Perles Traditionnelles</span>
        </motion.h1>
        
        <motion.p 
          key={`desc-${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl"
        >
          Des bijoux artisanaux d'exception pour vos mariages, cérémonies culturelles et événements fashion.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/boutique" className="bg-[#D4AF37] hover:bg-[#b0902c] text-black font-semibold px-8 py-3 rounded-md transition-colors text-center">
            Découvrir la Collection
          </Link>
          <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold px-8 py-3 rounded-md transition-colors text-center">
            Nous Contacter
          </Link>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-5 left-0 right-0 z-30 flex justify-center gap-2">
        {CAROUSEL_IMAGES.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-[#D4AF37] w-8' : 'bg-white/50'}`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
      
      <button 
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-[#D4AF37] text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-[#D4AF37] text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}