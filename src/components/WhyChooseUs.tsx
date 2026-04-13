import { Heart, Droplet, Sun, Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Heart,
      title: t('why.r1'),
      desc: t('why.r1d')
    },
    {
      icon: Droplet,
      title: t('why.r2'),
      desc: t('why.r2d')
    },
    {
      icon: Sun,
      title: t('why.r3'),
      desc: t('why.r3d')
    },
    {
      icon: Activity,
      title: t('why.r4'),
      desc: t('why.r4d')
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-brand-green text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-brand-yellow opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-sm font-bold tracking-widest text-brand-yellow uppercase mb-3">{t('why.badge')}</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              {t('why.title')}
            </h3>
            <p className="text-green-50 text-lg font-light mb-8 leading-relaxed">
              {t('why.desc')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, idx) => {
                const Icon = reason.icon;
                return (
                  <div key={idx} className="flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Icon className="text-brand-yellow" size={24} />
                    </div>
                    <h4 className="text-xl font-bold">{reason.title}</h4>
                    <p className="text-green-100 text-sm font-light leading-relaxed">{reason.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full border-2 border-dashed border-white/30 p-4">
              <div className="w-full h-full rounded-full overflow-hidden border-8 border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800" 
                  alt="Healthy lifestyle" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute top-1/4 -left-8 bg-white text-gray-900 p-4 rounded-2xl shadow-2xl flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-white font-bold text-xl">
                100%
              </div>
              <div>
                <p className="font-bold text-sm">Cholesterol Free</p>
                <p className="text-xs text-gray-500">Heart Healthy</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
