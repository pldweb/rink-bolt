<template>
  <div class="min-h-screen flex flex-col bg-[#061923]">
    <!-- Header -->
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      :class="headerClass"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex justify-between items-center h-[72px]">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center">
            <img src="/logo.png" alt="RinkBolt" class="h-7" :class="logoFilter" />
          </NuxtLink>

          <!-- Desktop actions -->
          <div class="hidden lg:flex items-center gap-1">
            <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to" class="px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200" :class="docsClass">{{ link.label }}</NuxtLink>
            <span class="mx-1 h-5 w-px" :class="isHome && !isScrolled ? 'bg-white/20' : 'bg-gray-200'" />
            <a href="https://app.rinkbolt.web.id/login" class="px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200" :class="loginClass">Login</a>
            <a href="https://app.rinkbolt.web.id/signup" class="bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 shadow-md hover:shadow-lg">Daftar</a>
          </div>

          <!-- Mobile Menu Button -->
          <button class="lg:hidden p-2 rounded-lg" @click="mobileOpen = !mobileOpen" aria-label="Toggle menu">
            <Menu v-if="!mobileOpen" class="w-5 h-5" :class="menuIconClass" />
            <X v-else class="w-5 h-5 text-gray-700" />
          </button>
        </nav>

        <!-- Mobile Menu -->
        <div
          v-if="mobileOpen"
          class="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-2xl border-t border-gray-100 py-3 px-4"
        >
          <div class="flex flex-col space-y-1">
            <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to" class="px-4 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:text-brand-600 hover:bg-brand-50 transition-colors" @click="mobileOpen = false">{{ link.label }}</NuxtLink>
            <a href="https://app.rinkbolt.web.id/login" class="px-4 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:text-brand-600 hover:bg-brand-50 transition-colors" @click="mobileOpen = false">Login</a>
            <a href="https://app.rinkbolt.web.id/signup" class="mt-2 bg-brand-500 hover:bg-brand-600 text-white px-4 py-3 rounded-lg text-sm font-bold text-center transition-colors shadow-sm" @click="mobileOpen = false">Daftar</a>
          </div>
        </div>
      </div>
    </header>

    <!-- Page Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-[#041a24] text-slate-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <img src="/logo.png" alt="RinkBolt" class="h-7 filter brightness-0 invert" />
          <p class="mt-5 max-w-xs text-sm leading-6 text-slate-400">Platform WhatsApp Business resmi via Meta API untuk broadcast, percakapan, dan CRM bisnis Anda.</p>
          <div class="mt-6 inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            <MetaLogo class="h-4 w-5 text-[#0866FF]" />
            <span class="text-[11px] font-semibold leading-tight text-slate-300">Meta Tech Provider<br /><span class="font-medium text-slate-500">WhatsApp Business Platform</span></span>
          </div>
          <p class="mt-5 text-xs text-slate-500">Produk dari <a href="https://rinkwebstudio.com" target="_blank" rel="noopener noreferrer" class="font-semibold text-brand-300 hover:text-brand-200">Rinkweb Studio</a></p>
        </div>
        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-white">Perusahaan</h3>
          <ul class="mt-4 space-y-3 text-sm">
            <li><NuxtLink to="/tentang" class="hover:text-brand-300 transition-colors">Tentang Kami</NuxtLink></li>
            <li><NuxtLink to="/docs" class="hover:text-brand-300 transition-colors">Dokumentasi</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-brand-300 transition-colors">Hubungi Kami</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-white">Legal</h3>
          <ul class="mt-4 space-y-3 text-sm">
            <li><NuxtLink to="/privacy-policy" class="hover:text-brand-300 transition-colors">Kebijakan Privasi</NuxtLink></li>
            <li><NuxtLink to="/terms" class="hover:text-brand-300 transition-colors">Syarat &amp; Ketentuan</NuxtLink></li>
            <li><NuxtLink to="/data-deletion" class="hover:text-brand-300 transition-colors">Penghapusan Data</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-white">Kontak</h3>
          <ul class="mt-4 space-y-3 text-sm text-slate-400">
            <li class="flex gap-3"><MapPin class="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />Jl. Sawo 4 RT08/RW01, Kel. Balekambang, Kec. Kramat Jati, Jakarta Timur 13530, Indonesia</li>
            <li class="flex gap-3"><Phone class="mt-0.5 h-4 w-4 shrink-0 text-brand-300" /><a href="https://wa.me/62895365441554" target="_blank" rel="noopener noreferrer" class="hover:text-brand-300">+62 895-3654-41554</a></li>
            <li class="flex gap-3"><Mail class="mt-0.5 h-4 w-4 shrink-0 text-brand-300" /><a href="mailto:support@rinkwebstudio.com" class="hover:text-brand-300">support@rinkwebstudio.com</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-white/10">
        <p class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-slate-500">© {{ new Date().getFullYear() }} Rinkweb Studio. Hak cipta dilindungi.</p>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
import { Mail, MapPin, Menu, Phone, X } from 'lucide-vue-next'

const navLinks = [
  { to: '/tentang', label: 'Tentang Kami' },
  { to: '/docs', label: 'Dokumentasi' },
  { to: '/privacy-policy', label: 'Kebijakan Privasi' },
  { to: '/terms', label: 'Syarat & Ketentuan' },
]

const route = useRoute()
const mobileOpen = ref(false)
const isScrolled = ref(false)

const checkScroll = () => { isScrolled.value = window.scrollY > 50 }

onMounted(() => window.addEventListener('scroll', checkScroll))
onUnmounted(() => window.removeEventListener('scroll', checkScroll))

const isHome = computed(() => route.path === '/')

const headerClass = computed(() => {
  const solidHeader = 'bg-white/95 shadow-md backdrop-blur border-b border-gray-100'
  if (!isHome.value) return solidHeader
  return isScrolled.value ? solidHeader : 'bg-transparent'
})

const logoFilter = computed(() => !isHome.value || isScrolled.value ? '' : 'filter brightness-0 invert')

const menuIconClass = computed(() => {
  if (!isHome.value || isScrolled.value) return 'text-gray-700'
  return 'text-white'
})

const loginClass = computed(() => {
  const base = !isHome.value || isScrolled.value
  return base ? 'text-gray-600 hover:text-brand-600 hover:bg-brand-50' : 'text-white/80 hover:text-white hover:bg-white/10'
})

const docsClass = computed(() => {
  const base = !isHome.value || isScrolled.value
  return base ? 'text-gray-600 hover:text-brand-600 hover:bg-brand-50' : 'text-white/80 hover:text-white hover:bg-white/10'
})

</script>
