import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

export function ExperienceV2() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Presente',
      location: 'Remote',
      description: 'Liderando el desarrollo de aplicaciones web escalables utilizando React, Node.js y arquitecturas de microservicios. Mentoring a desarrolladores junior y estableciendo mejores prácticas de código.',
      achievements: [
        'Rediseño completo de la plataforma principal, mejorando el rendimiento en un 40%',
        'Implementación de CI/CD pipelines reduciendo tiempo de deployment en un 60%',
        'Liderazgo de equipo de 5 desarrolladores en proyectos críticos',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency Pro',
      period: '2020 - 2022',
      location: 'Bogotá, Colombia',
      description: 'Desarrollo de soluciones web personalizadas para clientes corporativos, desde e-commerce hasta aplicaciones empresariales complejas.',
      achievements: [
        'Desarrollo de 15+ proyectos web exitosos para clientes internacionales',
        'Integración de sistemas de pago y APIs de terceros (Stripe, PayPal)',
        'Optimización de SEO aumentando tráfico orgánico en promedio 75%',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'StartUp Innovate',
      period: '2018 - 2020',
      location: 'Medellín, Colombia',
      description: 'Creación de interfaces de usuario modernas y responsivas, trabajando estrechamente con equipos de diseño para implementar experiencias excepcionales.',
      achievements: [
        'Desarrollo de design system reutilizable adoptado por toda la empresa',
        'Mejora de accesibilidad (WCAG 2.1 AA) en todas las aplicaciones',
        'Reducción del tiempo de carga de páginas en un 50% mediante optimizaciones',
      ],
    },
  ];

  return (
    <section id="experiencia" className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-4">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Mi trayectoria</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experiencia Profesional
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Más de 5 años construyendo productos digitales excepcionales
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-blue-200 dark:from-blue-900 dark:via-purple-900 dark:to-blue-900" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 lg:left-1/2 w-4 h-4 -ml-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg z-10 ring-4 ring-white dark:ring-gray-900" />

                {/* Content */}
                <div className={`${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1 lg:text-right'} pl-16 lg:pl-0 ${index % 2 === 1 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                          {exp.company}
                        </div>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                          <span>{exp.period}</span>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        Logros destacados:
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
