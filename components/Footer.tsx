
import Image from 'next/image'

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

const LinkedinIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF37] relative bg-white flex-shrink-0">
                <Image src="/images/logo.jpeg" alt="Tradi’s Art Logo" fill className="object-cover" />
              </div>
              <h3 className="font-serif text-2xl text-[#D4AF37] font-bold">Tradi’s Art</h3>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              L’élégance des perles traditionnelles. Bijoux artisanaux faits main pour toutes vos occasions spéciales.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://www.instagram.com/tradisart.7154?igsh=OG5vdjBycjVhb3Rr&utm_source=qr" className="text-[#E1306C] hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer"><InstagramIcon size={32} /></a>
            <a href="https://www.facebook.com/share/1GvtNPNQzt/?mibextid=wwXIfr" className="text-[#1877F2] hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer"><FacebookIcon size={32} /></a>
            <a href="https://www.tiktok.com/@tradis.art?_r=1&_t=ZS-95rNa102LxP" className="text-white hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/tradi’s-art-70006b408" className="text-[#0A66C2] hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer"><LinkedinIcon size={32} /></a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tradi’s Art. Tous droits réservés. L’élégance de nos traditions.</p>
        </div>
      </div>
    </footer>
  )
}