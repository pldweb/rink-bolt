<template>
  <div>
    <!-- Header -->
    <section class="pt-28 pb-16 sm:pt-32 sm:pb-20 bg-[#062534] text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-sm font-semibold text-brand-400 uppercase tracking-wider">Kontak</span>
        <h1 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold">Hubungi Kami</h1>
        <p class="mt-4 text-gray-300 max-w-lg mx-auto">
          Tim kami siap membantu Anda — tanyakan apapun tentang RinkBolt.
        </p>
      </div>
    </section>

    <!-- Contact -->
    <section class="py-16 sm:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-5 gap-10">
          <!-- Info -->
          <div class="lg:col-span-2 space-y-4">
            <div
              v-for="item in contactInfo" :key="item.label"
              class="flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:border-brand-200 hover:shadow-sm transition-all"
            >
              <div class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" :class="item.bg">
                <component :is="item.icon" class="w-5 h-5" :class="item.iconColor" />
              </div>
              <div>
                <h3 class="text-sm font-semibold text-gray-900">{{ item.label }}</h3>
                <p class="text-sm text-gray-600 mt-0.5">{{ item.value }}</p>
                <p v-if="item.sub" class="text-xs text-gray-400 mt-0.5">{{ item.sub }}</p>
              </div>
            </div>
          </div>

          <!-- Form -->
          <div class="lg:col-span-3">
            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 class="text-xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
              <form @submit.prevent="submitForm" class="space-y-5">
                <div class="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">Nama Lengkap</label>
                    <input v-model="form.name" type="text" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all" placeholder="Nama Anda" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input v-model="form.email" type="email" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all" placeholder="email@anda.com" />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">Subjek</label>
                  <input v-model="form.subject" type="text" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all" placeholder="Subjek pesan" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">Pesan</label>
                  <textarea v-model="form.message" rows="5" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all resize-none" placeholder="Tulis pesan Anda..." />
                </div>
                <button
                  type="submit" :disabled="submitted"
                  class="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all"
                  :class="submitted ? 'bg-green-500' : 'bg-brand-500 hover:bg-brand-600 shadow-sm shadow-brand-500/20'"
                >
                  <Send v-if="!submitted" class="w-4 h-4" />
                  <CheckCircle2 v-else class="w-4 h-4" />
                  {{ submitted ? 'WhatsApp dibuka' : 'Kirim via WhatsApp' }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Mail, MessageCircle, MapPin, Clock, Send, CheckCircle2 } from 'lucide-vue-next'

const form = ref({ name: '', email: '', subject: '', message: '' })
const submitted = ref(false)

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'support@rinkwebstudio.com', sub: 'Balasan di hari kerja', bg: 'bg-brand-50', iconColor: 'text-brand-500' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+62 895-3654-41554', sub: 'Senin–Sabtu, 09.00–18.00 WIB', bg: 'bg-green-50', iconColor: 'text-green-600' },
  { icon: MapPin, label: 'Alamat', value: 'Jl. Sawo 4 RT08/RW01, Kel. Balekambang, Kec. Kramat Jati', sub: 'Jakarta Timur 13530, Indonesia', bg: 'bg-blue-50', iconColor: 'text-blue-600' },
  { icon: Clock, label: 'Jam Operasional', value: 'Senin–Sabtu', sub: '09.00–18.00 WIB', bg: 'bg-purple-50', iconColor: 'text-purple-600' },
]

const submitForm = () => {
  const { name, email, subject, message } = form.value
  window.open(`https://wa.me/62895365441554?text=${encodeURIComponent(`Halo RinkBolt, saya ${name} (${email}).\n\n${subject}\n${message}`)}`, '_blank', 'noopener')
  submitted.value = true; setTimeout(() => { submitted.value = false; form.value = { name: '', email: '', subject: '', message: '' } }, 3000) }
</script>
