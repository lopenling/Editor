/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    fontFamily: {
      "monlam": ["monlam", "sans-serif"],
      "Inter": ["Inter", "sans-serif"],
    }
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
