<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useTheme()
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,500;1,600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-[#061923] text-gray-900 antialiased transition-colors duration-200;
  font-family: 'Montserrat', system-ui, sans-serif;
}

html.dark body { background: #020617; color: #e2e8f0; }
html.dark .bg-white { background-color: #0f172a !important; }
html.dark .bg-gray-50 { background-color: #0b1120 !important; }
html.dark .bg-brand-50 { background-color: #2a1a0a !important; }
html.dark .border-gray-100,
html.dark .border-gray-200 { border-color: #334155 !important; }
html.dark .border-brand-100,
html.dark .border-brand-200 { border-color: #7d4108 !important; }
html.dark .text-gray-900,
html.dark .text-gray-800,
html.dark .text-gray-700 { color: #f1f5f9 !important; }
html.dark .text-gray-600,
html.dark .text-gray-500,
html.dark .text-gray-400 { color: #cbd5e1 !important; }
</style>
