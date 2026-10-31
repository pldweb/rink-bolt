<!-- Kartu ringkasan kampanye statis untuk seksi fitur. Angka adalah data contoh. -->
<template>
  <div class="rounded-lg border border-line bg-white p-5 shadow-sm">
    <div class="flex flex-wrap items-center justify-between gap-2">
      <p class="text-label text-ink">Promo payday Oktober</p>
      <span class="rounded-full bg-sunken px-2.5 py-0.5 text-caption text-ink-subtle">Contoh data</span>
    </div>
    <p class="mt-1 text-caption text-ink-subtle">Segmen: pelanggan aktif · dijadwalkan 25 Okt 2026, 19.00</p>
    <div class="mt-4 h-2 overflow-hidden rounded-full bg-sunken" role="img" aria-label="Progres pengiriman 98,7 persen">
      <div class="h-full w-[98.7%] rounded-full bg-brand" />
    </div>
    <dl class="mt-5 grid grid-cols-3 gap-4">
      <div v-for="stat in stats" :key="stat.label">
        <dt class="text-caption text-ink-subtle">{{ stat.label }}</dt>
        <dd class="mt-1 text-[1.125rem] font-bold leading-6 tabular-nums text-ink">{{ stat.value }}</dd>
      </div>
    </dl>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { label: 'Terkirim', value: '1.184' },
  { label: 'Dibaca', value: '962' },
  { label: 'Dibalas', value: '214' },
]
</script>
