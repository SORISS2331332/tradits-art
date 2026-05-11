"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface CategoryCarouselProps {
  name: string
  images: string[]
}

export default function CategoryCarousel({ name, images }: CategoryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault() // prevent Link navigation
    e.stopPropagation()
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault() // prevent Link navigation
    e.stopPropagation()
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <>
      {images.map((img, idx) => (
        <Image 
          key={idx}
          src={img} 
          alt={`${name} - Image ${idx + 1}`} 
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className={`object-cover z-10 transition-opacity duration-700 ${idx === currentIndex ? 'opacity-100 group-hover:scale-110' : 'opacity-0'}`}
          onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
        />
      ))}
      
      {/* Arrows */}
      {images.length > 1 && (
        <div className="absolute inset-0 z-40 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={prevSlide}
            className="bg-black/50 text-white rounded-full p-1 hover:bg-black/70 flex items-center justify-center w-8 h-8 focus:outline-none"
            aria-label="Image précédente"
          >
            &#10094;
          </button>
          <button 
            onClick={nextSlide}
            className="bg-black/50 text-white rounded-full p-1 hover:bg-black/70 flex items-center justify-center w-8 h-8 focus:outline-none"
            aria-label="Image suivante"
          >
            &#10095;
          </button>
        </div>
      )}
    </>
  )
}
