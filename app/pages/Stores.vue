<template>
  <Header/>
  <div class="min-h-screen bg-[#FDFDFD] font-sans text-[#333333]">

    <section class="py-12 px-4 sm:px-6 lg:px-10 max-w-[1280px] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        <div class="lg:col-span-4 lg:sticky lg:top-8 space-y-5">
          <p class="text-[13px] font-medium text-[#888888]">
            Leading IT Training Center & Solutions in Cambodia
          </p>

          <h1 class="text-3xl sm:text-[40px] font-extrabold text-[#7C5CFC] leading-[1.15] tracking-tight">
            Visit our <br />
            Branches and <br />
            Training <br />
            Centers
          </h1>

          <div class="space-y-4 text-[#888888] text-[13.5px] leading-[1.65]">
            <p>
              Etec operates modern training centers and technology service hubs in Phnom Penh, providing professional IT courses and digital solutions.
            </p>
            <p>
              Discover our professional IT training programs and services first-hand. Our cordial staff is awaiting you!
            </p>
          </div>
        </div>

        <div class="lg:col-span-8 space-y-10">
          <div 
            v-for="store in stores" 
            :key="store.id" 
            class="space-y-6"
          >
            <div class="group bg-white rounded-[16px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300">
              <div class="grid grid-cols-1 md:grid-cols-12 items-stretch">
                <div class="md:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-5">
                  <h2 class="text-[18px] sm:text-[20px] font-bold text-[#222222] leading-snug group-hover:text-[#7C5CFC] transition-colors">
                    {{ store.name }}
                  </h2>

                  <div class="space-y-3.5 text-[13px] text-[#777777]">
                    <div class="flex items-start gap-3">
                      <svg class="w-4 h-4 text-[#7C5CFC] shrink-0 mt-0.5 fill-current" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                      <span class="leading-relaxed">{{ store.address }}</span>
                    </div>

                    <div class="flex items-center gap-3">
                      <svg class="w-4 h-4 text-[#7C5CFC] shrink-0 fill-current" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                      <span>Business Hours: {{ store.hours }}</span>
                    </div>

                    <div class="flex items-center gap-3">
                      <svg class="w-4 h-4 text-[#7C5CFC] shrink-0 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                      <a :href="`tel:${store.phone}`" class="hover:text-[#7C5CFC] hover:underline transition-colors">
                        {{ store.phone }}
                      </a>
                    </div>
                  </div>
                </div>

                <div class="md:col-span-5 min-h-[220px] relative bg-slate-100 overflow-hidden">
                  <img 
                    :src="store.image" 
                    :alt="store.name" 
                    class="w-full h-full object-cover absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div class="w-full h-[320px] sm:h-[360px] bg-white rounded-[16px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <iframe 
                :src="store.mapUrl" 
                class="w-full h-full border-0 block" 
                allowfullscreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="bg-gradient-to-tr from-[#3B82F6] via-[#A855F7] to-[#EC4899] text-white py-16 px-6 sm:px-12 lg:px-20 my-8">
      <div class="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div class="lg:col-span-7 space-y-4 pt-2">
          <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Get in touch with us.
          </h2>
          <p class="text-white/80 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
            Wanting to contact Etec about IT courses or tech services? Or are you looking for a way to get in touch by phone, email or our many social channels? We are happy to hear from you.
          </p>
        </div>

        <div class="lg:col-span-5">
          <div class="bg-white rounded-2xl p-6 sm:p-7 text-slate-800 shadow-xl space-y-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer">
            <div class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M21.928 2.537c-.302-.296-.75-.383-1.139-.224l-18 7.5c-.43.179-.706.602-.688 1.068.018.465.323.864.767 1.002l4.877 1.524 2.122 6.366c.135.406.492.695.918.73.042.003.085.005.127.005.385 0 .742-.18.966-.489l2.846-3.914 4.887 3.665c.241.181.536.279.837.279.123 0 .248-.016.37-.051.417-.118.736-.452.831-.871l3.5-15.5c.099-.44-.047-.899-.349-1.186zm-12.753 12.871l-1.381-4.143 8.877-5.548-6.183 7.729c-.195.244-.326.537-.378.851l-.318 1.848-.617-.737zm2.441 2.378l-1.026-.77 5.76-7.2-7.228 4.517-3.08-.962 14.882-6.201-2.908 12.885-6.32-4.741z"/></svg>
            </div>
            <h3 class="text-lg font-bold text-slate-900">Etec Assistant</h3>
            <p class="text-sm font-medium text-slate-400">Click and ask our chatbot!</p>
            <p class="text-xs text-slate-300">You will receive a swift answer.</p>
          </div>
        </div>

        <div class="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div class="bg-white rounded-2xl p-6 sm:p-7 text-slate-800 shadow-xl space-y-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
            <div class="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 1c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 17c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l1.9-1.9C9.18 17.48 10.54 18 12 18c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>
            </div>
            <h3 class="text-lg font-bold text-slate-900">Give us a call</h3>
            <a href="tel:+85523997575" class="block text-sm font-semibold text-slate-500 hover:text-purple-600 transition-colors">
              +855 (0) 23 888 099
            </a>
            <p class="text-xs text-slate-300">Monday to Saturday 8am to 8pm</p>
          </div>

          <div class="bg-white rounded-2xl p-6 sm:p-7 text-slate-800 shadow-xl space-y-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
            <div class="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-500">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </div>
            <h3 class="text-lg font-bold text-slate-900">Send us an email</h3>
            <a href="mailto:info@etec.com.kh" class="block text-sm font-semibold text-slate-500 hover:text-pink-500 transition-colors">
              info@etec.com.kh
            </a>
            <p class="text-xs text-slate-300">Our friendly team will get back to you asap.</p>
          </div>

          <div class="bg-white rounded-2xl p-6 sm:p-7 text-slate-800 shadow-xl space-y-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
            <div class="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </div>
            <h3 class="text-lg font-bold text-slate-900">Etec Main Office</h3>
            <p class="text-sm font-medium text-slate-500 leading-snug">
              St. 271, Sangkat Tuek Laak III, Khan Toul Kork
            </p>
            <p class="text-xs text-slate-300">Phnom Penh, Cambodia</p>
          </div>
        </div>

      </div>
    </section>

    <section class="py-16 px-4 sm:px-6 lg:px-10 max-w-[1280px] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        
        <div class="space-y-6">
          <div>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-[#7C5CFC] tracking-tight">
              Send us a message
            </h2>
            <p class="text-slate-400 text-sm mt-3 leading-relaxed">
              Contact us today and our friendly Etec support staff will reach out as soon as possible.
            </p>
          </div>

          <form @submit.prevent="handleFormSubmit" class="space-y-5">
            <div>
              <label class="block text-sm text-slate-400 mb-2">Your name</label>
              <input 
                v-model="form.name"
                type="text" 
                required
                class="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#7C5CFC] focus:ring-2 focus:ring-[#7C5CFC]/20 hover:border-slate-300 transition-all text-sm"
              />
            </div>

            <div>
              <label class="block text-sm text-slate-400 mb-2">Your email</label>
              <input 
                v-model="form.email"
                type="email" 
                required
                class="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#7C5CFC] focus:ring-2 focus:ring-[#7C5CFC]/20 hover:border-slate-300 transition-all text-sm"
              />
            </div>

            <div>
              <label class="block text-sm text-slate-400 mb-2">Your phone number (optional)</label>
              <input 
                v-model="form.phone"
                type="tel" 
                class="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#7C5CFC] focus:ring-2 focus:ring-[#7C5CFC]/20 hover:border-slate-300 transition-all text-sm"
              />
            </div>

            <div>
              <label class="block text-sm text-slate-400 mb-2">Your message</label>
              <textarea 
                v-model="form.message"
                rows="5"
                placeholder="Get in touch with us!"
                class="w-full p-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#7C5CFC] focus:ring-2 focus:ring-[#7C5CFC]/20 hover:border-slate-300 transition-all text-sm text-slate-600 placeholder-slate-300 resize-y"
              ></textarea>
            </div>

            <button 
              type="submit" 
              class="px-8 py-3 bg-[#1B84EF] hover:bg-blue-600 active:scale-95 text-white font-semibold text-sm rounded-xl transition-all shadow-sm hover:shadow-md"
            >
              Submit
            </button>
          </form>
        </div>

        <div class="space-y-12">
          <div class="w-full h-[360px] sm:h-[400px] rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300 bg-slate-100">
            <iframe 
              src="https://maps.google.com/maps?q=11.5683,104.8912&z=15&output=embed" 
              class="w-full h-full border-0 block" 
              allowfullscreen="" 
              loading="lazy"
            ></iframe>
          </div>

          <div class="text-center space-y-6">
            <h3 class="text-3xl font-extrabold text-[#7C5CFC]">
              Follow us on social
            </h3>

            <div class="flex items-center justify-center gap-5">
              <a href="#" class="w-11 h-11 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-[#7C5CFC] hover:scale-110 active:scale-95 transition-all">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" class="w-11 h-11 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-[#7C5CFC] hover:scale-110 active:scale-95 transition-all">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" class="w-11 h-11 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-[#7C5CFC] hover:scale-110 active:scale-95 transition-all">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.811-.169.731-.439.976-.699.1001-.564.053-.996-.363-1.543-.722-.855-.561-1.338-.909-2.168-1.456-.959-.633-.337-.981.209-1.549.143-.149 2.626-2.406 2.674-2.612.006-.026.012-.123-.046-.175s-.144-.034-.206-.02c-.088.02-1.488.946-4.201 2.777-.397.272-.757.406-1.079.399-.356-.008-1.041-.202-1.55-.368-.625-.203-1.122-.311-1.079-.656.022-.18.271-.365.744-.556 2.921-1.272 4.869-2.112 5.844-2.52 2.783-1.159 3.361-1.36 3.738-1.366.083-.001.269.02.389.118.101.082.13.194.14.272.011.083.025.269.015.421z"/></svg>
              </a>
              <a href="#" class="w-11 h-11 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-[#7C5CFC] hover:scale-110 active:scale-95 transition-all">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.3 1.54-1.28 2.54.01.8.38 1.58.98 2.11.66.58 1.58.85 2.45.74.96-.1 1.84-.69 2.29-1.54.33-.61.47-1.32.46-2.02.01-5.11.01-10.22.01-15.33z"/></svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
  <section>
   <AfterFooter/>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AfterFooter from '~/layouts/AfterFooter.vue'
import Header from '~/layouts/Header.vue'

const stores = ref([
  {
    id: 1,
    name: 'Etec Center Main Campus – IT Training & Solutions',
    address: 'St. 271, Sangkat Tuek Laak III, Khan Toul Kork, Phnom Penh',
    hours: '8:00 AM to 8:00 PM',
    phone: '023 888 099',
    image: 'https://i.pinimg.com/736x/d2/40/ab/d240ab0e4c2dcf496bed29f2bfc0a874.jpg',
    mapUrl: 'https://maps.google.com/maps?q=11.5683,104.8912&z=15&output=embed'
  },
  {
    id: 2,
    name: 'Etec Branch 2 – Software Development & Academy',
    address: 'Monivong Blvd, Sangkat Boeung Keng Kang III, Khan Chamkar Morn, Phnom Penh',
    hours: '8:00 AM to 8:00 PM',
    phone: '015 888 099',
    image: 'https://i.pinimg.com/736x/43/b6/3a/43b63ab1fd87324ecd520f8d7cbea6af.jpg',
    mapUrl: 'https://maps.google.com/maps?q=11.5471,104.9221&z=15&output=embed'
  },
  {
    id: 3,
    name: 'Etec Solution & Support Center',
    address: 'Kampuchea Krom Blvd, Sangkat Teuk Laak I, Khan Toul Kork, Phnom Penh, Cambodia',
    hours: 'Mon-Sat: 8:00 AM to 06:00 PM',
    phone: '010 888 099 | 012 888 099',
    image: 'https://i.pinimg.com/736x/5c/b7/cc/5cb7cccf67196e74b794bb628745f1d6.jpg',
    mapUrl: 'https://maps.google.com/maps?q=11.5582,104.9051&z=15&output=embed'
  }
])

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const handleFormSubmit = () => {
  console.log('Form Submitted:', form.value)
}
</script>