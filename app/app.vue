<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@font-face { font-family: 'Poppins'; font-weight: 400; font-style: normal; font-display: swap; src: url('/fonts/Poppins-Regular.woff2') format('woff2'); }
@font-face { font-family: 'Poppins'; font-weight: 500; font-style: normal; font-display: swap; src: url('/fonts/Poppins-Medium.woff2') format('woff2'); }
@font-face { font-family: 'Poppins'; font-weight: 600; font-style: normal; font-display: swap; src: url('/fonts/Poppins-SemiBold.woff2') format('woff2'); }
@font-face { font-family: 'Poppins'; font-weight: 700; font-style: normal; font-display: swap; src: url('/fonts/Poppins-Bold.woff2') format('woff2'); }

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { color-scheme: light; }
  body { @apply bg-white font-sans text-body text-ink antialiased; }
  :focus-visible { outline: 2px solid theme('colors.focus'); outline-offset: 2px; }
  .on-dark :focus-visible { outline-color: #fff; }
}

@layer components {
  .container-page { @apply mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8; }
  .section { @apply py-16 lg:py-24; }
  .eyebrow { @apply text-overline uppercase text-brand-ink; }
  .section-title { @apply mt-3 text-[clamp(1.75rem,4.4vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink; }
  .section-lead { @apply mt-3 max-w-[40rem] text-body-lg text-ink-muted; }

  /* Tombol pill (§7.1): standar 44 px teks 15 px; besar 48 px hanya untuk CTA hero. */
  .btn { @apply inline-flex h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 text-[15px] font-semibold leading-5 transition-[background-color,border-color,color,transform] duration-150 active:scale-[.98]; }
  .btn-lg { @apply h-12 px-6 text-body; }
  .btn-primary { @apply bg-brand font-bold text-white hover:bg-brand-hover; }
  .btn-secondary { @apply bg-navy text-white hover:bg-navy-fill; }
  .btn-outline { @apply border-[1.5px] border-control text-ink hover:bg-sunken; }
  .btn-on-dark { @apply border-[1.5px] border-white/60 text-white hover:bg-white/10; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; scroll-behavior: auto !important; }
  .btn { transform: none !important; }
}
</style>
