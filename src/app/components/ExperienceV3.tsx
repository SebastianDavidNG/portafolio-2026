import { motion } from 'motion/react';

export function ExperienceV3() {
  const experiences = [
    {
      period: '2022 — Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      description: 'Leading development of scalable web applications using React, Node.js, and microservices architecture. Mentoring junior developers and establishing code best practices.',
    },
    {
      period: '2020 — 2022',
      title: 'Full Stack Developer',
      company: 'Digital Agency Pro',
      description: 'Developed custom web solutions for corporate clients, from e-commerce to complex enterprise applications. Integration of payment systems and third-party APIs.',
    },
    {
      period: '2018 — 2020',
      title: 'Frontend Developer',
      company: 'StartUp Innovate',
      description: 'Created modern and responsive user interfaces, working closely with design teams to implement exceptional experiences using React and TypeScript.',
    },
  ];

  const skills = [
    'React', 'TypeScript', 'Next.js', 'Node.js', 'Express',
    'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Figma', 'Git',
    'Docker', 'AWS', 'REST APIs', 'GraphQL', 'Jest'
  ];

  return (
    <section id="experiencia" className="py-32 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
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

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="text-sm font-medium text-[#00ff88] mb-2">
                  {exp.period}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-[#00ff88] transition-colors duration-300">
                  {exp.title}
                </h3>
                <div className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  {exp.company}
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="lg:sticky lg:top-32">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 tracking-wider uppercase">
                Skills & Tools
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap gap-3"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2.5 border border-gray-200 dark:border-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-[#00ff88] hover:text-[#00ff88] transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
