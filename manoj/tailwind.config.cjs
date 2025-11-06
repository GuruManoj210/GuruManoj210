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
          900: '#0a0e1a',
          800: '#0d1128',
          700: '#141938',
          600: '#1b2247'
        },
        brand: {
          indigo: '#6366f1',
          fuchsia: '#d946ef',
          teal: '#14b8a6',
          violet: '#8b5cf6',
          pink: '#ec4899'
        }
      },
      backgroundImage: {
        'starfield': 'radial-gradient(1200px 600px at 10% 10%, rgba(99,102,241,0.12), transparent), radial-gradient(1000px 400px at 90% 20%, rgba(217,70,239,0.1), transparent), radial-gradient(800px 300px at 50% 80%, rgba(20,184,166,0.08), transparent)'
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.7' }],
        'lg': ['1.125rem', { lineHeight: '1.75' }],
        'xl': ['1.25rem', { lineHeight: '1.75' }],
      }
    }
  },
  plugins: []
};
