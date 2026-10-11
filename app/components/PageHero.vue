<!-- Kepala halaman dalam: eyebrow → judul → lead (pola judul seksi blueprint §3). -->
<template>
  <section class="border-b border-line bg-sunken">
    <div class="container-page py-12 lg:py-20">
      <p class="eyebrow">{{ eyebrow }}</p>
      <h1 class="mt-3 max-w-[48rem] text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.02em] text-ink">{{ title }}</h1>
      <p v-if="lead || $slots.lead" class="mt-4 max-w-[40rem] text-body-lg text-ink-muted"><slot name="lead">{{ lead }}</slot></p>
      <p v-if="updated" class="mt-4 text-body-sm text-ink-subtle">Terakhir diperbarui: {{ updated }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; lead?: string; updated?: string }>()
</script>
