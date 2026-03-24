import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contacto@sebastiandng.com',
      link: 'mailto:contacto@sebastiandng.com',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+57 300 123 4567',
      link: 'tel:+573001234567',
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Colombia',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sebastiandavidninog/',
    },
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com',
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contáctame
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-3">
                        <info.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 dark:text-white">{info.value}</p>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col items-center gap-6">
                  <p className="text-lg text-center text-gray-600 dark:text-gray-300">
                    Estoy disponible para oportunidades freelance, proyectos a tiempo completo y colaboraciones.
                  </p>
                  
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="lg"
                          onClick={() => window.open(social.url, '_blank')}
                          className="gap-2"
                        >
                          <social.icon className="w-5 h-5" />
                          {social.label}
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-gray-600 dark:text-gray-400"
          >
            <p>© 2026 Sebastián David Niño. Todos los derechos reservados.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
