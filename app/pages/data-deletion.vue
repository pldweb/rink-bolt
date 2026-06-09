<template>
  <div>
    <section class="pt-28 pb-16 sm:pt-32 sm:pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-sm font-semibold text-brand-400 uppercase tracking-wider">Legal</span>
        <h1 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold">Kebijakan Penghapusan Data</h1>
        <p class="mt-2 text-gray-400 text-sm">Terakhir diperbarui: 9 Juni 2026</p>
      </div>
    </section>

    <section class="py-16 sm:py-20 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Steps -->
        <div class="grid sm:grid-cols-3 gap-4 mb-14">
          <div v-for="(step, i) in steps" :key="i" class="text-center p-6 rounded-2xl border border-gray-100 bg-gray-50">
            <div class="w-10 h-10 mx-auto mb-3 bg-brand-500 text-white rounded-xl flex items-center justify-center text-sm font-bold">{{ i + 1 }}</div>
            <h3 class="text-sm font-bold text-gray-900 mb-1">{{ step.title }}</h3>
            <p class="text-xs text-gray-500">{{ step.desc }}</p>
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-10">
          <div v-for="(sec, i) in sections" :key="i">
            <h2 class="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span class="text-brand-500 text-sm font-semibold">{{ i + 1 }}.</span>{{ sec.title }}
            </h2>
            <div class="text-gray-600 leading-relaxed space-y-2 mt-3 [&_strong]:text-gray-800 [&_a]:text-brand-500 [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1" v-html="sec.content" />
          </div>
        </div>

        <div class="mt-16 p-6 bg-brand-50 rounded-2xl border border-brand-100 text-center">
          <p class="text-sm text-gray-600">
            Ajukan permintaan: <strong class="text-gray-800">privacy@rinkwebstudio.web.id</strong> &nbsp;•&nbsp;
            WA: <strong class="text-gray-800">+62 812-3456-7890</strong> &nbsp;•&nbsp;
            <NuxtLink to="/contact" class="text-brand-600 font-semibold hover:underline">Halaman Kontak</NuxtLink>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const steps = [
  { title: 'Ajukan', desc: 'Email ke privacy@rinkwebstudio.web.id dengan data akun lengkap' },
  { title: 'Verifikasi', desc: 'Verifikasi identitas via email/WA (2×24 jam)' },
  { title: 'Hapus', desc: 'Data dihapus permanen maks 14 hari kerja' },
]

const sections = [
  { title: 'Hak Penghapusan', content: `Sesuai regulasi, Anda berhak meminta penghapusan data pribadi. Kebijakan ini menjelaskan prosedurnya.` },
  { title: 'Data yang Dapat Dihapus', content: `<strong>Ya:</strong><br><br>• Data Akun — nama, email, nomor telepon.<br>• Data Kontak — semua daftar kontak.<br>• Riwayat Broadcast — log, pesan, statistik.<br>• Data Penggunaan — log aktivitas.` },
  { title: 'Pengecualian', content: `<strong>Tidak dapat dihapus:</strong><br><br>• Diwajibkan hukum (pajak, audit, dll).<br>• Proses hukum berjalan.<br>• Data sudah dianonimkan.<br>• Kepentingan bisnis sah &lt; hak privasi.` },
  { title: 'Prosedur', content: `<ol><li>Email <strong>privacy@rinkwebstudio.web.id</strong> — subjek "Permintaan Penghapusan Data".</li><li>Sertakan: nama, email terdaftar, nomor WA (jika ada), alasan (opsional).</li><li>Konfirmasi dalam 2×24 jam.</li><li>Selesai maks <strong>14 hari kerja</strong> setelah verifikasi.</li></ol>` },
  { title: 'Verifikasi Identitas', content: `Verifikasi via email/WA terdaftar. Permintaan tanpa verifikasi sah ditolak demi keamanan data Anda.` },
  { title: 'Konsekuensi', content: `Setelah dihapus:<br><br>• Akun dinonaktifkan permanen.<br>• Semua kontak, riwayat, data dihapus total.<br>• <strong>Data tidak bisa dipulihkan.</strong><br>• Akses permanen ke RinkBolt hilang.` },
  { title: 'Penghapusan Otomatis', content: `<strong>Auto-delete:</strong><br><br>• Akun tidak aktif 12+ bulan — dihapus setelah notifikasi 30 hari.<br>• Log teknis — 90 hari.<br>• Session token — 7 hari.` },
]
</script>
