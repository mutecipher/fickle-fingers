const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-source-code-pro)', 'var(--font-inconsolata)', ...fontFamily.mono],
      },
    },
    plugins: [],
  }
}
