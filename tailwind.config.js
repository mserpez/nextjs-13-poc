/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')



module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': {
        DEFAULT: colors.sky['600'],
      },
      ...colors,
    }
  },
  plugins: [],
}
