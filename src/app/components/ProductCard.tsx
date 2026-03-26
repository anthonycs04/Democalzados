import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  index: number;
}

export function ProductCard({ image, name, price, index }: ProductCardProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hola! Me interesa el modelo ${name} - ${price}`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
      style={{ backgroundColor: '#1A1A1A' }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
      </div>

      {/* Product Info */}
      <div className="px-4 pb-4">
        <h3
          className="text-xl mb-2"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {name}
        </h3>
        <p
          className="text-2xl mb-4"
          style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif' }}
        >
          {price}
        </p>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="w-full py-3 px-4 flex items-center justify-center gap-2 border transition-all duration-300 hover:bg-white hover:text-black group/btn"
          style={{
            borderColor: '#C9A84C',
            color: '#C9A84C',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">Consultar</span>
        </button>
      </div>
    </motion.div>
  );
}