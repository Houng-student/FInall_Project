<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)

onMounted(() => {
  // Trigger animation state once the component mounts in the browser
  isLoaded.value = true
})
</script>
<template>
  <section class="max-w-7xl mx-auto px-7 py-20">
    <div class="grid lg:grid-cols-2 gap-40 ">
      <div class="sticky top-24 h-fit">

        <p class="text-gray-500 font-bold text-md">
          Discover our services
        </p>

        <h1
          class="text-6xl font-bold leading-tight text-indigo-500 mt-4 subheading fade-in delay-1" :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        style="transition-delay: 100ms;">
          Enjoy your shopping <br>
          with our many <br>
          Etec services
        </h1>

        <p class="mt-8 text-gray-400 text-xl">
          Our installment and Trade-In packages, device insurance plans & free training sessions ensure the best experiences for our customers!
        </p>

        <button
          class="mt-10 bg-black text-white rounded-full px-8 py-5">
          Learn More
        </button>
      </div>

      <div class="space-y-8 w-117">


        <div class="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl group">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center min-h-90">
            
            <div class="p-8 sm:p-12 flex flex-col justify-center items-start">
              <h2 class="text-xl  font-bold text-gray-700 leading-tight-10 tracking-tight">
                Easy Payment<br />
                installment to<br />
                own your Apple<br />
                devices right<br />
                away!
              </h2>
              <button class="mt-6 bg-black text-white rounded-full px-6 py-3">Learn More</button>
            </div>

            <div class="bg-[#f4f5f7] h-full w-full flex items-center justify-center p-8 overflow-hidden">
              <img 
                src="https://i.pinimg.com/1200x/13/4d/61/134d61a6d1d6946492aefb000914368f.jpg" 
                alt="UCB Visa Credit Cards" 
                class="w-full h-auto max-h-70 object-contain transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

          </div>
        </div>
        <div class="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl group">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center min-h-90">
            
            <div class="bg-[#f4f5f7] h-full w-full flex items-center justify-center p-8 overflow-hidden">
              <img 
                src="https://i.pinimg.com/1200x/13/4d/61/134d61a6d1d6946492aefb000914368f.jpg" 
                alt="UCB Visa Credit Cards" 
                class="w-full h-auto max-h-70 object-contain transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            <div class="p-8 sm:p-12 flex flex-col justify-center items-start">
              <h2 class="text-xl  font-bold text-gray-700 leading-tight-10 tracking-tight">
                Easy Payment<br />
                installment to<br />
                own your Apple<br />
                devices right<br />
                away!
              </h2>
              <button class="mt-6 bg-black text-white rounded-full px-6 py-3">Learn More</button>
            </div>
          </div>
        </div>
        <div class="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl group">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center min-h-90">
            
            <div class="p-8 sm:p-12 flex flex-col justify-center items-start">
              <h2 class="text-xl  font-bold text-gray-700 leading-tight-10 tracking-tight">
                Easy Payment<br />
                installment to<br />
                own your Apple<br />
                devices right<br />
                away!
              </h2>
              <button class="mt-6 bg-black text-white rounded-full px-6 py-3">Learn More</button>
            </div>

            <div class="bg-[#f4f5f7] h-full w-full flex items-center justify-center p-8 overflow-hidden">
              <img 
                src="https://i.pinimg.com/1200x/13/4d/61/134d61a6d1d6946492aefb000914368f.jpg" 
                alt="UCB Visa Credit Cards" 
                class="w-full h-auto max-h-70 object-contain transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

          </div>
        </div>
        <div class="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl group">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center min-h-90">
            
            <div class="bg-[#f4f5f7] h-full w-full flex items-center justify-center p-8 overflow-hidden">
              <img 
                src="https://i.pinimg.com/1200x/13/4d/61/134d61a6d1d6946492aefb000914368f.jpg" 
                alt="UCB Visa Credit Cards" 
                class="w-full h-auto max-h-70 object-contain transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            <div class="p-8 sm:p-12 flex flex-col justify-center items-start">
              <h2 class="text-xl  font-bold text-gray-700 leading-tight-10 tracking-tight">
                Easy Payment<br />
                installment to<br />
                own your Apple<br />
                devices right<br />
                away!
              </h2>
              <button class="mt-6 bg-black text-white rounded-full px-6 py-3">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>