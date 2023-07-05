/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#F7971E', // '#001C30'
        'secondary': '#FFD200', // '#176B87'
        'neutral': '#FAFAFA', // '#f1f5f9' '#F6F1E9'
        'light': '#FEFEFE'
      },
      gridTemplateColumns: {
        'hero': '3fr 2fr'
      }
    },
  },
  plugins: [],
}
