<template>
  <div>
    <PageHero eyebrow="Tentang kami" title="Kami bikin alat yang bikin bisnis lebih dekat dengan pelanggannya.">
      <template #lead>
        RinkBolt adalah platform WhatsApp Business resmi yang dikembangkan oleh <a href="https://rinkwebstudio.com" target="_blank" rel="noopener noreferrer" class="font-semibold text-brand-ink underline underline-offset-2">Rinkweb Studio</a>, studio digital asal Jakarta yang sejak 2018 membantu bisnis tumbuh lewat website, sistem internal, dan otomasi.
      </template>
    </PageHero>

    <section class="section">
      <div class="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-5">
          <p class="eyebrow">Cerita kami</p>
          <h2 class="section-title">Kenapa RinkBolt ada</h2>
          <div class="mt-6 space-y-4 text-body-lg text-ink-muted">
            <p>Banyak bisnis yang kami dampingi bergantung pada WhatsApp untuk jualan dan melayani pelanggan, tapi masih mengandalkan aplikasi tidak resmi yang rawan diblokir dan sulit dipantau.</p>
            <p>RinkBolt kami bangun untuk menjawab itu: satu workspace di atas WhatsApp Business Platform milik Meta untuk broadcast, percakapan, kontak, dan integrasi sistem, lewat jalur yang resmi dan aman.</p>
          </div>
        </div>
        <ol class="grid gap-x-10 sm:grid-cols-2 lg:col-span-7">
          <li v-for="(v, i) in values" :key="v.title" class="border-t border-line py-6">
            <span class="text-label tabular-nums text-brand-ink">0{{ i + 1 }}</span>
            <h3 class="mt-2 text-heading-3 text-ink">{{ v.title }}</h3>
            <p class="mt-2 text-body-sm text-ink-muted">{{ v.desc }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="section bg-sunken">
      <div class="container-page grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div>
          <p class="eyebrow">Pengelola layanan</p>
          <h2 class="section-title">Rinkweb Studio</h2>
          <p class="section-lead">Studio kreatif digital yang fokus pada website, sistem internal, dan otomasi bisnis. RinkBolt adalah produk Rinkweb Studio dan dikelola langsung oleh tim yang sama.</p>
          <a href="https://rinkwebstudio.com" target="_blank" rel="noopener noreferrer" class="btn btn-outline mt-6">Kunjungi rinkwebstudio.com <ArrowUpRight class="h-[18px] w-[18px]" aria-hidden="true" /></a>
        </div>
        <dl class="divide-y divide-line rounded-xl border border-line bg-white shadow-sm">
          <div v-for="row in company" :key="row.label" class="grid gap-1 px-6 py-4 sm:grid-cols-[10rem_minmax(0,1fr)]">
            <dt class="text-label text-ink-subtle">{{ row.label }}</dt>
            <dd class="text-body-sm text-ink"><a v-if="row.href" :href="row.href" class="break-all font-semibold hover:text-brand-ink hover:underline">{{ row.value }}</a><template v-else>{{ row.value }}</template></dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="section">
      <div class="container-page flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <h2 class="max-w-[36rem] text-heading-2 text-ink sm:text-heading-1">Pengin tahu RinkBolt cocok buat bisnismu?</h2>
        <a :href="WHATSAPP_URL" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Diskusi via WhatsApp <ArrowRight class="h-[18px] w-[18px]" aria-hidden="true" /></a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, ArrowUpRight } from 'lucide-vue-next'
import { WHATSAPP_URL } from '~/utils/links'

useSeoMeta({
  title: 'Tentang Kami — RinkBolt',
  description: 'RinkBolt dikembangkan oleh Rinkweb Studio, studio digital asal Jakarta, untuk komunikasi pelanggan lewat jalur resmi Meta.',
  ogTitle: 'Tentang Kami — RinkBolt',
  ogDescription: 'Kenal lebih dekat dengan tim di balik RinkBolt.',
})

const values = [
  { title: 'Jalur resmi', desc: 'Dibangun di atas WhatsApp Business Platform milik Meta, bukan aplikasi tiruan.' },
  { title: 'Aman sejak awal', desc: 'Token terenkripsi, akses berbasis peran, dan kami tidak menjual datamu.' },
  { title: 'Gampang diintegrasikan', desc: 'REST API dan webhook untuk menyambungkan sistem yang sudah kamu pakai.' },
  { title: 'Didampingi tim', desc: 'Kami bantu dari verifikasi nomor sampai kampanye pertama berjalan.' },
]

const company = [
  { label: 'Nama', value: 'Rinkweb Studio' },
  { label: 'Alamat', value: 'Jl. Sawo 4 RT08/RW01, Kel. Balekambang, Kec. Kramat Jati, Jakarta Timur 13530, Indonesia' },
  { label: 'Email', value: 'support@rinkwebstudio.com', href: 'mailto:support@rinkwebstudio.com' },
  { label: 'WhatsApp', value: '+62 895-3654-41554', href: WHATSAPP_URL },
  { label: 'Jam operasional', value: 'Senin–Sabtu, 09.00–18.00 WIB' },
]
</script>
