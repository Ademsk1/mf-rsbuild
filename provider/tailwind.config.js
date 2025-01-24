/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'px-5',
    'py-2.5',
    'bg-emerald-600',
    'text-white',
    'rounded-md',
    'hover:bg-emerald-700',
    'transition-colors',
    'font-semibold',
    'shadow-sm',
    'hover:shadow-md',
    'active:bg-emerald-800'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} 