import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config
