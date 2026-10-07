<template>
  <div class="docs-page min-h-screen bg-white text-slate-900">
    <header class="border-b border-slate-200 bg-white px-4 pt-24 sm:px-6 lg:px-8">
      <div class="mx-auto flex max-w-7xl flex-col gap-5 pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-sm text-slate-500">
            <NuxtLink to="/" class="font-semibold text-brand-700 hover:text-brand-900">RinkBolt</NuxtLink><span aria-hidden="true">/</span><span>Dokumentasi</span>
          </nav>
          <h1 class="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Dokumentasi untuk developer</h1>
        </div>
        <label class="flex h-11 w-full max-w-md items-center gap-3 rounded-xl border border-slate-300 bg-slate-50 px-3 text-sm text-slate-500 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-100">
          <Search class="h-4 w-4 shrink-0" aria-hidden="true" /><input ref="searchInput" v-model="search" type="search" aria-label="Cari topik dokumentasi" placeholder="Cari panduan integrasi" class="w-full bg-transparent text-slate-800 outline-none placeholder:text-slate-400" /><kbd class="hidden rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[11px] text-slate-400 sm:inline">Ctrl K</kbd>
        </label>
      </div>
    </header>

    <div class="border-b border-slate-200 bg-slate-50 px-4 py-4 sm:px-6 lg:hidden">
      <details class="mx-auto max-w-7xl rounded-xl border border-slate-200 bg-white">
        <summary class="cursor-pointer px-4 py-3 text-sm font-bold text-slate-800">Menu dokumentasi</summary>
        <nav class="border-t border-slate-100 px-2 py-2" aria-label="Menu dokumentasi mobile">
          <template v-for="group in filteredNavigation" :key="group.title">
            <p class="px-2 pt-3 text-xs font-bold uppercase tracking-wide text-slate-500">{{ group.title }}</p>
            <a v-for="item in group.items" :key="item.id" :href="`#${item.id}`" class="mt-1 block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-800" @click="activeSection = item.id">{{ item.title }}</a>
          </template>
          <p v-if="!filteredNavigation.length" role="status" class="p-3 text-sm text-slate-500">Tidak ada topik dengan kata kunci tersebut.</p>
        </nav>
      </details>
    </div>

    <div class="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[15rem_minmax(0,1fr)_12rem] lg:px-8">
      <aside class="hidden lg:block lg:sticky lg:top-24 lg:h-fit lg:max-h-[calc(100dvh-7rem)] lg:overflow-y-auto lg:pr-2">
        <p class="mb-3 text-xs font-bold uppercase tracking-[.12em] text-slate-500">Dokumentasi</p>
        <nav class="space-y-5" aria-label="Menu dokumentasi">
          <section v-for="group in filteredNavigation" :key="group.title">
            <button type="button" class="flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left text-xs font-bold uppercase tracking-wide text-slate-500 hover:bg-slate-100 hover:text-slate-800" :aria-expanded="isGroupOpen(group.title) || !!search" @click="toggleGroup(group.title)">
              {{ group.title }}<ChevronDown class="h-4 w-4 transition-transform" :class="isGroupOpen(group.title) || search ? 'rotate-180' : ''" aria-hidden="true" />
            </button>
            <div v-show="isGroupOpen(group.title) || search" class="mt-1 space-y-0.5">
              <a v-for="item in group.items" :key="item.id" :href="`#${item.id}`" class="block rounded-lg px-3 py-2 text-sm transition-colors" :class="activeSection === item.id ? 'bg-brand-50 font-semibold text-brand-800' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'" @click="activeSection = item.id">{{ item.title }}</a>
            </div>
          </section>
          <p v-if="search && filteredNavigation.length === 0" class="px-2 text-sm leading-6 text-slate-500">Tidak ada topik dengan kata kunci tersebut.</p>
        </nav>
        <a href="https://app.rinkbolt.web.id/login" class="mt-7 flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-800"><LogIn class="h-4 w-4" aria-hidden="true" /> Buka aplikasi</a>
      </aside>

      <main class="min-w-0 space-y-16">
        <section id="overview" class="scroll-mt-28">
          <p class="max-w-2xl text-lg leading-8 text-slate-600">Hubungkan backend Anda ke RinkBolt untuk mengirim pesan, atau terima event WhatsApp di endpoint webhook milik Anda.</p>
          <div class="mt-8 overflow-hidden rounded-2xl bg-slate-950 text-slate-100">
            <div class="grid divide-y divide-slate-700 md:grid-cols-2 md:divide-x md:divide-y-0">
              <a href="#api-auth" class="group p-6 transition-colors hover:bg-slate-900"><Send class="h-5 w-5 text-brand-300" aria-hidden="true" /><h2 class="mt-4 text-xl font-bold">Panggil REST API</h2><p class="mt-2 text-sm leading-6 text-slate-300">Backend Anda mengirim request ke RinkBolt untuk mengirim pesan dan membaca resource workspace.</p><span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-300">Mulai dengan API <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></a>
              <a href="#webhook-setup" class="group p-6 transition-colors hover:bg-slate-900"><Webhook class="h-5 w-5 text-brand-300" aria-hidden="true" /><h2 class="mt-4 text-xl font-bold">Terima webhook</h2><p class="mt-2 text-sm leading-6 text-slate-300">RinkBolt mengirim event ke endpoint HTTPS Anda; server Anda memverifikasi signature lalu memproses event.</p><span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-300">Siapkan webhook <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></a>
            </div>
          </div>
          <div class="mt-6 border-y border-slate-200 py-5 text-sm leading-7 text-slate-600"><strong class="text-slate-900">Integrasi dua arah:</strong> pelanggan WhatsApp → Meta → RinkBolt → webhook Anda; backend Anda → API RinkBolt → pelanggan WhatsApp. Webhook Meta yang menuju RinkBolt dikelola oleh platform dan berbeda dari webhook tujuan Anda.</div>
        </section>

        <section id="quickstart" class="scroll-mt-28">
          <SectionHeading title="Quickstart" description="Selesaikan tiga hal ini sebelum menjalankan integrasi pertama." />
          <ol class="mt-6 divide-y divide-slate-200 border-y border-slate-200"><li v-for="(step, index) in quickstartSteps" :key="step.title" class="grid gap-3 py-5 sm:grid-cols-[2rem_1fr]"><span class="font-mono text-sm font-bold text-brand-700">0{{ index + 1 }}</span><div><h3 class="font-bold text-slate-900">{{ step.title }}</h3><p class="mt-1 max-w-2xl text-sm leading-6 text-slate-600">{{ step.description }}</p></div></li></ol>
        </section>

        <section id="api-auth" class="scroll-mt-28">
          <SectionHeading title="Autentikasi API" description="Untuk integrasi produksi, simpan API key di backend. Jangan tanam key dalam frontend, URL, source code publik, atau log." />
          <div class="mt-6 space-y-5 text-sm leading-7 text-slate-600"><p>Buat key di aplikasi RinkBolt melalui <strong class="text-slate-900">Settings → API Keys</strong>, lalu berikan scope minimum. Untuk mengirim pesan, gunakan <code>messages:send</code>.</p><CodeBlock>https://api.rinkbolt.web.id/api/v1

