<script setup lang="ts">
    import { Swiper, SwiperSlide } from "swiper/vue";
    import { Autoplay, Pagination } from "swiper/modules";
    import { ref } from 'vue'
    const activeNav = ref('Mac')

    import "swiper/css";
    import "swiper/css/pagination";
    import Card from "~/layouts/Card.vue";
    import Accessories from "~/layouts/Accessories.vue";
    import AppleAccess from "~/layouts/AppleAccess.vue";
    import Middle from "~/layouts/Middle.vue";
    import LastCard from "~/layouts/LastCard.vue";
    import AfterFooter from "~/layouts/AfterFooter.vue";

    const banners = [
    "https://i.pinimg.com/736x/b3/1f/53/b31f534ba205b0cebfac15a4579c199c.jpg",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1600",
    "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1600",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1600"
    ];
    const navItems = [
    {name:'Home',path:'/'},
  { name: 'Mac', path: '/mac' },
  { name: 'IPad', path: '/ipad' },
  { name: 'IPhone', path: '/iphone' },
  { name: 'Accessories', path: '/accessories' },
  { name: 'Service', path: '/service' },
  { name: 'Offers', path: '/offers' },
  { name: 'Stores', path: '/stores' },
]
    
</script>
<template>
    <header class="sticky top-4 z-50 max-w-6xl mx-auto px-7">
      <div class="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 px-6 py-3 flex items-center justify-between gap-40 ">
        
        <!-- Logo Section -->
        <div class="flex items-center gap-3">
          <span class="text-3xl font-black text-blue-600 tracking-tight">iOne</span>
          <div class="h-6 w-1 bg-gray-300"></div>
          <div class="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
            <i class="pi pi-apple text-base text-black"></i>
            <span class="leading-tight">Authorized<br>Reseller</span>
          </div>
        </div>

        <!-- Navigation Links -->
        <nav class="hidden md:flex items-center gap-10">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.name" 
            :to="item.path"
            @click="activeNav = item.name"
            class="relative text- font-medium transition-colors hover:text-blue-600 py-1"
            :class="activeNav === item.name ? 'text-black font-semibold' : 'text-gray-600'"
          >
            {{ item.name }}
            <!-- Active Underline Indicator -->
            <span 
              v-if="activeNav === item.name" 
              class="absolute bottom-0 left-0 w-full h-1 bg-purple-600 rounded-full"
            ></span>
          </NuxtLink>
        </nav>

        <!-- Search Icon -->
        <button class="p-2 text-gray-600 hover:text-black transition-colors rounded-full hover:bg-gray-100">
          <i class="pi pi-search text-lg"></i>
        </button>
      </div>
    </header>
    <section class=" mx-55 py-8">
        <Swiper
            :modules="[Autoplay, Pagination]"
            :slides-per-view="1"
            :loop="true"
            :autoplay="{
                delay: 3000,
                disableOnInteraction: false
            }"
            :pagination="{
                clickable: true
            }"
            class="rounded-xl overflow-hidden"
            >
            <SwiperSlide v-for="(item, index) in banners" :key="index">
                <img
                :src="item"
                class="w-full h-130 object-cover"
                />
            </SwiperSlide>
        </Swiper>
  </section>
  <section>
    <Card/>
  </section>
  <section>
    <p class="font-bold text-4xl my-30 text-center">Find the perfect accesseries for you</p>
    <Accessories/>
  </section>
  <section>
    <p class="font-bold text-4xl my-30 text-center">Our feature Apple accessories</p>
    <AppleAccess/>
  </section>
  <section>
    <Middle/>
  </section>
  <section>
    <LastCard/>
  </section>
  <section>
    <AfterFooter/>
  </section>
</template>