<!-- Mockup statis layar Inbox RinkBolt. Semua nama dan pesan adalah data contoh. -->
<template>
  <figure class="relative" aria-label="Contoh tampilan inbox RinkBolt dengan data ilustrasi">
    <div class="overflow-hidden rounded-xl border border-line bg-white shadow-lg">
      <div class="flex items-center gap-3 border-b border-line px-4 py-3">
        <span class="flex gap-1.5" aria-hidden="true"><i class="h-2.5 w-2.5 rounded-full bg-line" /><i class="h-2.5 w-2.5 rounded-full bg-line" /><i class="h-2.5 w-2.5 rounded-full bg-line" /></span>
        <span class="text-label text-ink">Inbox</span>
        <span class="ml-auto rounded-full bg-sunken px-2.5 py-0.5 text-caption text-ink-subtle">Contoh tampilan</span>
      </div>

      <div class="grid sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]">
        <ul class="hidden border-r border-line sm:block" aria-label="Daftar percakapan contoh">
          <li v-for="chat in chats" :key="chat.name" class="flex gap-3 border-b border-line px-4 py-3" :class="chat.active && 'bg-brand-soft'">
            <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full text-caption font-semibold" :class="chat.active ? 'bg-navy text-white' : 'bg-sunken text-ink'">{{ chat.initials }}</span>
            <span class="min-w-0 flex-1">
              <span class="flex items-center justify-between gap-2">
                <span class="truncate text-body-sm font-semibold text-ink">{{ chat.name }}</span>
                <span class="text-caption text-ink-subtle">{{ chat.time }}</span>
              </span>
              <span class="mt-0.5 flex items-center gap-1.5">
                <ChannelTag :channel="chat.channel" />
                <span class="truncate text-caption text-ink-subtle">{{ chat.preview }}</span>
              </span>
            </span>
          </li>
        </ul>

        <div class="flex min-w-0 flex-col bg-canvas">
          <div class="flex items-center gap-3 border-b border-line bg-white px-4 py-3">
            <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy text-caption font-semibold text-white">NA</span>
            <span class="min-w-0 flex-1">
              <span class="block truncate text-body-sm font-semibold text-ink">Nadia A.</span>
              <span class="flex items-center gap-1.5 whitespace-nowrap text-caption text-ink-subtle"><ChannelTag channel="wa" /> Ditangani Raka</span>
            </span>
            <span class="ml-auto whitespace-nowrap rounded-full bg-success-soft px-2.5 py-0.5 text-caption font-semibold text-success">● Terbuka</span>
          </div>

          <ol class="flex flex-1 flex-col gap-2.5 px-4 py-4 text-body-sm">
            <li class="max-w-[85%] self-start rounded-lg rounded-tl-sm bg-white px-3.5 py-2.5 text-ink shadow-sm">Kak, hoodie oversize yang sage masih ada ukuran L?</li>
            <li class="max-w-[85%] self-end rounded-lg rounded-tr-sm bg-navy px-3.5 py-2.5 text-white">Masih ada, Kak Nadia! Mau sekalian dicek ongkir ke Bandung?</li>
            <li class="max-w-[85%] self-start rounded-lg rounded-tl-sm bg-white px-3.5 py-2.5 text-ink shadow-sm">Boleh, sama pakai voucher yang kemarin ya</li>
            <li class="self-end text-caption text-ink-subtle">Dibaca 14.32 ✓✓</li>
          </ol>

          <div class="flex items-center gap-2 border-t border-line bg-white px-3 py-2.5">
            <span class="flex h-10 flex-1 items-center rounded-full bg-sunken px-4 text-body-sm text-ink-subtle">Tulis balasan…</span>
            <span class="grid h-10 w-10 place-items-center rounded-full bg-brand text-white" aria-hidden="true"><Send class="h-4 w-4" /></span>
          </div>
        </div>
      </div>
    </div>

    <div class="relative mt-4 flex items-center gap-3 rounded-lg border border-line bg-white px-4 py-3 shadow-md sm:absolute sm:-bottom-6 sm:-left-6 sm:mt-0">
      <span class="grid h-9 w-9 place-items-center rounded-full bg-success-soft text-success" aria-hidden="true"><CheckCheck class="h-5 w-5" /></span>
      <span>
        <span class="block text-label text-ink">Broadcast promo payday</span>
        <span class="block text-caption text-ink-subtle">1.184 dari 1.200 terkirim</span>
      </span>
    </div>
    <figcaption class="sr-only">Contoh tampilan, data ilustrasi.</figcaption>
  </figure>
</template>

<script setup lang="ts">
import { CheckCheck, Send } from 'lucide-vue-next'
import { defineComponent, h } from 'vue'

type Channel = 'wa' | 'ig' | 'th'

const chats: { name: string; initials: string; channel: Channel; preview: string; time: string; active?: boolean }[] = [
  { name: 'Nadia A.', initials: 'NA', channel: 'wa', preview: 'Boleh, sama pakai voucher…', time: '14.31', active: true },
  { name: '@dimas.jpg', initials: 'DM', channel: 'ig', preview: 'Restock kapan kak?', time: '14.12' },
  { name: '@sekar.wl', initials: 'SW', channel: 'th', preview: 'Balas di thread drop baru', time: '13.50' },
  { name: 'Bima Store', initials: 'BS', channel: 'wa', preview: 'Invoice sudah diterima', time: '12.04' },
  { name: '@tarakirana', initials: 'TK', channel: 'ig', preview: 'Bisa COD?', time: '11.47' },
]

const CHANNEL_LABEL: Record<Channel, string> = { wa: 'WA', ig: 'IG', th: 'Threads' }

// Label teks netral, bukan warna merek kanal: situs publik memakai satu warna brand (blueprint §2.5).
const ChannelTag = defineComponent({
  props: { channel: { type: String as () => Channel, required: true } },
  setup: (props) => () => h('span', { class: 'shrink-0 rounded-sm border border-line bg-white px-1.5 text-caption font-semibold text-ink-muted' }, CHANNEL_LABEL[props.channel]),
})
</script>
