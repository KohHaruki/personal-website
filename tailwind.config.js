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
        primary: '#F7971E', // '#001C30'
        secondary: '#FFD200', // '#176B87'
        neutral: '#FAFAFA', // '#f1f5f9' '#F6F1E9'
        light: '#FEFEFE',
        shade: '#99999933',
        title: '#000000',
        subtitle: '#333333',
        content: '#404040',
        rank: {
          1: '#F7971E', // primary gold color
          2: '#E4E4E4', // silver
          3: '#cd7f32' // bronze
        }
      },
    },
  },
  plugins: [],
}
