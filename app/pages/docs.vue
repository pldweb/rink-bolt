<template>
  <div class="docs-page min-h-screen bg-white text-slate-900">
    <section class="border-b border-slate-200 bg-slate-50 px-4 pb-8 pt-28 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-sm text-slate-500"><NuxtLink to="/" class="hover:text-brand-600">RinkBolt</NuxtLink><span>/</span><span class="text-slate-700">Dokumentasi</span></nav>
        <div class="mt-6 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><p class="text-sm font-semibold text-brand-600">PUSAT BANTUAN</p><h1 class="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Dokumentasi RinkBolt</h1><p class="mt-3 max-w-2xl leading-7 text-slate-600">Panduan untuk menyiapkan WhatsApp Business, mengelola inbox, dan menjalankan komunikasi pelanggan.</p></div>
          <label class="flex h-11 w-full max-w-sm items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-400 shadow-sm"><Search class="h-4 w-4" /><input v-model="search" type="search" placeholder="Cari di dokumentasi…" class="w-full bg-transparent outline-none placeholder:text-slate-400" /></label>
        </div>
      </div>
    </section>

    <section class="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)_180px] lg:px-8">
      <aside class="lg:sticky lg:top-24 lg:h-fit">
        <p class="mb-3 text-xs font-bold tracking-[.14em] text-slate-500">DOKUMENTASI</p>
        <nav class="space-y-5 text-sm">
          <div v-for="group in filteredNavigation" :key="group.title">
            <button type="button" class="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-xs font-bold tracking-wide text-slate-500 hover:bg-slate-100" :aria-expanded="isGroupOpen(group.title)" @click="toggleGroup(group.title)"><span>{{ group.title }}</span><ChevronDown class="h-4 w-4 transition-transform" :class="isGroupOpen(group.title) || search ? 'rotate-180' : ''" /></button>
            <div v-show="isGroupOpen(group.title) || search" class="mt-1 space-y-0.5">
              <a v-for="item in group.items" :key="item.id" :href="`#${item.id}`" class="flex items-center gap-2 rounded-md px-3 py-2 text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-700" :class="item.id === 'mulai' ? 'bg-brand-50 font-semibold text-brand-700' : ''"><span v-if="item.method" class="w-11 rounded px-1.5 py-0.5 text-center font-mono text-[10px] font-bold" :class="methodClass(item.method)">{{ item.method }}</span><span class="min-w-0 truncate">{{ item.title }}</span></a>
            </div>
          </div>
        </nav>
        <a href="https://app.rinkbolt.web.id/login" class="mt-7 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-semibold text-slate-700 hover:border-brand-300 hover:text-brand-700"><LogIn class="h-4 w-4" /> Buka aplikasi</a>
      </aside>

      <main class="min-w-0 space-y-14">
        <section id="mulai" class="scroll-mt-28 rounded-2xl border border-brand-100 bg-brand-50 p-6 sm:p-8">
          <div class="flex items-start gap-4">
            <div class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500 text-white"><Rocket class="h-5 w-5" /></div>
            <div>
              <p class="text-sm font-semibold text-brand-700">PENGENALAN</p><h2 class="mt-1 text-2xl font-extrabold">Mulai dalam empat langkah</h2>
              <ol class="mt-5 grid gap-4 sm:grid-cols-2">
                <li v-for="(step, index) in gettingStarted" :key="step.title" class="rounded-xl bg-white p-4 shadow-sm ring-1 ring-brand-100">
                  <span class="text-sm font-black text-brand-600">0{{ index + 1 }}</span>
                  <h3 class="mt-1 font-bold">{{ step.title }}</h3>
                  <p class="mt-1 text-sm leading-6 text-slate-600">{{ step.description }}</p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section id="fitur" class="scroll-mt-28">
          <SectionHeading title="Kemampuan utama" description="RinkBolt menyatukan operasi WhatsApp dan data pelanggan dalam satu workspace." />
          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <article v-for="feature in features" :key="feature.title" class="rounded-xl border border-slate-200 bg-white p-5">
              <component :is="feature.icon" class="h-5 w-5 text-brand-600" />
              <h3 class="mt-3 font-bold">{{ feature.title }}</h3>
              <p class="mt-2 text-sm leading-6 text-slate-600">{{ feature.description }}</p>
            </article>
          </div>
        </section>

        <section id="pesan" class="scroll-mt-28">
          <SectionHeading title="Pesan dan media" description="Gunakan inbox untuk percakapan satu per satu, atau campaign untuk pengiriman terjadwal ke audiens." />
          <div class="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div v-for="message in messageTypes" :key="message.type" class="grid gap-2 border-b border-slate-100 px-5 py-4 last:border-0 sm:grid-cols-[160px_1fr]">
              <span class="font-semibold text-slate-800">{{ message.type }}</span>
              <span class="text-sm leading-6 text-slate-600">{{ message.detail }}</span>
            </div>
          </div>
          <p class="mt-3 text-sm leading-6 text-slate-500">Gambar dan file dapat diterima, ditampilkan, diunduh, dan dikelola. Analisis AI/OCR isi gambar belum menjadi fitur bawaan.</p>
        </section>

        <section id="campaign" class="scroll-mt-28">
          <SectionHeading title="Campaign dan template" description="Untuk pengiriman proaktif, gunakan template WhatsApp yang disetujui Meta dan tentukan audiens dengan jelas." />
          <div class="mt-6 grid gap-4 md:grid-cols-3">
            <div v-for="item in campaignSteps" :key="item.title" class="rounded-xl border border-slate-200 bg-white p-5">
              <span class="text-xs font-bold tracking-[.14em] text-brand-600">{{ item.label }}</span>
              <h3 class="mt-2 font-bold">{{ item.title }}</h3>
              <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.description }}</p>
            </div>
          </div>
        </section>

        <section id="integrasi" class="scroll-mt-28">
          <SectionHeading title="Integrasi dan webhook" description="Koneksi WhatsApp, status pesan, dan pesan masuk diproses melalui integrasi resmi Meta." />
          <div class="mt-6 rounded-xl border border-slate-200 bg-white p-6">
            <div class="flex items-start gap-3"><Webhook class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /><p class="text-sm leading-6 text-slate-600">Webhook menerima event dari Meta, memverifikasi signature, lalu memprosesnya secara andal ke inbox dan realtime. Jangan membagikan secret webhook atau access token.</p></div>
            <div class="mt-5 rounded-lg bg-slate-950 px-4 py-3 font-mono text-sm text-emerald-300">https://api.rinkbolt.web.id/api/webhook</div>
          </div>
        </section>

        <section id="api" class="scroll-mt-28">
          <SectionHeading title="API dan developer" description="REST API v1 dipakai dari backend Anda untuk mengirim pesan atau mengelola campaign. Jangan pernah memanggilnya dari browser karena API key harus tetap rahasia." />
          <div class="mt-6 space-y-6">
            <article id="api-auth" class="scroll-mt-28 rounded-xl border border-slate-200 bg-white p-6"><h3 class="text-lg font-bold">Autentikasi dan base URL</h3><p class="mt-2 text-sm leading-6 text-slate-600">Buat API key dengan scope minimum di workspace. Kirim key melalui header <code>Authorization: Bearer …</code> atau <code>X-API-Key</code>. Semua request production menggunakan base URL berikut.</p><pre class="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-emerald-300"><code>https://api.rinkbolt.web.id/api/v1</code></pre></article>

            <article id="api-text" class="scroll-mt-28 rounded-xl border border-slate-200 bg-white p-6"><div class="flex flex-wrap items-center gap-3"><span class="rounded bg-emerald-100 px-2 py-1 font-mono text-xs font-bold text-emerald-800">POST</span><code class="font-mono text-sm">/whatsapp/messages/text</code></div><h3 class="mt-4 text-lg font-bold">Kirim pesan teks</h3><p class="mt-2 text-sm leading-6 text-slate-600">Butuh scope <code>whatsapp:messages</code> pada API key. Nilai <code>from</code> adalah ID channel RinkBolt (<code>ch_…</code>), sedangkan <code>to</code> memakai nomor tujuan format internasional.</p><pre class="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 text-xs leading-6 text-slate-200"><code>curl -X POST https://api.rinkbolt.web.id/api/v1/whatsapp/messages/text \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "from": "ch_123", "to": "6281234567890",
    "text": "Halo dari RinkBolt"
  }'</code></pre></article>

            <article id="api-image" class="scroll-mt-28 rounded-xl border border-slate-200 bg-white p-6"><div class="flex flex-wrap items-center gap-3"><span class="rounded bg-emerald-100 px-2 py-1 font-mono text-xs font-bold text-emerald-800">POST</span><code class="font-mono text-sm">/whatsapp/messages/image</code></div><h3 class="mt-4 text-lg font-bold">Kirim gambar</h3><p class="mt-2 text-sm leading-6 text-slate-600">Kirim gambar dari URL HTTPS publik. Caption bersifat opsional. API key membutuhkan scope <code>whatsapp:messages</code>.</p><pre class="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 text-xs leading-6 text-slate-200"><code>{
  "from": "ch_123", "to": "6281234567890",
  "mediaUrl": "https://cdn.example.com/promo.jpg",
  "caption": "Promo spesial hari ini"
}</code></pre></article>

            <article id="api-video" class="scroll-mt-28 rounded-xl border border-slate-200 bg-white p-6"><div class="flex flex-wrap items-center gap-3"><span class="rounded bg-emerald-100 px-2 py-1 font-mono text-xs font-bold text-emerald-800">POST</span><code class="font-mono text-sm">/whatsapp/messages/video</code></div><h3 class="mt-4 text-lg font-bold">Kirim video</h3><p class="mt-2 text-sm leading-6 text-slate-600">Gunakan URL HTTPS video yang dapat diakses oleh WhatsApp. Caption dapat disertakan bila diperlukan.</p><pre class="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 text-xs leading-6 text-slate-200"><code>{
  "from": "ch_123", "to": "6281234567890",
  "mediaUrl": "https://cdn.example.com/demo.mp4",
  "caption": "Cara menggunakan produk"
}</code></pre></article>

            <article id="api-audio" class="scroll-mt-28 rounded-xl border border-slate-200 bg-white p-6"><div class="flex flex-wrap items-center gap-3"><span class="rounded bg-emerald-100 px-2 py-1 font-mono text-xs font-bold text-emerald-800">POST</span><code class="font-mono text-sm">/whatsapp/messages/audio</code></div><h3 class="mt-4 text-lg font-bold">Kirim audio</h3><p class="mt-2 text-sm leading-6 text-slate-600">Gunakan URL HTTPS audio yang dapat diakses WhatsApp. Endpoint audio hanya memerlukan <code>from</code>, <code>to</code>, dan <code>mediaUrl</code>.</p><pre class="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 text-xs leading-6 text-slate-200"><code>{
  "from": "ch_123", "to": "6281234567890",
  "mediaUrl": "https://cdn.example.com/pesan-voice.ogg"
}</code></pre></article>

            <article id="api-document" class="scroll-mt-28 rounded-xl border border-slate-200 bg-white p-6"><div class="flex flex-wrap items-center gap-3"><span class="rounded bg-emerald-100 px-2 py-1 font-mono text-xs font-bold text-emerald-800">POST</span><code class="font-mono text-sm">/whatsapp/messages/document</code></div><h3 class="mt-4 text-lg font-bold">Kirim dokumen atau file</h3><p class="mt-2 text-sm leading-6 text-slate-600">Gunakan URL HTTPS yang dapat diambil WhatsApp. Nama file dan caption bersifat opsional.</p><pre class="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 text-xs leading-6 text-slate-200"><code>{
  "from": "ch_123", "to": "6281234567890",
  "mediaUrl": "https://cdn.example.com/invoice.pdf",
  "filename": "invoice.pdf", "caption": "Invoice Anda"
}</code></pre><p class="mt-3 text-xs leading-5 text-slate-500">Sticker tersedia melalui <code>POST /whatsapp/messages/sticker</code> dengan <code>mediaUrl</code>.</p></article>

            <article id="api-campaign" class="scroll-mt-28 rounded-xl border border-slate-200 bg-white p-6"><div class="flex flex-wrap items-center gap-3"><span class="rounded bg-emerald-100 px-2 py-1 font-mono text-xs font-bold text-emerald-800">POST</span><code class="font-mono text-sm">/campaigns</code></div><h3 class="mt-4 text-lg font-bold">Buat dan jalankan broadcast</h3><p class="mt-2 text-sm leading-6 text-slate-600">Campaign memakai template WhatsApp yang telah disetujui Meta. Tentukan channel, segment customer, nama template, dan parameter template; lalu launch sebagai langkah terpisah. API key membutuhkan scope <code>campaigns:write</code>.</p><pre class="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 text-xs leading-6 text-slate-200"><code>POST /api/v1/campaigns
{
  "name": "Promo pelanggan aktif",
  "channel_id": "ch_123",
  "segment_id": "seg_active_customers",
  "template_name": "promo_bulanan",
  "template_language": "id",
  "template_components": []
}

