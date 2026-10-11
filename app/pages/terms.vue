<template>
  <div>
    <PageHero eyebrow="Legal" title="Syarat & Ketentuan" updated="24 September 2026" />
    <LegalDoc :sections="sections">
      <template #footer>
        Pertanyaan? <NuxtLink to="/contact" class="font-semibold text-brand-ink underline underline-offset-2">Hubungi kami</NuxtLink> atau email <strong class="font-semibold">support@rinkwebstudio.com</strong>
      </template>
    </LegalDoc>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: 'Syarat & Ketentuan — RinkBolt', description: 'Syarat dan ketentuan penggunaan layanan RinkBolt untuk WhatsApp, Instagram, dan Threads.', ogTitle: 'Syarat & Ketentuan — RinkBolt', ogDescription: 'Syarat dan ketentuan penggunaan layanan RinkBolt untuk WhatsApp, Instagram, dan Threads.' })

const sections = [
  { title: 'Penerimaan Ketentuan', content: `Dengan mengakses RinkBolt ("Layanan"), Anda setuju terikat Syarat &amp; Ketentuan ini. Jika tidak setuju, jangan gunakan Layanan.` },
  { title: 'Deskripsi Layanan', content: `RinkBolt: platform broadcast &amp; blasting WhatsApp — manajemen kontak, pesan massal, penjadwalan, analitik — serta penerbitan konten terjadwal ke akun Instagram dan Threads yang Anda hubungkan. Kami berhak memodifikasi Layanan kapan saja dengan pemberitahuan.` },
  { title: 'Akun Pengguna', content: `• Jaga kerahasiaan kredensial — Anda bertanggung jawab penuh.<br>• Laporkan penggunaan tidak sah segera.<br>• Minimal usia 18 tahun.<br>• Satu akun per entitas bisnis.<br>• Hanya hubungkan akun Instagram/Threads yang Anda miliki atau berhak Anda kelola, dan patuhi syarat Meta.` },
  { title: 'Penggunaan yang Dapat Diterima', content: `<strong>DILARANG:</strong><br><br>• Spam atau pesan tidak diminta.<br>• Melanggar kebijakan WhatsApp, Instagram, Threads, atau Meta.<br>• Malware, virus, kode berbahaya.<br>• Pelanggaran hak kekayaan intelektual.<br>• Pelecehan, ancaman, konten ilegal.<br>• Melanggar hukum RI.` },
  { title: 'Konten Pengguna', content: `Anda mempertahankan hak konten. Lisensi terbatas ke RinkBolt untuk memproses & mengirim. Anda bertanggung jawab penuh atas isi broadcast.` },
  { title: 'Pembatasan Tanggung Jawab', content: `Layanan "AS IS" tanpa jaminan. RinkBolt tidak bertanggung jawab atas:<br><br>• Kerugian langsung/tidak langsung.<br>• Gagal kirim atau gagal terbit karena pembatasan WhatsApp, Instagram, Threads, atau Meta.<br>• Pembatasan atau blokir akun oleh Meta.<br>• Kehilangan data/keuntungan.` },
  { title: 'Pengakhiran', content: `Akun dapat ditangguhkan/diakhiri jika melanggar ketentuan. Data dihapus sesuai <a href="/data-deletion" class="font-semibold">Kebijakan Penghapusan</a>.` },
  { title: 'Hukum yang Berlaku', content: `Diatur oleh hukum Republik Indonesia. Sengketa diselesaikan di Pengadilan Negeri Jakarta Timur.` },
]
</script>
