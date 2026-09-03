<template>
  <div class="bg-gray-50 text-gray-900 font-sans min-h-screen">
    <Header :nav-items="navItems" />
    <section class="bg-white py-12 px-6 text-center border-b border-gray-100">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">MacBook Pro</h1>
        <p class="text-lg md:text-xl text-gray-500 mt-2 font-medium">Mind-blowing. Head-turning.</p>
        
        <div class="mt-6 flex justify-center space-x-4">
          <button class="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">Buy</button>
          <button class="border border-gray-300 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">Learn more</button>
        </div>

        <div class="mt-8 flex justify-center">
          <img 
            src="https://i.pinimg.com/1200x/5c/05/fa/5c05fa6d77b525404774182e8991d804.jpg" 
            alt="MacBook Pro" 
            class="max-w-4xl w-full object-cover mx-auto"
          />
        </div>
      </div>
    </section>

    <section class="py-16 px-6 max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900">Explore the lineup.</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Main Product Card wrapped in NuxtLink -->
        <NuxtLink 
          v-for="product in products" 
          :key="product.id"
          :to="`/products/${product.id}`"
          class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between text-center hover:shadow-md transition cursor-pointer group"
        >
          <div class="h-44 flex items-center justify-center mb-4">
            <img :src="product.image" :alt="product.title" class="max-h-full max-w-full object-contain" />
          </div>

          <div>
            <h3 class="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">{{ product.title }}</h3>
            <p class="text-xs text-gray-500 mt-1">{{ product.subtitle }}</p>
            <p class="text-sm font-semibold text-gray-900 mt-3">{{ product.price }}</p>
          </div>
 
          <div class="mt-6 flex flex-col space-y-2">
            <!-- Navigation links inside card -->
            <NuxtLink 
              :to="`/products/${product.id}`" 
              class="w-full bg-black text-white text-xs py-2 rounded-lg font-medium hover:bg-gray-800 transition block text-center"
            >
              Buy
            </NuxtLink>
            <NuxtLink 
              :to="`/products/${product.id}`" 
              class="w-full border border-gray-300 text-xs py-2 rounded-lg font-medium hover:bg-gray-50 transition block text-center text-gray-900"
            >
              Learn more
            </NuxtLink>
          </div>
        </NuxtLink>
      </div>
    </section>
    
    <section>
      <AfterFooter/>
    </section>
  </div>
</template>

<script setup lang="ts">
import AfterFooter from '~/layouts/AfterFooter.vue';
import Header from '~/layouts/Header.vue';

type Product = {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  image: string;
}
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Mac', path: '/mac' },
  { name: 'IPad', path: '/ipad' },
  { name: 'IPhone', path: '/iphone' },
  { name: 'Accessories', path: '/accessories' },
  { name: 'Service', path: '/service' },
  { name: 'Offers', path: '/offers' },
  { name: 'Stores', path: '/stores' },
]
const products: Product[] = [
  {
    id: 1,
    title: 'MacBook Air',
    subtitle: '13" and 15" M2/M3 chip',
    price: 'From $1,099',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    title: 'MacBook Pro',
    subtitle: '14" and 16" M3 Pro/Max',
    price: 'From $1,599',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    title: 'iMac',
    subtitle: '24" 4.5K Retina display',
    price: 'From $1,299',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 4,
    title: 'Mac Studio',
    subtitle: 'M2 Max and M2 Ultra',
    price: 'From $1,999',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 5,
    title: 'MacBook Air',
    subtitle: '13" and 15" M2/M3 chip',
    price: 'From $1,099',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 6,
    title: 'MacBook Pro',
    subtitle: '14" and 16" M3 Pro/Max',
    price: 'From $1,599',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 7,
    title: 'iMac',
    subtitle: '24" 4.5K Retina display',
    price: 'From $1,299',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 8,
    title: 'Mac Studio',
    subtitle: 'M2 Max and M2 Ultra',
    price: 'From $1,999',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=400&q=80'
  }
]; 
</script>