POST /api/v1/campaigns/{campaignId}/launch</code></pre><p class="mt-3 text-xs leading-5 text-slate-500">Gunakan <code>GET /campaigns</code> untuk daftar campaign, <code>PATCH /campaigns/{id}</code> untuk mengubah draft/jadwal, <code>POST /campaigns/{id}/cancel</code> untuk membatalkan, dan <code>GET /campaigns/{id}/stats</code> untuk memantau total penerima serta status queued, sent, delivered, read, dan failed.</p></article>
          </div>
          <div class="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950"><p class="font-bold">Aturan pengiriman WhatsApp</p><p class="mt-1">Pastikan penerima sudah opt-in. Di luar jendela layanan WhatsApp, pesan proaktif harus menggunakan template Meta yang disetujui. Hindari menyimpan API key di frontend, source code publik, atau URL.</p></div>
        </section>

        <section id="keamanan" class="scroll-mt-28">
          <SectionHeading title="Akses dan keamanan" description="Akses data dibatasi oleh organisasi/workspace dan role pengguna." />
          <ul class="mt-6 space-y-3">
            <li v-for="item in securityItems" :key="item" class="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600"><ShieldCheck class="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />{{ item }}</li>
          </ul>
        </section>

        <section id="bantuan" class="scroll-mt-28 rounded-2xl bg-[#062534] p-7 text-white sm:p-9">
          <h2 class="text-2xl font-extrabold">Butuh bantuan implementasi?</h2>
          <p class="mt-3 max-w-2xl leading-7 text-slate-300">Hubungi tim RinkBolt untuk onboarding WhatsApp Business, strategi campaign, atau kebutuhan integrasi khusus.</p>
          <a href="https://wa.me/62895365441554" target="_blank" rel="noopener noreferrer" class="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-600">Diskusi via WhatsApp <ArrowRight class="h-4 w-4" /></a>
        </section>
      </main>

      <aside class="hidden lg:block lg:sticky lg:top-24 lg:h-fit"><p class="mb-3 text-xs font-bold tracking-[.14em] text-slate-500">DI HALAMAN INI</p><nav class="border-l border-slate-200 text-sm"><a v-for="item in visibleSections" :key="item.id" :href="`#${item.id}`" class="block border-l-2 border-transparent py-1.5 pl-4 text-slate-500 hover:border-brand-500 hover:text-brand-700">{{ item.title }}</a></nav></aside>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, ChevronDown, Database, FileText, Inbox, LogIn, MessageCircle, Rocket, Search, Send, ShieldCheck, Users, Webhook } from 'lucide-vue-next'
