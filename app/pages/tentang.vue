<template>
  <div>
    <section class="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28 bg-[#062534] text-white">
      <div class="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
      <div class="pointer-events-none absolute inset-0 opacity-[.08]" style="background-image: linear-gradient(rgba(139,211,196,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(139,211,196,.4) 1px, transparent 1px); background-size: 56px 56px" />
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-xs font-bold uppercase tracking-[.2em] text-brand-300">Tentang Kami</p>
        <h1 class="mt-4 max-w-3xl text-4xl sm:text-5xl font-black leading-[1.05] tracking-[-.04em]">Kami membangun alat komunikasi yang membuat bisnis lebih dekat dengan pelanggannya.</h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">RinkBolt adalah platform WhatsApp Business resmi yang dikembangkan oleh <a href="https://rinkwebstudio.com" target="_blank" rel="noopener noreferrer" class="font-semibold text-brand-300 hover:text-brand-200">Rinkweb Studio</a>, studio digital asal Jakarta yang sejak 2018 membantu bisnis tumbuh lewat website, sistem internal, dan otomasi.</p>
      </div>
    </section>

    <section class="bg-white py-20 sm:py-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-14 lg:grid-cols-2">
        <div>
          <h2 class="text-3xl font-black tracking-[-.03em] text-navy-900">Kenapa RinkBolt ada</h2>
          <div class="mt-6 space-y-4 text-gray-600 leading-relaxed">
            <p>Banyak bisnis yang kami dampingi bergantung pada WhatsApp untuk berjualan dan melayani pelanggan, tetapi masih mengandalkan aplikasi tidak resmi yang rawan diblokir dan sulit dipantau.</p>
            <p>RinkBolt kami bangun untuk menjawab itu: satu workspace di atas WhatsApp Business Platform milik Meta untuk broadcast, percakapan, kontak, dan integrasi sistem, dengan jalur yang resmi dan aman.</p>
          </div>
        </div>
        <ul class="grid gap-4 sm:grid-cols-2">
          <li v-for="v in values" :key="v.title" class="rounded-2xl border border-gray-100 bg-gray-50/60 p-6">
            <div class="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600"><component :is="v.icon" class="h-5 w-5" /></div>
            <h3 class="mt-5 font-bold text-navy-900">{{ v.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-gray-600">{{ v.desc }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="bg-gray-50 py-20 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <p class="text-xs font-bold uppercase tracking-[.2em] text-brand-600">Pengelola layanan</p>
          <h2 class="mt-4 text-3xl font-black tracking-[-.03em] text-navy-900">Rinkweb Studio</h2>
          <p class="mt-4 text-gray-600 leading-relaxed">Studio kreatif digital yang fokus pada website, sistem internal, dan otomasi bisnis. RinkBolt adalah produk Rinkweb Studio dan dikelola langsung oleh tim yang sama.</p>
          <a href="https://rinkwebstudio.com" target="_blank" rel="noopener noreferrer" class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700">Kunjungi rinkwebstudio.com <ArrowUpRight class="h-4 w-4" /></a>
        </div>
        <dl class="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          <div v-for="row in company" :key="row.label" class="grid gap-1 px-6 py-4 sm:grid-cols-[9rem_1fr]">
            <dt class="text-sm font-semibold text-gray-500">{{ row.label }}</dt>
            <dd class="text-sm text-navy-900"><a v-if="row.href" :href="row.href" class="font-semibold hover:text-brand-600">{{ row.value }}</a><template v-else>{{ row.value }}</template></dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="bg-white py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <h2 class="text-2xl font-black tracking-[-.02em] text-navy-900">Ingin tahu apakah RinkBolt cocok untuk bisnis Anda?</h2>
        <a href="https://wa.me/62895365441554" target="_blank" rel="noopener noreferrer" class="inline-flex shrink-0 items-center gap-2 rounded-lg bg-brand-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-500/25 transition-colors hover:bg-brand-600">Diskusi via WhatsApp <ArrowRight class="h-4 w-4" /></a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, ArrowUpRight, BadgeCheck, LockKeyhole, Wrench, HeartHandshake } from 'lucide-vue-next'

useHead({ title: 'Tentang Kami — RinkBolt' })

const values = [
  { icon: BadgeCheck, title: 'Jalur resmi', desc: 'Dibangun di atas WhatsApp Business Platform milik Meta, bukan aplikasi tiruan.' },
  { icon: LockKeyhole, title: 'Aman sejak awal', desc: 'Token terenkripsi, akses berbasis peran, dan kami tidak menjual data Anda.' },
  { icon: Wrench, title: 'Mudah diintegrasikan', desc: 'REST API dan webhook untuk menyambungkan sistem yang sudah Anda pakai.' },
  { icon: HeartHandshake, title: 'Didampingi tim', desc: 'Kami bantu dari verifikasi nomor sampai kampanye pertama berjalan.' },
]

const company = [
  { label: 'Nama', value: 'Rinkweb Studio' },
  { label: 'Alamat', value: 'Jl. Sawo 4 RT08/RW01, Kel. Balekambang, Kec. Kramat Jati, Jakarta Timur 13530, Indonesia' },
  { label: 'Email', value: 'support@rinkwebstudio.com', href: 'mailto:support@rinkwebstudio.com' },
  { label: 'WhatsApp', value: '+62 895-3654-41554', href: 'https://wa.me/62895365441554' },
  { label: 'Jam operasional', value: 'Senin–Sabtu, 09.00–18.00 WIB' },
]
</script>
