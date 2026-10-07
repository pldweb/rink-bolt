# PRD: Dokumentasi Integrasi API dan Webhook RinkBolt

**Status:** Implementasi dan perluasan menu selesai — build produksi berhasil (28 September 2026); review visual browser belum dilakukan.  
**Pemilik produk:** RinkBolt  
**Permukaan produk:** halaman publik `/docs` di repository `rink-bolt`  
**Sumber kontrak:** implementasi API dan webhook di repository WABASE (`core`)

## Ringkasan

### Perluasan menu berdasarkan referensi KiosAPI

Referensi hierarki: https://docs.kiosapi.com/introduction. Mengadopsi pengelompokan panduan awal, tools, referensi API, dan troubleshooting; bukan menyalin fitur AI atau SDK yang tidak tersedia di RinkBolt.

- Mulai di sini: pengenalan, quickstart/workspace, API key/autentikasi, base URL/konektivitas.
- Tools & integrasi: API Playground, cURL, Node.js dengan fetch server-side (bukan SDK resmi).
- Kirim pesan: teks, gambar, file/dokumen, audio, video; masing-masing memiliki contoh payload.
- Referensi resource: endpoint/scope, channel, kontak, percakapan, campaign, template. Contoh baca tidak menjalankan campaign atau mengirim pesan.
- Troubleshooting API: kode error dan penanganannya.
- Webhook: overview, setup, signature, event/payload, retry.
- Konsep: keamanan dan bantuan.

Navigasi tetap memakai anchor `/docs#...` agar tautan sebelumnya tetap berfungsi. Sidebar desktop dapat digulir, kategori dapat dibuka/tutup, pencarian mencocokkan nama kategori dan topik, Ctrl/Cmd+K memfokuskan pencarian, dan daftar isi kanan mengikuti kategori aktif. Menu mobile tetap tersedia. Panduan media merujuk `core/apps/api/lib/messaging/schemas.ts`; resource merujuk router REST aktual.

Verifikasi: `npm run build` berhasil menggunakan Node 24.17.0. Pemeriksaan Impeccable melaporkan dua peringatan warna pada satu baris badge POST lama; keduanya false positive karena teks abu-abu berada di elemen saudara dengan latar putih, bukan di badge hijau. Tidak ada request kirim pesan nyata, commit, push, atau deploy pada perluasan ini.

Pengguna dan developer perlu memahami cara menghubungkan sistem mereka dengan RinkBolt. Dokumentasi publik harus memandu dua alur utama yang berbeda: memanggil REST API RinkBolt dari backend pengguna, dan menerima event dari RinkBolt melalui webhook ke server pengguna. Materi juga harus menegaskan bahwa webhook Meta milik koneksi WhatsApp adalah alur platform yang berbeda, bukan URL webhook tujuan pengguna.

## Masalah

Halaman `/docs` sudah menampilkan panduan webhook dan API, tetapi informasinya tersebar dalam satu halaman panjang dan mencampur beberapa arah integrasi. Ada pula beberapa keluarga endpoint REST dan permission yang harus dibedakan dengan benar. Akibatnya developer berisiko memakai endpoint, scope, atau URL yang salah, atau menaruh kredensial rahasia di browser.

Dokumentasi yang diterbitkan harus dicocokkan dengan implementasi aktual WABASE, bukan hanya menyalin contoh yang sudah ada di halaman marketing atau dokumen lama.

## Tujuan dan indikator keberhasilan

- Developer baru dapat memilih alur yang tepat: mengirim request ke API, menerima event lewat webhook, atau keduanya.
- Developer dapat menyiapkan integrasi percobaan tanpa menebak base URL, endpoint, permission, format payload, atau langkah di dashboard.
- Tidak ada secret API key atau signing secret yang dianjurkan untuk ditempatkan di frontend/browser.
- Semua contoh request, scope, ID, header, dan payload sesuai dengan implementasi WABASE yang dirilis.
- Panduan bisa dicari, dipindai, dan digunakan dari layar desktop maupun mobile.

## Bukan tujuan

