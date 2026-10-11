<template>
  <div>
    <PageHero eyebrow="Legal" title="Kebijakan Penghapusan Data" updated="24 September 2026" />
    <LegalDoc :sections="sections">
      <template #before>
        <!-- Diisi saat Meta mengarahkan pengguna ke sini setelah permintaan penghapusan Threads -->
        <div v-if="confirmationCode" class="mb-12 flex gap-4 rounded-xl border border-success/30 bg-success-soft p-5" role="status">
          <CircleCheck class="mt-0.5 h-6 w-6 shrink-0 text-success" aria-hidden="true" />
          <div class="min-w-0">
            <p class="font-bold text-ink">Permintaan penghapusan dari Threads sudah diproses.</p>
            <p class="mt-1 text-body-sm text-ink-muted">Koneksi akun Threads Anda, termasuk token akses dan detail akun, telah dihapus.</p>
            <p class="mt-3 text-body-sm text-ink-muted">Kode konfirmasi: <span class="break-all rounded-sm bg-white px-2 py-0.5 font-mono font-semibold text-ink">{{ confirmationCode }}</span></p>
          </div>
        </div>

        <ol class="mb-14 grid gap-6 border-y border-line py-6 sm:grid-cols-3">
          <li v-for="(step, i) in steps" :key="i" class="flex gap-4 sm:block">
            <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy text-label text-white">{{ i + 1 }}</span>
            <div class="sm:mt-3">
              <h2 class="font-semibold text-ink">{{ step.title }}</h2>
              <p class="mt-1 text-body-sm text-ink-muted">{{ step.desc }}</p>
            </div>
          </li>
        </ol>
      </template>
      <template #footer>
        Ajukan permintaan: <strong class="font-semibold">support@rinkwebstudio.com</strong> &nbsp;•&nbsp;
        WA: <strong class="font-semibold">+62 812-3456-7890</strong> &nbsp;•&nbsp;
        <NuxtLink to="/contact" class="font-semibold text-brand-ink underline underline-offset-2">Halaman Kontak</NuxtLink>
      </template>
    </LegalDoc>
  </div>
</template>

<script setup lang="ts">
import { CircleCheck } from 'lucide-vue-next'

useSeoMeta({ title: 'Kebijakan Penghapusan Data — RinkBolt', description: 'Cara meminta penghapusan data akun RinkBolt, termasuk data koneksi Instagram dan Threads.', ogTitle: 'Kebijakan Penghapusan Data — RinkBolt', ogDescription: 'Cara meminta penghapusan data akun RinkBolt, termasuk data koneksi Instagram dan Threads.' })

const route = useRoute()
const confirmationCode = computed(() => {
  const code = route.query.code
  return typeof code === 'string' ? code : ''
})

const steps = [
  { title: 'Ajukan', desc: 'Email ke support@rinkwebstudio.com dengan data akun lengkap' },
  { title: 'Verifikasi', desc: 'Verifikasi identitas via email/WA (2×24 jam)' },
  { title: 'Hapus', desc: 'Data dihapus permanen maks 14 hari kerja' },
]

const sections = [
  { title: 'Hak Penghapusan', content: `Sesuai regulasi, Anda berhak meminta penghapusan data pribadi. Kebijakan ini menjelaskan prosedurnya.` },
  { title: 'Data yang Dapat Dihapus', content: `<strong>Ya:</strong><br><br>• Data Akun — nama, email, nomor telepon.<br>• Data Kontak — semua daftar kontak.<br>• Riwayat Broadcast — log, pesan, statistik.<br>• Data Penggunaan — log aktivitas.<br>• Koneksi Instagram/Threads — token akses, ID akun, dan jadwal posting.` },
  { title: 'Pengecualian', content: `<strong>Tidak dapat dihapus:</strong><br><br>• Diwajibkan hukum (pajak, audit, dll).<br>• Proses hukum berjalan.<br>• Data sudah dianonimkan.<br>• Kepentingan bisnis sah &lt; hak privasi.` },
  { title: 'Prosedur', content: `<ol><li>Email <strong>support@rinkwebstudio.com</strong> — subjek "Permintaan Penghapusan Data".</li><li>Sertakan: nama, email terdaftar, nomor WA (jika ada), alasan (opsional).</li><li>Konfirmasi dalam 2×24 jam.</li><li>Selesai maks <strong>14 hari kerja</strong> setelah verifikasi.</li></ol>` },
  { title: 'Verifikasi Identitas', content: `Verifikasi via email/WA terdaftar. Permintaan tanpa verifikasi sah ditolak demi keamanan data Anda.` },
  { title: 'Konsekuensi', content: `Setelah dihapus:<br><br>• Akun dinonaktifkan permanen.<br>• Semua kontak, riwayat, data dihapus total.<br>• <strong>Data tidak bisa dipulihkan.</strong><br>• Akses permanen ke RinkBolt hilang.` },
  { title: 'Data Instagram dan Threads', content: `<strong>Threads:</strong><br><br>• Mencabut RinkBolt dari pengaturan Threads: token akses kami dihapus otomatis, kanal ditandai terputus.<br>• Meminta penghapusan data lewat Meta: kanal Threads Anda (token, ID akun, username) dihapus otomatis dan Anda menerima kode konfirmasi.<br><br><strong>Instagram:</strong><br><br>• Klik <em>Disconnect</em> pada halaman kanal di RinkBolt untuk menghapus token akses.<br>• Untuk menghapus seluruh data koneksi dan jadwal posting, ajukan permintaan lewat prosedur di atas dengan subjek "Penghapusan Data Instagram".<br>• Mencabut aplikasi dari pengaturan Facebook menonaktifkan token di sisi Meta, tetapi data yang tersimpan di RinkBolt baru terhapus setelah Anda mengajukan permintaan.<br><br>Konten yang sudah terbit di Instagram atau Threads tidak ikut terhapus; kelola langsung di aplikasinya.` },
  { title: 'Penghapusan Otomatis', content: `<strong>Auto-delete:</strong><br><br>• Akun tidak aktif 12+ bulan — dihapus setelah notifikasi 30 hari.<br>• Log teknis — 90 hari.<br>• Session token — 7 hari.` },
]
</script>
