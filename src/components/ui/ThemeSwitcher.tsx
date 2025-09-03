"use client";
import { useTheme } from '@/app/theme-provider';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button onClick={toggleTheme} aria-label="Toggle theme" className="relative w-10 h-6 rounded-full border bg-[#1b1e25] flex items-center transition-colors">
      <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white grid place-items-center transition-transform ${isDark ? 'translate-x-4' : ''}`}>{isDark ? '☀️' : '🌙'}</span>
    </button>
  );
};

export default ThemeSwitcher;