- Membuat fitur API key atau webhook baru di aplikasi WABASE.
- Menyediakan SDK resmi atau generator kode.
- Mengubah kontrak API, format payload, sistem retry, maupun mekanisme autentikasi.
- Menggantikan dokumentasi onboarding pengguna RinkBolt yang tidak berhubungan dengan integrasi developer.

## Yang sudah tersedia

| Area | Kondisi saat ini | Implikasi untuk PRD |
| --- | --- | --- |
| Halaman dokumentasi | RinkBolt memiliki halaman publik `/docs` berisi pengenalan produk, navigasi pencarian, materi webhook, dan contoh REST API. | Perlu ditata sebagai panduan integrasi yang berorientasi tugas, bukan membuat pusat dokumentasi terpisah tanpa kebutuhan. |
| REST API | WABASE menyediakan API publik di `/api/v1`, termasuk pesan, channel, kontak, conversation, campaign, template, dan object. Ada juga route WhatsApp khusus di bawah `/api/v1/whatsapp`. | Audit dan dokumentasikan keluarga endpoint yang didukung; tandai endpoint, scope, dan payload masing-masing dengan jelas. |
| Autentikasi API | API key dikirim melalui `Authorization: Bearer …` atau `X-API-Key`; akses dibatasi oleh scope. Key dikelola melalui aplikasi. | Panduan harus menyebut lokasi pembuatan key, prinsip least privilege, penyimpanan server-side, pencabutan, dan troubleshooting 401/403. |
| Webhook tujuan pengguna | Organisasi dapat mendaftarkan endpoint HTTPS, memilih event, mengirim test, melihat delivery, dan mencoba ulang delivery dari pengaturan webhook. Secret penandatanganan dibuat untuk endpoint. | Panduan perlu memandu konfigurasi dashboard sampai verifikasi signature dan penanganan delivery ganda. |
| Pengiriman webhook | WABASE mengirim event bertanda tangan HMAC-SHA256 dengan timestamp; delivery memakai retry dan circuit breaker. Endpoint harus aman dan cepat merespons. | Jelaskan header, raw body, idempotency, respons yang diharapkan, serta lokasi riwayat delivery tanpa menjanjikan jaminan di luar implementasi. |
| Webhook Meta | WABASE juga menerima webhook dari Meta untuk memproses event WhatsApp. | Harus dibedakan secara visual dan konseptual dari webhook outbound yang URL-nya dimiliki developer/customer. |

## Pengguna dan skenario

1. **Developer backend** ingin mengirim pesan atau membaca resource RinkBolt dari aplikasi server miliknya.
2. **Developer backend/bot** ingin menerima pesan masuk atau event lain dari RinkBolt agar dapat diproses di sistem sendiri.
3. **Admin workspace** ingin menyiapkan credential, endpoint, event, dan menguji koneksi sebelum developer mulai coding.

## Kebutuhan produk

### 1. Memilih pola integrasi

- Halaman menjelaskan alur data dengan diagram sederhana:
  - API: backend pengguna → REST API RinkBolt.
  - Webhook: RinkBolt → endpoint HTTPS milik pengguna.
  - Integrasi dua arah: webhook menerima event, API mengirim balasan.
- Beri peringatan bahwa webhook Meta → RinkBolt adalah konfigurasi platform dan tidak sama dengan webhook RinkBolt → endpoint pengguna.
- Sediakan tautan langsung dari ringkasan ke panduan API dan webhook.

### 2. Panduan REST API

- Tampilkan base URL production dan endpoint health check.
- Pandu admin membuat API key dari pengaturan aplikasi; gunakan scope minimum yang dibutuhkan.
- Jelaskan autentikasi header, format channel ID yang valid berdasarkan data aktual workspace, dan aturan nomor tujuan.
- Sediakan setidaknya satu contoh `curl` lengkap untuk mengirim pesan teks, beserta contoh respons dan kesalahan umum.
- Jelaskan media melalui URL publik bila endpoint yang dipilih memerlukannya.
- Daftarkan endpoint yang memang didukung dan tandai permission/scope per kelompok endpoint.
- Tegaskan API key hanya digunakan server-to-server dan tidak boleh dimasukkan ke browser, repositori, URL, atau log.
- Jika tersedia lebih dari satu keluarga endpoint untuk operasi serupa, nyatakan mana yang direkomendasikan untuk integrasi baru dan jelaskan perbedaannya secara ringkas.

