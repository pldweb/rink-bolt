<template>
  <div>
    <section class="pt-28 pb-16 sm:pt-32 sm:pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-sm font-semibold text-brand-400 uppercase tracking-wider">Legal</span>
        <h1 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold">Privacy Policy</h1>
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
            <div class="text-gray-600 leading-relaxed space-y-2 mt-3 [&_strong]:text-gray-800 [&_a]:text-brand-500 [&_a]:font-semibold [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1" v-html="sec.content" />
          </div>
        </div>
        <div class="mt-16 p-6 bg-brand-50 rounded-2xl border border-brand-100 text-center">
          <p class="text-sm text-gray-600">
            Pertanyaan? <NuxtLink to="/contact" class="text-brand-600 font-semibold hover:underline">Hubungi kami</NuxtLink> atau email <strong class="text-gray-800">privacy@rinkwebstudio.web.id</strong>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const sections = [
  { title: 'Informasi yang Kami Kumpulkan', content: `RinkBolt mengumpulkan informasi yang Anda berikan langsung:<br><br><strong>Informasi Akun:</strong> Nama, email, nomor telepon, informasi bisnis.<br><strong>Data Kontak:</strong> Daftar kontak yang diunggah — nama & nomor WhatsApp.<br><strong>Data Penggunaan:</strong> Log aktivitas, statistik kampanye, interaksi fitur.<br><strong>Data Teknis:</strong> IP, browser, OS, info perangkat.` },
  { title: 'Penggunaan Informasi', content: `Data digunakan untuk:<br><br>• Menyediakan & memelihara layanan RinkBolt.<br>• Memproses & mengirim broadcast WhatsApp.<br>• Notifikasi akun & pembaruan layanan.<br>• Analisis untuk meningkatkan UX.<br>• Mencegah pelanggaran ketentuan/hukum.` },
  { title: 'Penyimpanan & Keamanan', content: `Enkripsi AES-256, firewall, audit log, akses berbasis peran. Data disimpan selama akun aktif. Dihapus dalam 30 hari setelah akun ditutup — kecuali diwajibkan hukum.` },
  { title: 'Berbagi Data', content: `Kami <strong>tidak menjual</strong> data Anda. Dibagikan hanya jika:<br><br>• <strong>Penyedia Layanan:</strong> Hosting, analitik, email — terikat NDA.<br>• <strong>Kewajiban Hukum:</strong> Diwajibkan regulasi/proses hukum.<br>• <strong>Persetujuan:</strong> Dengan izin eksplisit Anda.` },
  { title: 'Hak Anda', content: `• Akses data pribadi yang kami simpan.<br>• Koreksi data tidak akurat.<br>• Hapus data — lihat <NuxtLink to="/data-deletion" class="font-semibold">Kebijakan Penghapusan</NuxtLink>.<br>• Tolak pemrosesan tertentu.<br>• Portabilitas data (JSON/CSV).` },
  { title: 'Cookies', content: `Cookies esensial saja: session, auth, preferensi. Tidak ada tracking iklan atau third-party analytics. Kontrol via pengaturan browser.` },
  { title: 'Perubahan Kebijakan', content: `Dapat diperbarui sewaktu-waktu. Perubahan material diberitahukan via email. Penggunaan lanjutan = menyetujui kebijakan terbaru.` },
]
</script>
