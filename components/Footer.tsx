import Link from 'next/link'
import { MapPin, Phone, Mail, CreditCard } from 'lucide-react'

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

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF37] relative bg-white flex-shrink-0">
                <img src="/images/logo.jpeg" alt="Tradis Art Logo" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-serif text-2xl text-[#D4AF37] font-bold">Tradis Art</h3>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Nous confectionnons et vendons des bijoux artisanaux faits avec des perles traditionnelles. 
              Sublimez vos occasions spéciales avec notre savoir-faire unique.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/tradisart.7154?igsh=OG5vdjBycjVhb3Rr&utm_source=qr" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><InstagramIcon size={20} /></a>
              <a href="https://www.facebook.com/share/1GvtNPNQzt/?mibextid=wwXIfr" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><FacebookIcon size={20} /></a>
              <a href="https://www.tiktok.com/@tradis.art?_r=1&_t=ZS-95rNa102LxP" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Liens Rapides</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#D4AF37] transition-colors">Accueil</Link></li>
              <li><Link href="/boutique" className="hover:text-[#D4AF37] transition-colors">Nos Collections</Link></li>
              <li><Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contactez-nous</Link></li>
              <li><Link href="#" className="hover:text-[#D4AF37] transition-colors">Mentions légales</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span>Casablanca, Maroc (Livraison internationale)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#D4AF37] flex-shrink-0" />
                <span>+212 600 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#D4AF37] flex-shrink-0" />
                <span>contact@tradisart.ma</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Paiements Sécurisés</h4>
            <p className="text-sm mb-3">Nous acceptons les virements bancaires :</p>
            <ul className="space-y-2 text-sm flex flex-col">
              <li className="flex items-center gap-2"><CreditCard size={16} className="text-[#D4AF37]"/> CIH Bank</li>
              <li className="flex items-center gap-2"><CreditCard size={16} className="text-[#D4AF37]"/> AttijariWafa Bank</li>
              <li className="flex items-center gap-2"><CreditCard size={16} className="text-[#D4AF37]"/> Carte VISA</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tradis Art. Tous droits réservés. L'élégance de nos traditions.</p>
        </div>
      </div>
    </footer>
  )
}