GET /health
Authorization: Bearer wz_...</CodeBlock><p>Autentikasi menerima header <code>Authorization: Bearer wz_...</code> atau <code>X-API-Key: wz_...</code>. Endpoint health dapat dipanggil tanpa API key untuk memeriksa konektivitas.</p><p>Ingin mencoba request tanpa menulis kode terlebih dahulu? Gunakan <a href="https://app.rinkbolt.web.id/settings/api-playground" class="font-semibold text-brand-700 underline decoration-brand-300 underline-offset-4 hover:text-brand-900">API Playground</a> di aplikasi RinkBolt. API key hanya dipakai selama halaman tersebut terbuka.</p></div>
        </section>

        <section id="api-base-url" class="scroll-mt-28">
          <SectionHeading title="Base URL dan konektivitas" description="Tambahkan path endpoint pada base URL berikut. Jangan gunakan domain frontend sebagai alamat REST API." />
          <CodeBlock class="mt-5">https://api.rinkbolt.web.id/api/v1</CodeBlock>
          <p class="mt-5 text-sm leading-7 text-slate-600">Uji <code>GET /health</code> tanpa credential terlebih dahulu. Health check yang sukses hanya memastikan API dapat dijangkau, bukan memastikan API key atau channel siap mengirim pesan.</p>
        </section>

        <section id="api-playground" class="scroll-mt-28">
          <SectionHeading title="API Playground" description="Coba pesan teks, gambar, dokumen, dan audio dari aplikasi sebelum menulis integrasi sendiri." />
          <ol class="mt-5 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600"><li>Buka Settings → API Playground di workspace Anda.</li><li>Masukkan API key dengan scope messages:send, channel pengirim, dan nomor pengujian milik Anda.</li><li>Pilih jenis pesan, isi konten, lalu periksa request sebelum mengirim. Ini mengirim pesan sungguhan, bukan simulasi.</li><li>Periksa status HTTP dan respons. API key tidak dipersistenkan oleh playground; jangan bagikan tangkapan layar yang berisi credential.</li></ol>
          <a href="https://app.rinkbolt.web.id/settings/api-playground" class="mt-5 inline-block font-semibold text-brand-700 underline underline-offset-4">Buka API Playground →</a>
        </section>

        <section id="tools-curl" class="scroll-mt-28">
          <SectionHeading title="Tes dengan cURL" description="Jalankan dari terminal backend. Simpan RINKBOLT_API_KEY melalui environment atau secret manager Anda." />
          <CodeBlock class="mt-5">curl --fail-with-body https://api.rinkbolt.web.id/api/v1/health

