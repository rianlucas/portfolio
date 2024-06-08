/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        defaultFontColor: '#607B96',
        defaultBgColor: '#011627',
        defaultBorderColor: '#1E2D3D'
      }
    },
  },
  plugins: [],
}

