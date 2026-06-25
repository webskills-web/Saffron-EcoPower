export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f59e0b',
        primaryDark: '#b45309',
        primaryLight: '#fde68a',
        accent: '#0f766e',
        surface: '#fffbeb',
        border: '#fde68a',
      },
      boxShadow: {
        soft: '0 12px 40px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
