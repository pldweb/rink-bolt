// Favicon mengikuti branding di Pengaturan RinkBolt (/admin/theme), sama seperti app.
// Bila API/CDN gagal, jatuh ke tanda R bawaan.
const FALLBACK = '/brand/rinkbolt-mark.png'

export default defineEventHandler(async (event) => {
  const { brandingApi } = useRuntimeConfig(event)
  try {
    const res = await $fetch<{ result: { data: { branding?: { faviconUrl?: string } } } }>(
      `${brandingApi}/api/trpc/designPreset.getActive`,
      { timeout: 3000 },
    )
    const url = res.result.data.branding?.faviconUrl
    if (!url?.startsWith('https://')) throw new Error('faviconUrl kosong/bukan https')
    const img = await fetch(url, { signal: AbortSignal.timeout(3000) })
    const type = img.headers.get('content-type') ?? ''
    if (!img.ok || !type.startsWith('image/')) throw new Error(`favicon ${img.status} ${type}`)
    setHeaders(event, {
      'Content-Type': type,
      // ponytail: perubahan di pengaturan tampil maksimal 1 jam kemudian (cache browser/edge).
      'Cache-Control': 'public, max-age=3600',
    })
    return new Uint8Array(await img.arrayBuffer())
  } catch (err) {
    console.warn('[favicon] pakai fallback:', err)
    return sendRedirect(event, FALLBACK, 302)
  }
})
