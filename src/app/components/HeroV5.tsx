import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, Download, Code2, Sparkles } from 'lucide-react';
import { useSyncExternalStore } from 'react';
import { MatrixBackground } from './MatrixBackground';
import { CV_DOWNLOAD_AS, CV_PDF_URL } from '@/app/site';

const darkModeListeners = new Set<() => void>();
let darkModeObserver: MutationObserver | null = null;

function notifyDarkModeListeners() {
  darkModeListeners.forEach((listener) => listener());
}

function subscribeDarkMode(onStoreChange: () => void) {
  darkModeListeners.add(onStoreChange);
  if (!darkModeObserver) {
    darkModeObserver = new MutationObserver(notifyDarkModeListeners);
    darkModeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }
  return () => {
    darkModeListeners.delete(onStoreChange);
    if (darkModeListeners.size === 0 && darkModeObserver) {
      darkModeObserver.disconnect();
      darkModeObserver = null;
    }
  };
}

function getDarkModeSnapshot() {
  return document.documentElement.classList.contains('dark');
}

function getServerDarkModeSnapshot() {
  return false;
}

export function HeroV5() {
  const isDark = useSyncExternalStore(
    subscribeDarkMode,
    getDarkModeSnapshot,
    getServerDarkModeSnapshot,
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
      {/* Matrix background effect */}
      <MatrixBackground isDark={isDark} />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-[#0a0a0a] pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/50 dark:from-[#0a0a0a]/50 via-transparent to-white/50 dark:to-[#0a0a0a]/50 pointer-events-none z-[1]" />

      {/* Floating tech elements */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 text-[#00ff88] opacity-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Code2 size={60} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/4 text-[#00ff88] opacity-10"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          <Sparkles size={50} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="max-w-5xl">
          {/* Glowing badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-flex"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#00ff88] opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300 rounded-full" />
              <div className="relative px-6 py-2 bg-[#00ff88]/10 backdrop-blur-sm border border-[#00ff88]/20 rounded-full">
                <span className="text-sm font-medium text-[#00ff88] tracking-wider uppercase flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
                  Available for new opportunities
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main heading with glitch effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
          >
            <div className="relative inline-block">
              <span className="relative text-gray-900 dark:text-white">
                Sebastián
                {/* Subtle glow on hover */}
                <motion.span
                  className="absolute inset-0 text-[#00ff88] opacity-0"
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                >
                  Sebastián
                </motion.span>
              </span>
            </div>
            <br />
            <div className="relative inline-block">
              <span className="text-gray-900 dark:text-white">Niño</span>
              <motion.span
                className="text-[#00ff88]"
                animate={{
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                .
              </motion.span>
            </div>
            <span className="sr-only">
              Front-end developer and web developer — React, TypeScript, WordPress, Drupal, Astro,
              Vue, Tailwind CSS, technical SEO, portfolio at sebastiandng.com
            </span>
          </motion.h1>

          {/* Subtitle with typing effect style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed font-mono">
              <span className="text-[#00ff88]">{'>'}</span> Transforming ideas into exceptional digital experiences
              <br />
              <span className="text-[#00ff88]">{'>'}</span> Combining elegant design with clean, efficient code
            </p>
          </motion.div>

          {/* Stats with tech styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 mb-12 max-w-2xl"
          >
            {[
              { value: '10+', label: 'Years Experience', delay: 0 },
              { value: '50+', label: 'Projects Completed', delay: 0.1 },
              { value: '30+', label: 'Happy Clients', delay: 0.2 },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + stat.delay }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-[#00ff88] opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-300 rounded-lg" />
                <div className="relative">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <motion.button
              onClick={() => scrollToSection('proyectos')}
              className="group relative px-8 py-4 bg-[#00ff88] text-gray-900 rounded-full font-medium overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-[#00ff88] opacity-50 blur-lg group-hover:opacity-75 transition-opacity" />
              <span className="relative flex items-center gap-2">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            <motion.a
              href={CV_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              download={CV_DOWNLOAD_AS}
              className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-full font-medium hover:border-[#00ff88] dark:hover:border-[#00ff88] hover:text-[#00ff88] transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex items-center gap-6"
          >
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400 font-mono">
              <span className="text-[#00ff88]">$</span> connect --social
            </span>
            <div className="flex gap-4">
              {[
                { icon: Github, url: 'https://github.com' },
                { icon: Linkedin, url: 'https://www.linkedin.com/in/sebastiandavidninog/' },
                { icon: Mail, url: 'mailto:contacto@sebastiandng.com' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group w-10 h-10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#00ff88] transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Icon glow on hover */}
                  <div className="absolute inset-0 bg-[#00ff88] opacity-0 group-hover:opacity-20 blur-lg transition-opacity rounded-full" />
                  <social.icon size={20} className="relative z-10" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <motion.div
            className="relative group cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#00ff88] opacity-0 group-hover:opacity-30 blur-xl transition-opacity" />
            <div className="relative w-6 h-10 border-2 border-gray-300 dark:border-gray-700 group-hover:border-[#00ff88] rounded-full flex justify-center pt-2 transition-colors">
              <motion.div
                className="w-1.5 h-1.5 bg-[#00ff88] rounded-full"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}