import type { Config } from 'tailwindcss';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],

  theme: {
    fontFamily: {
      monlam: ['Monlam', 'sans-serif'],
      Inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
} satisfies Config;