### 3. Panduan webhook outbound

- Pandu pengguna menyiapkan URL HTTPS publik tanpa redirect, mendaftarkan endpoint di pengaturan workspace, memilih event, menyimpan signing secret, dan mengirim test.
- Jelaskan bentuk payload envelope, header event/delivery/signature/timestamp, serta cara memilih event yang relevan.
- Berikan contoh verifikasi signature yang aman untuk minimal satu runtime backend yang disepakati, menggunakan timestamp dan raw request body.
- Jelaskan bahwa penerima perlu memverifikasi signature, menolak timestamp kedaluwarsa, menyimpan ID event untuk idempotency, dan segera mengembalikan respons sukses setelah event tersimpan.
- Tunjukkan cara memeriksa riwayat delivery, membaca kegagalan, dan menggunakan retry manual yang tersedia di aplikasi.
- Jangan mengklaim semua event memiliki payload identik; tautkan atau tampilkan contoh berdasarkan jenis event yang benar-benar tersedia.

### 4. Troubleshooting dan keamanan

- Sertakan pemetaan singkat 401, 403, validasi 4xx, timeout, respons non-2xx, dan kegagalan signature ke tindakan yang perlu dilakukan.
- Bedakan signing secret webhook dari API key.
- Hindari menampilkan credential nyata pada contoh.
- Berikan checklist go-live: HTTPS valid, secret tersimpan di server, signature terverifikasi, event diproses idempotent, dan test delivery berhasil.

## Batasan dan keputusan konten

- Referensi struktur: pola dokumentasi Kirimdev berupa header dokumentasi, pencarian cepat, sidebar kategori bertingkat, isi utama, dan daftar isi kontekstual. Yang diadaptasi adalah cara navigasi dan pemecahan materi; branding, isi, serta klaim fitur tetap milik RinkBolt.
- Halaman yang ada memakai satu halaman Nuxt statis (`app/pages/docs.vue`), bukan situs dokumentasi/API reference terpisah. Versi awal mempertahankan route `/docs` dan memakai navigasi bagian/anchor di dalam halaman, sehingga tidak perlu membuat banyak route dokumentasi sebelum kontennya berkembang.
- Sebelum menulis ulang contoh, audit kontrak di `core/apps/api/lib/rest`, `core/apps/api/lib/whatsapp-routes`, `core/apps/api/routers/webhook.ts`, dan `core/apps/api/openapi.json`. Dokumen `core/docs/integrations/public-api.md` juga perlu dibandingkan dengan kode, karena dokumentasi dan implementasi dapat berubah terpisah.
- Tidak mengubah file backend `core` sebagai bagian dari PRD ini. Bila audit menemukan kontrak tidak konsisten, laporkan sebagai blocker/pekerjaan terpisah; jangan menyamarkan perbedaan dengan contoh buatan.
- Perubahan implementasi nantinya harus menjaga perubahan lokal yang sudah ada di `app/pages/docs.vue` dan file lain pada working tree RinkBolt.

## API Playground di aplikasi RinkBolt

- Playground ditempatkan pada aplikasi WABASE yang sudah login, di `Settings → API Playground`, bukan pada halaman dokumentasi publik.
- Versi awal hanya mengirim `POST /api/v1/messages` untuk teks, gambar, audio, dan dokumen. Pembatasan ini mencegah key digunakan untuk request URL atau method arbitrer dari browser.
- Pengguna memasukkan API key sendiri; key hanya berada di state halaman dan tidak disimpan ke database, local storage, URL, log, maupun riwayat request.
- Form membentuk request dari channel ID, nomor penerima, jenis konten, URL media, caption, dan nama file bila diperlukan; halaman menampilkan request yang akan dikirim serta respons/status yang diterima.
- Playground hanya boleh dipakai saat konfigurasi CORS mengizinkan origin aplikasi RinkBolt ke API. Jika request gagal, halaman menampilkan respons jaringan/API tanpa membocorkan key.
- Playground bukan pengganti dokumentasi API lengkap atau tool REST arbitrer seperti Postman.

