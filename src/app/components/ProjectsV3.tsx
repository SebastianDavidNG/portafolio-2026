import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function ProjectsV3() {
  const projects = [
    {
      number: '01',
      title: 'E-Commerce Platform',
      description: 'Complete e-commerce platform with inventory management, shopping cart, and integrated payment processing.',
      image: 'https://images.unsplash.com/photo-1642142785744-261a5f663d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2ODMyMDI1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      url: 'https://example.com',
    },
    {
      number: '02',
      title: 'Task Management System',
      description: 'Project management application with real-time collaboration, task tracking, and analytical reports.',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjgzOTYzODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
      url: 'https://example.com',
    },
    {
      number: '03',
      title: 'Fitness Tracker App',
      description: 'Mobile app for tracking exercises, nutrition, and personalized fitness goals with interactive charts.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY4MzQyMjcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React Native', 'Firebase', 'Redux'],
      url: 'https://example.com',
    },
    {
      number: '04',
      title: 'SaaS Dashboard',
      description: 'Complete dashboard for SaaS with analytics, user management, and subscription system.',
      image: 'https://images.unsplash.com/photo-1614020661498-fef5b2293108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2ODM3MzI0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Node.js', 'Recharts'],
      url: 'https://example.com',
    },
  ];

  return (
    <section id="proyectos" className="py-32 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="lg:sticky lg:top-32">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 tracking-wider uppercase">
                Selected Work
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Some of my recent projects
            </h2>
          </motion.div>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Number */}
                  <div className="lg:col-span-2">
                    <span className="text-6xl font-bold text-gray-200 dark:text-gray-800 group-hover:text-[#00ff88] transition-colors duration-500">
                      {project.number}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="lg:col-span-6">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-[#00ff88] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-[#00ff88] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium text-gray-600 dark:text-gray-400 px-3 py-1 border border-gray-200 dark:border-gray-800 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
