// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', 'remixicon/fonts/remixicon.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap",
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css'
        }
      ],
    },
  },

  compatibilityDate: '2024-10-12',
});