import { motion } from 'motion/react';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function ContactV4() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contacto@sebastiandng.com',
      href: 'mailto:contacto@sebastiandng.com',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+57 300 123 4567',
      href: 'tel:+573001234567',
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Colombia',
      href: null,
    },
  ];

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
                I'm available for freelance projects, collaborations, and full-time opportunities. 
                If you have a project in mind, don't hesitate to reach out.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-900 text-[#00ff88] group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-500 mb-0.5">
                      {method.label}
                    </div>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-lg font-medium text-gray-900 dark:text-white hover:text-[#00ff88] transition-colors duration-300"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <div className="text-lg font-medium text-gray-900 dark:text-white">
                        {method.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Email CTA */}
            <motion.a
              href="mailto:contacto@sebastiandng.com"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00ff88] text-gray-900 rounded-full font-medium hover:bg-[#00dd77] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.a>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8 border-t border-gray-200 dark:border-gray-800"
            >
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400 tracking-wider uppercase mb-4">
                Sígueme
              </div>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-[#00ff88] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="font-medium">{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="p-6 border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-[#00ff88] transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-[#00ff88] rounded-full mt-1.5 animate-pulse" />
                <div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Available for new projects
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    I'm open to freelance, collaborations, and full-time positions. 
                    I respond within 24 hours.
                  </p>
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