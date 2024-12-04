/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
        xl: '40px',
      },
      colors: {
        glass: 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
};
