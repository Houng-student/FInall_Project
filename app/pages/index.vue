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
    import Header from '~/layouts/Header.vue';

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
    <Header :nav-items="navItems" />
    <section class=" mx-auto py-8 px-37">
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
      <section class="bg-white">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-55 px-6 md:px-12 py-8 text-xs md:text-sm">
        <div class="flex items-center space-x-3">
          <img class="w-10" src="https://cdn-icons-png.flaticon.com/128/17865/17865314.png" alt="">
          <div>
            <strong class="block font-semibold text-gray-900">Livraison 24h offerte</strong>
            <span class="text-gray-500">Dès 50€ d'achat</span>
          </div>
        </div>
        <div class="flex items-center space-x-3">
          <img class="w-10" src="https://cdn-icons-png.flaticon.com/128/3500/3500833.png" alt="">
          <div>
            <strong class="block font-semibold text-gray-900">Paiement en 3x</strong>
            <span class="text-gray-500">Sans frais</span>
          </div>
        </div>
        <div class="flex items-center space-x-3">
          <img class="w-10" src="https://cdn-icons-png.flaticon.com/128/677/677069.png" alt="">
          <div>
            <strong class="block font-semibold text-gray-900">Garantie 2 ans</strong>
            <span class="text-gray-500">Pièces et main-d'œuvre</span>
          </div>
        </div>
        <div class="flex items-center space-x-3">
          <img class="w-10" src="https://cdn-icons-png.flaticon.com/128/18784/18784971.png" alt="">
          <div>
            <strong class="block font-semibold text-gray-900">Satisfait ou remboursé</strong>
            <span class="text-gray-500">Sous 14 jours</span>
          </div>
        </div>
      </div>
    </section>
  <section>
    <Card/>
  </section>
  <section>
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