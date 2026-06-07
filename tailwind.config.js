export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#171717',
        accent: '#3B82F6',
        accentHover: '#60A5FA',
        accentAlt: '#8B5CF6',
        borderGray: '#27272A',
        textSecondary: '#A1A1AA'
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.35)',
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 24px 60px rgba(59,130,246,0.14)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
