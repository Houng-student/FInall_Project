<template>
  <Header/>
  <div class="py-16 px-4 bg-gray-50/50 flex flex-col items-center justify-center font-sans space-y-16">
    
    <div class="w-full max-w-6xl flex flex-col items-center">
      <div class="max-w-3xl text-center space-y-4 mb-12">
        <span class="inline-block bg-purple-50 text-purple-900 text-xs font-semibold px-3 py-1 rounded-full border border-purple-100">
          Premium Accessories
        </span>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Apple Accessories
        </h1>
        <p class="text-slate-400 text-base sm:text-lg leading-relaxed">
          Etec offers a vast range of official, fully-warranted Apple accessories in our 
          <span class="text-slate-700 font-medium">Apple Authorized stores</span> — such as AirPods, AirTag and Magic Trackpad.
        </p>
        <div class="pt-2">
          <button class="px-5 py-2 border border-slate-300 text-slate-600 rounded-md text-sm font-medium hover:bg-slate-100 transition-colors">
            See More
          </button>
        </div>
      </div>

      <div class="w-full max-w-6xl relative">
        <ClientOnly>
          <Carousel
            :autoplay="3000"
            :wrap-around="true"
            :breakpoint="breakpoints"
            class="custom-carousel"
          >
            <Slide v-for="product in products" :key="product.id">
              <div class="carousel__item bg-white mx-3 rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-between items-center transition-all hover:shadow-xl hover:-translate-y-1 my-4">
                <div class="h-52 w-full flex items-center justify-center mb-4">
                  <img :src="product.image" :alt="product.title" class="max-h-full max-w-full object-contain" />
                </div>
                <div class="text-center mt-auto space-y-3">
                  <h3 class="text-base sm:text-lg font-bold text-slate-800 leading-tight px-2">
                    {{ product.title }}
                  </h3>
                  <span class="inline-block bg-indigo-50 text-indigo-500 text-xs font-semibold px-3 py-1 rounded-lg">
                    {{ product.category }}
                  </span>
                </div>
              </div>
            </Slide>

            <template #addons>
              <Pagination />
            </template>
          </Carousel>
          
          <template #fallback>
            <div class="text-center py-10 text-slate-400">Loading Accessories...</div>
          </template>
        </ClientOnly>
      </div>
    </div>

    <div class="w-full max-w-6xl flex flex-col items-center">
      <div class="max-w-3xl text-center space-y-4 mb-12">
        <span class="inline-block bg-purple-50 text-purple-900 text-xs font-semibold px-3 py-1 rounded-full border border-purple-100">
          Premium Accessories
        </span>
        <h2 class="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Bags & Sleeves
        </h2>
        <p class="text-slate-400 text-base sm:text-lg leading-relaxed">
          Pick from a curated selection of sturdy laptop bags, classy carrying cases and stylish sleeves.
        </p>
        <div class="pt-2">
          <button class="px-5 py-2 border border-slate-300 text-slate-600 rounded-md text-sm font-medium hover:bg-slate-100 transition-colors">
            See More
          </button>
        </div>
      </div>

      <div class="w-full max-w-6xl relative">
        <ClientOnly>
          <Carousel
            :autoplay="3000"
            :wrap-around="true"
            :breakpoint="breakpoints"
            class="custom-carousel"
          >
            <Slide v-for="product in bagProducts" :key="product.id">
              <div class="carousel__item bg-white mx-3 rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-between items-start transition-all hover:shadow-xl hover:-translate-y-1 my-4">
                <div class="h-52 w-full flex items-center justify-center mb-4">
                  <img :src="product.image" :alt="product.title" class="max-h-full max-w-full object-contain" />
                </div>
                <div class="w-full pt-2 flex items-end justify-between gap-2">
                  <h3 class="text-base sm:text-lg font-bold text-slate-800 leading-tight text-left">
                    {{ product.title }}
                  </h3>
                  <div class="shrink-0 text-slate-400 pb-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Slide>

            <template #addons>
              <Pagination />
            </template>
          </Carousel>
          
          <template #fallback>
            <div class="text-center py-10 text-slate-400">Loading Bags & Sleeves...</div>
          </template>
        </ClientOnly>
      </div>
    </div>

    <div class="w-full max-w-6xl flex flex-col items-center">
      <div class="max-w-3xl text-center space-y-4 mb-12">
        <span class="inline-block bg-purple-50 text-purple-900 text-xs font-semibold px-3 py-1 rounded-full border border-purple-100">
          Premium Accessories
        </span>
        <h2 class="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Cables & Adapters
        </h2>
        <p class="text-slate-400 text-base sm:text-lg leading-relaxed">
          Quality USB-C cables and capable power adapters for your Apple devices.
        </p>
        <div class="pt-2">
          <button class="px-5 py-2 border border-slate-300 text-slate-600 rounded-md text-sm font-medium hover:bg-slate-100 transition-colors">
            See More
          </button>
        </div>
      </div>

      <div class="w-full max-w-6xl relative">
        <ClientOnly>
          <Carousel
            :autoplay="3000"
            :wrap-around="true"
            :breakpoint="breakpoints"
            class="custom-carousel"
          >
            <Slide v-for="product in cableProducts" :key="product.id">
              <div class="carousel__item bg-white mx-3 rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-between items-start transition-all hover:shadow-xl hover:-translate-y-1 my-4">
                <div class="h-52 w-full flex items-center justify-center mb-4">
                  <img :src="product.image" :alt="product.title" class="max-h-full max-w-full object-contain" />
                </div>
                <div class="w-full pt-2 flex items-end justify-between gap-2">
                  <h3 class="text-base sm:text-lg font-bold text-slate-800 leading-tight text-left">
                    {{ product.title }}
                  </h3>
                  <div class="shrink-0 text-slate-400 pb-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Slide>

            <template #addons>
              <Pagination />
            </template>
          </Carousel>
          
          <template #fallback>
            <div class="text-center py-10 text-slate-400">Loading Cables & Adapters...</div>
          </template>
        </ClientOnly>
      </div>
    </div>

    <div class="w-full max-w-6xl flex flex-col items-center">
      <div class="max-w-3xl text-center space-y-4 mb-12">
        <span class="inline-block bg-purple-50 text-purple-900 text-xs font-semibold px-3 py-1 rounded-full border border-purple-100">
          Premium Accessories
        </span>
        <h2 class="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Cases & Protection
        </h2>
        <p class="text-slate-400 text-base sm:text-lg leading-relaxed">
          Protect your iPhone in style with our fashionable cases and screen protectors from top brands.
        </p>
        <div class="pt-2">
          <button class="px-5 py-2 border border-slate-300 text-slate-600 rounded-md text-sm font-medium hover:bg-slate-100 transition-colors">
            See More
          </button>
        </div>
      </div>

      <div class="w-full max-w-6xl relative">
        <ClientOnly>
          <Carousel
            :autoplay="3000"
            :wrap-around="true"
            :breakpoint="breakpoints"
            class="custom-carousel"
          >
            <Slide v-for="product in caseProducts" :key="product.id">
              <div class="carousel__item bg-white mx-3 rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-between items-start transition-all hover:shadow-xl hover:-translate-y-1 my-4">
                <div class="h-52 w-full flex items-center justify-center mb-4">
                  <img :src="product.image" :alt="product.title" class="max-h-full max-w-full object-contain" />
                </div>
                <div class="w-full pt-2 flex items-end justify-between gap-2">
                  <h3 class="text-base sm:text-lg font-bold text-slate-800 leading-tight text-left">
                    {{ product.title }}
                  </h3>
                  <div class="shrink-0 text-slate-400 pb-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Slide>

            <template #addons>
              <Pagination />
            </template>
          </Carousel>
          
          <template #fallback>
            <div class="text-center py-10 text-slate-400">Loading Cases & Protection...</div>
          </template>
        </ClientOnly>
      </div>
    </div>

    <div class="w-full max-w-6xl flex flex-col items-center">
      <div class="max-w-3xl text-center space-y-4 mb-12">
        <span class="inline-block bg-purple-50 text-purple-900 text-xs font-semibold px-3 py-1 rounded-full border border-purple-100">
          Premium Accessories
        </span>
        <h2 class="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Power Banks
        </h2>
        <p class="text-slate-400 text-base sm:text-lg leading-relaxed">
          Find the right power bank for your iPhone, smartphone or other gadget.
        </p>
        <div class="pt-2">
          <button class="px-5 py-2 border border-slate-300 text-slate-600 rounded-md text-sm font-medium hover:bg-slate-100 transition-colors">
            See More
          </button>
        </div>
      </div>

      <div class="w-full max-w-6xl relative">
        <ClientOnly>
          <Carousel
            :autoplay="3000"
            :wrap-around="true"
            :breakpoint="breakpoints"
            class="custom-carousel"
          >
            <Slide v-for="product in powerBankProducts" :key="product.id">
              <div class="carousel__item bg-white mx-3 rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-between items-start transition-all hover:shadow-xl hover:-translate-y-1 my-4">
                <div class="h-52 w-full flex items-center justify-center mb-4">
                  <img :src="product.image" :alt="product.title" class="max-h-full max-w-full object-contain" />
                </div>
                <div class="w-full pt-2 flex items-end justify-between gap-2">
                  <h3 class="text-base sm:text-lg font-bold text-slate-800 leading-tight text-left">
                    {{ product.title }}
                  </h3>
                  <div class="shrink-0 text-slate-400 pb-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Slide>

            <template #addons>
              <Pagination />
            </template>
          </Carousel>
          
          <template #fallback>
            <div class="text-center py-10 text-slate-400">Loading Power Banks...</div>
          </template>
        </ClientOnly>
      </div>
    </div>

    <div class="w-full max-w-6xl flex flex-col items-center">
      <div class="max-w-3xl text-center space-y-4 mb-12">
        <span class="inline-block bg-purple-50 text-purple-900 text-xs font-semibold px-3 py-1 rounded-full border border-purple-100">
          Premium Accessories
        </span>
        <h2 class="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Speakers & Headphones
        </h2>
        <p class="text-slate-400 text-base sm:text-lg leading-relaxed">
          Powerful Bluetooth speakers and headphones from international brands such as Marshall, Beats, Bose, Harman Kardon and JBL.
        </p>
        <div class="pt-2">
          <button class="px-5 py-2 border border-slate-300 text-slate-600 rounded-md text-sm font-medium hover:bg-slate-100 transition-colors">
            See More
          </button>
        </div>
      </div>

      <div class="w-full max-w-6xl relative">
        <ClientOnly>
          <Carousel
            :autoplay="3000"
            :wrap-around="true"
            :breakpoint="breakpoints"
            class="custom-carousel"
          >
            <Slide v-for="product in speakerProducts" :key="product.id">
              <div class="carousel__item bg-white mx-3 rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-between items-start transition-all hover:shadow-xl hover:-translate-y-1 my-4">
                <div class="h-52 w-full flex items-center justify-center mb-4">
                  <img :src="product.image" :alt="product.title" class="max-h-full max-w-full object-contain" />
                </div>
                <div class="w-full pt-2 flex items-end justify-between gap-2">
                  <h3 class="text-base sm:text-lg font-bold text-slate-800 leading-tight text-left">
                    {{ product.title }}
                  </h3>
                  <div class="shrink-0 text-slate-400 pb-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Slide>

            <template #addons>
              <Pagination />
            </template>
          </Carousel>
          
          <template #fallback>
            <div class="text-center py-10 text-slate-400">Loading Speakers & Headphones...</div>
          </template>
        </ClientOnly>
      </div>
    </div>

  </div>
  <section>
    <AfterFooter/>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import Header from '~/layouts/Header.vue'
