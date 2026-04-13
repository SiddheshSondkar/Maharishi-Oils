import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../translations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.products'), href: '#products' },
    { name: t('nav.process'), href: '#process' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'mr', label: 'मराठी' },
  ];

  return (
    <nav className="fixed w-full bg-brand-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">
                M
              </div>
              <div>
                <h1 className="font-serif font-bold text-2xl text-brand-red leading-none">Maharishi Oils</h1>
                <p className="text-[10px] uppercase tracking-widest text-brand-green font-semibold mt-1">Lakdi Ghani</p>
              </div>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-brand-red font-medium text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-brand-red font-medium text-sm transition-colors"
              >
                <Globe size={18} />
                <span className="uppercase">{language}</span>
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-brand-beige transition-colors ${language === lang.code ? 'text-brand-red font-bold' : 'text-gray-700'}`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="https://wa.me/918080021218?text=Hello%20Maharishi%20Oils,%20I%20would%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-yellow text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-yellow-500 transition-colors shadow-sm"
            >
              {t('nav.order')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-4">
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-brand-red font-medium text-sm transition-colors"
              >
                <Globe size={20} />
                <span className="uppercase">{language}</span>
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-brand-beige transition-colors ${language === lang.code ? 'text-brand-red font-bold' : 'text-gray-700'}`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand-red focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-brand-red hover:bg-brand-beige rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/918080021218?text=Hello%20Maharishi%20Oils,%20I%20would%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-brand-yellow text-white px-6 py-3 rounded-full font-medium text-base hover:bg-yellow-500 transition-colors"
            >
              {t('nav.order')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
