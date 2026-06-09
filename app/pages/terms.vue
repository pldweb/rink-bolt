<template>
  <div>
    <section class="pt-28 pb-16 sm:pt-32 sm:pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-sm font-semibold text-brand-400 uppercase tracking-wider">Legal</span>
        <h1 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold">Syarat &amp; Ketentuan</h1>
        <p class="mt-2 text-gray-400 text-sm">Terakhir diperbarui: 9 Juni 2026</p>
      </div>
    </section>

    <section class="py-16 sm:py-20 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-10">
          <div v-for="(sec, i) in sections" :key="i">
            <h2 class="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span class="text-brand-500 text-sm font-semibold">{{ i + 1 }}.</span>{{ sec.title }}
            </h2>
            <div class="text-gray-600 leading-relaxed space-y-2 mt-3 [&_strong]:text-gray-800 [&_a]:text-brand-500 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1" v-html="sec.content" />
          </div>
        </div>
        <div class="mt-16 p-6 bg-brand-50 rounded-2xl border border-brand-100 text-center">
          <p class="text-sm text-gray-600">
            Pertanyaan? <NuxtLink to="/contact" class="text-brand-600 font-semibold hover:underline">Hubungi kami</NuxtLink> atau email <strong class="text-gray-800">legal@rinkwebstudio.web.id</strong>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const sections = [
  { title: 'Penerimaan Ketentuan', content: `Dengan mengakses RinkBolt ("Layanan"), Anda setuju terikat Syarat &amp; Ketentuan ini. Jika tidak setuju, jangan gunakan Layanan.` },
  { title: 'Deskripsi Layanan', content: `RinkBolt: platform broadcast &amp; blasting WhatsApp — manajemen kontak, pesan massal, penjadwalan, analitik. Kami berhak memodifikasi Layanan kapan saja dengan pemberitahuan.` },
  { title: 'Akun Pengguna', content: `• Jaga kerahasiaan kredensial — Anda bertanggung jawab penuh.<br>• Laporkan penggunaan tidak sah segera.<br>• Minimal usia 18 tahun.<br>• Satu akun per entitas bisnis.` },
  { title: 'Penggunaan yang Dapat Diterima', content: `<strong>DILARANG:</strong><br><br>• Spam atau pesan tidak diminta.<br>• Melanggar kebijakan WhatsApp/Meta.<br>• Malware, virus, kode berbahaya.<br>• Pelanggaran hak kekayaan intelektual.<br>• Pelecehan, ancaman, konten ilegal.<br>• Melanggar hukum RI.` },
  { title: 'Konten Pengguna', content: `Anda mempertahankan hak konten. Lisensi terbatas ke RinkBolt untuk memproses & mengirim. Anda bertanggung jawab penuh atas isi broadcast.` },
  { title: 'Pembatasan Tanggung Jawab', content: `Layanan "AS IS" tanpa jaminan. RinkBolt tidak bertanggung jawab atas:<br><br>• Kerugian langsung/tidak langsung.<br>• Gagal kirim karena pembatasan WhatsApp.<br>• Blokir akun WA oleh Meta.<br>• Kehilangan data/keuntungan.` },
  { title: 'Pengakhiran', content: `Akun dapat ditangguhkan/diakhiri jika melanggar ketentuan. Data dihapus sesuai <NuxtLink to="/data-deletion" class="font-semibold">Kebijakan Penghapusan</NuxtLink>.` },
  { title: 'Hukum yang Berlaku', content: `Diatur oleh hukum Republik Indonesia. Sengketa diselesaikan di Pengadilan Negeri Jakarta Selatan.` },
]
</script>
