// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
      ],
      content: {
        // https://content.nuxtjs.org/api/configuration
      },
      app: {
        head: {
          charset: 'utf-16',
          viewport: 'width=500, initial-scale=1',
          title: 'Easy Solutions to Everyday Problems -EasySolutionsHQ.com',
          htmlAttrs: {
            lang: 'en'
          },
          meta: [
            { name: 'description', content: 'Welcome to our blog, where we provide practical solutions to everyday problems. Our team of experts covers a wide range of topics.' }
          ],
        }
      }
})
