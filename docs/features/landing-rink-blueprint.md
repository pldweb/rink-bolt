# Landing RinkBolt mengikuti Rink Design Blueprint

**Status:** Sedang dikerjakan
**Jenis:** Perubahan tampilan
**Dibuat:** 2026-10-11
**Pemilik kebutuhan:** pemilik produk RinkBolt
**Perencana:** Claude
**Pelaksana:** agent `pelaksana`
**Reviewer:** sesi utama (cek visual lewat MCP browser)

## Kebutuhan

Pengguna meminta landing page ikut dikerjakan bersama design system app RinkBolt. App sekarang memakai Rink Design Blueprint: oranye `#EA7F17`, navy `#032838`, Poppins, tombol pill. Landing masih bertema gelap navy/teal dengan blob, Montserrat, dan laptop three.js, jadi tidak seragam dengan app.

## Kondisi yang sudah ada

- Nuxt 4, `ssr: false`, Tailwind 3.4 dengan config inline di `nuxt.config.ts`. Warna `brand` masih teal.
- `app/app.vue` mengatur body `bg-[#061923]` dan memuat Montserrat.
- `app/layouts/default.vue` berisi header `h-[72px]` dan footer gelap.
- Halaman: `index.vue`, `docs.vue` (sudah terang), `tentang.vue`, `contact.vue` (membuka `wa.me`), `privacy-policy.vue`, `terms.vue`, `data-deletion.vue` (membaca `?code=` dari callback Meta).
- Kode mati: `app/components/BroadcastCodeEditor.vue`, Pinia (`@pinia/nuxt`, `pinia`), `logo-Defmfr5A.png` di root.
- `ThreeLaptop.vue` + dependensi `three`.
- Tautan keluar: `https://app.rinkbolt.web.id/login`, `/signup`, `https://wa.me/62895365441554`.
- Deploy manual: `npm run deploy` → Worker `rink-bolt`. Tidak ada CI maupun test, hanya `npm run build`.

## Batas pekerjaan

- **Masuk:** tampilan semua halaman, layout, font, warna, hapus three.js dan kode mati, meta/OG per halaman, script deploy staging.
- **Tidak masuk:** isi hukum halaman legal (teks tetap, hanya tata letak), URL halaman, perilaku `?code=` di `/data-deletion`, deploy production `rink-bolt`.

## Pola UI

Sumber kebenaran: `/home/erahajj/projek/core/docs/design/RINK_DESIGN_BLUEPRINT.md` (terutama §2.5 situs publik, §3 warna, §4 tipografi, §5 jarak, §6 radius/bayangan, §12 bahasa). Token angka ada di `/home/erahajj/projek/core/packages/wabs/design/rink-tokens.json`.

- **Latar:** seksi putih dan `surface-sunken` (`#EEF3F6`) berselang. Ada satu panel oranye dan satu pita navy. Tanpa blob, tanpa teks gradien, tanpa glassmorphism.
- **Font:** Poppins 400/500/600/700, di-host sendiri (salin woff2 dari `/home/erahajj/projek/core/apps/app/public/fonts/`) atau Google Fonts.
- **Tombol:** pill 44–48 px. Primer oranye dengan teks putih, sekunder navy atau outline.
- **Header:** putih, 64–76 px, logo `public/logo.png`, navigasi, CTA "Masuk" dan "Coba gratis". Di ponsel ada menu yang bisa dibuka dengan keyboard.
- **Hero:** judul `display-xl`, lead `body-lg`, dua CTA. Di kanan ada **mockup layar produk statis** yang dibangun dengan HTML/Tailwind (inbox percakapan WhatsApp/Instagram/Threads atau kampanye), data berlabel contoh. Bukan gambar 3D.
- **Teks:** bahasa Indonesia, sapaan "kamu".
- **Aksesibilitas:** fokus terlihat, kontras AA, `prefers-reduced-motion` dihormati.

## Kriteria terima

- **AC-1:** Semua halaman memakai palet, font, dan tombol blueprint, termasuk header/footer terang dan satu pita navy. Tidak ada sisa teal/Montserrat/blob.
- **AC-2:** `three`, `ThreeLaptop.vue`, `BroadcastCodeEditor.vue`, Pinia, dan `logo-Defmfr5A.png` terhapus. `npm run build` lulus.
- **AC-3:** URL `/`, `/docs`, `/tentang`, `/contact`, `/privacy-policy`, `/terms`, `/data-deletion` tetap. `/data-deletion?code=ABC` tetap menampilkan kode konfirmasi.
- **AC-4:** Setiap halaman punya `title` dan `description` (`useSeoMeta`), plus OG dasar.
- **AC-5:** Tampilan rapi di 1440 dan 390 px, tanpa gulir horizontal.
- **AC-6:** Script `deploy:staging` = `npm run build && wrangler deploy --name rink-bolt-staging`. Script `deploy` production tidak berubah.

## Rancangan dan urutan eksekusi

