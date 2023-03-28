/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        header: "0 2px 4px -1px rgb(0 0 0 / 25%)",
        textEditor:
          "inset 0px 11px 8px -10px #ccc, inset 0px -11px 8px -10px #ccc",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
