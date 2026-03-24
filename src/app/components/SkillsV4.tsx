import { motion } from 'motion/react';
import { Code, Database, Layout, Terminal, Wrench, Palette } from 'lucide-react';

export function SkillsV4() {
  const skillCategories = [
    {
      icon: Layout,
      category: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 75 },
      ],
    },
    {
      icon: Terminal,
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'REST APIs', level: 92 },
        { name: 'GraphQL', level: 75 },
      ],
    },
    {
      icon: Database,
      category: 'Database',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 78 },
        { name: 'Prisma', level: 82 },
      ],
    },
    {
      icon: Wrench,
      category: 'DevOps & Tools',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'CI/CD', level: 82 },
      ],
    },
    {
      icon: Palette,
      category: 'Design',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'UI/UX Design', level: 88 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Prototyping', level: 85 },
      ],
    },
    {
      icon: Code,
      category: 'Other',
      skills: [
        { name: 'Testing (Jest)', level: 85 },
        { name: 'Agile/Scrum', level: 90 },
        { name: 'Webpack/Vite', level: 82 },
        { name: 'Performance', level: 88 },
      ],
    },
  ];

  return (
    <section id="habilidades" className="py-32 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="lg:sticky lg:top-32">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 tracking-wider uppercase">
                Skills
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Tech Stack
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Tools and technologies I master to create complete 
              and scalable solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-900 text-[#00ff88]">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-full bg-[#00ff88] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}