import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase mb-3">{t('contact.badge')}</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            {t('contact.title')}
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            {t('contact.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-brand-beige rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          
          {/* Contact Info */}
          <div className="p-8 md:p-12">
            <h4 className="text-2xl font-serif font-bold text-gray-900 mb-8">Contact Information</h4>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="text-brand-green" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">{t('contact.phone')}</p>
                  <a href="tel:+918080021218" className="block text-lg font-medium text-gray-900 hover:text-brand-yellow transition-colors">+91 80800 21218</a>
                  <p className="text-sm text-gray-600 mt-1">Call us for bulk orders or inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="text-brand-yellow" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">{t('contact.email')}</p>
                  <a href="mailto:hello@maharishioils.com" className="block text-lg font-medium text-gray-900 hover:text-brand-yellow transition-colors">hello@maharishioils.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="text-brand-red" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">{t('contact.address')}</p>
                  <p className="text-lg font-medium text-gray-900">Maharishi Lakdi Ghani Unit</p>
                  <p className="text-gray-600 mt-1">Bapdev Ghat, Saswad-Kondwa Road,<br />Pune, Maharashtra</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Clock className="text-blue-500" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">{t('contact.hours')}</p>
                  <p className="text-lg font-medium text-gray-900">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600 mt-1">Sunday Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/918080021218?text=Hello%20Maharishi%20Oils,%20I%20would%20like%20to%20place%20an%20order." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#128C7E] transition-colors shadow-md"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                {t('contact.whatsapp')}
              </a>
            </div>
          </div>

          {/* Google Maps Iframe */}
          <div className="bg-gray-200 h-full min-h-[400px] relative rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.6810172155!2d73.72862496731464!3d18.52461645064501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
