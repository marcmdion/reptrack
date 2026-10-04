/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;
const names = [
  'bg', 'surface', 'input', 'line', 'line-soft', 'raised', 'ring',
  'fg', 'fg2', 'fg3', 'muted', 'subtle', 'faint', 'fainter',
  'accent', 'on-accent', 'warn', 'info',
];

export default {
  content: ['./index.html', './src/**/*.{js,html}'],
  theme: {
    extend: {
      // Theme colors come from CSS variables (see src/styles/main.css)
      colors: Object.fromEntries(names.map((n) => [n, token(n)])),
    },
  },
  plugins: [],
};
