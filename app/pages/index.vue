<template>
  <div>
    <!-- ─── HERO ─────────────────────────── -->
    <section class="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl" />
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-400/5 rounded-full blur-3xl" />
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 w-full">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="max-w-xl">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-500/10 border border-brand-500/20 rounded-full text-brand-300 text-sm font-medium mb-8">
              <span class="w-2 h-2 bg-brand-400 rounded-full" />
              Platform Broadcast WhatsApp
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-white">
              Broadcast WhatsApp<br />
              <span class="text-brand-400">Cepat &amp; Massal</span><br />
              Tanpa Ribet
            </h1>

            <p class="mt-6 text-lg text-gray-300 leading-relaxed">
              RinkBolt adalah platform broadcast &amp; blasting WhatsApp untuk bisnis.
              Kirim ribuan pesan, jadwalkan kampanye, kelola kontak, dan pantau hasil — dalam satu dashboard simpel.
            </p>

            <div class="mt-8 flex flex-wrap gap-4">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40"
              >Mulai Sekarang <ArrowRight class="w-4 h-4" /></NuxtLink>
              <a
                href="#features"
                class="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 hover:border-white/40 text-white font-medium rounded-lg transition-all"
              >Lihat Fitur <ChevronDown class="w-4 h-4" /></a>
            </div>

            <div class="mt-10 flex items-center gap-6 text-sm text-gray-400">
              <div class="flex items-center gap-2"><Shield class="w-4 h-4 text-brand-400" /> Anti-Ban</div>
              <div class="flex items-center gap-2"><Zap class="w-4 h-4 text-brand-400" /> 10rb+ pesan/hari</div>
            </div>
          </div>

          <!-- Hero Visual -->
          <div class="hidden lg:block relative">
            <div class="relative mx-auto max-w-sm">
              <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div class="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
                  <div class="w-2.5 h-2.5 bg-green-400 rounded-full" />
                  <span class="text-xs text-gray-400 font-medium">Broadcast Active</span>
                </div>
                <div class="space-y-3">
                  <div class="flex justify-between text-sm"><span class="text-gray-400">Pesan Terkirim</span><span class="text-white font-bold">12.847</span></div>
                  <div class="w-full bg-white/10 rounded-full h-2"><div class="bg-brand-500 h-2 rounded-full" style="width:94%" /></div>
                  <div class="flex justify-between text-xs text-gray-500"><span>Success: 94%</span><span>Sisa: 2m 14s</span></div>
                </div>
              </div>
              <div class="absolute -bottom-4 -left-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-brand-500/20 rounded-lg flex items-center justify-center"><Users class="w-5 h-5 text-brand-400" /></div>
                  <div><div class="text-xs text-gray-400">Kontak Aktif</div><div class="text-lg font-bold text-white">3.420</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── FEATURES ─────────────────────── -->
    <section id="features" class="py-20 sm:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="text-sm font-semibold text-brand-500 uppercase tracking-wider">Fitur</span>
          <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Semua yang Anda Butuhkan
          </h2>
          <p class="mt-3 text-gray-500 max-w-xl mx-auto">
            Tools lengkap broadcast WhatsApp — dari pengiriman massal hingga analitik.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="(f, i) in features" :key="i"
            class="group p-6 rounded-2xl border border-gray-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all bg-white"
          >
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" :class="f.bgColor">
              <component :is="f.icon" class="w-6 h-6" :class="f.iconColor" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-1.5">{{ f.title }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── STATS BAR ───────────────────── -->
    <section class="py-16 bg-brand-500">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
          <div v-for="s in stats" :key="s.label">
            <div class="text-3xl sm:text-4xl font-extrabold">{{ s.value }}</div>
            <div class="text-sm text-brand-100 mt-1 font-medium">{{ s.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── HOW IT WORKS ─────────────────── -->
    <section class="py-20 sm:py-28 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="text-sm font-semibold text-brand-500 uppercase tracking-wider">Cara Kerja</span>
          <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">3 Langkah Mudah</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div class="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-transparent via-brand-300 to-transparent" />
          <div v-for="(step, i) in steps" :key="i" class="text-center relative">
            <div class="w-14 h-14 mx-auto mb-4 bg-brand-50 border-2 border-brand-200 text-brand-500 rounded-xl flex items-center justify-center text-xl font-extrabold relative z-10">{{ i + 1 }}</div>
            <h3 class="text-lg font-bold text-gray-900 mb-1.5">{{ step.title }}</h3>
            <p class="text-sm text-gray-500 max-w-xs mx-auto">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CTA ──────────────────────────── -->
    <section class="py-20 sm:py-28 bg-gray-900 text-white text-center">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-4xl font-extrabold">Siap Mulai Broadcast?</h2>
        <p class="mt-4 text-gray-300 text-lg max-w-lg mx-auto">
          Hubungi kami sekarang dan dapatkan akses ke platform broadcast WhatsApp terbaik.
        </p>
        <div class="mt-8">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-lg transition-all shadow-lg shadow-brand-500/25"
          >Hubungi Kami <ArrowRight class="w-4 h-4" /></NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Radio, Users, BarChart3, Shield, Clock, Layers, ArrowRight, ChevronDown, Zap } from 'lucide-vue-next'

const features = [
  { icon: Radio, title: 'Broadcast Massal', desc: 'Kirim pesan teks, gambar, video, atau dokumen ke ribuan kontak sekaligus — satu klik langsung terkirim.', bgColor: 'bg-brand-50', iconColor: 'text-brand-500' },
  { icon: Users, title: 'Manajemen Kontak', desc: 'Kelola kontak dengan tag & grup. Import CSV, tambah manual, atau integrasi API.', bgColor: 'bg-blue-50', iconColor: 'text-blue-600' },
  { icon: BarChart3, title: 'Analitik Real-Time', desc: 'Pantau status delivered, read, failed dalam dashboard interaktif.', bgColor: 'bg-green-50', iconColor: 'text-green-600' },
  { icon: Clock, title: 'Penjadwalan Cerdas', desc: 'Atur jadwal kirim di jam optimal dengan rekomendasi waktu terbaik.', bgColor: 'bg-purple-50', iconColor: 'text-purple-600' },
  { icon: Shield, title: 'Anti-Ban Protection', desc: 'Jeda otomatis + random delay antar pesan. Lindungi akun WA dari banned.', bgColor: 'bg-amber-50', iconColor: 'text-amber-600' },
  { icon: Layers, title: 'Multi-Device', desc: 'Kelola puluhan device WA dalam satu dashboard. Pisah per brand/bisnis.', bgColor: 'bg-rose-50', iconColor: 'text-rose-600' },
]

const stats = [
  { value: '10.000+', label: 'Pesan per Hari' },
  { value: '3.420+', label: 'Kontak Aktif' },
  { value: '98%', label: 'Success Rate' },
  { value: '47', label: 'Device Online' },
]

const steps = [
  { title: 'Siapkan Kontak', desc: 'Import CSV, copy-paste, atau integrasi API. Atur dengan tag & grup.' },
  { title: 'Tulis & Jadwalkan', desc: 'Buat pesan dengan teks, media, atau dokumen. Pilih waktu kirim terbaik.' },
  { title: 'Kirim & Pantau', desc: 'Eksekusi broadcast dan monitor status pengiriman real-time.' },
]
</script>
