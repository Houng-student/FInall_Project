<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)
const isProfileMenuOpen = ref(false)

const userProfile = ref({
  name: 'Sok San',
  avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=SokSan',
  isLoggedIn: true
})

// Navigation Items
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Mac', path: '/mac' },
  { name: 'iPad', path: '/ipad' },
  { name: 'iPhone', path: '/iphone' },
  { name: 'Accessories', path: '/accessories' },
]

// Automatic close when page route changes
watch(() => route.path, () => {
  isMenuOpen.value = false
  isProfileMenuOpen.value = false
})
</script>

<template>
  <header class="sticky top-4 z-50 max-w-7xl mx-auto px-4 sm:px-7">
    <!-- Main Navbar Bar -->
    <div class="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
      
      <!-- Mobile Hamburger Button (Left Side) -->
      <button 
        type="button"
        @click="isMenuOpen = true" 
        aria-label="Open Navigation Menu"
        class="lg:hidden p-2 text-gray-800 hover:text-black transition-all active:scale-95 rounded-xl hover:bg-gray-100 -ml-2"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Logo Section -->
      <NuxtLink to="/" class="flex items-center gap-3 shrink-0">
        <span class="text-2xl sm:text-3xl font-black text-blue-600 tracking-tight">Etec</span>
        <div class="h-5 sm:h-6 w-1 bg-gray-300"></div>
        <div class="flex items-center gap-1.5 text-[10px] sm:text-xs text-gray-500 font-medium">
          <i class="pi pi-apple text-sm sm:text-base text-black"></i>
          <span class="leading-tight">Authorized<br>Reseller</span>
        </div>
      </NuxtLink>

      <!-- Desktop Navigation Links -->
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
      <div class="flex items-center gap-2 sm:gap-3 shrink-0">
        <!-- Search Button -->
        <button type="button" aria-label="Search" class="p-2 text-gray-600 hover:text-black transition-colors rounded-full hover:bg-gray-100">
          <i class="pi pi-search text-base sm:text-lg"></i>
        </button>

        <!-- Cart Icon -->
        <CartIcon />

        <!-- User Profile Avatar & Dropdown -->
        <div class="relative">
          <button 
            v-if="userProfile.isLoggedIn"
            @click="isProfileMenuOpen = !isProfileMenuOpen"
            type="button" 
            class="flex items-center justify-center p-0.5 rounded-full border border-gray-200 hover:border-blue-500 transition-all focus:outline-none"
          >
            <img 
              :src="userProfile.avatar" 
              alt="User Avatar" 
              class="w-8 h-8 rounded-full object-cover bg-gray-100"
            />
          </button>

          <!-- Dropdown Menu -->
          <div 
            v-if="userProfile.isLoggedIn && isProfileMenuOpen" 
            class="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150"
          >
            <div class="px-4 py-2 border-b border-gray-100">
              <p class="text-xs text-gray-400">Logged in as</p>
              <p class="text-sm font-semibold text-gray-800 truncate">{{ userProfile.name }}</p>
            </div>
            
            <NuxtLink 
              to="/profile" 
              class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
            >
              <i class="pi pi-user text-sm"></i>
              My Profile
            </NuxtLink>

            <button 
              @click="userProfile.isLoggedIn = false" 
              class="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 text-left"
            >
              <i class="pi pi-sign-out text-sm"></i>
              Logout
            </button>
          </div>
        </div>

        <!-- Auth Buttons (When Not Logged In) -->
        <div v-if="!userProfile.isLoggedIn" class="hidden sm:flex items-center gap-2">
          <NuxtLink 
            to="/auth/login"
            class="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-blue-600 border border-gray-300 hover:border-blue-600 rounded-xl transition-all duration-200"
          >
            Login
          </NuxtLink>

          <NuxtLink 
            to="/auth/register"
            class="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md hover:shadow-blue-500/20 transition-all duration-200"
          >
            Register
          </NuxtLink>
        </div>
      </div>

    </div>

    <!-- Mobile Left Offcanvas Drawer -->
    <ClientOnly>
      <Teleport to="body">
        <!-- Overlay -->
        <div 
          v-if="isMenuOpen" 
          @click="isMenuOpen = false"
          class="fixed inset-0 bg-black/30 backdrop-blur-xs z-[998] transition-opacity duration-300"
        ></div>

        <!-- Left Offcanvas Content -->
        <div 
          class="fixed top-0 left-0 h-full w-[75vw] sm:w-72 max-w-xs bg-white z-[999] transition-transform duration-300 ease-in-out p-6 flex flex-col justify-between border-r border-gray-100 shadow-xl"
          :class="isMenuOpen ? 'translate-x-0' : '-translate-x-full'"
        >
          <div>
            <!-- Header inside Drawer -->
            <div class="flex items-center justify-between pb-4 border-b border-gray-100">
              <div class="flex items-center gap-2">
                <span class="text-xl font-black text-blue-600 tracking-tight">Etec</span>
                <div class="h-4 w-0.5 bg-gray-300"></div>
                <span class="text-[10px] text-gray-500 font-medium leading-tight">Authorized<br>Reseller</span>
              </div>

              <button 
                type="button"
                @click="isMenuOpen = false" 
                aria-label="Close Menu"
                class="p-1.5 text-gray-400 hover:text-black transition-colors rounded-full hover:bg-gray-100"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Profile Badge (Mobile) -->
            <div v-if="userProfile.isLoggedIn" class="my-4 p-3 bg-gray-50 rounded-xl flex items-center gap-3">
              <img :src="userProfile.avatar" alt="User Profile" class="w-10 h-10 rounded-full bg-white border border-gray-200" />
              <div class="overflow-hidden">
                <h4 class="text-sm font-semibold text-gray-800 truncate">{{ userProfile.name }}</h4>
                <NuxtLink to="/profile" class="text-xs text-blue-600 font-medium hover:underline">View Profile</NuxtLink>
              </div>
            </div>

            <!-- Mobile Navigation -->
            <nav class="flex flex-col gap-4 mt-4 px-1">
              <NuxtLink 
                v-for="item in navItems" 
                :key="item.name" 
                :to="item.path"
                class="relative w-fit font-medium transition-colors hover:text-blue-600 py-1 text-base"
                :class="route.path === item.path ? 'text-black font-semibold' : 'text-gray-600'"
              >
                {{ item.name }}
                <span 
                  v-if="route.path === item.path" 
                  class="absolute bottom-0 left-0 w-full h-1 bg-purple-600 rounded-full"
                ></span>
              </NuxtLink>
            </nav>

            <!-- Mobile Login & Register Buttons -->
            <div v-if="!userProfile.isLoggedIn" class="flex sm:hidden flex-col gap-2 mt-6 pt-4 border-t border-gray-100">
              <NuxtLink 
                to="/auth/login"
                class="w-full text-center py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-xl"
              >
                Login
              </NuxtLink>
              <NuxtLink 
                to="/auth/register"
                class="w-full text-center py-2 text-sm font-medium text-white bg-blue-600 rounded-xl shadow-md"
              >
                Register
              </NuxtLink>
            </div>
          </div>

          <!-- Drawer Footer -->
          <div class="pt-4 border-t border-gray-100 flex flex-col gap-3 text-xs text-gray-400">
            <div class="flex items-center justify-between text-black font-medium">
              <div class="flex items-center gap-1.5">
                <i class="pi pi-apple"></i>
                <span>ETEC STORE</span>
              </div>
            </div>
          </div>
        </div>
      </Teleport>
    </ClientOnly>
  </header>
</template>