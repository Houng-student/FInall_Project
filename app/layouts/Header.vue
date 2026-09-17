<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

// Removed Login & Register from the general navigation list
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
    <div class="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 px-6 py-3 flex items-center justify-between gap-6">
      
      <!-- Logo Section -->
      <div class="flex items-center gap-3 shrink-0">
        <span class="text-3xl font-black text-blue-600 tracking-tight">Etec</span>
        <div class="h-6 w-1 bg-gray-300"></div>
        <div class="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
          <i class="pi pi-apple text-base text-black"></i>
          <span class="leading-tight">Authorized<br>Reseller</span>
        </div>
      </div>
 
      <!-- Navigation Links -->
      <nav class="hidden lg:flex items-center gap-8">
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.name" 
          :to="item.path"
          class="relative font-medium transition-colors hover:text-blue-600 py-1 text-sm"
          :class="route.path === item.path ? 'text-black font-semibold' : 'text-gray-600'"
        >
          {{ item.name }}
         
          <span 
            v-if="route.path === item.path" 
            class="absolute bottom-0 left-0 w-full h-1 bg-purple-600 rounded-full"
          ></span>
        </NuxtLink>
      </nav>

      <!-- Right Action Items -->
      <div class="flex items-center gap-3 shrink-0">
        <CartIcon />

        <button class="p-2 text-gray-600 hover:text-black transition-colors rounded-full hover:bg-gray-100">
          <i class="pi pi-search text-lg"></i>
        </button>

        <!-- Login Button (Outline style) -->
        <NuxtLink 
          to="/auth/login"
          class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 border border-gray-300 hover:border-blue-600 rounded-xl transition-all duration-200"
        >
          Login
        </NuxtLink>

        <!-- Register Button (Solid CTA style) -->
        <NuxtLink 
          to="/auth/register"
          class="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md hover:shadow-blue-500/20 transition-all duration-200"
        >
          Register
        </NuxtLink>
      </div>

    </div>
  </header>
</template>