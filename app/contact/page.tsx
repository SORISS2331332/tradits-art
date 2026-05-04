"use client"
import { MapPin, Phone, Mail } from 'lucide-react'

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

export default function Contact() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#800020] mb-4">Contactez-nous</h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vous avez une demande spéciale pour un événement ? 
            Vous souhaitez personnaliser une parure ? Nous sommes à votre écoute.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-serif text-2xl font-bold mb-6 text-gray-900">Nos Coordonnées</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#FAF9F6] p-3 rounded-full text-[#D4AF37]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 block mb-1">Téléphone & WhatsApp</p>
                    <p className="text-gray-600">+212 770 34 84 73</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#FAF9F6] p-3 rounded-full text-[#D4AF37]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 block mb-1">Email</p>
                    <p className="text-gray-600">contact@tradisart.ma</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#FAF9F6] p-3 rounded-full text-[#D4AF37]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 block mb-1">Boutique</p>
                    <p className="text-gray-600">Agadir, Maroc<br/>Livraison disponible partout.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-medium text-gray-900 mb-4">Suivez-nous</h4>
                <div className="flex flex-wrap gap-4">
                  <a href="https://www.instagram.com/tradisart.7154?igsh=OG5vdjBycjVhb3Rr&utm_source=qr" className="bg-[#FAF9F6] p-3 rounded-full text-gray-600 hover:text-[#E1306C] transition-colors"><InstagramIcon size={20} /></a>
                  <a href="https://www.facebook.com/share/1GvtNPNQzt/?mibextid=wwXIfr" className="bg-[#FAF9F6] p-3 rounded-full text-gray-600 hover:text-[#1877F2] transition-colors"><FacebookIcon size={20} /></a>
                  <a href="https://www.tiktok.com/@tradis.art?_r=1&_t=ZS-95rNa102LxP" className="bg-[#FAF9F6] p-3 rounded-full text-gray-600 hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/tradi’s-art-70006b408" className="bg-[#FAF9F6] p-3 rounded-full text-gray-600 hover:text-[#0077b5] transition-colors" target="_blank" rel="noopener noreferrer"><LinkedinIcon size={20} /></a>
                </div>
              </div>
            </div>
            
            <div className="bg-stone-900 text-white p-8 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl font-bold mb-4 text-[#D4AF37]">Moyens de Paiement</h3>
              <p className="text-sm text-gray-300 mb-4">
                Pour finaliser votre commande, nous acceptons les paiements bancaires via :
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">• Visa</li>
                <li className="flex items-center gap-2">• AttijariWafa Bank</li>
                <li className="flex items-center gap-2">• CIH Bank</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
              <h3 className="font-serif text-2xl font-bold mb-6 text-gray-900">Envoyez-nous un message</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                    <input type="text" id="name" className="w-full border-gray-300 border rounded-md px-4 py-3 focus:ring-[#800020] focus:border-[#800020] outline-none transition-colors" placeholder="Votre nom" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                    <input type="tel" id="phone" className="w-full border-gray-300 border rounded-md px-4 py-3 focus:ring-[#800020] focus:border-[#800020] outline-none transition-colors" placeholder="+212 ..." />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" id="email" className="w-full border-gray-300 border rounded-md px-4 py-3 focus:ring-[#800020] focus:border-[#800020] outline-none transition-colors" placeholder="votre@email.com" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Sujet *</label>
                  <select id="subject" className="w-full border-gray-300 border rounded-md px-4 py-3 focus:ring-[#800020] focus:border-[#800020] outline-none transition-colors">
                    <option>Demande d'information</option>
                    <option>Commande de bijoux</option>
                    <option>Bijoux personnalisés</option>
                    <option>Événement (Mariage, Défilé...)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea id="message" rows={5} className="w-full border-gray-300 border rounded-md px-4 py-3 focus:ring-[#800020] focus:border-[#800020] outline-none transition-colors" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                </div>
                
                <button type="submit" className="bg-[#800020] hover:bg-[#5a0016] text-white font-medium px-8 py-4 rounded-md transition-colors w-full md:w-auto">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}