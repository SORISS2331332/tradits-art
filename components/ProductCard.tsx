"use client"
import Image from 'next/image'


interface ProductProps {
  id: number
  name: string
  price: number
  image: string
  category: string
}

export default function ProductCard({ name, price, image, category }: ProductProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-gray-100 flex items-center justify-center">
        {/* Placeholder if image isn't loaded/found. Since you asked to name images, we use text as fallback if the path 404s in Next.js, but standard img tag is better for mock offline */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium text-sm">
          Images: {image.split('/').pop()}
        </div>
        <Image 
          src={image} 
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // Hide broken image so placeholder shows
            (e.target as HTMLImageElement).style.opacity = '0';
          }}
        />
        <div className="absolute top-3 right-3 z-20">
          <span className="bg-[#FAF9F6] text-[#800020] text-xs font-bold px-2 py-1 rounded-full shadow-sm">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-lg font-semibold text-gray-900 mb-1 line-clamp-1">{name}</h3>
        <p className="text-[#D4AF37] font-bold text-xl mb-4">{price} MAD</p>
        
        <div className="mt-auto">
          <button className="w-full bg-transparent hover:bg-[#800020] text-[#800020] hover:text-white border border-[#800020] font-medium py-2 px-4 rounded transition-colors duration-300">
            Détails
          </button>
        </div>
      </div>
    </div>
  )
}