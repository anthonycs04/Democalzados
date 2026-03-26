import { motion } from 'motion/react';
import { MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';
import logo from 'figma:asset/41b3c736b89ddd8d9b55b7b7c4d5ee297decb173.png';

export function Footer() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <footer className="py-16 px-6" style={{ backgroundColor: '#111111', borderTop: '1px solid #1A1A1A' }}>
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 pb-12 border-b"
          style={{ borderColor: '#1A1A1A' }}
        >
          <h3
            className="text-3xl md:text-4xl mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            ¿Listo para Elevar tu Estilo?
          </h3>
          <p className="text-lg mb-8" style={{ color: '#888888', fontFamily: 'Inter, sans-serif' }}>
            Contáctanos por WhatsApp y encuentra tu par perfecto hoy
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="px-10 py-4 text-lg font-medium flex items-center gap-3 mx-auto transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: 'Inter, sans-serif',
              backgroundColor: '#C9A84C',
              color: '#111111'
            }}
          >
            <MessageCircle className="w-6 h-6" />
            <span>Chatear por WhatsApp</span>
          </button>
        </motion.div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-left">
            <img
              src={logo}
              alt="Calzados LUAS"
              className="w-32 md:w-40 mb-4"
            />
            <p style={{ color: '#888888', fontFamily: 'Inter, sans-serif' }}>
              Elevando el estilo cotidiano con calzado contemporáneo diseñado para el alma moderna.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5
              className="text-xl mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Enlaces Rápidos
            </h5>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>
                <a href="#catalog" className="transition-colors" style={{ color: '#888888' }}>
                  Colección
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors" style={{ color: '#888888' }}>
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#benefits" className="transition-colors" style={{ color: '#888888' }}>
                  Por Qué Elegirnos
                </a>
              </li>
              <li>
                <a href="#testimonials" className="transition-colors" style={{ color: '#888888' }}>
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h5
              className="text-xl mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Síguenos
            </h5>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black"
                style={{ borderColor: '#C9A84C', color: '#C9A84C' }}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black"
                style={{ borderColor: '#C9A84C', color: '#C9A84C' }}
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black"
                style={{ borderColor: '#C9A84C', color: '#C9A84C' }}
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t" style={{ borderColor: '#1A1A1A' }}>
          <p style={{ color: '#888888', fontFamily: 'Inter, sans-serif' }}>
            © 2026 LUAS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}