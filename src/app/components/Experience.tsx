import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';

export function Experience() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Presente',
      description: [
        'Liderazgo en el desarrollo de aplicaciones web escalables con React y Node.js',
        'Implementación de arquitecturas de microservicios y APIs RESTful',
        'Mentoría a desarrolladores junior y revisión de código',
        'Mejora del rendimiento de aplicaciones en un 40%',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency Pro',
      period: '2020 - 2022',
      description: [
        'Desarrollo de soluciones web personalizadas para clientes empresariales',
        'Integración de sistemas de pago y APIs de terceros',
        'Colaboración con equipos de diseño para implementar interfaces de usuario',
        'Gestión de bases de datos PostgreSQL y MongoDB',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'StartUp Innovate',
      period: '2018 - 2020',
      description: [
        'Creación de interfaces responsive con React y TypeScript',
        'Implementación de diseños pixel-perfect desde Figma',
        'Optimización de rendimiento y accesibilidad web',
        'Colaboración en metodologías ágiles (Scrum)',
      ],
    },
  ];

  return (
    <section id="experiencia" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experiencia Profesional
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Mi trayectoria en el desarrollo de software
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <Briefcase className="w-6 h-6 text-blue-600" />
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-lg mt-1">{exp.company}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
