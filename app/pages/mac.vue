<script setup lang="ts">
    import { ref } from 'vue'
    const activeNav = ref('Mac')
    const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Mac', path: '/mac' },
    { name: 'IPad', path: '/ipad' },
    { name: 'IPhone', path: '/iphone' },
    { name: 'Accessories', path: '/accessories' },
    { name: 'Service', path: '/service' },
    { name: 'Offers', path: '/offers' },
    { name: 'Stores', path: '/stores' },
    ]
import CategorySlider from "~/components/CategorySlider.vue"
import SidebarFilter from "~/components/SidebarFilter.vue"
import ProductCard from "~/components/ProductCard.vue"

const products = [
  {
    id: 1,
    brand: "KROSS",
    name: "Luma Jacket",
    price: 190,
    discount: "-10%",
    image: "https://i.pinimg.com/236x/bd/6b/2c/bd6b2c554b0c0e8e00d1edf292c8a1ec.jpg",
  },
  {
    id: 2,
    brand: "VAN",
    name: "Stoik Scarf",
    price: 40,
    discount: "-15%",
    image: "https://i.pinimg.com/236x/bd/6b/2c/bd6b2c554b0c0e8e00d1edf292c8a1ec.jpg",
  },
  {
    id: 3,
    brand: "WILF",
    name: "Defi Sweater",
    price: 215,
    discount: "-10%",
    image: "https://i.pinimg.com/1200x/4f/87/6d/4f876d6bfe9c5b00883e9feef756941c.jpg",
  },
  {
    id: 4,
    brand: "SEED",
    name: "Arca Jacket",
    price: 174,
    discount: "-11%",
    image: "https://i.pinimg.com/736x/59/48/e2/5948e21ac6be9736a773abc156cd0ac8.jpg",
  },
  {
    id: 5,
    brand: "WILF",
    name: "Hall Shoes",
    price: 129,
    discount: "-15%",
    image: "https://i.pinimg.com/736x/6f/e2/68/6fe268c7854f1407a432e82836c473d2.jpg",
  },
  {
    id: 6,
    brand: "VAN",
    name: "Pop Beanie",
    price: 45,
    discount: "-12%",
    image: "https://i.pinimg.com/736x/6f/e2/68/6fe268c7854f1407a432e82836c473d2.jpg",
  },
]
</script>
<template>
  <div class="bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900 font-sans relative overflow-x-hidden">
    <!-- Floating Header -->
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
</div>
  <section>
     <div class="bg-[#faf7f2] ">
    <div class="max-w-7xl mx-auto my-0">
      <CategorySlider />
      <div class="grid grid-cols-12 gap-8 mt-8">
        <SidebarFilter class="col-span-3"/>
        <div class="col-span-9">
          <div class="flex justify-between mb-6">
            <p class="text-gray-600">9 Products</p>

            <select class="border rounded-md px-4 py-2 bg-white">
              <option>Highest Price</option>
              <option>Lowest Price</option>
            </select>
          </div>

          <div class="grid md:grid-cols-3 gap-6">
            <ProductCard
            v-for="item in products"
            :key="item.id"
            :product="item"/>
          </div>

        </div>

      </div>

    </div>

  </div>
  </section>
</template>