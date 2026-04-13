import { ShieldCheck, Award, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Trust() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-brand-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{t('trust.title')}</h2>
          <p className="text-green-100 max-w-2xl mx-auto font-light">
            {t('trust.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* FSSAI */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-colors">
            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
              <ShieldCheck className="text-brand-green" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">{t('trust.fssai')}</h3>
            <p className="text-green-100 text-sm mb-4">{t('trust.fssaiDesc')}</p>
            <div className="inline-block bg-brand-green/50 px-4 py-2 rounded-lg font-mono text-sm border border-green-400/30">
              Lic No. 1152XXXXXXXXXX
            </div>
          </div>

          {/* Lab Reports */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-colors">
            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
              <FileText className="text-brand-yellow" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">{t('trust.lab')}</h3>
            <p className="text-green-100 text-sm mb-6">{t('trust.labDesc')}</p>
            {/* Note: Place your PDF file named 'lab-report.pdf' in the 'public' folder */}
            <a 
              href="/lab-report.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-brand-yellow font-semibold hover:text-white transition-colors underline underline-offset-4"
            >
              {t('trust.labBtn')}
            </a>
          </div>

          {/* MSME */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-colors">
            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Award className="text-brand-red" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">{t('trust.govt')}</h3>
            <p className="text-green-100 text-sm mb-4">{t('trust.govtDesc')}</p>
            <div className="inline-block bg-brand-green/50 px-4 py-2 rounded-lg font-mono text-sm border border-green-400/30">
              Udyam Registered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
