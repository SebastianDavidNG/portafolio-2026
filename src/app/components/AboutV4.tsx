import { motion } from 'motion/react';
import { Award, Heart, Lightbulb, Target } from 'lucide-react';

export function AboutV4() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and methodologies to create better solutions.',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Meticulous attention to detail in every line of code and pixel of design.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Committed to creating products that truly matter and make a difference.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'High standards in code quality, performance, and user experience.',
    },
  ];

  return (
    <section id="sobre-mi" className="py-32 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
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
                Transforming ideas into{' '}
                <span className="text-[#00ff88]">digital realities</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I started as a graphic designer and publisher, then focused on web development
                  and front-end engineering. For more than a decade I have shipped sites and
                  products that balance clear UI, solid code, and measurable outcomes.
                </p>
                <p>
                  Day to day I work with React, TypeScript, and Tailwind CSS, and I regularly
                  deliver WordPress and Drupal builds, Astro and Vue landing pages, and
                  animation-heavy experiences with GSAP. I care about technical SEO, Core Web
                  Vitals, and Lighthouse-friendly performance — from Figma handoff to production.
                </p>
                <p>
                  I value clean architecture, accessibility, and maintainable code. Whether it is
                  a marketing site, a CMS theme, or a component library, I aim for work that teams
                  can extend with confidence.
                </p>
              </div>
            </motion.div>

            {/* Values Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-[#00ff88] transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-900 text-[#00ff88] mb-4">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}