# Memerlukan scope channels:read
curl --fail-with-body https://api.rinkbolt.web.id/api/v1/channels \
  -H "Authorization: Bearer $RINKBOLT_API_KEY"</CodeBlock>
        </section>

        <section id="tools-node" class="scroll-mt-28">
          <SectionHeading title="Integrasi Node.js" description="Gunakan fetch bawaan pada runtime Node.js yang mendukungnya; contoh ini berjalan di server, bukan browser." />
          <CodeBlock class="mt-5">const response = await fetch('https://api.rinkbolt.web.id/api/v1/messages', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.RINKBOLT_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    from: 'wzp_abc123',
    to: '628123456789',
    content: { type: 'text', text: 'Halo dari backend' },
  }),
})
const body = await response.text()
if (!response.ok) throw new Error(`RinkBolt HTTP ${response.status}`)
// Parse body sesuai respons API; jangan log credential atau data pribadi.</CodeBlock>
        </section>

        <section id="api-send-message" class="scroll-mt-28">
          <SectionHeading title="Kirim pesan teks" description="Satu endpoint terpadu menangani teks, media, lokasi, kontak, reaction, dan sticker." />
          <div class="mt-6 flex flex-wrap items-center gap-3 text-sm"><span class="rounded-md bg-emerald-100 px-2 py-1 font-mono font-bold text-emerald-800">POST</span><code class="font-semibold text-slate-800">/messages</code><span class="text-slate-500">Scope: <code>messages:send</code></span></div>
          <CodeBlock class="mt-5">curl -X POST https://api.rinkbolt.web.id/api/v1/messages \
  -H "Authorization: Bearer $RINKBOLT_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "from": "wzp_abc123",
    "to": "628123456789",
    "content": { "type": "text", "text": "Halo dari RinkBolt" }
  }'</CodeBlock>
          <div class="mt-5 grid gap-5 border-y border-slate-200 py-5 text-sm leading-6 text-slate-600 sm:grid-cols-2"><p><strong class="text-slate-900">from</strong><br />ID channel Anda. Channel produksi RinkBolt memakai format <code>wzp_…</code>.</p><p><strong class="text-slate-900">to</strong><br />Nomor dengan kode negara, tanpa tanda <code>+</code>, 10–20 karakter.</p><p><strong class="text-slate-900">content</strong><br />Untuk media, gunakan URL publik HTTPS di dalam object <code>image</code>, <code>video</code>, <code>audio</code>, atau <code>document</code>.</p><p><strong class="text-slate-900">respons</strong><br />Request berhasil mengembalikan <code>201</code> dengan ID dan status pesan. Simpan ID tersebut bila ingin memeriksa status.</p></div>
        </section>

        <section v-for="message in mediaMessages" :id="message.id" :key="message.id" class="scroll-mt-28">
          <SectionHeading :title="message.title" :description="message.description" />
          <p class="mt-5 text-sm text-slate-600"><code>POST /messages</code> · Scope <code>messages:send</code></p>
          <CodeBlock class="mt-5">{{ JSON.stringify({ from: 'wzp_abc123', to: '628123456789', content: message.content }, null, 2) }}</CodeBlock>
          <p class="mt-5 text-sm leading-7 text-slate-600">Kirim JSON ini dengan header autentikasi dan Content-Type: application/json seperti contoh pesan teks. Ganti URL contoh dengan file HTTPS publik yang dapat diunduh penyedia channel. Dukungan format dan ukuran media mengikuti channel yang digunakan.</p>
        </section>

        <section id="api-resources" class="scroll-mt-28">
          <SectionHeading title="Resource API lain" description="Gunakan scope resource yang sesuai; key dapat dibatasi hanya untuk operasi yang benar-benar dipakai integrasi Anda." />
          <div class="mt-6 overflow-x-auto border-y border-slate-200"><table class="min-w-full text-left text-sm"><thead class="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500"><tr><th class="px-3 py-3 font-bold">Resource</th><th class="px-3 py-3 font-bold">Contoh endpoint</th><th class="px-3 py-3 font-bold">Scope</th></tr></thead><tbody class="divide-y divide-slate-100 text-slate-700"><tr v-for="resource in apiResources" :key="resource.name"><td class="px-3 py-3 font-semibold">{{ resource.name }}</td><td class="px-3 py-3 font-mono text-xs">{{ resource.endpoint }}</td><td class="px-3 py-3 font-mono text-xs">{{ resource.scope }}</td></tr></tbody></table></div>
        </section>

        <section v-for="resource in resourceGuides" :id="resource.id" :key="resource.id" class="scroll-mt-28">
          <SectionHeading :title="resource.title" :description="resource.description" />
          <p class="mt-5 text-sm text-slate-600">Scope minimum untuk contoh ini: <code>{{ resource.scope }}</code>. Resource yang terlihat mengikuti workspace API key.</p>
          <CodeBlock class="mt-5">{{ `curl --fail-with-body https://api.rinkbolt.web.id/api/v1/${resource.path} \\\n  -H "Authorization: Bearer $RINKBOLT_API_KEY"` }}</CodeBlock>
          <p class="mt-5 text-sm leading-7 text-slate-600">{{ resource.note }}</p>
        </section>

        <section id="api-errors" class="scroll-mt-28">
          <SectionHeading title="Error API" description="Perbaiki penyebabnya sebelum mencoba ulang; jangan memperluas permission atau mengulang request secara membabi buta." />
          <div class="mt-6 divide-y divide-slate-200 border-y border-slate-200"><div v-for="error in apiErrors" :key="error.status" class="grid gap-2 py-4 sm:grid-cols-[4rem_1fr]"><code class="font-bold text-slate-900">{{ error.status }}</code><p class="text-sm leading-6 text-slate-600"><strong class="text-slate-900">{{ error.code }}</strong> — {{ error.action }}</p></div></div>
        </section>

        <section id="webhook-overview" class="scroll-mt-28"><SectionHeading title="Webhook outbound" description="Gunakan webhook bila sistem Anda perlu mengetahui pesan masuk, status, atau event akun tanpa melakukan polling." /><div class="mt-6 border-y border-slate-200 py-5 text-sm leading-7 text-slate-600"><strong class="text-slate-900">Arah webhook:</strong> RinkBolt mengirim <code>POST</code> JSON ke URL HTTPS yang Anda daftarkan. URL ini milik backend Anda, bukan endpoint API RinkBolt atau frontend website Anda.</div></section>

        <section id="webhook-setup" class="scroll-mt-28"><SectionHeading title="Siapkan endpoint webhook" description="Endpoint harus dapat dijangkau dari internet melalui HTTPS dan tidak boleh melakukan redirect." /><ol class="mt-6 divide-y divide-slate-200 border-y border-slate-200"><li v-for="(step, index) in webhookSteps" :key="step.title" class="grid gap-3 py-5 sm:grid-cols-[2rem_1fr]"><span class="font-mono text-sm font-bold text-brand-700">0{{ index + 1 }}</span><div><h3 class="font-bold text-slate-900">{{ step.title }}</h3><p class="mt-1 text-sm leading-6 text-slate-600">{{ step.description }}</p></div></li></ol></section>

        <section id="webhook-signature" class="scroll-mt-28"><SectionHeading title="Verifikasi signature" description="Validasi setiap delivery sebelum memproses payload. Signing Secret webhook berbeda dari API key." /><CodeBlock class="mt-6">X-Webhook-Event: messages