import { defineComponent, h } from 'vue'

const search = ref('')
const openGroups = ref(['Mulai', 'Menggunakan RinkBolt', 'Pengembang', 'Administrasi'])

const navigation = [
  { title: 'Mulai', items: [{ id: 'mulai', title: 'Pengenalan' }, { id: 'fitur', title: 'Kemampuan utama' }] },
  { title: 'Menggunakan RinkBolt', items: [{ id: 'pesan', title: 'Pesan dan media' }, { id: 'campaign', title: 'Campaign dan template' }] },
  { title: 'Pengembang', items: [
    { id: 'integrasi', title: 'Webhook Meta' }, { id: 'api', title: 'Autentikasi API' },
    { id: 'api-text', title: '/messages/text', method: 'POST' }, { id: 'api-image', title: '/messages/image', method: 'POST' }, { id: 'api-video', title: '/messages/video', method: 'POST' }, { id: 'api-audio', title: '/messages/audio', method: 'POST' }, { id: 'api-document', title: '/messages/document', method: 'POST' },
    { id: 'api-campaign', title: '/campaigns', method: 'GET' }, { id: 'api-campaign', title: '/campaigns', method: 'POST' }, { id: 'api-campaign', title: '/campaigns/:id', method: 'PATCH' }, { id: 'api-campaign', title: '/campaigns/:id/launch', method: 'POST' }, { id: 'api-campaign', title: '/campaigns/:id/cancel', method: 'POST' }, { id: 'api-campaign', title: '/campaigns/:id/stats', method: 'GET' },
  ] },
  { title: 'Administrasi', items: [{ id: 'keamanan', title: 'Akses dan keamanan' }, { id: 'bantuan', title: 'Bantuan' }] },
]