import AfterFooter from '~/layouts/AfterFooter.vue'

const products = ref([
  { id: 1, title: 'Apple Pencil ( USB-C ) – ITS', category: 'Apple Accessories', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MUWA3?wid=1144&hei=1144&fmt=jpeg' },
  { id: 2, title: 'Apple 20W USB-C Power Adapter', category: 'Apple Accessories', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU9F2?wid=1144&hei=1144&fmt=jpeg' },
  { id: 3, title: 'Apple EarPods USB-C', category: 'Apple Accessories', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJY3?wid=1144&hei=1144&fmt=jpeg' },
  { id: 4, title: 'Apple Magic Trackpad Mid 2021', category: 'Apple Accessories', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMP3?wid=1144&hei=1144&fmt=jpeg' },
  { id: 5, title: 'Apple Magic Keyboard For iPad Pro', category: 'Apple Accessories', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWR23?wid=1144&hei=1144&fmt=jpeg' },
])

const bagProducts = ref([
  { id: 101, title: 'AGVA 14.1” Daylite Laptop Backpack', image: 'https://www.ione.com.kh/wp-content/uploads/2026/07/AGVA-14.1_-Daylite-Laptop-Backpack-ione-cambodia-2.png' },
  { id: 102, title: 'AGVA Voyager Litepack Pouch Removable Sling', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQ482?wid=800&hei=800&fmt=jpeg' },
  { id: 103, title: 'AGVA 13.3–14.1” Muse Laptop Cover', image: 'https://www.ione.com.kh/wp-content/uploads/2025/07/agva-13-3-14-1-muse-laptop-cover-4-cambodia-1.png' },
  { id: 104, title: 'AGVA 15.6” Voyager Backpack Black (Water-Repellant)', image: 'https://www.ione.com.kh/wp-content/uploads/2026/07/AGVA-15.6-Voyager-Backpack-Black-Water-Repellant-ione-cambodia.png' },
])

const cableProducts = ref([
  { id: 201, title: 'Devia Cable Ultra10 C To C PD 60W Keychain Lanyard Fast Cable (0.2m) – Black', image: 'https://www.ione.com.kh/wp-content/uploads/2025/08/devia-cable-ultra10-c-to-c-pd-60w-keychain-lanyard-fast-cable-0-2m-black-3-cambodia.png' },
  { id: 202, title: 'Choetech Thunderbolt 4 40GBps 8K / 60Hz 2.6ft 0.8m Cable Black', image: 'https://www.ione.com.kh/wp-content/uploads/2025/08/choetech-thunderbolt-4-40gbps-8k-60hz-2-6ft-0-8m-cable-black-3-cambodia.png' },
  { id: 203, title: 'Devia Cable Ultra10 C To IP PD 27W Keychain Lanyard Fast Cable (0.2m)', image: 'https://www.ione.com.kh/wp-content/uploads/2025/08/devia-cable-ultra10-c-to-ip-pd-27w-keychain-lanyard-fast-cable-0-2m-3-cambodia.png' },
  { id: 204, title: 'Choetech Magleap 15W Qi2 Magnetic Car Charger Holder', image: 'https://www.ione.com.kh/wp-content/uploads/2025/08/choetech-magleap-15w-qi2-magnetic-car-charger-holder-5-cambodia.png' },
])

const caseProducts = ref([
  { id: 301, title: 'Devia_iPhone17 Van Series AR HD Tempered Glass (With Assist Tool) – Black', image: 'https://www.ione.com.kh/wp-content/uploads/2025/10/devia_iphone17-van-series-ar-hd-tempered-glass-with-assist-tool-black-6-cambodia.png' },
  { id: 302, title: 'Devia_iPhone17 Pure Clear Series Shockproof Case – Clear', image: 'https://www.ione.com.kh/wp-content/uploads/2025/10/devia_iphone17-pure-clear-series-shockproof-case-clear-4-cambodia.png' },
  { id: 303, title: 'Machino_iPhone 17 Mechanic Case', image: 'https://www.ione.com.kh/wp-content/uploads/2025/10/machino_iphone-17-mechanic-case-4-cambodia.png' },
  { id: 304, title: 'Machino_iPhone 17, 360 Guard Againt Len Glass', image: 'https://www.ione.com.kh/wp-content/uploads/2025/10/machino_iphone-17-360-guard-againt-len-glassmachino_iphone-17-360-guard-againt-len-glass-2-cambodia.png' },
])

const powerBankProducts = ref([
  { id: 401, title: 'Choetech Powerleap Power Bank Pd22.5W 10000Mah 1C 2A Digital Display ', image: 'https://www.ione.com.kh/wp-content/uploads/2025/07/Choetech-Powerleap-Power-Bank-Pd22.5W-10000Mah-1C-2A_-Digital-Display-ione-cambodia-1.png' },
  { id: 402, title: 'Choetech 10000Mah magnetic Power Bank 3C Certified 15W 3In1 PD22.5W', image: 'https://www.ione.com.kh/wp-content/uploads/2026/07/Choetech-10000Mah-magnetic-Power-Bank-3C-Certified-15W-3In1-PD22.5W-ione-cambodia-3.png' },
  { id: 403, title: 'Choetech 10000mah Led Display Power Bank For Mobile And Apple Watch ', image: 'https://www.ione.com.kh/wp-content/uploads/2025/07/choetech-10000mah-led-display-power-bank-for-mobile-and-apple-watch-4-cambodia.png' },
  { id: 404, title: 'Devia Smart Series 22.5W Full Compatible Power Bank With Display (10000mah) ', image: 'https://www.ione.com.kh/wp-content/uploads/2026/07/devia-smart-series-22-5w-full-compatible-power-bank-with-display-10000mah-ione-cambodia-2.png' },
])

const speakerProducts = ref([
  { id: 501, title: 'Harman kardon Luna', image: 'https://www.ione.com.kh/wp-content/uploads/2025/10/harman-kardon-luna-9-cambodia.png' },
  { id: 502, title: 'Bose SoundLink Color Bluetooth Speaker II', image: 'https://www.ione.com.kh/wp-content/uploads/2025/10/bose-soundlink-color-bluetooth-speaker-ii-7-cambodia.png' },
  { id: 503, title: 'Bose SoundLink Max Portable Speaker', image: 'https://www.ione.com.kh/wp-content/uploads/2025/10/bose-soundlink-max-portable-speaker-7-cambodia.png' },
  { id: 504, title: 'JBL Party Box On The Go ', image: 'https://www.ione.com.kh/wp-content/uploads/2025/10/jbl-party-box-on-the-go-10-cambodia.png' },
])

const breakpoints = {
  320: {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  768: {
    itemsToShow: 2,
    snapAlign: 'start',
  },
  1024: {
    itemsToShow: 3.5,
    snapAlign: 'start',
  },
}
</script>

<style>
.custom-carousel .carousel__item {
  height: 440px; 
}

.custom-carousel .carousel__pagination {
  margin-top: 30px;
  gap: 8px;
}

.custom-carousel .carousel__pagination-button {
  width: 8px;
  height: 8px;
  background-color: #cbd5e1;
  border-radius: 50%;
  padding: 0;
  transition: all 0.3s ease;
}

.custom-carousel .carousel__pagination-button--active {
  width: 24px;
  height: 8px;
  border-radius: 999px;
  background-color: #64748b;
}
</style>