"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'

const CAROUSEL_SLIDES = [
  { 
    id: 1, 
    src: null, 
    showText: true 
  },
  { 
    id: 2, 
    src: '/images/hero-defile.jpeg', 
    showText: false 
  },
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length)
    }, 9000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length)

  return (
    <div className="relative h-[80vh] min-h-[600px] w-full bg-stone-900 overflow-hidden">
      {/* Background Images */}
      {CAROUSEL_SLIDES.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {slide.src ? (
            <>
              <Image 
                src={slide.src} 
                alt="Hero background" 
                fill
                className="object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
              />
              {slide.showText && <div className="absolute inset-0 bg-black/50" />}
            </>
          ) : (
            <div className="absolute inset-0 bg-stone-900" />
          )}
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        
        {CAROUSEL_SLIDES[currentIndex].showText && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8 rounded-full overflow-hidden border-4 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)] w-32 h-32 md:w-40 md:h-40 relative bg-white"
            >
              <Image 
                src="/images/logo.jpeg" 
                alt="Tradi's Art Logo" 
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-cover"
              />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
            >
              L’Élégance des <span className="text-[#D4AF37]">Perles Traditionnelles</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl"
            >
              Des bijoux artisanaux d’exception pour vos mariages, cérémonies culturelles et événements fashion.
            </motion.p>
          </>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-auto mb-32 md:mb-0 md:mt-0"
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
        {CAROUSEL_SLIDES.map((_, index) => (
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