X-Webhook-Delivery-Id: evt_...
X-Webhook-Timestamp: 1758537600
X-Webhook-Signature: t=1758537600,v1=&lt;hmac-sha256&gt;</CodeBlock><p class="mt-5 text-sm leading-7 text-slate-600">Signature dibuat dari <code>&lt;timestamp&gt;.&lt;raw request body&gt;</code>. Ambil raw body sebelum parsing JSON, tolak timestamp yang lebih dari lima menit, lalu gunakan <code>eventId</code> sebagai kunci idempotency agar delivery ulang tidak diproses dua kali.</p><CodeBlock class="mt-5">import crypto from 'node:crypto'

const expected = crypto
  .createHmac('sha256', process.env.RINKBOLT_WEBHOOK_SECRET)
  .update(`${timestamp}.${rawBody}`)
  .digest('hex')

const valid = crypto.timingSafeEqual(
  Buffer.from(expected), Buffer.from(receivedSignature),
)</CodeBlock></section>

        <section id="webhook-events" class="scroll-mt-28"><SectionHeading title="Event dan payload" description="Pilih hanya event yang digunakan backend Anda. Event messages mencakup pesan masuk dan pembaruan status pesan." /><CodeBlock class="mt-6">{
  "eventId": "evt_...",
  "field": "messages",
  "from": "wzp_abc123",
  "payload": { "messages": [] },
  "timestamp": "2026-09-28T07:30:00.000Z"
}</CodeBlock><p class="mt-5 text-sm leading-7 text-slate-600">Payload adalah object event dari WhatsApp. Event lain dapat mencakup perubahan template, flow, panggilan, kualitas nomor, atau pembaruan akun. Parse berdasarkan <code>field</code>, bukan dengan menganggap semua payload memiliki struktur yang sama.</p></section>

        <section id="webhook-retries" class="scroll-mt-28"><SectionHeading title="Retry dan kegagalan delivery" description="Balas 2xx dalam maksimal 15 detik setelah event tersimpan. Lakukan pekerjaan berat secara asynchronous di sistem Anda." /><div class="mt-6 space-y-4 text-sm leading-7 text-slate-600"><p>Delivery gagal dapat dicoba ulang otomatis. Kegagalan berulang dapat menghentikan delivery sementara melalui circuit breaker untuk melindungi endpoint Anda.</p><p>Gunakan riwayat delivery di detail webhook pada aplikasi RinkBolt untuk melihat status, respons endpoint, dan menjalankan retry manual setelah penyebabnya diperbaiki.</p></div></section>

        <section id="security" class="scroll-mt-28"><SectionHeading title="Checklist keamanan sebelum go-live" description="Kredensial adalah batas akses integrasi Anda; perlakukan sebagai secret produksi." /><ul class="mt-6 divide-y divide-slate-200 border-y border-slate-200"><li v-for="item in securityChecklist" :key="item" class="flex gap-3 py-4 text-sm leading-6 text-slate-700"><ShieldCheck class="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />{{ item }}</li></ul></section>

        <section id="help" class="scroll-mt-28 border-t border-slate-200 pt-8"><h2 class="text-2xl font-extrabold">Butuh bantuan integrasi?</h2><p class="mt-3 max-w-2xl leading-7 text-slate-600">Tim RinkBolt dapat membantu meninjau setup WhatsApp Business, webhook, dan alur integrasi backend Anda.</p><a href="https://wa.me/62895365441554" target="_blank" rel="noopener noreferrer" class="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-600">Diskusi via WhatsApp <ArrowRight class="h-4 w-4" aria-hidden="true" /></a></section>
      </main>

      <aside class="hidden lg:block lg:sticky lg:top-24 lg:h-fit"><p class="mb-3 text-xs font-bold uppercase tracking-[.12em] text-slate-500">{{ activeGroup?.title }}</p><nav class="border-l border-slate-200" aria-label="Topik dalam kategori ini"><a v-for="item in activeGroup?.items" :key="item.id" :href="`#${item.id}`" :aria-current="activeSection === item.id ? 'location' : undefined" class="block border-l border-transparent py-1.5 pl-4 text-sm leading-5 transition-colors" :class="activeSection === item.id ? 'border-brand-500 font-semibold text-brand-800' : 'text-slate-500 hover:text-slate-900'" @click="activeSection = item.id">{{ item.title }}</a></nav></aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, ChevronDown, LogIn, Search, Send, ShieldCheck, Webhook } from 'lucide-vue-next'
