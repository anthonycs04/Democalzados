import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export function FloatingWhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isVisible ? 1 : 0,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 md:hidden"
      style={{ backgroundColor: '#25D366' }}
      aria-label="Contáctanos por WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </motion.button>
  );
}