import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function ContactV2() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contacto@sebastiandng.com',
      href: 'mailto:contacto@sebastiandng.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+57 300 123 4567',
      href: 'tel:+573001234567',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Colombia',
      href: null,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sebastiandavidninog/',
      color: 'hover:text-blue-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
  ];

  return (
    <section id="contacto" className="py-32 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-4">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Contáctame</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Trabajemos Juntos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Estoy disponible para colaboraciones, freelance o posiciones a tiempo completo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        {method.label}
                      </div>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <div className="text-gray-900 dark:text-white font-medium">
                          {method.value}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Sígueme en redes
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-900">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                ¿Listo para empezar?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Estoy disponible para proyectos freelance, colaboraciones y oportunidades a tiempo completo. 
                No dudes en contactarme para discutir cómo podemos trabajar juntos.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white dark:bg-gray-900 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800">
                  Freelance
                </span>
                <span className="px-3 py-1 bg-white dark:bg-gray-900 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800">
                  Tiempo Completo
                </span>
                <span className="px-3 py-1 bg-white dark:bg-gray-900 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800">
                  Consultoría
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                ¿Tienes un proyecto en mente?
              </h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Me encantaría escuchar sobre tu proyecto. Ya sea una idea en fase inicial 
                o un proyecto en marcha, estoy aquí para ayudarte a hacerlo realidad.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Respuesta en menos de 24 horas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Consulta inicial gratuita</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Propuesta personalizada</span>
                </div>
              </div>

              <Button
                size="lg"
                onClick={() => window.location.href = 'mailto:contacto@sebastiandng.com'}
                className="w-full bg-white text-blue-600 hover:bg-gray-100"
              >
                <Send className="mr-2 w-5 h-5" />
                Enviar mensaje
              </Button>

              <p className="text-sm text-blue-100 mt-4 text-center">
                O escríbeme directamente a{' '}
                <a href="mailto:contacto@sebastiandng.com" className="underline font-semibold">
                  contacto@sebastiandng.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center pt-12 border-t border-gray-200 dark:border-gray-800"
        >
          <p className="text-gray-600 dark:text-gray-400">
            © 2026 Sebastián David Niño. Diseñado y desarrollado con{' '}
            <span className="text-red-500">♥</span> en Colombia
          </p>
        </motion.div>
      </div>
    </section>
  );
}