const isGroupOpen = (title: string) => openGroups.value.includes(title)

const toggleGroup = (title: string) => {
  openGroups.value = isGroupOpen(title)
    ? openGroups.value.filter((group) => group !== title)
    : [...openGroups.value, title]
}

const methodClass = (method: string) => ({
  'bg-blue-100 text-blue-700': method === 'GET',
  'bg-emerald-100 text-emerald-700': method === 'POST',
  'bg-amber-100 text-amber-800': method === 'PUT' || method === 'PATCH',
  'bg-red-100 text-red-700': method === 'DELETE',
})

const filteredNavigation = computed(() => {
  const query = search.value.trim().toLocaleLowerCase('id')
  if (!query) return navigation

  return navigation
    .map((group) => ({ ...group, items: group.items.filter((item) => item.title.toLocaleLowerCase('id').includes(query)) }))
    .filter((group) => group.items.length > 0)
})

const visibleSections = navigation.flatMap((group) => group.items)

const gettingStarted = [
  { title: 'Buat workspace', description: 'Masuk, buat organisasi, lalu undang anggota tim sesuai peran mereka.' },
  { title: 'Hubungkan WhatsApp', description: 'Sambungkan akun WhatsApp Business melalui proses onboarding Meta.' },
  { title: 'Siapkan kontak', description: 'Impor atau buat customer, tambah label, dan kelompokkan menjadi segment.' },
  { title: 'Kirim dan pantau', description: 'Balas dari inbox atau buat campaign, lalu pantau status pengiriman.' },
]

