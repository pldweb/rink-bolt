<template>
  <div class="overflow-hidden rounded-xl border border-white/15 bg-[#041923] shadow-2xl shadow-black/25">
    <div class="flex items-center justify-between border-b border-white/10 bg-white/[.035] px-3 py-2.5">
      <div class="flex items-center gap-1.5"><span class="h-2 w-2 rounded-full bg-[#ff6659]" /><span class="h-2 w-2 rounded-full bg-[#f7bd4f]" /><span class="h-2 w-2 rounded-full bg-[#42c968]" /><span class="ml-2 text-[10px] font-semibold text-slate-400">send-broadcast.ts</span></div>
      <div class="flex gap-1"><button v-for="item in snippets" :key="item.label" class="rounded px-2 py-1 text-[9px] font-bold transition" :class="active === item.label ? 'bg-brand-500 text-white' : 'text-slate-500 hover:text-slate-200'" @click="selectSnippet(item.label)">{{ item.label }}</button></div>
    </div>
    <div class="grid grid-cols-[26px_1fr] p-3 font-mono text-[10px] leading-5 sm:text-[11px]">
      <div class="select-none text-right text-slate-600">1<br>2<br>3<br>4<br>5<br>6<br>7</div>
      <pre class="ml-3 overflow-hidden whitespace-pre-wrap text-slate-300"><code><span v-for="(line, index) in visibleLines" :key="index" :class="line.class">{{ line.text }}
</span><span class="inline-block h-3 w-1.5 animate-pulse bg-brand-400 align-middle" /></code></pre>
    </div>
    <div class="flex items-center gap-2 border-t border-white/10 px-3 py-2 text-[9px] text-slate-500"><span class="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> API connected <span class="ml-auto text-emerald-400">200 OK</span></div>
  </div>
</template>

<script setup lang="ts">
type Snippet = { label: string; lines: { text: string; class: string }[] }
const snippets: Snippet[] = [
  { label: 'TS', lines: [
    { text: "import { RinkBolt } from '@rinkbolt/sdk'", class: 'text-purple-300' },
    { text: '', class: '' },
    { text: 'const campaign = await rinkbolt.broadcasts.send({', class: 'text-sky-300' },
    { text: "  audience: 'pelanggan-aktif',", class: 'text-slate-300' },
    { text: "  message: 'Promo spesial untukmu! ✨',", class: 'text-emerald-300' },
    { text: "  scheduleAt: '2026-08-12T09:00:00Z',", class: 'text-slate-300' },
    { text: '})', class: 'text-sky-300' },
  ] },
  { label: 'cURL', lines: [
    { text: 'curl -X POST https://api.rinkbolt.id/v1/broadcasts \\', class: 'text-sky-300' },
    { text: '  -H "Authorization: Bearer $RINKBOLT_KEY" \\', class: 'text-purple-300' },
    { text: "  -d '{", class: 'text-slate-300' },
    { text: "    \"audience\": \"pelanggan-aktif\",", class: 'text-emerald-300' },
    { text: "    \"message\": \"Promo spesial untukmu! ✨\"", class: 'text-emerald-300' },
    { text: "  }'", class: 'text-slate-300' },
  ] },
]
const active = ref('TS')
const characters = ref(0)
const selected = computed(() => snippets.find((item) => item.label === active.value)!)
const joined = computed(() => selected.value.lines.map((line) => line.text).join('\n'))
const visibleLines = computed(() => {
  let remaining = characters.value
  return selected.value.lines.map((line) => {
    const text = line.text.slice(0, Math.max(0, remaining))
    remaining -= line.text.length + 1
    return { ...line, text }
  })
})
const selectSnippet = (label: string) => { active.value = label; characters.value = 0 }
let timer: ReturnType<typeof setInterval>
onMounted(() => { timer = setInterval(() => { characters.value = characters.value >= joined.value.length ? 0 : characters.value + 2 }, 38) })
onUnmounted(() => clearInterval(timer))
</script>
