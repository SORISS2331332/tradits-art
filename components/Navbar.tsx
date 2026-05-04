"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'

const InstagramIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const FacebookIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
)

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
              <span className="font-serif text-2xl text-[#800020] font-bold tracking-wider">Tradi's Art</span>
            </Link>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-gray-800 hover:text-[#D4AF37] px-3 py-2 text-sm font-medium transition-colors">Accueil</Link>
            <Link href="/boutique" className="text-gray-800 hover:text-[#D4AF37] px-3 py-2 text-sm font-medium transition-colors">Boutique</Link>
            <Link href="/contact" className="text-gray-800 hover:text-[#D4AF37] px-3 py-2 text-sm font-medium transition-colors">Contact</Link>
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-[#D4AF37] hover:bg-gray-50">Accueil</Link>
            <Link href="/boutique" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-[#D4AF37] hover:bg-gray-50">Boutique</Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-[#D4AF37] hover:bg-gray-50">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}