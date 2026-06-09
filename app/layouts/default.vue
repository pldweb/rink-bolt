<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Header -->
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      :class="headerClass"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex justify-between items-center h-16">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center">
            <img src="/logo.png" alt="RinkBolt" class="h-9" :class="logoFilter" />
          </NuxtLink>

          <!-- Desktop Nav -->
          <div class="hidden md:flex items-center space-x-1">
            <NuxtLink
              v-for="link in navLinks" :key="link.to" :to="link.to"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              :class="navLinkClass(link.to)"
            >{{ link.label }}</NuxtLink>
            <NuxtLink
              to="/contact"
              class="ml-3 bg-brand-500 hover:bg-brand-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >Hubungi Kami</NuxtLink>
          </div>

          <!-- Mobile Menu Button -->
          <button class="md:hidden p-2 rounded-lg" @click="mobileOpen = !mobileOpen" aria-label="Toggle menu">
            <Menu v-if="!mobileOpen" class="w-5 h-5" :class="menuIconClass" />
            <X v-else class="w-5 h-5 text-gray-700" />
          </button>
        </nav>

        <!-- Mobile Menu -->
        <div
          v-if="mobileOpen"
          class="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-2xl border-t border-gray-100 py-3 px-4"
        >
          <div class="flex flex-col space-y-1">
            <NuxtLink
              v-for="link in navLinks" :key="link.to" :to="link.to"
              class="px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50 transition-colors"
              @click="mobileOpen = false"
            >{{ link.label }}</NuxtLink>
            <NuxtLink
              to="/contact"
              class="mt-2 bg-brand-500 hover:bg-brand-600 text-white px-4 py-3 rounded-lg text-sm font-semibold text-center transition-colors shadow-sm"
              @click="mobileOpen = false"
            >Hubungi Kami</NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- Page Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div class="lg:col-span-1">
            <div class="flex items-center mb-4">
                <img src="/logo.png" alt="RinkBolt" class="h-8" style="filter: brightness(0) invert(1)" />
              </div>
            <p class="text-gray-400 text-sm leading-relaxed">
              Platform broadcast &amp; blasting WhatsApp untuk bisnis modern.
            </p>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-white mb-4">Halaman</h4>
            <ul class="space-y-2.5">
              <li><NuxtLink to="/" class="text-sm text-gray-400 hover:text-white transition-colors">Home</NuxtLink></li>
              <li><NuxtLink to="/contact" class="text-sm text-gray-400 hover:text-white transition-colors">Kontak</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul class="space-y-2.5">
              <li><NuxtLink to="/privacy-policy" class="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</NuxtLink></li>
              <li><NuxtLink to="/terms" class="text-sm text-gray-400 hover:text-white transition-colors">Syarat &amp; Ketentuan</NuxtLink></li>
              <li><NuxtLink to="/data-deletion" class="text-sm text-gray-400 hover:text-white transition-colors">Penghapusan Data</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-white mb-4">Kontak</h4>
            <ul class="space-y-2.5 text-sm text-gray-400">
              <li>support@rinkwebstudio.web.id</li>
              <li>+62 812-3456-7890</li>
              <li>Jakarta Selatan, Indonesia</li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          &copy; {{ new Date().getFullYear() }} RinkBolt. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'

const route = useRoute()
const mobileOpen = ref(false)
const isScrolled = ref(false)

const checkScroll = () => { isScrolled.value = window.scrollY > 50 }

onMounted(() => window.addEventListener('scroll', checkScroll))
onUnmounted(() => window.removeEventListener('scroll', checkScroll))

const isHome = computed(() => route.path === '/')

const headerClass = computed(() => {
  if (!isHome.value) return 'bg-white shadow-md'
  return isScrolled.value ? 'bg-white shadow-md' : 'bg-transparent'
})

const logoFilter = computed(() => {
  if (!isHome.value || isScrolled.value) return ''
  return 'filter brightness-0 invert'
})

const menuIconClass = computed(() => {
  if (!isHome.value || isScrolled.value) return 'text-gray-700'
  return 'text-white'
})

const navLinkClass = (to: string) => {
  const active = route.path === to
  const base = !isHome.value || isScrolled.value
  if (active && base) return 'text-brand-600 bg-brand-50'
  if (active) return 'text-white bg-white/10'
  if (base) return 'text-gray-600 hover:text-brand-600 hover:bg-brand-50'
  return 'text-white/80 hover:text-white hover:bg-white/10'
}

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Syarat & Ketentuan' },
  { to: '/data-deletion', label: 'Hapus Data' },
]
</script>
