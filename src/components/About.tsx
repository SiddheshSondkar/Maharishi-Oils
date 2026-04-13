import { Leaf, Droplets, Sprout } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600" 
                alt="Fresh seeds" 
                className="rounded-3xl rounded-tr-none w-full h-64 object-cover shadow-md"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=600" 
                alt="Oil pouring" 
                className="rounded-3xl rounded-bl-none w-full h-64 object-cover shadow-md mt-8"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-xl">
              <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center text-white">
                <Leaf size={32} />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold tracking-widest text-brand-green uppercase mb-3">{t('about.badge')}</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              {t('about.title.rooted')}<span className="text-brand-red">{t('about.title.trad')}</span>{t('about.title.crafted')}
            </h3>
            
            <p className="text-lg text-gray-600 mb-6 font-light leading-relaxed">
              {t('about.desc1')}
            </p>
            
            <p className="text-lg text-gray-600 mb-10 font-light leading-relaxed">
              {t('about.desc2')}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-beige flex items-center justify-center flex-shrink-0">
                  <Droplets className="text-brand-yellow" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-gray-900 mb-1">{t('about.zero')}</h4>
                  <p className="text-gray-600 font-light">{t('about.zeroDesc')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-beige flex items-center justify-center flex-shrink-0">
                  <Sprout className="text-brand-green" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-gray-900 mb-1">{t('about.farmer')}</h4>
                  <p className="text-gray-600 font-light">{t('about.farmerDesc')}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
