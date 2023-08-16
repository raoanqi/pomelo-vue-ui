/** @type {import('tailwindcss').Config} */
export default {
  // content中命中的资源都会被tailwind预处理
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}
