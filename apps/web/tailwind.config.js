/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#1FB6FF',
        'brand-secondary': '#0099A8',
        'brand-surface': '#F9FAFB',
        'gray-heading': '#1E293B',
        'gray-body': '#475569',
        'gray-border': '#E5E7EB',
      },
      boxShadow: {
        premium: '0 4px 32px 0 rgba(16, 30, 54, 0.08)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Geist', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
