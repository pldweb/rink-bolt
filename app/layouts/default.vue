<template>
  <div class="flex min-h-screen flex-col bg-white">
    <a href="#konten" class="sr-only z-[60] rounded-full bg-navy px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-3">Lewati ke konten</a>

    <header class="sticky top-0 z-50 border-b bg-white transition-shadow duration-200" :class="isScrolled ? 'border-line shadow-md' : 'border-transparent'">
      <nav class="container-page flex h-16 items-center justify-between gap-6 lg:h-[72px]" aria-label="Utama">
        <NuxtLink to="/" class="flex shrink-0 items-center rounded-sm" aria-label="RinkBolt, ke beranda">
          <BrandLogo />
        </NuxtLink>

        <ul class="hidden items-center gap-8 lg:flex">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink :to="link.to" class="relative py-2 text-[15px] font-medium text-ink-muted transition-colors hover:text-ink" :class="isActive(link.to) && 'nav-active'" :aria-current="isActive(link.to) ? 'page' : undefined">{{ link.label }}</NuxtLink>
          </li>
        </ul>

        <div class="hidden items-center gap-2 lg:flex">
          <a :href="LOGIN_URL" class="btn text-ink hover:bg-sunken">Masuk</a>
          <a :href="SIGNUP_URL" class="btn btn-primary">Coba gratis</a>
        </div>

        <button ref="menuButton" type="button" class="grid h-11 w-11 place-items-center rounded-full text-ink hover:bg-sunken lg:hidden" :aria-expanded="mobileOpen" aria-controls="menu-ponsel" :aria-label="mobileOpen ? 'Tutup menu' : 'Buka menu'" @click="mobileOpen ? closeMenu() : openMenu()">
          <X v-if="mobileOpen" class="h-6 w-6" aria-hidden="true" />
          <Menu v-else class="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>

      <div v-if="mobileOpen" id="menu-ponsel" ref="menuPanel" class="absolute inset-x-4 top-full mt-2 rounded-xl border border-line bg-white p-3 shadow-lg lg:hidden" @keydown.esc="closeMenu(true)">
        <ul>
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink :to="link.to" class="flex h-12 items-center rounded-md px-4 font-medium text-ink hover:bg-sunken" :class="isActive(link.to) && 'bg-brand-soft font-semibold'" @click="closeMenu()">{{ link.label }}</NuxtLink>
          </li>
        </ul>
        <div class="mt-3 grid grid-cols-2 gap-3 border-t border-line pt-3">
          <a :href="LOGIN_URL" class="btn btn-outline">Masuk</a>
          <a :href="SIGNUP_URL" class="btn btn-primary">Coba gratis</a>
        </div>
      </div>
    </header>

    <main id="konten" class="flex-1">
      <slot />
    </main>

    <footer class="border-t border-line bg-sunken text-ink-muted">
      <div class="container-page grid grid-cols-2 gap-x-6 gap-y-10 py-12 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr] lg:py-16">
        <div class="col-span-2 lg:col-span-1">
          <BrandLogo />
          <p class="mt-4 max-w-xs text-body-sm">Inbox WhatsApp, Instagram, dan Threads resmi Meta untuk broadcast, percakapan, dan CRM bisnismu.</p>
          <p class="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-white py-2 pl-3 pr-4 text-caption text-ink">
            <MetaLogo class="h-4 w-5 text-[#0866FF]" />Meta Tech Provider
          </p>
        </div>
        <div v-for="group in footerGroups" :key="group.title">
          <h2 class="text-overline uppercase text-ink">{{ group.title }}</h2>
          <ul class="mt-4 space-y-1 text-body-sm">
            <li v-for="link in group.links" :key="link.to">
              <NuxtLink :to="link.to" class="inline-flex min-h-[2.25rem] items-center hover:text-ink hover:underline">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-span-2 lg:col-span-1">
          <h2 class="text-overline uppercase text-ink">Kontak</h2>
          <ul class="mt-4 space-y-3 text-body-sm">
            <li class="flex gap-3"><MapPin class="mt-0.5 h-4 w-4 shrink-0 text-brand-ink" aria-hidden="true" />Jl. Sawo 4 RT08/RW01, Kel. Balekambang, Kec. Kramat Jati, Jakarta Timur 13530, Indonesia</li>
            <li class="flex gap-3"><Phone class="mt-0.5 h-4 w-4 shrink-0 text-brand-ink" aria-hidden="true" /><a :href="WHATSAPP_URL" target="_blank" rel="noopener noreferrer" class="hover:text-ink hover:underline">+62 895-3654-41554</a></li>
            <li class="flex gap-3"><Mail class="mt-0.5 h-4 w-4 shrink-0 text-brand-ink" aria-hidden="true" /><a href="mailto:support@rinkwebstudio.com" class="break-all hover:text-ink hover:underline">support@rinkwebstudio.com</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-line">
        <div class="container-page flex flex-col gap-2 py-6 text-caption sm:flex-row sm:justify-between">
          <p>© {{ year }} Rinkweb Studio. Hak cipta dilindungi.</p>
          <p>Produk dari <a href="https://rinkwebstudio.com" target="_blank" rel="noopener noreferrer" class="font-semibold text-brand-ink hover:underline">Rinkweb Studio</a></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Mail, MapPin, Menu, Phone, X } from 'lucide-vue-next'
import { LOGIN_URL, SIGNUP_URL, WHATSAPP_URL } from '~/utils/links'

const navLinks = [
  { to: '/#fitur', label: 'Fitur' },
  { to: '/docs', label: 'Dokumentasi' },
  { to: '/tentang', label: 'Tentang' },
  { to: '/contact', label: 'Kontak' },
]

const footerGroups = [
  { title: 'Perusahaan', links: [{ to: '/tentang', label: 'Tentang kami' }, { to: '/docs', label: 'Dokumentasi' }, { to: '/contact', label: 'Hubungi kami' }] },
  { title: 'Legal', links: [{ to: '/privacy-policy', label: 'Kebijakan privasi' }, { to: '/terms', label: 'Syarat & ketentuan' }, { to: '/data-deletion', label: 'Penghapusan data' }] },
]

const route = useRoute()
const year = new Date().getFullYear()
const mobileOpen = ref(false)
const isScrolled = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)
const menuPanel = ref<HTMLElement | null>(null)

const isActive = (to: string) => !to.includes('#') && route.path === to

const openMenu = async () => {
  mobileOpen.value = true
  await nextTick()
  menuPanel.value?.querySelector<HTMLElement>('a')?.focus()
}
const closeMenu = (returnFocus = false) => {
  mobileOpen.value = false
  if (returnFocus) menuButton.value?.focus()
}

const onKeydown = (event: KeyboardEvent) => { if (event.key === 'Escape' && mobileOpen.value) closeMenu(true) }
const checkScroll = () => { isScrolled.value = window.scrollY > 8 }

watch(() => route.fullPath, () => { mobileOpen.value = false })
onMounted(() => {
  checkScroll()
  window.addEventListener('scroll', checkScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.nav-active { @apply font-semibold text-ink; }
.nav-active::after { content: ''; @apply absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-brand; }
</style>
