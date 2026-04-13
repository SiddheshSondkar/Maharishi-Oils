export default function Gallery() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=800',
      title: 'Wooden Ghani Machine',
      colSpan: 'col-span-1 md:col-span-2 row-span-2'
    },
    {
      url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600',
      title: 'Premium Seeds',
      colSpan: 'col-span-1 row-span-1'
    },
    {
      url: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=600',
      title: 'Pure Extraction',
      colSpan: 'col-span-1 row-span-1'
    },
    {
      url: 'https://images.unsplash.com/photo-1611078505508-31621255e263?auto=format&fit=crop&q=80&w=600',
      title: 'Final Product',
      colSpan: 'col-span-1 md:col-span-2 row-span-1'
    }
  ];

  return (
    <section className="py-20 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase mb-3">Gallery</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            A Glimpse of Purity
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.colSpan}`}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h4 className="text-white font-serif font-bold text-xl tracking-wide">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
