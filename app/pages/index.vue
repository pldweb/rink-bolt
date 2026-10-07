<template>
  <div class="bg-[#061923] text-white">
    <!-- ─── HERO ─────────────────────────── -->
    <section ref="hero" class="relative min-h-screen flex items-center overflow-hidden bg-[#062534] pt-8" @pointermove="updateParallax" @pointerleave="resetParallax">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute inset-0 opacity-[.12]" :style="{ ...backgroundParallax(5), backgroundImage: 'linear-gradient(rgba(139,211,196,.32) 1px, transparent 1px), linear-gradient(90deg, rgba(139,211,196,.32) 1px, transparent 1px)', backgroundSize: '56px 56px' }" />
        <div class="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-3xl transition-transform duration-500 ease-out" :style="backgroundParallax(20)" />
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-3xl transition-transform duration-500 ease-out" :style="backgroundParallax(-14)" />
        <div class="absolute -right-28 top-[7%] h-80 w-80 rounded-full border border-emerald-300/15 border-dashed hero-orbit" :style="backgroundParallax(12)" />
        <div class="absolute -right-14 top-[15%] h-52 w-52 rounded-full border border-brand-300/20 hero-orbit-reverse" :style="backgroundParallax(18)" />
        <div class="broadcast-particle left-[9%] top-[24%] h-2 w-2 bg-emerald-300" :style="backgroundParallax(-9)" />
        <div class="broadcast-particle right-[27%] top-[15%] h-1.5 w-1.5 bg-brand-300 broadcast-particle-delay" :style="backgroundParallax(26)" />
        <div class="broadcast-particle bottom-[27%] left-[35%] h-2.5 w-2.5 bg-teal-300 broadcast-particle-slow" :style="backgroundParallax(20)" />
        <div class="absolute left-[11%] top-[50%] hidden rounded-full border border-emerald-300/15 bg-emerald-300/10 px-3 py-2 text-[10px] font-semibold text-emerald-100 shadow-lg shadow-emerald-500/5 backdrop-blur lg:block broadcast-float-one" :style="backgroundParallax(-18)"><span class="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" /> 1.024 pesan terkirim</div>
        <div class="absolute bottom-[9%] right-[17%] hidden rounded-xl border border-white/10 bg-[#0a3546]/70 px-3 py-2 text-[10px] text-slate-200 shadow-lg shadow-black/15 backdrop-blur lg:block broadcast-float-two" :style="backgroundParallax(24)"><span class="font-bold text-brand-300">↗ 98.4%</span> delivery rate</div>
        <div class="absolute right-[9%] top-[23%] hidden w-52 rounded-2xl border border-emerald-300/15 bg-[#0b3d38]/75 p-3 shadow-2xl shadow-black/20 backdrop-blur-md lg:block" :style="backgroundParallax(34)">
          <div class="flex items-center gap-2"><div class="grid h-7 w-7 place-items-center rounded-full bg-emerald-400 text-[#073b33]"><MessageCircle class="h-4 w-4" /></div><div><p class="text-[10px] font-bold text-white">Pesan terkirim</p><p class="text-[9px] text-emerald-200">baru saja</p></div><CheckCheck class="ml-auto h-4 w-4 text-emerald-300" /></div>
          <p class="mt-3 rounded-lg bg-white/[.08] px-2.5 py-2 text-[10px] leading-4 text-slate-200">Promo untuk pelanggan setia sudah dikirim.</p>
        </div>
        <div class="absolute bottom-[16%] left-[4%] hidden w-48 rounded-2xl border border-white/10 bg-[#103544]/80 p-3 shadow-2xl shadow-black/20 backdrop-blur-md lg:block" :style="backgroundParallax(-28)">
          <div class="flex items-center justify-between text-[9px] font-bold text-slate-300"><span>ANTRIAN BROADCAST</span><span class="text-brand-300">12.847</span></div>
          <div class="mt-3 space-y-2"><div class="h-1.5 w-full rounded-full bg-white/10"><div class="h-full w-[82%] rounded-full bg-emerald-400" /></div><div class="flex justify-between text-[9px] text-slate-400"><span>Delivery 98.4%</span><span>Aktif</span></div></div>
        </div>
        <div class="absolute left-[44%] top-[13%] hidden h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_4px_rgba(74,222,128,.5)] lg:block" :style="backgroundParallax(46)" />
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 w-full">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="max-w-xl">
            <div class="inline-flex items-center gap-2.5 pl-2 pr-4 py-1.5 bg-white/5 border border-white/15 rounded-full text-white text-xs font-bold tracking-wider mb-8">
              <span class="grid h-6 w-6 place-items-center rounded-full bg-white"><MetaLogo class="h-3 w-3.5 text-[#0866FF]" /></span>
              Meta Tech Provider · WhatsApp Business API
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-[4rem] font-black leading-[1.02] tracking-[-.045em] text-white">
              WA Resmi<br />
              <span class="text-brand-300">Meta API</span>
            </h1>

            <p class="mt-6 text-lg text-gray-300 leading-relaxed">
              Kelola pesan WhatsApp dalam skala besar, audiens, dan hasil kampanye dari satu workspace yang rapi.
            </p>

            <div class="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/62895365441554"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40"
              >Diskusi via WhatsApp <ArrowRight class="w-4 h-4" /></a>
            </div>

            <div class="mt-10 flex items-center gap-6 text-sm text-gray-400">
              <div class="flex items-center gap-2"><Shield class="w-4 h-4 text-brand-300" /> Pengiriman bertahap</div>
              <div class="flex items-center gap-2"><Zap class="w-4 h-4 text-brand-300" /> Laporan real-time</div>
            </div>

          </div>

          <div class="hidden lg:block relative">
            <div class="pointer-events-none absolute -inset-6 rounded-[3rem] border border-brand-400/10 bg-[radial-gradient(circle_at_50%_40%,rgba(233,126,22,.18),transparent_42%)]" />
            <div class="absolute bottom-12 -right-4 z-10 rounded-xl border border-emerald-300/20 bg-[#073b3b]/90 px-3 py-2.5 shadow-xl shadow-black/25 backdrop-blur">
              <div class="flex items-center gap-2"><span class="grid h-7 w-7 place-items-center rounded-lg bg-emerald-400/15"><CheckCheck class="h-4 w-4 text-emerald-300" /></span><div><p class="text-[9px] font-bold text-emerald-100">Broadcast delivered</p><p class="text-[9px] text-emerald-300">12.847 recipients</p></div></div>
            </div>
            <div class="absolute left-2 top-[46%] z-10 rounded-xl border border-white/10 bg-[#0a3546]/90 px-3 py-2.5 shadow-xl shadow-black/25 backdrop-blur">
              <p class="text-[9px] font-bold tracking-wide text-slate-400">API LATENCY</p><p class="mt-1 text-lg font-extrabold text-white">42<span class="ml-0.5 text-[10px] font-medium text-slate-400">ms</span></p>
            </div>
            <ThreeLaptop />
          </div>
        </div>
      </div>
    </section>

    <!-- ─── MITRA META ─────────────────────── -->
    <section class="border-y border-white/10 bg-[#041a24]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2 text-white"><MetaLogo class="h-7 w-9 text-[#0866FF]" /><span class="text-xl font-bold tracking-tight">Meta</span></div>
          <span class="h-8 w-px bg-white/15" />
          <div>
            <p class="text-sm font-bold text-white">Tech Provider resmi</p>
            <p class="text-xs text-gray-400">WhatsApp Business Platform (Cloud API)</p>
          </div>
        </div>
        <ul class="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-gray-400">
          <li class="flex items-center gap-1.5"><CheckCheck class="h-4 w-4 text-emerald-300" /> Nomor terverifikasi Meta</li>
          <li class="flex items-center gap-1.5"><CheckCheck class="h-4 w-4 text-emerald-300" /> Template disetujui Meta</li>
          <li class="flex items-center gap-1.5"><CheckCheck class="h-4 w-4 text-emerald-300" /> Tanpa aplikasi tidak resmi</li>
        </ul>
      </div>
    </section>

    <!-- ─── FITUR ─────────────────────────── -->
    <section id="fitur" class="relative bg-[#061923] py-24 sm:py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl">
          <p class="text-xs font-bold uppercase tracking-[.2em] text-brand-300">Satu workspace</p>
          <h2 class="mt-4 text-3xl sm:text-4xl font-black tracking-[-.03em]">Semua percakapan bisnis, dari broadcast sampai balasan pelanggan.</h2>
          <p class="mt-5 text-gray-400 leading-relaxed">RinkBolt terhubung langsung ke WhatsApp Business Platform milik Meta, jadi pengiriman Anda memakai jalur resmi, bukan aplikasi tiruan.</p>
        </div>
        <div class="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="f in features" :key="f.title" class="group bg-[#081f2b] p-8 transition-colors hover:bg-[#0a2836]">
            <div class="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/10 text-brand-300 ring-1 ring-brand-400/20 transition-colors group-hover:bg-brand-500 group-hover:text-white"><component :is="f.icon" class="h-5 w-5" /></div>
            <h3 class="mt-6 text-lg font-bold text-white">{{ f.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-gray-400">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CARA KERJA ─────────────────────── -->
    <section class="bg-white py-24 sm:py-32 text-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div class="lg:sticky lg:top-28">
          <p class="text-xs font-bold uppercase tracking-[.2em] text-brand-600">Cara mulai</p>
          <h2 class="mt-4 text-3xl sm:text-4xl font-black tracking-[-.03em] text-navy-900">Siap kirim dalam tiga langkah.</h2>
          <p class="mt-5 text-gray-600 leading-relaxed">Tim kami mendampingi dari verifikasi nomor sampai kampanye pertama berjalan.</p>
          <a href="https://app.rinkbolt.web.id/signup" class="mt-8 inline-flex items-center gap-2 rounded-lg bg-navy-900 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-navy-800">Buat akun <ArrowRight class="h-4 w-4" /></a>
        </div>
        <ol class="space-y-4">
          <li v-for="(step, i) in steps" :key="step.title" class="flex gap-6 rounded-2xl border border-gray-100 bg-gray-50/60 p-7">
            <span class="text-4xl font-black leading-none text-brand-500 tabular-nums">0{{ i + 1 }}</span>
            <div>
              <h3 class="text-lg font-bold text-navy-900">{{ step.title }}</h3>
              <p class="mt-2 text-sm leading-6 text-gray-600">{{ step.desc }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- ─── DEVELOPER ──────────────────────── -->
    <section class="bg-[#062534] py-24 sm:py-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p class="text-xs font-bold uppercase tracking-[.2em] text-brand-300">Untuk developer</p>
          <h2 class="mt-4 text-3xl sm:text-4xl font-black tracking-[-.03em]">Sambungkan ke sistem Anda lewat REST API dan webhook.</h2>
          <p class="mt-5 text-gray-400 leading-relaxed">Kirim pesan dari backend, terima pesan masuk dan status pengiriman secara real-time. API key berbasis scope dan webhook bertanda tangan HMAC.</p>
          <NuxtLink to="/docs" class="mt-8 inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10">Baca dokumentasi <ArrowRight class="h-4 w-4" /></NuxtLink>
        </div>
        <pre class="overflow-x-auto rounded-2xl border border-white/10 bg-[#041a24] p-6 text-[13px] leading-6 text-slate-300 shadow-2xl shadow-black/30"><code><span class="text-emerald-300">curl</span> -X POST https://api.rinkbolt.web.id/api/v1/messages \
  -H <span class="text-brand-300">"Authorization: Bearer $RINKBOLT_API_KEY"</span> \
  -H <span class="text-brand-300">"Content-Type: application/json"</span> \
  -d <span class="text-brand-300">'{
    "from": "wzp_abc123",
    "to": "628123456789",
    "content": { "type": "text", "text": "Pesanan Anda sudah dikirim" }
  }'</span></code></pre>
      </div>
    </section>

    <!-- ─── CTA ────────────────────────────── -->
    <section class="bg-[#061923] py-24">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative overflow-hidden rounded-3xl bg-brand-500 px-8 py-14 sm:px-14 text-center">
          <div class="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[28px] border-white/10" />
          <div class="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-brand-600/60 blur-2xl" />
          <h2 class="relative text-3xl sm:text-4xl font-black tracking-[-.03em] text-white">Mulai kirim pesan lewat jalur resmi.</h2>
          <p class="relative mx-auto mt-4 max-w-xl text-brand-50">Ceritakan kebutuhan bisnis Anda, kami bantu siapkan nomor WhatsApp Business dan kampanye pertama.</p>
          <div class="relative mt-8 flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/62895365441554" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-brand-700 transition-colors hover:bg-brand-50"><MessageCircle class="h-4 w-4" /> Diskusi via WhatsApp</a>
            <NuxtLink to="/tentang" class="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10">Tentang kami</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Shield, ArrowRight, Zap, MessageCircle, CheckCheck, Megaphone, Inbox, Users, LayoutTemplate, CalendarClock, Webhook } from 'lucide-vue-next'

const features = [
  { icon: Megaphone, title: 'Broadcast & campaign', desc: 'Kirim pesan massal ke segmen kontak secara bertahap, lengkap dengan penjadwalan dan laporan pengiriman.' },
  { icon: Inbox, title: 'Inbox percakapan', desc: 'Balas pesan pelanggan dari satu kotak masuk bersama, tanpa berpindah-pindah ponsel.' },
  { icon: Users, title: 'Kontak & CRM', desc: 'Impor, beri label, dan kelompokkan kontak supaya pesan sampai ke orang yang tepat.' },
  { icon: LayoutTemplate, title: 'Template pesan', desc: 'Kelola template yang disetujui Meta untuk teks, gambar, dokumen, dan video.' },
  { icon: CalendarClock, title: 'Instagram & Threads', desc: 'Jadwalkan konten ke akun Instagram dan Threads yang Anda hubungkan dari workspace yang sama.' },
  { icon: Webhook, title: 'API & webhook', desc: 'Integrasikan dengan sistem toko, ERP, atau aplikasi internal Anda lewat REST API.' },
]

const steps = [
  { title: 'Daftar dan buat workspace', desc: 'Buat akun RinkBolt dan undang anggota tim yang akan mengelola pesan.' },
  { title: 'Hubungkan nomor WhatsApp Business', desc: 'Sambungkan nomor ke WhatsApp Business Platform resmi Meta. Nomor tetap milik Anda.' },
  { title: 'Kirim kampanye pertama', desc: 'Pilih template, tentukan audiens, lalu pantau status terkirim, dibaca, dan dibalas.' },
]

const parallax = ref({ x: 0, y: 0 })
const updateParallax = (event: PointerEvent) => {
  const bounds = (event.currentTarget as HTMLElement).getBoundingClientRect()
  parallax.value = { x: (event.clientX - bounds.left) / bounds.width - 0.5, y: (event.clientY - bounds.top) / bounds.height - 0.5 }
}
const resetParallax = () => { parallax.value = { x: 0, y: 0 } }
const backgroundParallax = (depth: number) => ({ transform: `translate3d(${parallax.value.x * depth}px, ${parallax.value.y * depth}px, 0)` })

</script>

<style scoped>
.hero-orbit { animation: orbit 20s linear infinite; }
.hero-orbit-reverse { animation: orbit 14s linear infinite reverse; }
.broadcast-particle { position: absolute; border-radius: 9999px; box-shadow: 0 0 20px 4px currentColor; animation: particle 4.8s ease-in-out infinite; }
.broadcast-particle-delay { animation-delay: -1.8s; }
.broadcast-particle-slow { animation-duration: 6.6s; animation-delay: -3.1s; }
.broadcast-float-one { animation: float-one 5s ease-in-out infinite; }
.broadcast-float-two { animation: float-two 6.5s ease-in-out infinite; }
@keyframes orbit { to { transform: rotate(360deg); } }
@keyframes particle { 0%, 100% { opacity: .22; transform: translateY(0) scale(.7); } 50% { opacity: 1; transform: translateY(-22px) scale(1.2); } }
@keyframes float-one { 0%, 100% { transform: translate3d(0, 0, 0) rotate(-2deg); } 50% { transform: translate3d(10px, -15px, 0) rotate(1deg); } }
@keyframes float-two { 0%, 100% { transform: translate3d(0, 0, 0) rotate(2deg); } 50% { transform: translate3d(-10px, 12px, 0) rotate(-1deg); } }
</style>
