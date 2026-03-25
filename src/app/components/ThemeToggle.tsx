import { useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';

/** Reads saved / system preference only — no DOM access (safe anywhere). */
function readThemePreference(): boolean {
  if (typeof window === 'undefined') return false;
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const isFirstLayout = useRef(true);

  useLayoutEffect(() => {
    if (isFirstLayout.current) {
      isFirstLayout.current = false;
      const dark = readThemePreference();
      setIsDark(dark);
      document.documentElement.classList.toggle('dark', dark);
      return;
    }
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    if (isDark) {
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-white transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </motion.button>
  );
}