## Rancangan tampilan dan menu

### Kerangka halaman

```text
┌──────────────────────────────────────────────────────────────────────────┐
│ RinkBolt Docs       Dokumentasi       API (anchor)       [Cari… Ctrl K]  │
├────────────────┬─────────────────────────────────────┬─────────────────┤
│ Menu bertingkat│ Panduan yang dipilih                │ Di halaman ini  │
│                │                                     │                 │
│ Mulai          │ Judul, ringkasan, langkah, contoh    │ Anchor heading  │
│ API            │ request/respons, catatan keamanan   │ yang aktif      │
│ Webhook        │                                     │                 │
│ Konsep         │ Sebelumnya / Selanjutnya            │                 │
└────────────────┴─────────────────────────────────────┴─────────────────┘
```

- **Header:** logo/tautan RinkBolt, label Dokumentasi, pencarian cepat, dan tautan “Buka aplikasi”. Tidak menambahkan tab API Reference terpisah sebelum ada referensi OpenAPI interaktif yang benar-benar disediakan.
- **Sidebar kiri:** kategori dapat dibuka/tutup; item aktif terlihat jelas; di desktop tetap tersedia saat membaca. Menu menjadi drawer/tombol pada layar kecil.
- **Konten tengah:** satu topik fokus per bagian dengan ringkasan singkat, prasyarat, langkah, tab/snippet kode bila berguna, catatan keamanan, dan tautan lanjut. Hindari menaruh seluruh contoh endpoint dalam satu blok halaman panjang.
- **Daftar isi kanan:** heading dari topik yang sedang dibaca, mengikuti posisi scroll; disembunyikan atau dipindahkan ke kontrol ringkas pada layar kecil.
- **Pencarian:** mencari judul dan ringkasan topik; pintasan `Ctrl+K`/`⌘K` opsional jika mudah ditambahkan tanpa library baru. Pencarian harus tetap dapat digunakan tanpa keyboard shortcut.

### Struktur menu awal

| Grup | Item | Isi utama |
| --- | --- | --- |
| Mulai | Overview | Pilih API, webhook, atau kombinasi; diagram arah data dan tautan ke quickstart. |
| Mulai | Quickstart | Prasyarat workspace, channel, credential, dan langkah integrasi pertama. |
| API | Autentikasi | Base URL, API key, scope, header, penyimpanan secret, dan health check. |
| API | Kirim pesan | Request teks, respons, parameter, serta media bila sesuai route terverifikasi. |
| API | Endpoint lain | Ringkasan resource/API yang sudah diverifikasi; dikelompokkan agar daftar tetap ringkas. |
| API | Error dan troubleshooting | 401/403, validasi, channel tidak ditemukan, dan kegagalan request. |
| Webhook | Overview | Arah data RinkBolt → server pengguna dan kapan memakai webhook. |
| Webhook | Setup endpoint | URL HTTPS, pilih event, signing secret, test event, dan lokasi delivery log. |
| Webhook | Verifikasi signature | Header, raw body, timestamp, contoh implementasi backend, dan idempotency. |
| Webhook | Event dan payload | Daftar event/payload yang benar-benar didukung dan contoh payload. |
| Webhook | Retry dan kegagalan | Respons yang diharapkan, retry otomatis/manual, circuit breaker, serta tindakan pemulihan. |
| Konsep | Keamanan integrasi | API key vs signing secret, server-side only, rotasi/pencabutan, checklist go-live. |

Daftar menu final mengikuti hasil audit kontrak. Item untuk SDK, MCP, recipes, changelog, pagination, idempotency-key API, atau fitur lain dari situs referensi tidak ditambahkan kecuali kemampuan tersebut memang dimiliki dan didukung RinkBolt.

### Perilaku navigasi

