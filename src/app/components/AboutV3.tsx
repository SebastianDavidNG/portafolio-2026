import { motion } from 'motion/react';

export function AboutV3() {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
  ];

  return (
    <section id="sobre-mi" className="py-32 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left - Label */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="lg:sticky lg:top-32">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 tracking-wider uppercase">
                About Me
              </span>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Transformando ideas en realidades digitales
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Soy un desarrollador full stack apasionado por crear experiencias digitales 
                  excepcionales. Con más de 5 años de experiencia, me especializo en construir 
                  aplicaciones web modernas que combinan diseño elegante con código robusto.
                </p>
                <p>
                  Mi enfoque se centra en la simplicidad, la usabilidad y el rendimiento. 
                  Trabajo con tecnologías como React, TypeScript, Node.js y más, siempre 
                  buscando las mejores soluciones para cada proyecto.
                </p>
                <p>
                  Cuando no estoy escribiendo código, puedes encontrarme explorando nuevas 
                  tecnologías, contribuyendo a proyectos open source o compartiendo conocimientos 
                  con la comunidad de desarrolladores.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-800"
            >
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
