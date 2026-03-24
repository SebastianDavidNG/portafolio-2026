import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

export function ExperienceV4() {
  const experiences = [
    {
      period: '2022 — Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      description: 'Leading the development of scalable web applications using React, Node.js, and microservices architecture. Mentoring junior developers and establishing code best practices.',
      achievements: [
        'Complete redesign of main platform, improving performance by 40%',
        'Implementation of CI/CD pipelines reducing deployment time by 60%',
        'Team leadership of 5 developers on critical projects',
      ],
    },
    {
      period: '2020 — 2022',
      title: 'Full Stack Developer',
      company: 'Digital Agency Pro',
      location: 'Bogotá, Colombia',
      description: 'Development of custom web solutions for corporate clients, from e-commerce to complex enterprise applications.',
      achievements: [
        'Development of 15+ successful web projects for international clients',
        'Integration of payment systems and third-party APIs (Stripe, PayPal)',
        'SEO optimization increasing organic traffic by an average of 75%',
      ],
    },
    {
      period: '2018 — 2020',
      title: 'Frontend Developer',
      company: 'StartUp Innovate',
      location: 'Medellín, Colombia',
      description: 'Creation of modern and responsive user interfaces, working closely with design teams to implement exceptional experiences.',
      achievements: [
        'Development of reusable design system adopted company-wide',
        'Accessibility improvements (WCAG 2.1 AA) across all applications',
        'Page load time reduction by 50% through optimizations',
      ],
    },
  ];

  return (
    <section id="experiencia" className="py-32 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-900">
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
                Experience
              </span>
            </div>
          </motion.div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="mb-4">
                  <div className="text-sm font-medium text-[#00ff88] mb-2">
                    {exp.period}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#00ff88] transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <div className="text-lg text-gray-600 dark:text-gray-400 mb-1">
                    {exp.company}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-500">
                    {exp.location}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="space-y-2 pl-4 border-l-2 border-gray-200 dark:border-gray-800 group-hover:border-[#00ff88] transition-colors duration-300">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#00ff88] rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}