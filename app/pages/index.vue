<template>
  <div>
    <!-- Hero -->
    <!-- Hero: blok navy dengan lingkaran oranye di belakang mockup, seperti rinkwebstudio.com -->
    <section class="on-dark overflow-hidden bg-navy pb-20 pt-14 text-white lg:pb-24 lg:pt-20">
      <div class="container-page grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
        <div>
          <p class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 py-1.5 pl-2 pr-4 text-caption font-semibold text-white">
            <span class="grid h-6 w-6 place-items-center rounded-full bg-white"><MetaLogo class="h-3 w-4 text-[#0866FF]" /></span>
            Meta Tech Provider resmi
          </p>
          <h1 class="mt-6 text-display-lg text-white sm:text-display-xl">
            Semua chat pelanggan, <span class="text-brand-light">satu inbox.</span>
          </h1>
          <p class="mt-5 max-w-[34rem] text-body-lg text-on-navy">
            Balas WhatsApp, Instagram, dan Threads bareng tim, kirim broadcast yang terasa personal, dan jadwalkan konten ke YouTube, TikTok, Instagram, dan Threads dari satu workspace.
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <a :href="SIGNUP_URL" class="btn btn-primary btn-lg">Coba gratis <ArrowRight class="h-5 w-5" aria-hidden="true" /></a>
            <a :href="WHATSAPP_URL" target="_blank" rel="noopener noreferrer" class="btn btn-on-dark btn-lg">Tanya tim kami</a>
          </div>
          <ul class="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-body-sm text-on-navy">
            <li v-for="point in heroPoints" :key="point" class="flex items-center gap-2"><Check class="h-4 w-4 text-brand-light" aria-hidden="true" />{{ point }}</li>
          </ul>
        </div>

        <div class="relative py-6 sm:py-10">
          <!-- Di HP mockup lebih tinggi dari lingkaran, jadi lingkaran digeser ke pojok supaya tetap terlihat. -->
          <div class="absolute -right-10 top-0 aspect-square w-[72%] rounded-full bg-brand sm:left-1/2 sm:right-auto sm:top-1/2 sm:w-[78%] sm:-translate-x-1/2 sm:-translate-y-1/2" aria-hidden="true" />
          <InboxMockup class="relative" />
        </div>
      </div>
    </section>

    <!-- Bukti jalur resmi -->
    <section class="border-y border-line bg-sunken">
      <div class="container-page flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">
        <div class="flex items-center gap-4">
          <span class="flex items-center gap-2 text-ink"><MetaLogo class="h-6 w-8 text-[#0866FF]" /><span class="text-heading-3">Meta</span></span>
          <span class="h-8 w-px bg-line" aria-hidden="true" />
          <span>
            <span class="block text-label text-ink">Tech Provider resmi</span>
            <span class="block text-caption text-ink-subtle">WhatsApp Business Platform (Cloud API)</span>
          </span>
        </div>
        <ul class="flex flex-wrap gap-x-6 gap-y-2 text-label text-ink-muted">
          <li v-for="item in trust" :key="item" class="flex items-center gap-2"><CheckCheck class="h-4 w-4 text-success" aria-hidden="true" />{{ item }}</li>
        </ul>
      </div>
    </section>

    <!-- Fitur -->
    <section id="fitur" class="section scroll-mt-16">
      <div class="container-page">
        <div class="max-w-[40rem]">
          <p class="eyebrow">Fitur</p>
          <h2 class="section-title">Dari DM pertama sampai repeat order.</h2>
          <p class="section-lead">Semua yang tim kamu butuhkan buat ngobrol sama pelanggan, tanpa gonta-ganti HP dan aplikasi.</p>
        </div>

        <div class="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          <article class="rounded-xl bg-sunken p-6 sm:p-8 lg:col-span-7">
            <p class="eyebrow">Broadcast</p>
            <h3 class="mt-3 text-heading-3 text-ink sm:text-heading-2">Kirim promo ke ribuan kontak, tetap terasa personal.</h3>
            <p class="mt-3 max-w-[32rem] text-body-sm text-ink-muted sm:text-body">Pilih segmen, pakai template yang disetujui Meta, sisipkan nama pelanggan, lalu jadwalkan. Pengiriman berjalan bertahap supaya nomormu aman.</p>
            <CampaignPreview class="mt-8" />
          </article>

          <ul class="lg:col-span-5">
            <li v-for="f in features" :key="f.title" class="flex gap-4 border-t border-line py-5 first:border-t-0 first:pt-0 lg:first:pt-2">
              <component :is="f.icon" class="mt-0.5 h-5 w-5 shrink-0 text-brand-ink" aria-hidden="true" />
              <div>
                <h3 class="text-body font-semibold text-ink">{{ f.title }}</h3>
                <p class="mt-1 text-body-sm text-ink-muted">{{ f.desc }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Cara mulai -->
    <section class="section bg-sunken">
      <div class="container-page">
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div class="max-w-[40rem]">
            <p class="eyebrow">Cara mulai</p>
            <h2 class="section-title">Siap jalan dalam tiga langkah.</h2>
            <p class="section-lead">Tim kami dampingi dari verifikasi nomor sampai kampanye pertama terkirim.</p>
          </div>
          <a :href="SIGNUP_URL" class="btn btn-secondary self-start md:self-auto">Buat akun</a>
        </div>
        <ol class="mt-12 grid gap-8 md:grid-cols-3">
          <li v-for="(step, i) in steps" :key="step.title" class="border-t-2 border-navy pt-6">
            <span class="text-heading-1 tabular-nums text-brand-hover">0{{ i + 1 }}</span>
            <h3 class="mt-4 text-heading-3 text-ink">{{ step.title }}</h3>
            <p class="mt-2 text-body-sm text-ink-muted">{{ step.desc }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- Developer (pita navy) -->
    <section class="on-dark section bg-navy text-white">
      <div class="container-page grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p class="text-overline uppercase text-brand">Untuk developer</p>
          <h2 class="mt-3 text-[clamp(1.75rem,4.4vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em]">Sambungkan ke sistemmu lewat REST API dan webhook.</h2>
          <p class="mt-3 max-w-[36rem] text-body-lg text-white/80">Kirim pesan dari backend, terima pesan masuk dan status pengiriman secara real-time. API key berbasis scope, webhook bertanda tangan HMAC.</p>
          <NuxtLink to="/docs" class="btn btn-on-dark mt-8">Baca dokumentasi <ArrowRight class="h-[18px] w-[18px]" aria-hidden="true" /></NuxtLink>
        </div>
        <pre class="overflow-x-auto rounded-xl border border-white/10 bg-navy-deep p-6 text-[13px] leading-6 text-white/85"><code><span class="text-brand">curl</span> -X POST https://api.rinkbolt.web.id/api/v1/messages \
  -H <span class="text-brand-ink-dark">"Authorization: Bearer $RINKBOLT_API_KEY"</span> \
  -H <span class="text-brand-ink-dark">"Content-Type: application/json"</span> \
  -d <span class="text-brand-ink-dark">'{
    "from": "wzp_abc123",
    "to": "628123456789",
    "content": { "type": "text", "text": "Pesananmu sudah dikirim" }
  }'</span></code></pre>
      </div>
    </section>

    <!-- Ajakan akhir -->
    <section class="section">
      <div class="container-page text-center">
        <h2 class="mx-auto max-w-[48rem] text-[clamp(1.75rem,4.4vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink">Pelanggan lagi nunggu balasanmu.</h2>
        <p class="mx-auto mt-4 max-w-[36rem] text-body-lg text-ink-muted">Bikin workspace gratis sekarang, atau ngobrol dulu sama tim kami soal kebutuhan bisnismu.</p>
        <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a :href="SIGNUP_URL" class="btn btn-primary">Coba gratis</a>
          <a :href="WHATSAPP_URL" target="_blank" rel="noopener noreferrer" class="btn btn-outline"><MessageCircle class="h-[18px] w-[18px]" aria-hidden="true" /> Diskusi via WhatsApp</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, CalendarClock, Check, CheckCheck, Inbox, LayoutTemplate, MessageCircle, Users, Webhook } from 'lucide-vue-next'
