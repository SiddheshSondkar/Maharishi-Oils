import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Trust from './components/Trust';
import Products from './components/Products';
import Process from './components/Process';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-brand-white selection:bg-brand-yellow selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Trust />
          <Products />
          <Process />
          <Gallery />
          <WhyChooseUs />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}
