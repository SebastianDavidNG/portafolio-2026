import { motion } from 'motion/react';
import { Code, Palette, Rocket, Users } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';

export function About() {
  const features = [
    {
      icon: Code,
      title: 'Desarrollo Full Stack',
      description: 'Experiencia en tecnologías modernas como React, Node.js, TypeScript y más',
    },
    {
      icon: Palette,
      title: 'Diseño UI/UX',
      description: 'Creación de interfaces intuitivas y atractivas centradas en el usuario',
    },
    {
      icon: Rocket,
      title: 'Optimización',
      description: 'Rendimiento y escalabilidad en cada proyecto que desarrollo',
    },
    {
      icon: Users,
      title: 'Trabajo en Equipo',
      description: 'Colaboración efectiva con equipos multidisciplinarios',
    },
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Sobre Mí
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Soy un desarrollador apasionado por crear soluciones digitales innovadoras. Con experiencia en desarrollo web full stack y diseño de interfaces, me especializo en transformar ideas complejas en productos digitales intuitivos y efectivos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
