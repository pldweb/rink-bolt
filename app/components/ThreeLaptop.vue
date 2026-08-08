<template>
  <div ref="container" class="three-laptop" aria-label="Laptop dashboard RinkBolt yang sedang aktif">
    <canvas ref="canvas" />
    <div class="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-[#061923]/80 px-3 py-1.5 text-[10px] font-semibold tracking-wide text-slate-300 backdrop-blur">
      <span class="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> LIVE CAMPAIGN
    </div>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'

const container = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)
let disposeScene = () => {}

onMounted(() => {
  if (!container.value || !canvas.value) return
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
  camera.position.set(0, 1.05, 9.4)

  const renderer = new THREE.WebGLRenderer({ canvas: canvas.value, alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.outputColorSpace = THREE.SRGBColorSpace

  const laptop = new THREE.Group()
  laptop.rotation.set(-0.1, -0.44, 0.03)
  laptop.scale.setScalar(0.82)
  scene.add(laptop)
  const shell = new THREE.MeshStandardMaterial({ color: '#102b37', metalness: 0.65, roughness: 0.28 })
  const edge = new THREE.MeshStandardMaterial({ color: '#051720', metalness: 0.75, roughness: 0.2 })
  const orange = new THREE.MeshStandardMaterial({ color: '#e97e16', emissive: '#8c4308', emissiveIntensity: 0.5 })
  const base = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.16, 2.95), shell)
  base.position.set(0, -1.22, 0)
  laptop.add(base)
  const keyboard = new THREE.Mesh(new THREE.BoxGeometry(3.85, 0.035, 1.85), edge)
  keyboard.position.set(0, -1.12, -0.12)
  laptop.add(keyboard)
  const trackpad = new THREE.Mesh(new THREE.BoxGeometry(1.18, 0.04, 0.66), new THREE.MeshStandardMaterial({ color: '#244752', metalness: 0.45, roughness: 0.35 }))
  trackpad.position.set(0, -1.08, 0.93)
  laptop.add(trackpad)
  const keys: THREE.Mesh[] = []
  for (let row = 0; row < 5; row++) for (let col = 0; col < 12; col++) {
    const key = new THREE.Mesh(new THREE.BoxGeometry(0.23, 0.035, 0.21), new THREE.MeshStandardMaterial({ color: '#193944', roughness: 0.45 }))
    key.position.set(-1.64 + col * 0.3, -1.07, -0.86 + row * 0.31)
    laptop.add(key)
    keys.push(key)
  }
  const hinge = new THREE.Mesh(new THREE.BoxGeometry(4.35, 0.16, 0.14), edge)
  hinge.position.set(0, -1.04, -1.37)
  laptop.add(hinge)
  const display = new THREE.Group()
  display.position.set(0, 0.54, -1.34)
  display.rotation.x = -0.18
  laptop.add(display)
  const bezel = new THREE.Mesh(new THREE.BoxGeometry(4.65, 3.05, 0.14), edge)
  display.add(bezel)
  const screenCanvas = document.createElement('canvas')
  screenCanvas.width = 1024
  screenCanvas.height = 640
  const context = screenCanvas.getContext('2d')!
  const texture = new THREE.CanvasTexture(screenCanvas)
  texture.colorSpace = THREE.SRGBColorSpace
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(4.36, 2.76), new THREE.MeshBasicMaterial({ map: texture }))
  screen.position.z = 0.076
  display.add(screen)
  const codeCanvas = document.createElement('canvas')
  codeCanvas.width = 760
  codeCanvas.height = 470
  const codeContext = codeCanvas.getContext('2d')!
  const codeTexture = new THREE.CanvasTexture(codeCanvas)
  codeTexture.colorSpace = THREE.SRGBColorSpace
  const codeCard = new THREE.Group()
  codeCard.position.set(1.15, 2.18, 0.2)
  codeCard.rotation.set(-0.08, -0.32, 0.08)
  const codeScreen = new THREE.Mesh(new THREE.PlaneGeometry(3.1, 2.02), new THREE.MeshBasicMaterial({ map: codeTexture, transparent: true, depthWrite: false }))
  codeScreen.position.z = 0.01
  codeCard.add(codeScreen)
  scene.add(codeCard)
  const waCanvas = document.createElement('canvas')
  waCanvas.width = 256
  waCanvas.height = 256
  const waContext = waCanvas.getContext('2d')!
  waContext.fillStyle = '#25d366'; waContext.beginPath(); waContext.arc(128, 128, 120, 0, Math.PI * 2); waContext.fill()
  waContext.fillStyle = '#fff'; waContext.beginPath(); waContext.arc(128, 119, 72, 0, Math.PI * 2); waContext.fill()
  waContext.beginPath(); waContext.moveTo(80, 171); waContext.lineTo(71, 204); waContext.lineTo(105, 182); waContext.fill()
  waContext.strokeStyle = '#25d366'; waContext.lineWidth = 18; waContext.lineCap = 'round'
  waContext.beginPath(); waContext.moveTo(102, 84); waContext.quadraticCurveTo(86, 107, 108, 140); waContext.quadraticCurveTo(132, 171, 160, 155); waContext.stroke()
  waContext.lineWidth = 15; waContext.beginPath(); waContext.moveTo(98, 82); waContext.lineTo(115, 91); waContext.moveTo(158, 157); waContext.lineTo(170, 142); waContext.stroke()
  const waTexture = new THREE.CanvasTexture(waCanvas)
  waTexture.colorSpace = THREE.SRGBColorSpace
  const waBadge = new THREE.Group()
  waBadge.position.set(-2.15, 2.02, 0.5)
  waBadge.rotation.set(0.12, 0.25, -0.08)
  const waRing = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.018, 10, 48), new THREE.MeshBasicMaterial({ color: '#78f0a2', transparent: true, opacity: 0.75 }))
  waRing.rotation.x = Math.PI / 2
  waBadge.add(waRing)
  const waBody = new THREE.Mesh(new THREE.CylinderGeometry(0.56, 0.56, 0.15, 48), new THREE.MeshStandardMaterial({ color: '#159c4d', metalness: 0.35, roughness: 0.24 }))
  waBody.rotation.x = Math.PI / 2
  waBadge.add(waBody)
  const waFace = new THREE.Mesh(new THREE.CircleGeometry(0.51, 48), new THREE.MeshBasicMaterial({ map: waTexture, transparent: true }))
  waFace.position.z = 0.086
  waBadge.add(waFace)
  scene.add(waBadge)
  const led = new THREE.Mesh(new THREE.SphereGeometry(0.035, 16, 16), orange)
  led.position.set(2.07, -1.35, 0.12)
  display.add(led)
  const floor = new THREE.Mesh(new THREE.CircleGeometry(5, 64), new THREE.MeshBasicMaterial({ color: '#071d27', transparent: true, opacity: 0.25 }))
  floor.rotation.x = -Math.PI / 2
  floor.position.y = -1.38
  scene.add(floor)
  scene.add(new THREE.HemisphereLight('#e0f6f4', '#021019', 1.9))
  const keyLight = new THREE.DirectionalLight('#ffbd74', 3.2)
  keyLight.position.set(3, 5, 4)
  scene.add(keyLight)
  const fill = new THREE.PointLight('#2bb6aa', 18, 10)
  fill.position.set(-4, 1, 2)
  scene.add(fill)
  const screenGlow = new THREE.PointLight('#f49a38', 12, 7)
  screenGlow.position.set(0, 0.8, 1.8)
  scene.add(screenGlow)
  const waGlow = new THREE.PointLight('#25d366', 8, 4)
  waGlow.position.set(-2, 1.2, 1.4)
  scene.add(waGlow)
  const particles = new THREE.Group()
  const particleMaterial = new THREE.MeshBasicMaterial({ color: '#79e5d7', transparent: true, opacity: 0.75 })
  for (let i = 0; i < 18; i++) {
    const particle = new THREE.Mesh(new THREE.SphereGeometry(i % 3 === 0 ? 0.035 : 0.022, 10, 10), particleMaterial)
    const angle = i * 1.71
    particle.position.set(Math.cos(angle) * (2.8 + (i % 4) * 0.27), -0.15 + (i % 6) * 0.45, Math.sin(angle) * 0.65)
    particles.add(particle)
  }
  scene.add(particles)

  const messages = ['Halo Kak, promo bulan ini masih aktif?', 'Boleh minta katalog produk terbaru?', 'Terima kasih, saya lanjutkan pesanan.']
  const codeLines = ["import { RinkBolt } from '@rinkbolt/sdk'", '', 'const sent = await broadcast.send({', "  audience: 'pelanggan-aktif',", "  message: 'Promo spesial untukmu! ✨',", "  scheduleAt: '09:00',", '})']
  let activeMessage = 0
  let pointerX = 0
  let pointerY = 0
  let typingStart = performance.now()
  const onPointerMove = (event: PointerEvent) => {
    const bounds = container.value!.getBoundingClientRect()
    pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2
    pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
  }
  const onPointerLeave = () => { pointerX = 0; pointerY = 0 }
  const onClick = () => { activeMessage = (activeMessage + 1) % messages.length; typingStart = performance.now() }
  container.value.addEventListener('pointermove', onPointerMove)
  container.value.addEventListener('pointerleave', onPointerLeave)
  container.value.addEventListener('click', onClick)
  let start = performance.now()
  let lastFrame = start
  let frame = 0
  const drawDashboard = (now: number) => {
    const w = screenCanvas.width; const h = screenCanvas.height
    context.fillStyle = '#f4f8f7'; context.fillRect(0, 0, w, h)
    context.fillStyle = '#073447'; context.fillRect(0, 0, 170, h)
    context.fillStyle = '#fff'; context.font = '700 25px Arial'; context.fillText('RinkBolt', 28, 55)
    context.fillStyle = '#a9c0c5'; context.font = '16px Arial'
    ;['Dashboard', 'Campaigns', 'Contacts', 'Analytics'].forEach((item, i) => context.fillText(item, 28, 125 + i * 52))
    context.fillStyle = '#133742'; context.font = '700 30px Arial'; context.fillText('Campaign overview', 215, 58)
    context.fillStyle = '#677b80'; context.font = '17px Arial'; context.fillText('Today, 12 Aug 2026', 215, 88)
    ;[['Sent', '12,847'], ['Read', '9,526'], ['Reply', '1,842']].forEach((card, i) => { const x = 215 + i * 250; context.fillStyle = '#fff'; context.fillRect(x, 125, 220, 112); context.fillStyle = '#829498'; context.font = '15px Arial'; context.fillText(card[0], x + 18, 155); context.fillStyle = '#133742'; context.font = '700 31px Arial'; context.fillText(card[1], x + 18, 204) })
    context.fillStyle = '#fff'; context.fillRect(215, 270, 755, 280)
    context.fillStyle = '#133742'; context.font = '700 18px Arial'; context.fillText('Pesan baru', 240, 310)
    context.fillStyle = '#f2a04c'; context.beginPath(); context.arc(255, 365, 22, 0, Math.PI * 2); context.fill()
    context.fillStyle = '#133742'; context.font = '700 17px Arial'; context.fillText('Sinta Aprillia', 295, 355)
    const message = messages[activeMessage]
    const elapsed = now - typingStart
    const typed = message.slice(0, Math.min(message.length, Math.floor(elapsed / 48)))
    context.fillStyle = '#657b80'; context.font = '16px Arial'; context.fillText(typed + (Math.floor(now / 500) % 2 ? '|' : ''), 295, 385)
    if (elapsed > message.length * 48 + 900) typingStart = now
    context.fillStyle = '#eaf3f0'; context.fillRect(240, 435, 690, 60)
    context.fillStyle = '#84989b'; context.font = '15px Arial'; context.fillText('Ketik balasan...', 260, 472)
    texture.needsUpdate = true
  }
  const drawCode = (now: number) => {
    const w = codeCanvas.width; const h = codeCanvas.height
    codeContext.fillStyle = '#0b2a35'; codeContext.fillRect(0, 0, w, h)
    codeContext.fillStyle = '#103944'; codeContext.fillRect(0, 0, w, 66)
    ;['#ff796d', '#f2bd53', '#55d875'].forEach((color, i) => { codeContext.fillStyle = color; codeContext.beginPath(); codeContext.arc(30 + i * 20, 33, 6, 0, Math.PI * 2); codeContext.fill() })
    codeContext.fillStyle = '#d3e4e5'; codeContext.font = '600 17px Arial'; codeContext.fillText('send-broadcast.ts', 92, 40)
    const elapsed = now - typingStart
    let remaining = Math.min(codeLines.join('\n').length, Math.floor(elapsed / 26))
    codeContext.font = '17px monospace'
    codeLines.forEach((line, i) => {
      const visible = line.slice(0, Math.max(0, remaining)); remaining -= line.length + 1
      codeContext.fillStyle = '#86a5ad'; codeContext.fillText(String(i + 1), 22, 100 + i * 43)
      codeContext.fillStyle = i === 0 ? '#f0c5ff' : i === 3 || i === 4 ? '#8df5d9' : '#f2f8f8'
      codeContext.fillText(visible, 72, 100 + i * 43)
    })
    if (Math.floor(now / 450) % 2) { codeContext.fillStyle = '#f49a38'; codeContext.fillRect(72 + Math.min(codeLines[0].length, Math.floor(elapsed / 26)) * 10.2, 83, 3, 20) }
    codeContext.fillStyle = '#103944'; codeContext.fillRect(0, h - 45, w, 45)
    codeContext.fillStyle = '#79e5d7'; codeContext.font = '600 14px Arial'; codeContext.fillText('● API connected', 72, h - 18)
    if (elapsed > codeLines.join('\n').length * 26 + 1400) typingStart = now
    codeTexture.needsUpdate = true
  }
  const resize = () => { const { width, height } = container.value!.getBoundingClientRect(); renderer.setSize(width, height, false); camera.aspect = width / height; camera.updateProjectionMatrix() }
  const observer = new ResizeObserver(resize); observer.observe(container.value); resize()
  const animate = (now: number) => {
    frame = requestAnimationFrame(animate)
    const delta = Math.min(0.05, (now - lastFrame) / 1000)
    lastFrame = now
    laptop.rotation.y = THREE.MathUtils.damp(laptop.rotation.y, -0.44 + Math.sin(now / 2500) * 0.045 + pointerX * 0.18, 4.8, delta)
    laptop.rotation.x = THREE.MathUtils.damp(laptop.rotation.x, -0.1 - pointerY * 0.09, 4.8, delta)
    laptop.position.y = Math.sin(now / 1700) * 0.07
    codeCard.position.x = 1.15 + pointerX * 0.12
    codeCard.position.y = 2.18 + Math.sin(now / 1050) * 0.14 - pointerY * 0.07
    codeCard.rotation.z = 0.08 + Math.sin(now / 1700) * 0.025
    codeCard.rotation.y = -0.32 + Math.sin(now / 2100) * 0.06
    waBadge.position.y = 2.02 + Math.sin(now / 900) * 0.14
    waBadge.position.x = -2.15 + pointerX * 0.09
    waBadge.rotation.y = 0.25 + now / 7200
    waBadge.rotation.z = -0.08 + Math.sin(now / 1300) * 0.12
    waRing.rotation.z = now / 1600
    particles.rotation.y = now / 9000
    particles.position.y = Math.sin(now / 1800) * 0.12
    screenGlow.intensity = 10 + Math.sin(now / 500) * 2.5
    camera.position.z = THREE.MathUtils.damp(camera.position.z, 9.4 - Math.abs(pointerX) * 0.15, 4.6, delta)
    keys.forEach((key, index) => { const pressed = index === Math.floor(now / 105) % keys.length; key.position.y = THREE.MathUtils.damp(key.position.y, pressed ? -1.125 : -1.07, 18, delta) })
    led.material = Math.floor(now / 700) % 2 ? orange : edge
    drawDashboard(now); drawCode(now); renderer.render(scene, camera)
  }
  animate(start)
  disposeScene = () => {
    cancelAnimationFrame(frame); observer.disconnect(); texture.dispose(); codeTexture.dispose(); waTexture.dispose(); renderer.dispose()
    container.value?.removeEventListener('pointermove', onPointerMove)
    container.value?.removeEventListener('pointerleave', onPointerLeave)
    container.value?.removeEventListener('click', onClick)
  }
})

onUnmounted(() => disposeScene())
</script>

<style scoped>
.three-laptop { position: relative; height: min(520px, 62vw); min-height: 370px; width: 100%; cursor: pointer; overflow: visible; will-change: transform; }
.three-laptop canvas { display: block; height: 100%; width: 100%; }
</style>
