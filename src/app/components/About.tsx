import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-32 px-6" style={{ backgroundColor: '#1A1A1A' }}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-5xl md:text-6xl mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Diseñado para el Alma Moderna
          </h2>

          <div
            className="w-24 h-px mx-auto mb-12"
            style={{ backgroundColor: '#C9A84C' }}
          />

          <div className="space-y-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#FFFFFF' }}>
              LUAS es más que calzado—es una declaración. Nacida del deseo de fusionar
              la elegancia atemporal con el diseño contemporáneo, cada par está cuidadosamente
              elaborado para elevar tu día a día.
            </p>

            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#888888' }}>
              Creemos que el verdadero lujo reside en la simplicidad. En materiales de calidad
              que envejecen bellamente. En diseños que trascienden las tendencias. En comodidad
              que no compromete el estilo.
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-3xl pt-8 italic"
              style={{
                fontFamily: 'Playfair Display, serif',
                color: '#C9A84C'
              }}
            >
              "Camina con propósito. Camina con LUAS."
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}