import { motion } from 'motion/react';
import { Code, Database, Layout, Terminal, Wrench, Palette } from 'lucide-react';

export function SkillsV2() {
  const skillCategories = [
    {
      icon: Layout,
      category: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
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
      color: 'from-purple-500 to-pink-500',
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
      color: 'from-green-500 to-emerald-500',
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
      color: 'from-orange-500 to-red-500',
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
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'UI/UX Design', level: 88 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Prototyping', level: 85 },
      ],
    },
    {
      icon: Code,
      category: 'Otros',
      color: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'Testing (Jest)', level: 85 },
        { name: 'Agile/Scrum', level: 90 },
        { name: 'Webpack/Vite', level: 82 },
        { name: 'Performance', level: 88 },
      ],
    },
  ];

  return (
    <section id="habilidades" className="py-32 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-4">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Habilidades</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Stack Tecnológico
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Herramientas y tecnologías que domino para crear soluciones completas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
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
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
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
