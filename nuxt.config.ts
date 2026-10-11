// Header keamanan untuk respons dari server Nitro (halaman non-prerender).
// Nitro juga menuliskannya ke _headers untuk halaman prerender (/, /docs).
const securityHeaders: Record<string, string> = {
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Content-Security-Policy': "frame-ancestors 'none'; base-uri 'self'; object-src 'none'",
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
}
// Build staging (NUXT_NOINDEX=1) tidak boleh diindeks mesin pencari.
if (process.env.NUXT_NOINDEX === '1') {
  securityHeaders['X-Robots-Tag'] = 'noindex, nofollow'
}

// Nilai token mengikuti Rink Design Blueprint
// (core/docs/design/RINK_DESIGN_BLUEPRINT.md, packages/wabs/design/rink-tokens.json).
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  routeRules: { '/**': { headers: securityHeaders } },

  modules: ['@nuxtjs/tailwindcss', "nitro-cloudflare-dev"],

  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'RinkBolt — Inbox WhatsApp, Instagram & Threads resmi Meta',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#FFFFFF' },
        { name: 'description', content: 'Balas chat WhatsApp, Instagram, dan Threads bareng tim, kirim broadcast, dan kelola pelanggan dari satu workspace resmi Meta.' },
        { property: 'og:site_name', content: 'RinkBolt' },
        { property: 'og:locale', content: 'id_ID' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preload', href: '/fonts/Poppins-Regular.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
        { rel: 'preload', href: '/fonts/Poppins-Bold.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
      ]
    }
  },

  nitro: {
    preset: "cloudflare_module",
    prerender: { routes: ['/', '/docs'], crawlLinks: true },

    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },

  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            brand: { DEFAULT: '#EA7F17', hover: '#D06510', soft: '#FFF4E8', ink: '#AC4D11', 'ink-dark': '#F5B36A' },
            navy: { DEFAULT: '#032838', fill: '#0B3446', deep: '#011720' },
            ink: { DEFAULT: '#032838', muted: '#43606E', subtle: '#536B78' },
            canvas: '#F6F8FA',
            sunken: '#EEF3F6',
            line: '#DBE4EA',
            control: '#738B97',
            focus: '#0B67B8',
            danger: '#C42B2B',
            success: { DEFAULT: '#0A7A4B', soft: '#E6F6EE' },
            info: { DEFAULT: '#0B67B8', soft: '#E8F2FC' },
          },
          fontFamily: {
            sans: ['Poppins', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
          },
          fontSize: {
            'display-xl': ['3.5rem', { lineHeight: '3.75rem', letterSpacing: '-0.02em', fontWeight: '700' }],
            'display-lg': ['2.5rem', { lineHeight: '2.875rem', letterSpacing: '-0.02em', fontWeight: '700' }],
            'heading-1': ['2rem', { lineHeight: '2.375rem', letterSpacing: '-0.01em', fontWeight: '700' }],
            'heading-2': ['1.5rem', { lineHeight: '1.875rem', letterSpacing: '-0.01em', fontWeight: '700' }],
            'heading-3': ['1.25rem', { lineHeight: '1.625rem', fontWeight: '700' }],
            'body-lg': ['1.125rem', { lineHeight: '1.75rem' }],
            body: ['1rem', { lineHeight: '1.5rem' }],
            'body-sm': ['0.875rem', { lineHeight: '1.25rem' }],
            label: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '600' }],
            caption: ['0.75rem', { lineHeight: '1rem', fontWeight: '500' }],
            overline: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.08em', fontWeight: '700' }],
          },
          borderRadius: { sm: '8px', md: '12px', lg: '16px', xl: '24px' },
          boxShadow: {
            sm: '0 1px 2px rgba(3,40,56,.06), 0 1px 0 rgba(3,40,56,.04)',
            md: '0 1px 0 rgba(3,40,56,.06), 0 10px 30px -12px rgba(3,40,56,.18)',
            lg: '0 24px 48px -16px rgba(3,40,56,.28)',
          },
          maxWidth: { container: '80rem', narrow: '48rem' },
        }
      }
    }
  }
})
