/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // boxShadow: {
      //   green: '0 4px 8px 0 rgba(0, 255, 0, 0.5)',
      // },
    },
  },
  plugins: [require('daisyui')],
  darkMode: 'class',
};
