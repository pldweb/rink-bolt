<template>
  <div>
    <PageHero eyebrow="Kontak" title="Hubungi kami" lead="Tanya apa pun soal RinkBolt. Pesanmu langsung kami terima lewat WhatsApp." />

    <section class="section">
      <div class="container-page grid gap-12 lg:grid-cols-12">
        <dl class="lg:col-span-5">
          <div v-for="item in contactInfo" :key="item.label" class="flex gap-4 border-b border-line py-5 first:pt-0">
            <component :is="item.icon" class="mt-0.5 h-5 w-5 shrink-0 text-brand-ink" aria-hidden="true" />
            <div class="min-w-0">
              <dt class="text-label text-ink">{{ item.label }}</dt>
              <dd class="mt-1 text-body text-ink-muted">
                <a v-if="item.href" :href="item.href" class="break-all font-semibold text-ink hover:text-brand-ink hover:underline">{{ item.value }}</a>
                <template v-else>{{ item.value }}</template>
              </dd>
              <dd v-if="item.sub" class="mt-0.5 text-body-sm text-ink-subtle">{{ item.sub }}</dd>
            </div>
          </div>
        </dl>

        <div class="lg:col-span-7">
          <div class="rounded-xl border border-line bg-white p-6 shadow-sm sm:p-8">
            <h2 class="text-heading-2 text-ink">Kirim pesan</h2>
            <p class="mt-2 text-body-sm text-ink-muted">Formulir ini membuka WhatsApp dengan pesan yang sudah terisi.</p>
            <form class="mt-6 space-y-4" @submit.prevent="submitForm">
              <div class="grid gap-4 sm:grid-cols-2">
                <div>
                  <label for="c-name" class="block text-label text-ink">Nama lengkap <span class="text-danger" aria-hidden="true">*</span></label>
                  <input id="c-name" v-model="form.name" type="text" required autocomplete="name" class="field mt-2" placeholder="Nama kamu" />
                </div>
                <div>
                  <label for="c-email" class="block text-label text-ink">Email <span class="text-danger" aria-hidden="true">*</span></label>
                  <input id="c-email" v-model="form.email" type="email" required autocomplete="email" class="field mt-2" placeholder="email@kamu.com" />
                </div>
              </div>
              <div>
                <label for="c-subject" class="block text-label text-ink">Subjek <span class="text-danger" aria-hidden="true">*</span></label>
                <input id="c-subject" v-model="form.subject" type="text" required class="field mt-2" placeholder="Mau tanya soal apa?" />
              </div>
              <div>
                <label for="c-message" class="block text-label text-ink">Pesan <span class="text-danger" aria-hidden="true">*</span></label>
                <textarea id="c-message" v-model="form.message" rows="5" required class="field mt-2 h-auto min-h-[6rem] resize-y py-3" placeholder="Tulis pesanmu…" />
              </div>
              <button type="submit" :disabled="submitted" class="btn btn-primary w-full disabled:bg-success disabled:active:scale-100">
                <CircleCheck v-if="submitted" class="h-[18px] w-[18px]" aria-hidden="true" />
                <Send v-else class="h-[18px] w-[18px]" aria-hidden="true" />
                {{ submitted ? 'WhatsApp dibuka' : 'Kirim via WhatsApp' }}
              </button>
              <p class="sr-only" role="status">{{ submitted ? 'WhatsApp dibuka di tab baru.' : '' }}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { CircleCheck, Clock, Mail, MapPin, MessageCircle, Send } from 'lucide-vue-next'
import { WHATSAPP_URL } from '~/utils/links'

useSeoMeta({
  title: 'Hubungi Kami — RinkBolt',
  description: 'Hubungi tim RinkBolt lewat WhatsApp atau email. Senin–Sabtu, 09.00–18.00 WIB.',
  ogTitle: 'Hubungi Kami — RinkBolt',
  ogDescription: 'Tanya apa pun soal RinkBolt ke tim kami.',
})

const form = ref({ name: '', email: '', subject: '', message: '' })
const submitted = ref(false)

const contactInfo = [
  { icon: MessageCircle, label: 'WhatsApp', value: '+62 895-3654-41554', href: WHATSAPP_URL, sub: 'Senin–Sabtu, 09.00–18.00 WIB' },
  { icon: Mail, label: 'Email', value: 'support@rinkwebstudio.com', href: 'mailto:support@rinkwebstudio.com', sub: 'Balasan di hari kerja' },
  { icon: MapPin, label: 'Alamat', value: 'Jl. Sawo 4 RT08/RW01, Kel. Balekambang, Kec. Kramat Jati', sub: 'Jakarta Timur 13530, Indonesia' },
  { icon: Clock, label: 'Jam operasional', value: 'Senin–Sabtu', sub: '09.00–18.00 WIB' },
]

const submitForm = () => {
  const { name, email, subject, message } = form.value
  window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(`Halo RinkBolt, saya ${name} (${email}).\n\n${subject}\n${message}`)}`, '_blank', 'noopener')
  submitted.value = true
  setTimeout(() => { submitted.value = false; form.value = { name: '', email: '', subject: '', message: '' } }, 3000)
}
</script>

<style scoped>
.field { @apply block h-12 w-full rounded-md border-[1.5px] border-control bg-white px-4 text-body text-ink transition-colors placeholder:text-ink-subtle hover:border-ink-muted focus:border-focus focus:outline-none focus:ring-[3px] focus:ring-info-soft; }
</style>
