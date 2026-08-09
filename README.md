# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deploy ke Cloudflare Workers

Project ini adalah Nuxt SPA statis. Saat build, seluruh file siap-unggah dibuat
di `.output/public` dan disajikan oleh Cloudflare Worker melalui static assets.

### Prasyarat

- Akun Cloudflare.
- Node.js versi 22 atau lebih baru.
- Dependensi project sudah terpasang: `npm install`.

### Deploy pertama kali

1. Login ke Cloudflare. Perintah ini akan membuka browser untuk otorisasi.

   ```bash
   npx wrangler login
   ```

2. Pastikan akun yang digunakan sudah benar.

   ```bash
   npx wrangler whoami
   ```

3. Build aplikasi dan deploy Worker.

   ```bash
   npm run deploy:cloudflare
   ```

Perintah tersebut membuat atau memperbarui Worker bernama `rink-bolt`. Setelah
selesai, Wrangler akan menampilkan URL `*.workers.dev` untuk membuka website.

### Deploy pembaruan

Setelah ada perubahan kode, cukup jalankan kembali:

```bash
npm run deploy:cloudflare
```

Skrip ini selalu menjalankan build terbaru sebelum mengunggah asset.

### Mengganti nama Worker

Ubah `rink-bolt` pada script `deploy:cloudflare` di `package.json`, lalu deploy
kembali. Nama Worker harus unik dalam akun Cloudflare Anda.

### Custom domain

Setelah Worker terdeploy, buka **Cloudflare Dashboard → Workers & Pages →
rink-bolt → Settings → Domains & Routes**, lalu tambahkan domain atau route yang
diinginkan. Domain harus sudah berada di akun Cloudflare yang sama.

### Catatan keamanan

Jangan commit token API Cloudflare. Untuk CI/CD, simpan `CLOUDFLARE_API_TOKEN`
dan `CLOUDFLARE_ACCOUNT_ID` sebagai secret di layanan CI, kemudian jalankan
`npm run deploy:cloudflare` dari pipeline.
