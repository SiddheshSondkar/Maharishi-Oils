import { ShoppingBag, Droplet, Wheat, Utensils, Package, Coffee } from 'lucide-react';
import { useLanguage, TranslationKey } from '../context/LanguageContext';

type CatalogItem = {
  nameKey: TranslationKey;
  sizes: string[];
};

type Category = {
  id: string;
  titleKey: TranslationKey;
  icon: any;
  items: CatalogItem[];
};

const catalog: Category[] = [
  {
    id: 'oils',
    titleKey: 'cat.oils',
    icon: Droplet,
    items: [
      { nameKey: 'item.oil.groundnut', sizes: ['1 Ltr'] },
      { nameKey: 'item.oil.safflower', sizes: ['1 Ltr'] },
      { nameKey: 'item.oil.coconut', sizes: ['1 Ltr'] },
      { nameKey: 'item.oil.sunflower', sizes: ['1 Ltr'] },
      { nameKey: 'item.oil.almond', sizes: ['100 Ml'] },
      { nameKey: 'item.oil.sesame', sizes: ['1 Ltr'] },
      { nameKey: 'item.oil.mustard', sizes: ['1 Ltr'] },
      { nameKey: 'item.oil.devghar', sizes: ['1 Ltr'] },
    ]
  },
  {
    id: 'grains',
    titleKey: 'cat.grains',
    icon: Wheat,
    items: [
      { nameKey: 'item.grain.mataki', sizes: ['500g'] },
      { nameKey: 'item.grain.harbhara', sizes: ['500g'] },
      { nameKey: 'item.grain.chavali', sizes: ['500g'] },
      { nameKey: 'item.grain.hulge', sizes: ['500g'] },
      { nameKey: 'item.grain.gmoong', sizes: ['500g'] },
      { nameKey: 'item.grain.bghewada', sizes: ['500g'] },
      { nameKey: 'item.grain.ymoong', sizes: ['500g'] },
      { nameKey: 'item.grain.bghewadadal', sizes: ['500g'] },
      { nameKey: 'item.grain.masur', sizes: ['500g'] },
      { nameKey: 'item.grain.indrayani', sizes: ['1 Kg'] },
      { nameKey: 'item.grain.udit', sizes: ['500g'] },
      { nameKey: 'item.grain.hatsadi', sizes: ['1 Kg'] },
      { nameKey: 'item.grain.javas', sizes: ['250g'] },
      { nameKey: 'item.grain.jawari', sizes: ['1 Kg'] },
      { nameKey: 'item.grain.mixseed', sizes: ['250g'] },
      { nameKey: 'item.grain.lapshi', sizes: ['1 Kg'] },
    ]
  },
  {
    id: 'spices',
    titleKey: 'cat.spices',
    icon: Utensils,
    items: [
      { nameKey: 'item.spice.goda', sizes: ['200g'] },
      { nameKey: 'item.spice.mirchi', sizes: ['200g'] },
      { nameKey: 'item.spice.kandalasun', sizes: ['200g', '500g'] },
      { nameKey: 'item.spice.kala', sizes: ['200g', '500g'] },
    ]
  },
  {
    id: 'daily',
    titleKey: 'cat.daily',
    icon: Coffee,
    items: [
      { nameKey: 'item.daily.rocksalt', sizes: ['1 Kg'] },
      { nameKey: 'item.daily.jaggery', sizes: ['1 Kg'] },
      { nameKey: 'item.daily.honey', sizes: ['200g', '500g'] },
      { nameKey: 'item.daily.jaggerypowder', sizes: ['500g'] },
      { nameKey: 'item.daily.turmeric', sizes: ['250g'] },
      { nameKey: 'item.daily.gulkand', sizes: ['250g'] },
      { nameKey: 'item.daily.girgaighee', sizes: ['1/2 Kg'] },
      { nameKey: 'item.daily.bedana', sizes: ['500g'] },
      { nameKey: 'item.daily.cowghee', sizes: ['1 Kg'] },
    ]
  },
  {
    id: 'chutney',
    titleKey: 'cat.chutney',
    icon: Package,
    items: [
      { nameKey: 'item.chutney.shengdana', sizes: ['250g', '500g'] },
      { nameKey: 'item.chutney.flaxseed', sizes: ['200g'] },
      { nameKey: 'item.chutney.karala', sizes: ['200g'] },
      { nameKey: 'item.chutney.sandge', sizes: ['Standard'] },
      { nameKey: 'item.chutney.kadakbhakari', sizes: ['Standard'] },
    ]
  },
  {
    id: 'other',
    titleKey: 'cat.other',
    icon: Package,
    items: [
      { nameKey: 'item.other.aavala', sizes: ['200g'] },
      { nameKey: 'item.other.aavalacundy', sizes: ['100g'] },
      { nameKey: 'item.other.dudhgoli', sizes: ['150g'] },
      { nameKey: 'item.other.ricepapad', sizes: ['200g'] },
      { nameKey: 'item.other.uditpapad', sizes: ['200g'] },
      { nameKey: 'item.other.kurdai', sizes: ['200g'] },
      { nameKey: 'item.other.shevai', sizes: ['1/2 Kg'] },
      { nameKey: 'item.other.dates', sizes: ['1/2 Kg'] },
      { nameKey: 'item.other.pickle', sizes: ['200g'] },
    ]
  }
];

export default function Products() {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-20 md:py-28 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase mb-3">{t('prod.badge')}</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            {t('prod.title')}
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            {t('prod.desc')}
          </p>
        </div>

        <div className="space-y-16">
          {catalog.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-brand-beige flex items-center justify-center text-brand-green">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-gray-900">{t(category.titleKey)}</h4>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-brand-yellow hover:shadow-md transition-all group flex flex-col justify-between">
                      <div>
                        <h5 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors">
                          {t(item.nameKey)}
                        </h5>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {item.sizes.map((size, sIdx) => (
                            <span key={sIdx} className="px-2.5 py-1 bg-white text-gray-600 text-xs font-medium rounded-md border border-gray-200">
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <a 
                        href={`https://wa.me/918080021218?text=Hello%20Maharishi%20Oils,%20I%20am%20interested%20in%20ordering%20${encodeURIComponent(t(item.nameKey))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-white border-2 border-brand-yellow text-brand-yellow py-2.5 rounded-xl font-semibold hover:bg-brand-yellow hover:text-white transition-colors text-sm"
                      >
                        <ShoppingBag size={16} />
                        {t('prod.order')}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
