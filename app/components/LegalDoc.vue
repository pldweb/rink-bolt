<!-- Tata letak dokumen legal: daftar isi lengket di desktop, kolom baca 720 px. Isi hukum datang dari halaman. -->
<template>
  <section class="section">
    <div class="container-page grid gap-10 lg:grid-cols-[15rem_minmax(0,45rem)] lg:gap-16">
      <nav class="hidden lg:block" aria-label="Daftar isi">
        <div class="sticky top-24">
          <p class="text-overline uppercase text-ink-subtle">Daftar isi</p>
          <ol class="mt-4 space-y-1 border-l border-line">
            <li v-for="(sec, i) in sections" :key="i">
              <a :href="`#bagian-${i + 1}`" class="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-body-sm text-ink-muted hover:border-brand hover:text-ink">{{ i + 1 }}. {{ sec.title }}</a>
            </li>
          </ol>
        </div>
      </nav>

      <div class="min-w-0">
        <slot name="before" />
        <article class="space-y-12">
          <section v-for="(sec, i) in sections" :id="`bagian-${i + 1}`" :key="i" class="scroll-mt-24">
            <h2 class="flex gap-3 text-heading-2 text-ink"><span class="tabular-nums text-brand-hover">{{ i + 1 }}.</span>{{ sec.title }}</h2>
            <!-- eslint-disable-next-line vue/no-v-html -- isi statis milik halaman, bukan input pengguna -->
            <div class="legal-body mt-4 space-y-2 text-body text-ink-muted" v-html="sec.content" />
          </section>
        </article>
        <div class="mt-16 rounded-xl bg-brand-soft p-6 text-body-sm text-ink">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ sections: { title: string; content: string }[] }>()
</script>

<style scoped>
.legal-body :deep(strong) { @apply font-semibold text-ink; }
.legal-body :deep(a) { @apply font-semibold text-brand-ink underline underline-offset-2; }
.legal-body :deep(ol) { @apply list-decimal space-y-1 pl-5; }
.legal-body :deep(ul) { @apply list-disc space-y-1 pl-5; }
.legal-body { line-height: 1.75rem; }
</style>
