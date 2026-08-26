<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)

onMounted(() => {
  // Trigger animation state once the component mounts in the browser
  isLoaded.value = true
})
</script>
<template>
  <section class="max-w-7xl mx-55 px-auto py-20">

    <div class="grid lg:grid-cols-2 gap-50">

      <div class="sticky top-24 h-fit">

        <p class="text-gray-500 font-bold text-xl">
          Discover our services
        </p>

        <h1
          class="text-7xl font-bold leading-tight text-indigo-500 mt-4 subheading fade-in delay-1" :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      style="transition-delay: 100ms;">
          Enjoy benefits <br>
          with our many <br>
          iOne services
        </h1>

        <p class="mt-8 text-gray-400 text-xl">
          Our installment and Trade-In packages, device insurance plans & free training sessions ensure the best experiences for our customers!
        </p>

        <button
          class="mt-10 bg-black text-white rounded-full px-8 py-5">
          Learn More
        </button>

      </div>

      <div class="space-y-8 w-180">

        <div
          class="bg-white rounded-3xl shadow-lg h-100 items-center">
          <div class="flex gap-18 item-center">
            <div class="ml-15 my-15 ">
              <h2 class="text-2xl sm:text-3xl   font-bold text-gray-800 leading-tight tracking-tight ">
                Easy Payment <br>
                installment to <br>
                own your Apple <br>
                devices right <br>
                away!
              </h2>
              <button class="text-black border px-5 py-3 mt-5 rounded-full">Learn More </button>
            </div>
            <img class="w-full max-w-xs md:max-w-sm h-80 m-auto object-contain" src="https://i.pinimg.com/1200x/13/4d/61/134d61a6d1d6946492aefb000914368f.jpg" alt="">
          </div>
        </div>

        <div
          class="bg-white rounded-3xl shadow-lg h-100 items-center">
          <div class="flex gap-18 item-center">
            <img class="w-full max-w-xs md:max-w-sm h-80 m-auto object-contain" src="https://i.pinimg.com/1200x/13/4d/61/134d61a6d1d6946492aefb000914368f.jpg" alt="">
            <div class="mx-7 my-10 ">
              <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight tracking-tight animate-fade-in delay-100">
                Easy Payment <br>
                installment to <br>
                own your Apple <br>
                devices right <br>
                away!
              </h2>
              <button class="text-black border px-5 py-3 mt-5 rounded-full">Learn More </button>
            </div>
          </div>
        </div>

        <div
          class="bg-white rounded-3xl shadow-lg h-100 items-center">
          <div class="flex gap-18 item-center">
            <div class="ml-15 my-15 ">
              <h2 class="text-2xl sm:text-3xl   font-bold text-gray-800 leading-tight tracking-tight ">
                Easy Payment <br>
                installment to <br>
                own your Apple <br>
                devices right <br>
                away!
              </h2>
              <button class="text-black border px-5 py-3 mt-5 rounded-full">Learn More </button>
            </div>
            <img class="w-full max-w-xs md:max-w-sm h-80 m-auto object-contain" src="https://i.pinimg.com/1200x/13/4d/61/134d61a6d1d6946492aefb000914368f.jpg" alt="">
          </div>
        </div>

        <div
          class="bg-white rounded-3xl shadow-lg h-100 items-center">
          <div class="flex gap-18 item-center">
            <img class="w-full max-w-xs md:max-w-sm h-80 m-auto object-contain" src="https://i.pinimg.com/1200x/13/4d/61/134d61a6d1d6946492aefb000914368f.jpg" alt="">
            <div class="mx-7 my-10 ">
              <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight tracking-tight ">
                Easy Payment <br>
                installment to <br>
                own your Apple <br>
                devices right <br>
                away!
              </h2>
              <button class="text-black border px-5 py-3 mt-5 rounded-full">Learn More </button>
            </div>
          </div>
        </div>

      </div>

    </div>

  </section>
</template>