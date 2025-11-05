/**** Tailwind Config ****/
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        space: {
          900: '#0b1020',
          800: '#0f1630',
          700: '#161c3a',
          600: '#1d254a'
        }
      },
      backgroundImage: {
        'starfield': 'radial-gradient(1200px 600px at 10% 10%, rgba(99,102,241,0.08), transparent), radial-gradient(1000px 400px at 90% 20%, rgba(56,189,248,0.06), transparent), radial-gradient(800px 300px at 50% 80%, rgba(34,197,94,0.05), transparent)'
      }
    }
  },
  plugins: []
};