const features = [
  { title: 'Inbox kolaboratif', description: 'Tangani percakapan bersama tim dengan assignment, status, label, catatan internal, dan canned response.', icon: Inbox },
  { title: 'Customer & segment', description: 'Kelola profil pelanggan, properti kustom, segmentasi, dan riwayat aktivitas.', icon: Users },
  { title: 'Campaign broadcast', description: 'Jadwalkan pesan ke segmen audiens dan pantau hasil pengiriman dalam satu workspace.', icon: Send },
  { title: 'Template Meta', description: 'Kelola template WhatsApp, sinkronisasi, dan gunakan template resmi untuk pesan proaktif.', icon: FileText },
  { title: 'Flow & automation', description: 'Bangun alur WhatsApp untuk membantu proses percakapan dan tindak lanjut yang berulang.', icon: MessageCircle },
  { title: 'Media library', description: 'Simpan dan gunakan ulang gambar, video, audio, serta dokumen untuk percakapan dan campaign.', icon: Database },
]

const messageTypes = [
  { type: 'Teks & caption', detail: 'Pesan teks biasa dan caption untuk media.' },
  { type: 'Gambar & video', detail: 'Kirim atau terima konten visual melalui percakapan dan template yang mendukung.' },
  { type: 'Dokumen & audio', detail: 'Bagikan PDF, dokumen kerja, audio, atau voice note sesuai kemampuan channel.' },
  { type: 'Lokasi & kontak', detail: 'Gunakan jenis pesan WhatsApp yang relevan untuk kebutuhan layanan pelanggan.' },
  { type: 'Interaktif', detail: 'Tombol, CTA, dan list tersedia sesuai template Meta serta kemampuan channel.' },
]

