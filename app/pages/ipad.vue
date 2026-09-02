<script setup lang="ts">
import { ref } from 'vue'
import Header from '~/layouts/Header.vue';
import AfterFooter from '~/layouts/AfterFooter.vue';

type Product = {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
}

const products : Product[] = [
  {
    id:1,
    name: 'iPad Pro',
    description: 'The ultimate iPad experience with the most advanced technology.',
    price: 'From $999',
    image: 'https://i.pinimg.com/736x/51/41/2e/51412ef9c808c1ae89162a726026d211.jpg'
  },
  {
    id:2,
    name: 'iPad Air',
    description: 'Serious performance in a thin and light design.',
    price: 'From $599',
    image: 'https://i.pinimg.com/736x/35/13/67/351367d5248f19d80968c35237819946.jpg'
  },
  {
    id:3,
    name: 'iPad',
    description: 'The colorful, all-screen iPad for everyday tasks.',
    price: 'From $349',
    image: 'https://i.pinimg.com/1200x/95/5b/79/955b798d4e9194bc9ff0c1d6cf591d25.jpg'
  },
  {
    id:4,
    name: 'iPad mini',
    description: 'The full iPad experience designed to fit in one hand.',
    price: 'From $499',
    image: 'https://i.pinimg.com/236x/ad/ec/07/adec07cf8256388f4d9849b2fa88b8ec.jpg'
  }
]
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
    <div class="bg-gray-50 text-gray-900 font-sans min-h-screen">
    <Header :nav-items="navItems" />
    
    <section class="bg-white py-12 px-6 text-center border-b border-gray-100">
      <h1 class="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-2">
        iPad Pro
      </h1>
      <p class="text-lg md:text-xl font-medium text-gray-800 mb-1">
        Unbelievably thin. Outrageously powerful.
      </p>
      <p class="text-xs text-gray-500 max-w-md mx-auto mb-6 leading-relaxed">
        The new iPad Pro packs mind-bending performance into an impossibly thin design.
      </p>
      
      <div class="flex items-center justify-center gap-4 text-xs font-medium mb-10">
        <button class="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
          Buy
        </button>
        <a href="#" class="border border-gray-300 text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
          Learn more <span class="text-[10px]">&gt;</span>
        </a>
      </div>

      <div class="max-w-3xl mx-auto bg-gray-200 rounded-2xl overflow-hidden shadow-sm aspect-[16/9] flex items-center justify-center">
        <img 
          src="https://i.pinimg.com/1200x/b9/54/30/b954305212dc819ade776bdc414c087c.jpg" 
          alt="iPad Pro" 
          class="w-full h-full object-cover"
        />
      </div>
    </section>

    <section class="py-16 px-6 max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900">Explore the lineup.</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="product in products" 
          :key="product.id"
          class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between text-center hover:shadow-md transition"
        >
          <div class="h-44 flex items-center justify-center mb-4">
            <img :src="product.image" :alt="product.title" class="max-h-full max-w-full object-contain" />
          </div>

          <div>
            <h3 class="font-bold text-lg text-gray-900">{{ product.title }}</h3>
            <p class="text-xs text-gray-500 mt-1">{{ product.subtitle }}</p>
            <p class="text-sm font-semibold text-gray-900 mt-3">{{ product.price }}</p>
          </div>
 
          <div class="mt-6 flex flex-col space-y-2">
            <button class="w-full bg-black text-white text-xs py-2 rounded-lg font-medium hover:bg-gray-800 transition">Buy</button>
            <button class="w-full border border-gray-300 text-xs py-2 rounded-lg font-medium hover:bg-gray-50 transition">Learn more</button>
          </div>
        </div>
      </div>
    </section>
    <section>
      <AfterFooter/>
    </section>
    </div>
    
</template>