import { defineComponent, h, onBeforeUnmount, onMounted } from 'vue'

const search = ref('')
const searchInput = ref<HTMLInputElement | null>(null)
const activeSection = ref('overview')
const mediaMessages = [
  { id: 'api-image', title: 'Kirim gambar', description: 'Kirim gambar dari URL, dengan caption opsional maksimal 1.024 karakter.', content: { type: 'image', image: { url: 'https://example.com/gambar.jpg', caption: 'Foto produk' } } },
  { id: 'api-document', title: 'Kirim file / dokumen', description: 'Kirim dokumen dengan nama file dan caption opsional.', content: { type: 'document', document: { url: 'https://example.com/katalog.pdf', filename: 'katalog.pdf', caption: 'Katalog produk' } } },
  { id: 'api-audio', title: 'Kirim audio', description: 'Kirim file audio melalui URL. Payload audio tidak memiliki field caption.', content: { type: 'audio', audio: { url: 'https://example.com/audio.mp3' } } },
  { id: 'api-video', title: 'Kirim video', description: 'Kirim video melalui URL, dengan caption opsional maksimal 1.024 karakter.', content: { type: 'video', video: { url: 'https://example.com/video.mp4', caption: 'Panduan produk' } } },
]
const resourceGuides = [
  { id: 'api-channels', title: 'Channel', path: 'channels', scope: 'channels:read', description: 'Temukan channel pengirim milik workspace Anda.', note: 'Gunakan ID channel sebagai from ketika mengirim pesan. Periksa GET /channels/:id/status sebelum menguji pengiriman; ganti :id dengan ID channel sebenarnya.' },
  { id: 'api-contacts', title: 'Kontak', path: 'contacts', scope: 'contacts:read', description: 'Baca daftar kontak untuk integrasi CRM atau sinkronisasi pelanggan.', note: 'Operasi penulisan kontak memerlukan contacts:write. Batasi penyimpanan dan akses nomor telepon sebagai data pribadi.' },
  { id: 'api-conversations', title: 'Percakapan', path: 'conversations', scope: 'conversations:read', description: 'Baca percakapan dan gunakan ID-nya untuk menelusuri pesan.', note: 'GET /conversations/:id/messages membaca pesan dalam percakapan. Operasi mengubah percakapan memerlukan conversations:write.' },
  { id: 'api-campaigns', title: 'Campaign', path: 'campaigns', scope: 'campaigns:read', description: 'Baca campaign workspace tanpa memicu pengiriman.', note: 'GET /campaigns/:id/stats membaca statistik. Membuat atau menjalankan campaign adalah operasi terpisah dengan scope campaigns:write; membaca daftar tidak menjalankan campaign.' },
  { id: 'api-templates', title: 'Template', path: 'templates', scope: 'templates:read', description: 'Baca template yang tersedia pada workspace.', note: 'Operasi penulisan memerlukan templates:write. Endpoint pengelolaan template bukan contoh pengiriman template melalui POST /messages.' },
]
const navigation = [
  { title: 'Mulai di sini', items: [{ id: 'overview', title: 'Pengenalan' }, { id: 'quickstart', title: 'Quickstart & workspace' }, { id: 'api-auth', title: 'API key & autentikasi' }, { id: 'api-base-url', title: 'Base URL & konektivitas' }] },
  { title: 'Tools & integrasi', items: [{ id: 'api-playground', title: 'API Playground' }, { id: 'tools-curl', title: 'Tes dengan cURL' }, { id: 'tools-node', title: 'Integrasi Node.js' }] },
  { title: 'Kirim pesan', items: [{ id: 'api-send-message', title: 'Kirim pesan teks' }, ...mediaMessages.map(({ id, title }) => ({ id, title }))] },
  { title: 'Referensi resource', items: [{ id: 'api-resources', title: 'Endpoint & scope' }, ...resourceGuides.map(({ id, title }) => ({ id, title }))] },
  { title: 'Troubleshooting API', items: [{ id: 'api-errors', title: 'Kode error & penanganan' }] },
  { title: 'Webhook', items: [{ id: 'webhook-overview', title: 'Overview' }, { id: 'webhook-setup', title: 'Setup endpoint' }, { id: 'webhook-signature', title: 'Verifikasi signature' }, { id: 'webhook-events', title: 'Event dan payload' }, { id: 'webhook-retries', title: 'Retry dan kegagalan' }] },
  { title: 'Konsep', items: [{ id: 'security', title: 'Keamanan integrasi' }, { id: 'help', title: 'Bantuan' }] },
]
const openGroups = ref(navigation.map((group) => group.title))
const activeGroup = computed(() => navigation.find((group) => group.items.some((item) => item.id === activeSection.value)))
const quickstartSteps = [
  { title: 'Siapkan workspace dan channel', description: 'Masuk ke aplikasi RinkBolt, pilih workspace Anda, lalu pastikan WhatsApp channel sudah terhubung.' },
  { title: 'Buat API key atau webhook', description: 'Gunakan API key untuk request keluar dari backend; buat webhook jika backend Anda perlu menerima event dari RinkBolt.' },
  { title: 'Tes dari lingkungan backend', description: 'Simpan secret di environment variable server dan uji health check, request API, atau Send Test webhook sebelum go-live.' },
]
const webhookSteps = [
  { title: 'Buat endpoint backend', description: 'Siapkan URL HTTPS publik, misalnya https://website-anda.com/api/rinkbolt/webhook. Jangan gunakan localhost atau route frontend.' },
  { title: 'Daftarkan endpoint di RinkBolt', description: 'Buka Settings → Webhooks → Add Webhook, masukkan URL, pilih event yang diperlukan, lalu simpan.' },
  { title: 'Simpan Signing Secret', description: 'Buka detail webhook dan simpan Signing Secret di environment variable backend. Secret ini hanya dipakai untuk validasi webhook.' },
  { title: 'Kirim test delivery', description: 'Klik Send Test, pastikan endpoint Anda mengembalikan respons sukses, lalu periksa riwayat delivery.' },
]
const apiResources = [
  { name: 'Channel', endpoint: 'GET /channels', scope: 'channels:read' }, { name: 'Kontak', endpoint: 'GET, POST /contacts', scope: 'contacts:read / contacts:write' }, { name: 'Conversation', endpoint: 'GET /conversations', scope: 'conversations:read' }, { name: 'Campaign', endpoint: 'GET, POST /campaigns', scope: 'campaigns:read / campaigns:write' }, { name: 'Template', endpoint: 'GET, POST /templates', scope: 'templates:read / templates:write' },
]
const apiErrors = [
  { status: '401', code: 'API_KEY_REQUIRED', action: 'Header tidak ada, salah format, atau key sudah tidak valid. Periksa secret di backend.' }, { status: '403', code: 'INSUFFICIENT_PERMISSIONS', action: 'Tambahkan scope yang disebut pada respons; jangan gunakan key dengan akses lebih luas dari yang dibutuhkan.' }, { status: '400', code: 'VALIDATION_ERROR', action: 'Periksa format channel ID, nomor tujuan, dan bentuk content pada request.' }, { status: '404', code: 'CHANNEL_NOT_FOUND', action: 'Pastikan nilai from adalah channel yang dimiliki workspace API key tersebut.' },
]
const securityChecklist = [
  'API key dan Signing Secret tersimpan sebagai environment variable di backend, bukan di browser atau repository.', 'API key hanya memiliki scope yang dibutuhkan integrasi.', 'Setiap webhook memverifikasi HMAC signature dengan raw request body dan timestamp yang masih valid.', 'Event webhook disimpan atau dideduplikasi menggunakan eventId sebelum proses lanjutan dijalankan.', 'Endpoint webhook sudah diuji dari aplikasi RinkBolt dan riwayat delivery menunjukkan respons sukses.',
]
const filteredNavigation = computed(() => {
  const query = search.value.trim().toLocaleLowerCase('id')
  if (!query) return navigation
  return navigation.map((group) => ({ ...group, items: group.items.filter((item) => `${group.title} ${item.title}`.toLocaleLowerCase('id').includes(query)) })).filter((group) => group.items.length > 0)
})
const visibleSections = navigation.flatMap((group) => group.items)
const isGroupOpen = (title: string) => openGroups.value.includes(title)
const toggleGroup = (title: string) => { openGroups.value = isGroupOpen(title) ? openGroups.value.filter((group) => group !== title) : [...openGroups.value, title] }
let observer: IntersectionObserver | undefined
const focusSearch = (event: KeyboardEvent) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault()
    searchInput.value?.focus()
  }
}
onMounted(() => {
  window.addEventListener('keydown', focusSearch)
  observer = new IntersectionObserver((entries) => { const visible = entries.find((entry) => entry.isIntersecting); if (visible) activeSection.value = visible.target.id }, { rootMargin: '-20% 0px -70% 0px' })
  visibleSections.forEach((item) => { const element = document.getElementById(item.id); if (element) observer?.observe(element) })
})
onBeforeUnmount(() => { observer?.disconnect(); window.removeEventListener('keydown', focusSearch) })
const SectionHeading = defineComponent({ props: { title: { type: String, required: true }, description: { type: String, required: true } }, setup(props) { return () => h('div', [h('h2', { class: 'text-2xl font-extrabold tracking-tight text-slate-900' }, props.title), h('p', { class: 'mt-2 max-w-2xl leading-7 text-slate-600' }, props.description)]) } })
const CodeBlock = defineComponent({ setup(_, { slots }) { return () => h('pre', { class: 'overflow-x-auto rounded-xl bg-slate-950 p-5 text-xs leading-6 text-slate-100 sm:text-sm' }, [h('code', slots.default?.())]) } })
</script>
