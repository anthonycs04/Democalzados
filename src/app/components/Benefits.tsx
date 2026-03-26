import { motion } from 'motion/react';
import { Award, Truck, Shield, Heart } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Calidad Premium',
    description: 'Materiales seleccionados y meticulosa artesanía en cada puntada.'
  },
  {
    icon: Truck,
    title: 'Envío Rápido',
    description: 'Recibe tu pedido directamente en tu puerta en 3-5 días hábiles.'
  },
  {
    icon: Shield,
    title: 'Compra Segura',
    description: 'Compra con confianza. Tu satisfacción es nuestra prioridad.'
  },
  {
    icon: Heart,
    title: 'Hecho con Cuidado',
    description: 'Cada par se crea con pasión, diseñado para ser atesorado.'
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 px-6" style={{ backgroundColor: '#111111' }}>
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
            ¿Por Qué Elegir LUAS?
          </h2>
          <div
            className="w-24 h-px mx-auto"
            style={{ backgroundColor: '#C9A84C' }}
          />
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6"
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#1A1A1A' }}
                  >
                    <Icon className="w-8 h-8" style={{ color: '#C9A84C' }} />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-2xl mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {benefit.title}
                </h3>

                {/* Description */}
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#888888'
                  }}
                >
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}