import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-brand-beige">
      {/* Background Pattern/Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=2000" 
          alt="Oil background pattern" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green font-semibold text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-green"></span>
              {t('hero.badge')}
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.1] mb-6">
              {t('hero.title.pure')}<span className="text-brand-red">{t('hero.title.lakdi')}</span>{t('hero.title.life')}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 font-light leading-relaxed">
              {t('hero.desc')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/918080021218?text=Hello%20Maharishi%20Oils,%20I%20would%20like%20to%20place%20an%20order." 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-yellow text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {t('hero.order')}
                <ArrowRight size={20} />
              </a>
              <a 
                href="#products" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-lg text-gray-700 bg-white border border-gray-200 hover:border-brand-yellow hover:text-brand-yellow transition-all shadow-sm"
              >
                {t('hero.view')}
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <img src="https://cdn-icons-png.flaticon.com/512/2933/2933116.png" alt="Natural" className="w-6 h-6 opacity-70" referrerPolicy="no-referrer" />
                </div>
                <span>{t('hero.natural')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <img src="https://cdn-icons-png.flaticon.com/512/3063/3063822.png" alt="No Heat" className="w-6 h-6 opacity-70" referrerPolicy="no-referrer" />
                </div>
                <span>{t('hero.cold')}</span>
              </div>
            </div>
          </div>
          
          <div className="relative lg:ml-auto">
            <div className="relative rounded-t-full rounded-b-[40px] overflow-hidden border-8 border-white shadow-2xl aspect-[4/5] max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=800" 
                alt="Traditional Wooden Ghani Oil Extraction" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                <p className="font-serif font-bold text-brand-green text-lg">{t('hero.trad')}</p>
                <p className="text-sm text-gray-600">{t('hero.tradDesc')}</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-yellow rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-green rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
