import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logo from 'figma:asset/41b3c736b89ddd8d9b55b7b7c4d5ee297decb173.png';
import heroImage from 'figma:asset/7cde0dfda88b2be5c5eac7e5db5a6996bc41330d.png';

export function Hero() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Calzados LUAS"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <img
            src={logo}
            alt="Calzados LUAS"
            className="w-48 md:w-64 lg:w-80 mx-auto"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-xl md:text-2xl lg:text-3xl mb-12 tracking-wide"
          style={{ 
            fontFamily: 'Inter, sans-serif',
            color: '#C9A84C'
          }}
        >
          Donde el confort se encuentra con el diseño contemporáneo
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={handleWhatsAppClick}
            className="px-10 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: 'Inter, sans-serif',
              backgroundColor: '#C9A84C',
              color: '#111111'
            }}
          >
            Comprar por WhatsApp
          </button>
          <a
            href="#catalog"
            className="px-10 py-4 border text-lg font-medium transition-all duration-300 hover:bg-white/10"
            style={{
              fontFamily: 'Inter, sans-serif',
              borderColor: '#FFFFFF',
              color: '#FFFFFF'
            }}
          >
            Ver Colección
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}