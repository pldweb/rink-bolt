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
            <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/15 rounded-full text-brand-200 text-xs font-bold tracking-wider mb-8">
              <span class="w-2 h-2 bg-brand-400 rounded-full" />
              RinkBolt · Meta Tech Provider
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

  </div>
</template>

<script setup lang="ts">
import { Shield, ArrowRight, Zap, MessageCircle, CheckCheck } from 'lucide-vue-next'

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
