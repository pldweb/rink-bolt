<template>
  <div>
    <PageHero eyebrow="Legal" title="Kebijakan Privasi" updated="24 September 2026" />
    <LegalDoc :sections="sections">
      <template #footer>
        Pertanyaan? <NuxtLink to="/contact" class="font-semibold text-brand-ink underline underline-offset-2">Hubungi kami</NuxtLink> atau email <strong class="font-semibold">support@rinkwebstudio.com</strong>
      </template>
    </LegalDoc>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: 'Kebijakan Privasi — RinkBolt', description: 'Cara RinkBolt mengumpulkan, memakai, menyimpan, dan melindungi data pribadimu, termasuk data akun Instagram dan Threads.', ogTitle: 'Kebijakan Privasi — RinkBolt', ogDescription: 'Cara RinkBolt mengumpulkan, memakai, menyimpan, dan melindungi data pribadimu, termasuk data akun Instagram dan Threads.' })

const sections = [
  { title: 'Pengelola Layanan', content: `RinkBolt dikembangkan dan dikelola oleh <strong>Rinkweb Studio</strong>, Jl. Sawo 4 RT08/RW01, Kel. Balekambang, Kec. Kramat Jati, Jakarta Timur 13530, Indonesia. Untuk pertanyaan privasi, hubungi <a href="mailto:support@rinkwebstudio.com">support@rinkwebstudio.com</a> atau WhatsApp <a href="https://wa.me/62895365441554">+62 895-3654-41554</a>.` },
  { title: 'Informasi yang Kami Kumpulkan', content: `RinkBolt mengumpulkan informasi yang Anda berikan langsung:<br><br><strong>Informasi Akun:</strong> Nama, email, nomor telepon, informasi bisnis.<br><strong>Data Kontak:</strong> Daftar kontak yang diunggah — nama & nomor WhatsApp.<br><strong>Data Penggunaan:</strong> Log aktivitas, statistik kampanye, interaksi fitur.<br><strong>Data Teknis:</strong> IP, browser, OS, info perangkat.` },
  { title: 'Penggunaan Informasi', content: `Data digunakan untuk:<br><br>• Menyediakan & memelihara layanan RinkBolt.<br>• Memproses & mengirim broadcast WhatsApp.<br>• Notifikasi akun & pembaruan layanan.<br>• Analisis untuk meningkatkan UX.<br>• Mencegah pelanggaran ketentuan/hukum.` },
  { title: 'Penyimpanan & Keamanan', content: `Enkripsi AES-256, firewall, audit log, akses berbasis peran. Data disimpan selama akun aktif. Dihapus dalam 30 hari setelah akun ditutup — kecuali diwajibkan hukum.` },
  { title: 'Berbagi Data', content: `Kami <strong>tidak menjual</strong> data Anda. Dibagikan hanya jika:<br><br>• <strong>Penyedia Layanan:</strong> Hosting, analitik, email — terikat NDA.<br>• <strong>Kewajiban Hukum:</strong> Diwajibkan regulasi/proses hukum.<br>• <strong>Persetujuan:</strong> Dengan izin eksplisit Anda.` },
  { title: 'Akun Instagram dan Threads', content: `Jika Anda menghubungkan akun Instagram atau Threads, kami memproses:<br><br><strong>Instagram:</strong> ID akun Instagram Business/Creator, ID dan nama Halaman Facebook yang tertaut, serta token akses.<br><strong>Threads:</strong> ID akun, username, token akses, dan tanggal kedaluwarsanya.<br><strong>Konten terjadwal:</strong> caption, tautan media, dan waktu terbit yang Anda buat di RinkBolt.<br><br>Data ini hanya dipakai untuk menghubungkan akun dan menerbitkan konten sesuai jadwal Anda. Token akses disimpan terenkripsi (AES-256-GCM). Kami <strong>tidak menjual</strong> data dari Instagram atau Threads dan tidak memakainya untuk iklan atau profiling.<br><br>Data dikirim ke Meta Platforms hanya untuk menjalankan fitur yang Anda minta, dan tunduk pada kebijakan Meta.<br><br><strong>Mencabut akses:</strong> klik <em>Disconnect</em> pada halaman kanal di RinkBolt, atau cabut aplikasi dari pengaturan Threads / pengaturan Facebook Anda. Untuk Threads, pencabutan dari sisi Meta otomatis menghapus token kami. Penghapusan data lengkap: lihat <a href="/data-deletion" class="font-semibold">Kebijakan Penghapusan</a>.` },
  { title: 'Hak Anda', content: `• Akses data pribadi yang kami simpan.<br>• Koreksi data tidak akurat.<br>• Hapus data — lihat <a href="/data-deletion" class="font-semibold">Kebijakan Penghapusan</a>.<br>• Tolak pemrosesan tertentu.<br>• Portabilitas data (JSON/CSV).` },
  { title: 'Cookies', content: `Cookies esensial saja: session, auth, preferensi. Tidak ada tracking iklan atau third-party analytics. Kontrol via pengaturan browser.` },
  { title: 'Perubahan Kebijakan', content: `Dapat diperbarui sewaktu-waktu. Perubahan material diberitahukan via email. Penggunaan lanjutan = menyetujui kebijakan terbaru.` },
]
</script>