- Klik item sidebar membuka bagian terkait, memperbarui item aktif, dan mempertahankan URL yang dapat dibagikan.
- Daftar isi kanan melompat ke heading di topik aktif.
- Pencarian menampilkan hasil beserta kategori; memilih hasil membuka topik yang cocok.
- Semua navigasi dapat digunakan dengan keyboard dan memiliki state fokus yang terlihat.
- Pada mobile, isi menjadi satu kolom; sidebar dibuka dari tombol “Menu dokumentasi”, sedangkan daftar isi tersedia sebagai dropdown “Di halaman ini”.

## Fase implementasi yang diusulkan

| Fase | Ukuran | Cakupan | Selesai jika |
| --- | --- | --- | --- |
| 1. Verifikasi kontrak integrasi | S | Cocokkan setiap route, scope, header, ID, payload, respons, dan mekanisme retry di halaman publik dengan source WABASE dan OpenAPI. Catat endpoint yang direkomendasikan. | Tidak ada contoh API/webhook yang dipublikasikan tanpa bukti dari implementasi; konflik dokumentasi lama sudah diidentifikasi. |
| 2. Susun ulang panduan developer | M | Terapkan kerangka tiga kolom responsif, menu bertingkat, pencarian, daftar isi kontekstual, dan konten overview/API/webhook/keamanan sesuai rancangan tampilan di atas. | Pengguna dapat menemukan topik dari menu atau pencarian, berpindah antarbagian, dan menuntaskan skenario API/webhook tanpa menebak langkah atau menukar credential. |
| 3. API Playground terautentikasi | M | Tambahkan halaman Settings → API Playground pada aplikasi WABASE untuk mengirim pesan teks/media melalui kontrak API publik yang aman. | API key tidak dipersistenkan, pengguna bisa mengirim empat jenis konten, request dibatasi ke endpoint terpadu, dan status/respons tampil tanpa key. |
| 4. Verifikasi dan handoff | S | Periksa contoh dan anchor/link, jalankan build/generate RinkBolt, lalu review konten terhadap implementasi WABASE. | Build sukses, navigasi berfungsi, tidak ada secret nyata, dan semua sampel tetap cocok dengan kontrak yang diverifikasi. |

Satu fase diusulkan menjadi satu PR. Implementasi dimulai setelah PRD ini disetujui dan dikerjakan di branch fitur; commit, push, dan deploy akan dimintakan persetujuan terpisah.

## Pengujian dan verifikasi

- Build/prerender halaman publik RinkBolt dan pastikan `/docs` tetap dihasilkan.
- Periksa setiap tautan navigasi dan anchor, termasuk hasil filter pencarian.
- Periksa item aktif, buka/tutup grup menu, daftar isi, deep link, navigasi keyboard, dan perilaku menu satu kolom di mobile.
- Verifikasi request dan respons contoh terhadap schema/route WABASE yang aktual; jangan mengirim pesan sungguhan ke nomor pelanggan sebagai bagian dari build test.
- Tinjau layout desktop/mobile dan keterbacaan blok kode.
- Review keamanan konten: tidak ada API key/signing secret nyata dan larangan penggunaan credential di browser terlihat jelas.

## Deliverables

- Halaman dokumentasi publik `/docs` yang menjelaskan alur API, webhook outbound, dan integrasi dua arah.
- Contoh request, contoh validasi signature, daftar event/endpoint yang terverifikasi, troubleshooting, dan checklist go-live.
- Catatan verifikasi kontrak yang menunjukkan sumber implementasi untuk contoh yang dipublikasikan.

## Referensi implementasi

- WABASE REST API: `core/apps/api/lib/rest/index.ts`, `core/apps/api/lib/messaging/send-route.ts`, `core/apps/api/lib/whatsapp-routes/`
- Autentikasi dan scope: `core/apps/api/lib/api-key-auth.ts`, `core/apps/app/routes/(app)/settings/api-keys.tsx`
- Konfigurasi dan delivery webhook: `core/apps/api/routers/webhook.ts`, `core/apps/api/workers/outbound-webhook.ts`, `core/apps/api/lib/webhook-types.ts`
- Dokumentasi integrasi yang sudah ada: `core/docs/integrations/public-api.md`
- UI target: `rink-bolt/app/pages/docs.vue`
