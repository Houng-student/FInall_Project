<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Mac', path: '/mac' },
  { name: 'iPad', path: '/ipad' },
  { name: 'iPhone', path: '/iphone' },
  { name: 'Accessories', path: '/accessories' },
  { name: 'Service', path: '/service' },
  { name: 'Offers', path: '/offers' },
  { name: 'Stores', path: '/stores' }
]
</script>

<template>
  <header class="sticky top-4 z-50 max-w-7xl mx-auto px-7">
    <div class="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 px-6 py-3 flex items-center justify-between gap-40">
      
      <!-- Logo Section -->
      <div class="flex items-center gap-3">
        <span class="text-3xl font-black text-blue-600 tracking-tight">Etec</span>
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
          class="relative font-medium transition-colors hover:text-blue-600 py-1"
          :class="route.path === item.path ? 'text-black font-semibold' : 'text-gray-600'"
        >
          {{ item.name }}
          <!-- Active Underline Indicator -->
          <span 
            v-if="route.path === item.path" 
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
</template>