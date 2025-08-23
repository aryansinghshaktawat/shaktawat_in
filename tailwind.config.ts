import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        'dark-text-100': '#e3dfd2',
        'dark-text-200': '#a8a8a8',
        'dark-background-900': '#14141a',
        'light-text-100': '#14141a',
        'light-text-200': '#555555',
        'light-background-100': '#ffffff',
        'accent': '#3b82f6',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config
