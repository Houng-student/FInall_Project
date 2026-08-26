<script setup lang="ts">
    import { Swiper, SwiperSlide } from "swiper/vue";
    import { Autoplay, Pagination } from "swiper/modules";

    import "swiper/css";
    import "swiper/css/pagination";
    import Card from "./Card.vue";
    import Accessories from "./Accessories.vue";
    import AppleAccess from "./AppleAccess.vue";
    import Middle from "./Middle.vue";
    import LastCard from "./LastCard.vue";

    const banners = [
    "https://i.pinimg.com/736x/b3/1f/53/b31f534ba205b0cebfac15a4579c199c.jpg",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1600",
    "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1600",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1600"
    ];
    
</script>
<template>
    <header >
        <!-- <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4"> -->
            <div class="flex justify-between items-center p-4">
                <div class="flex items-center my-3 ml-55 gap-4">
                    <img class="w-60 h-16 object-cover " src="https://i.pinimg.com/1200x/52/6c/bb/526cbb51f60578eb5c52c6c8d189a881.jpg" alt="eteclogo">
                    <p class="text-xl">ETEC CENTER</p>
                </div>
                <div>
                    <ul class="flex gap-16 mx-55 text-xl text-gray-600">
                        <li><NuxtLink to="/Mac">Mac</NuxtLink></li>
                        <li><NuxtLink to="/IPad">IPad</NuxtLink></li>
                        <li><NuxtLink to="/IPhone">IPhone</NuxtLink></li>
                        <li><NuxtLink to="/Accessories">Accessories</NuxtLink></li>
                        <li><NuxtLink to="/Service">Service</NuxtLink></li>
                        <li><NuxtLink to="/Offers">Offers</NuxtLink></li>
                        <li><NuxtLink to="/Stores">Stores</NuxtLink></li>
                        <p>|</p>

                    </ul>
                </div>
            </div>
        <!-- </div> -->
    </header>
    <div class="bg-gray-700 mx-55 p-3 rounded-xl" >
        <div class="flex justify-between">
            <div class="text-xl">
                <p class=" text-white">Contact us at information@icon2u.com</p>
            </div>
            <div class="text-xl flex items-center gap-3">
                <p class="text-white">Follow us on</p>
                <i class="pi pi-facebook text-white" style="font-size: 2rem"></i>
                <i class="pi pi-instagram text-white" style="font-size: 2rem"></i>
                <i class="pi pi-telegram text-white"style="font-size: 2rem"></i>
                <i class="pi pi-tiktok text-white"style="font-size: 2rem"></i>
            </div>
        </div>
    </div>
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
</template>