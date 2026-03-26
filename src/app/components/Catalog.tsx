import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProductCard } from './ProductCard';
import productImage from 'figma:asset/7cde0dfda88b2be5c5eac7e5db5a6996bc41330d.png';

const products = [
  {
    id: 1,
    name: 'Cloud Walker',
    price: '$129',
    image: productImage
  },
  {
    id: 2,
    name: 'Urban Luxe',
    price: '$159',
    image: productImage
  },
  {
    id: 3,
    name: 'Velocity',
    price: '$139',
    image: productImage
  },
  {
    id: 4,
    name: 'Street Elite',
    price: '$149',
    image: productImage
  },
  {
    id: 5,
    name: 'Alpine',
    price: '$179',
    image: productImage
  },
  {
    id: 6,
    name: 'Minimal Pro',
    price: '$119',
    image: productImage
  }
];

export function Catalog() {
  return (
    <section id="catalog" className="py-20 px-6" style={{ backgroundColor: '#111111' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Nuestra Colección
          </h2>
          <div
            className="w-24 h-px mx-auto"
            style={{ backgroundColor: '#C9A84C' }}
          />
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}