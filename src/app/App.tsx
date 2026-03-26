import { Hero } from './components/Hero';
import { Catalog } from './components/Catalog';
import { About } from './components/About';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

export default function App() {
  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: '#111111', color: '#FFFFFF' }}>
      {/* Smooth scroll behavior */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Main Content */}
      <Hero />
      <Catalog />
      <About />
      <Benefits />
      <Testimonials />
      <Footer />

      {/* Floating WhatsApp Button (mobile only) */}
      <FloatingWhatsAppButton />
    </div>
  );
}
