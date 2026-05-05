"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'





export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#FAF9F6] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37] bg-white shadow-sm transition-transform hover:scale-105">
                <Image 
                  src="/images/logo.jpeg" 
                  alt="Tradi's Art Logo" 
                  fill 
                  style={{objectFit: "cover"}}
                />
              </div>
              <span className="font-serif text-2xl text-[#800020] font-bold tracking-wider">Tradi’s Art</span>
            </Link>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link href="/" className="text-gray-800 hover:text-[#D4AF37] hover:border-[#D4AF37] px-5 py-2 text-base font-semibold border-2 border-gray-200 rounded-full transition-all">Accueil</Link>
            <Link href="/boutique" className="text-gray-800 hover:text-[#D4AF37] hover:border-[#D4AF37] px-5 py-2 text-base font-semibold border-2 border-gray-200 rounded-full transition-all">Boutique</Link>
            <Link href="/contact" className="text-gray-800 hover:text-[#D4AF37] hover:border-[#D4AF37] px-5 py-2 text-base font-semibold border-2 border-gray-200 rounded-full transition-all">Contact</Link>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-[#D4AF37] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-[#FAF9F6]">
          <div className="px-4 pt-4 pb-6 space-y-3 sm:px-3">
            <Link href="/" className="block px-4 py-3 text-lg font-semibold text-center text-gray-800 hover:text-[#D4AF37] border-2 border-gray-200 hover:border-[#D4AF37] rounded-full transition-all">Accueil</Link>
            <Link href="/boutique" className="block px-4 py-3 text-lg font-semibold text-center text-gray-800 hover:text-[#D4AF37] border-2 border-gray-200 hover:border-[#D4AF37] rounded-full transition-all">Boutique</Link>
            <Link href="/contact" className="block px-4 py-3 text-lg font-semibold text-center text-gray-800 hover:text-[#D4AF37] border-2 border-gray-200 hover:border-[#D4AF37] rounded-full transition-all">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}