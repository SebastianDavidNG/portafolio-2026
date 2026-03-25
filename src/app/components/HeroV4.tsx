import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { CV_DOWNLOAD_AS, CV_PDF_URL } from '@/app/site';

export function HeroV4() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
      {/* Minimal grid background */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="max-w-5xl">
          {/* Small intro text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400 tracking-wider uppercase">
              Full Stack Developer & Web Designer
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
          >
            <span className="text-gray-900 dark:text-white">Sebastián</span>
            <br />
            <span className="text-gray-900 dark:text-white">David Niño</span>
            <span className="text-[#00ff88]">.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mb-8 leading-relaxed"
          >
            Transforming ideas into exceptional digital experiences that combine 
            elegant design with clean and efficient code.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 mb-12 max-w-2xl"
          >
            <div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">12+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">30+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <motion.button
              onClick={() => scrollToSection('proyectos')}
              className="group px-8 py-4 bg-[#00ff88] text-gray-900 rounded-full font-medium flex items-center gap-2 hover:bg-[#00dd77] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.a
              href={CV_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              download={CV_DOWNLOAD_AS}
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-full font-medium hover:border-gray-900 dark:hover:border-white transition-all duration-300 flex items-center gap-2"
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
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center gap-6"
          >
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Follow me</span>
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
                  className="w-10 h-10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#00ff88] transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-700 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}