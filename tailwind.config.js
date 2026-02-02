module.exports = {
  content: [
    "./apps/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
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
        'blue-50': '#EFF6FF',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        display: [
          'Geist',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        premium: '0 4px 32px 0 rgba(16, 30, 54, 0.08)',
      },
    },
  },
  plugins: [],
};