import { SIGNUP_URL, WHATSAPP_URL } from '~/utils/links'

useSeoMeta({
  title: 'RinkBolt — Inbox WhatsApp, Instagram & Threads resmi Meta',
  description: 'Balas chat WhatsApp, Instagram, dan Threads bareng tim, kirim broadcast, upload konten ke YouTube, TikTok, Instagram, dan Threads, dan kelola pelanggan dari satu workspace.',
  ogTitle: 'RinkBolt — Semua chat pelanggan, satu inbox',
  ogDescription: 'Inbox bersama, broadcast terjadwal, dan CRM di atas WhatsApp Business Platform resmi Meta.',
})

const heroPoints = ['Jalur resmi Meta', 'Nomor tetap milikmu', 'Didampingi tim lokal']
const trust = ['Nomor terverifikasi Meta', 'Template disetujui Meta', 'Tanpa aplikasi tidak resmi']

const features = [
  { icon: Inbox, title: 'Inbox bersama', desc: 'Satu kotak masuk untuk WhatsApp, Instagram, dan Threads. Bagi percakapan ke anggota tim tanpa saling tumpang tindih.' },
  { icon: Users, title: 'Kontak & segmen', desc: 'Impor, beri label, dan kelompokkan pelanggan supaya pesan sampai ke orang yang tepat.' },
  { icon: LayoutTemplate, title: 'Template pesan', desc: 'Kelola template teks, gambar, dokumen, dan video yang sudah disetujui Meta.' },
  { icon: CalendarClock, title: 'Upload konten ke 4 platform', desc: 'Unggah video dan foto ke YouTube, TikTok, Instagram, dan Threads, atur jadwal tayangnya, lalu pantau insight dari workspace yang sama.' },
  { icon: Webhook, title: 'API & webhook', desc: 'Sambungkan toko online, ERP, atau aplikasi internalmu.' },
]

const steps = [
  { title: 'Daftar dan buat workspace', desc: 'Bikin akun RinkBolt lalu undang anggota tim yang ikut membalas chat.' },
  { title: 'Hubungkan nomor dan akun', desc: 'Sambungkan nomor WhatsApp Business serta akun Instagram, Threads, YouTube, atau TikTok lewat jalur resmi tiap platform.' },
  { title: 'Kirim kampanye pertama', desc: 'Pilih template, tentukan audiens, lalu pantau terkirim, dibaca, dan dibalas.' },
]
</script>
