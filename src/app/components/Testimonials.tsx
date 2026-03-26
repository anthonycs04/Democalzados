import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sofía Martínez',
    text: 'Estos zapatos son increíblemente cómodos y elegantes. ¡Recibo cumplidos cada vez que los uso!',
    rating: 5
  },
  {
    id: 2,
    name: 'Carlos Ruiz',
    text: 'La calidad es excepcional. Se puede sentir la artesanía en cada detalle. Vale cada peso.',
    rating: 5
  },
  {
    id: 3,
    name: 'Ana Gómez',
    text: 'Mezcla perfecta de elegancia y comodidad. NOMBRE se ha convertido en mi marca favorita.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6" style={{ backgroundColor: '#1A1A1A' }}>
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
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div
            className="w-24 h-px mx-auto"
            style={{ backgroundColor: '#C9A84C' }}
          />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 border"
              style={{
                backgroundColor: '#111111',
                borderColor: '#C9A84C'
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current"
                    style={{ color: '#C9A84C' }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-lg mb-6 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                "{testimonial.text}"
              </p>

              {/* Name */}
              <p
                className="font-medium"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  color: '#C9A84C'
                }}
              >
                — {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}