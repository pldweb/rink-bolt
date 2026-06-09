export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,

  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],

  app: {
    head: {
      title: 'RinkBolt — WhatsApp Broadcast & CRM Platform',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Platform broadcast WhatsApp, blasting, dan CRM untuk bisnis Anda. Kirim pesan massal, kelola kontak, dan pantau kampanye.' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },

  nitro: { preset: 'static', prerender: { routes: ['/'], crawlLinks: true } },

  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#fff8f0', 100: '#ffedd5', 200: '#fdd4a3',
              300: '#fcb86e', 400: '#f49a38', 500: '#E97E16',
              600: '#c96a0e', 700: '#a0550a', 800: '#7d4108',
              900: '#5e3006',
            },
            navy: { 800: '#0e2d57', 900: '#032838' }
          },
          fontFamily: {
            sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
            body: ['Inter', 'system-ui', 'sans-serif'],
          }
        }
      }
    }
  }
})