| Fase | Hasil | Eksekutor | Bukti | Status |
| ---- | ----- | --------- | ----- | ------ |
| 1 | Fondasi (Tailwind tema Rink, Poppins, layout header/footer) + semua halaman + hapus kode mati; AC-1..AC-6 | `pelaksana` | `npm run build`, screenshot 1440/390 tiap halaman | Selesai dieksekusi, menunggu review |
| 2 | Deploy staging `rink-bolt-staging` | sesi utama | URL workers.dev terbuka | Belum |

## Handoff dan hasil

### Fase 1 (pelaksana, 2026-10-11)

**Hasil**

- Tema Tailwind memakai nama peran blueprint (`brand`, `brand-hover`, `brand-soft`, `brand-ink`, `navy`, `ink`, `ink-muted`, `ink-subtle`, `sunken`, `line`, `control`, `focus`, `success`, `danger`), skala tipografi `display-xl`..`overline`, radius, dan bayangan navy (`nuxt.config.ts`). Kelas tombol pill `.btn*`, fokus 2 px biru, dan `prefers-reduced-motion` ada di `app/app.vue`.
- Poppins 400/500/600/700 di-host sendiri di `public/fonts/` (disalin dari core).
- Header putih lengket 64/72 px, menu ponsel 44 px dengan `aria-expanded`, Esc menutup dan mengembalikan fokus; footer terang `surface-sunken`.
- Beranda: hero dengan mockup inbox multi-kanal HTML (`InboxMockup.vue`, label "Contoh tampilan") di atas satu panel oranye; strip Meta; fitur dengan satu blok sorotan broadcast (`CampaignPreview.vue`, label "Contoh data") dan daftar bergaris; tiga langkah; satu pita navy developer; ajakan akhir.
- Halaman dalam memakai `PageHero.vue`; tiga halaman legal memakai `LegalDoc.vue` (daftar isi lengket di desktop). Array teks hukum identik dengan HEAD (dicek dengan `diff`).
- `docs.vue`: kelas slate/brand lama dipetakan ke token; isi tidak berubah.
- `useSeoMeta` (title, description, ogTitle, ogDescription) di setiap halaman; `og:site_name`, `og:locale`, `og:type`, `lang="id"` global.
- Dihapus: `ThreeLaptop.vue`, `BroadcastCodeEditor.vue`, `logo-Defmfr5A.png`, `three`, `pinia`, `@pinia/nuxt` (lewat `npm uninstall`).
- Script `deploy:staging` ditambahkan; `deploy` tidak berubah. `.shots` masuk `.gitignore`.

**Bukti**

- `npm run build`: lulus ("Build complete").
- Screenshot 1440 dan 390 per halaman di `.shots/` (`<halaman>-<lebar>.png`, plus `menu-390.png`). Di semua halaman `scrollWidth == clientWidth`, satu `h1`, font Poppins, tanpa error konsol.
- `/data-deletion?code=ABC123` menampilkan blok `role="status"` dengan "Kode konfirmasi: ABC123".
- Menu ponsel: fokus pindah ke tautan pertama saat dibuka; Esc menutup dan mengembalikan fokus ke tombol menu.

**Revisi proporsi (permintaan orkestrator)**

- Tombol standar 44 px teks 15 px; hanya CTA hero 48 px teks 16 px. CTA akhir, CTA Tentang, dan tombol form kontak turun ke ukuran standar; ikon tombol 18 px.
- Seksi Fitur: grid `lg:items-start` supaya kartu Broadcast tidak meregang mengikuti daftar fitur; judul kartu `heading-3` di ponsel, `heading-2` mulai 640 px.
- Angka langkah turun ke `heading-1`; judul ajakan akhir memakai skala judul seksi (maks 40 px) dan muat satu baris di desktop.
- Ikon daftar fitur dan kontak 20 px (sebanding teks 16 px).
- Footer ponsel: Perusahaan dan Legal berdampingan dua kolom.
- Build ulang lulus; screenshot `.shots/` diperbarui, tanpa gulir horizontal di 1440/390.

**Penyimpangan dan catatan untuk reviewer**

- `public/logo.png` ternyata wordmark **Rinkweb**, bukan RinkBolt. Header dan footer kini memakai tanda R dari core (`public/brand/rinkbolt-mark.png`, salinan `apps/app/public/brand/rinkbolt-logo-inline.png`) + teks "RinkBolt", sama dengan kepala app. `public/logo.png` dibiarkan (tidak lagi dipakai).
- Teks hukum tetap memakai "Anda" karena di luar batas pekerjaan. Kotak bawah `/data-deletion` mencantumkan WA `+62 812-3456-7890`, berbeda dari nomor resmi `+62 895-3654-41554`; tidak diubah, perlu keputusan pemilik.
- Belum ada gambar OG (`og:image`); butuh aset dan domain publik yang pasti.
- Kode di pita developer dan blok kode `/docs` bergulir horizontal di dalam wadahnya di 390 px (halaman tidak).

