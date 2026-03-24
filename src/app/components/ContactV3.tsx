import { motion } from 'motion/react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export function ContactV3() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/sebastiandavidninog/',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:contacto@sebastiandng.com',
    },
  ];

  return (
    <section id="contacto" className="py-32 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="lg:sticky lg:top-32">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 tracking-wider uppercase">
                Get in Touch
              </span>
            </div>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Let's work together
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Estoy disponible para proyectos freelance, colaboraciones y oportunidades 
                a tiempo completo. Si tienes un proyecto en mente, no dudes en contactarme.
              </p>
            </motion.div>

            {/* Email CTA */}
            <motion.a
              href="mailto:contacto@sebastiandng.com"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group inline-flex items-center gap-4 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white hover:text-[#00ff88] transition-colors duration-300"
              whileHover={{ x: 10 }}
            >
              contacto@sebastiandng.com
              <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.a>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 pt-8 border-t border-gray-200 dark:border-gray-800"
            >
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400 tracking-wider uppercase">
                Follow Me
              </div>
              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-[#00ff88] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <link.icon className="w-5 h-5" />
                    {link.name}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Location & Availability */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-8 pt-8"
            >
              <div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Location
                </div>
                <div className="text-lg font-medium text-gray-900 dark:text-white">
                  Colombia
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Availability
                </div>
                <div className="text-lg font-medium text-[#00ff88]">
                  Open to work
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 pt-12 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div>© 2026 Sebastián David Niño. All rights reserved.</div>
            <div className="flex items-center gap-2">
              Designed & Built with
              <span className="text-[#00ff88]">♥</span>
              in Colombia
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