const campaignSteps = [
  { label: '01', title: 'Pilih audiens', description: 'Gunakan segment dan data customer agar pesan relevan.' },
  { label: '02', title: 'Tulis pesan', description: 'Gunakan template resmi bila percakapan berada di luar jendela layanan WhatsApp.' },
  { label: '03', title: 'Pantau hasil', description: 'Tinjau status pengiriman dan tindak lanjuti balasan dari inbox.' },
]

const securityItems = [
  'Setiap data workspace dibatasi pada organisasi yang aktif dan diverifikasi oleh server.',
  'Role owner, admin, dan anggota membatasi tindakan yang dapat dilakukan pengguna.',
  'Login mendukung password, kode email, dan Google untuk akun yang telah terdaftar.',
  'Webhook Meta diverifikasi sebelum event diterima; secret dan access token tidak boleh dibagikan.',
]

const SectionHeading = defineComponent({
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  setup(props) {
    return () => h('div', [
      h('h2', { class: 'text-2xl font-extrabold' }, props.title),
      h('p', { class: 'mt-2 max-w-2xl leading-7 text-slate-600' }, props.description),
    ])
  },
})
</script>

<style scoped>
:global(html.dark) .docs-page { background: #020617; color: #e2e8f0; }
:global(html.dark) .docs-page .bg-white { background-color: #0f172a !important; }
:global(html.dark) .docs-page .bg-slate-50 { background-color: #0b1120 !important; }
:global(html.dark) .docs-page .bg-brand-50 { background-color: #2a1a0a !important; }
:global(html.dark) .docs-page .bg-amber-50 { background-color: #2b1d05 !important; }
:global(html.dark) .docs-page .border-slate-100,
:global(html.dark) .docs-page .border-slate-200,
:global(html.dark) .docs-page .border-slate-300 { border-color: #334155 !important; }
:global(html.dark) .docs-page .border-brand-100 { border-color: #7d4108 !important; }
:global(html.dark) .docs-page .border-amber-200 { border-color: #854d0e !important; }
:global(html.dark) .docs-page .text-slate-900,
:global(html.dark) .docs-page .text-slate-800,
:global(html.dark) .docs-page .text-slate-700 { color: #f1f5f9 !important; }
:global(html.dark) .docs-page .text-slate-600,
:global(html.dark) .docs-page .text-slate-500,
:global(html.dark) .docs-page .text-slate-400 { color: #cbd5e1 !important; }
:global(html.dark) .docs-page .text-amber-950 { color: #fef3c7 !important; }
</style>
