export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#318f2c',
        primaryDark: '#236320',
        primaryLight: '#e8f5e3',
        accent: '#f5a623',
        surface: '#f7faf6',
        border: '#e2e8df',
      },
      boxShadow: {
        soft: '0 12px 40px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
