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
          <div class="hidden md:flex items-center gap-2">
            <NuxtLink to="/docs" class="px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200" :class="docsClass">Dokumentasi</NuxtLink>
            <button type="button" class="grid h-10 w-10 place-items-center rounded-lg transition-colors duration-200" :class="themeButtonClass" :aria-label="theme === 'dark' ? 'Gunakan tema terang' : 'Gunakan tema gelap'" @click="toggleTheme"><Sun v-if="theme === 'dark'" class="h-4 w-4" /><Moon v-else class="h-4 w-4" /></button>
            <a href="https://app.rinkbolt.web.id/login" class="px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200" :class="loginClass">Login</a>
            <a href="https://app.rinkbolt.web.id/signup" class="bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 shadow-md hover:shadow-lg">Daftar</a>
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
            <NuxtLink to="/docs" class="px-4 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:text-brand-600 hover:bg-brand-50 transition-colors" @click="mobileOpen = false">Dokumentasi</NuxtLink>
            <button type="button" class="flex items-center gap-2 px-4 py-3 text-left text-sm font-semibold text-gray-700 hover:text-brand-600 hover:bg-brand-50" @click="toggleTheme"><Sun v-if="theme === 'dark'" class="h-4 w-4" /><Moon v-else class="h-4 w-4" /> {{ theme === 'dark' ? 'Tema terang' : 'Tema gelap' }}</button>
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

  </div>
</template>

<script setup lang="ts">
import { Menu, Moon, Sun, X } from 'lucide-vue-next'

const route = useRoute()
const mobileOpen = ref(false)
const isScrolled = ref(false)
const { theme, toggleTheme } = useTheme()

const checkScroll = () => { isScrolled.value = window.scrollY > 50 }

onMounted(() => window.addEventListener('scroll', checkScroll))
onUnmounted(() => window.removeEventListener('scroll', checkScroll))

const isHome = computed(() => route.path === '/')

const headerClass = computed(() => {
  const solidHeader = theme.value === 'dark'
    ? 'bg-slate-950/95 shadow-md backdrop-blur border-b border-slate-800'
    : 'bg-white/95 shadow-md backdrop-blur border-b border-gray-100'
  if (!isHome.value) return solidHeader
  return isScrolled.value ? solidHeader : 'bg-transparent'
})

const logoFilter = computed(() => {
  if (theme.value === 'dark') return 'filter brightness-0 invert'
  if (!isHome.value || isScrolled.value) return ''
  return 'filter brightness-0 invert'
})

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

const themeButtonClass = computed(() => !isHome.value || isScrolled.value ? 'text-gray-600 hover:bg-brand-50 hover:text-brand-600' : 'text-white/80 hover:bg-white/10 hover:text-white')
</script>
