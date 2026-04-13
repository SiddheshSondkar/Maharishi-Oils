import { Search, Settings, ThermometerSnowflake, Filter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      id: 1,
      title: t('proc.s1'),
      description: t('proc.s1d'),
      icon: Search,
      color: 'text-brand-green',
      bg: 'bg-green-50'
    },
    {
      id: 2,
      title: t('proc.s2'),
      description: t('proc.s2d'),
      icon: Settings,
      color: 'text-brand-yellow',
      bg: 'bg-yellow-50'
    },
    {
      id: 3,
      title: t('proc.s3'),
      description: t('proc.s3d'),
      icon: ThermometerSnowflake,
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      id: 4,
      title: t('proc.s4'),
      description: t('proc.s4d'),
      icon: Filter,
      color: 'text-brand-red',
      bg: 'bg-red-50'
    }
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-green uppercase mb-3">{t('proc.badge')}</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            {t('proc.title')}
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            {t('proc.desc')}
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow text-center">
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                    {step.id}
                  </div>
                  
                  <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${step.bg}`}>
                    <Icon className={step.color} size={36} />
                  </div>
                  
                  <h4 className="text-xl font-serif font-bold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
