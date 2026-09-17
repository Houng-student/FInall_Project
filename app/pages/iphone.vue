<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import AfterFooter from '~/layouts/AfterFooter.vue'
import Header from '~/layouts/Header.vue'

const route = useRoute()

const activeTab = ref('All Models')
const tabs = ['All Models', 'iPhone 17 Pro Max', 'iPhone 16 Pro Max', 'iPhone 15 Pro Max', 'iPhone 14 Pro Max', 'iPhone 13 Pro Max', 'iPhone SE']

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

type ProductColor = {
  name: string;
  hex: string;
  image?: string;
}

type Product = {
  id: number;
  name: string;
  isNew: boolean;
  price: string;
  category: string;
  selectedColor: string;
  colors: ProductColor[];
  image: string;
}

const products = ref<Product[]>([
  {
    id: 17,
    name: 'iPhone 15 Pro',
    isNew: true,
    price: 'From $999',
    category: 'iPhone 15 Pro Max',
    selectedColor: '#c2bcb2',
    colors: [
      { name: 'Natural Titanium', hex: '#c2bcb2', image: 'https://i.pinimg.com/736x/44/06/1b/44061b34060973e422570c0485219c72.jpg' },
      { name: 'Blue Titanium', hex: '#2e3641', image: 'https://i.pinimg.com/736x/f4/d3/bf/f4d3bf94944a4a199881500693888516.jpg' },
      { name: 'White Titanium', hex: '#f2f1ec', image: 'https://i.pinimg.com/736x/44/06/1b/44061b34060973e422570c0485219c72.jpg' },
      { name: 'Black Titanium', hex: '#353638', image: 'https://i.pinimg.com/736x/f4/d3/bf/f4d3bf94944a4a199881500693888516.jpg' }
    ],
    image: 'https://i.pinimg.com/1200x/3c/da/92/3cda92d33c5411eef69b3387de362dba.jpg'
  },
  {
    id: 18,
    name: 'iPhone 15',
    isNew: true,
    price: 'From $799',
    category: 'iPhone 15 Pro Max',
    selectedColor: '#fae7e8',
    colors: [
      { name: 'Pink', hex: '#fae7e8', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' },
      { name: 'Yellow', hex: '#f3e8c9', image: 'https://i.pinimg.com/1200x/2c/72/b1/2c72b1c676062281b5b013da3f6f58f0.jpg' },
      { name: 'Green', hex: '#dbe7d9', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' },
      { name: 'Blue', hex: '#d6e0ea', image: 'https://i.pinimg.com/1200x/2c/72/b1/2c72b1c676062281b5b013da3f6f58f0.jpg' },
      { name: 'Black', hex: '#353638', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' }
    ],
    image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg'
  },
  {
    id: 19,
    name: 'iPhone 15 Pro',
    isNew: true,
    price: 'From $999',
    category: 'iPhone 15 Pro Max',
    selectedColor: '#c2bcb2',
    colors: [
      { name: 'Natural Titanium', hex: '#c2bcb2', image: 'https://i.pinimg.com/736x/44/06/1b/44061b34060973e422570c0485219c72.jpg' },
      { name: 'Blue Titanium', hex: '#2e3641', image: 'https://i.pinimg.com/736x/f4/d3/bf/f4d3bf94944a4a199881500693888516.jpg' },
      { name: 'White Titanium', hex: '#f2f1ec', image: 'https://i.pinimg.com/736x/44/06/1b/44061b34060973e422570c0485219c72.jpg' },
      { name: 'Black Titanium', hex: '#353638', image: 'https://i.pinimg.com/736x/f4/d3/bf/f4d3bf94944a4a199881500693888516.jpg' }
    ],
    image: 'https://i.pinimg.com/736x/ae/a0/68/aea06803e988d5a1791d2631c944b9f1.jpg'
  },
  {
    id: 20,
    name: 'iPhone 1se',
    isNew: true,
    price: 'From $799',
    category: 'iPhone SE',
    selectedColor: '#fae7e8',
    colors: [
      { name: 'Pink', hex: '#fae7e8', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' },
      { name: 'Yellow', hex: '#f3e8c9', image: 'https://i.pinimg.com/1200x/2c/72/b1/2c72b1c676062281b5b013da3f6f58f0.jpg' },
      { name: 'Green', hex: '#dbe7d9', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' },
      { name: 'Blue', hex: '#d6e0ea', image: 'https://i.pinimg.com/1200x/2c/72/b1/2c72b1c676062281b5b013da3f6f58f0.jpg' },
      { name: 'Black', hex: '#353638', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' }
    ],
    image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg'
  },
  {
    id: 21,
    name: 'iPhone 15 pro',
    isNew: true,
    price: 'From $999',
    category: 'iPhone 15 Pro Max',
    selectedColor: '#c2bcb2',
    colors: [
      { name: 'Natural Titanium', hex: '#c2bcb2', image: 'https://i.pinimg.com/736x/44/06/1b/44061b34060973e422570c0485219c72.jpg' },
      { name: 'Blue Titanium', hex: '#2e3641', image: 'https://i.pinimg.com/736x/f4/d3/bf/f4d3bf94944a4a199881500693888516.jpg' },
      { name: 'White Titanium', hex: '#f2f1ec', image: 'https://i.pinimg.com/736x/44/06/1b/44061b34060973e422570c0485219c72.jpg' },
      { name: 'Black Titanium', hex: '#353638', image: 'https://i.pinimg.com/736x/f4/d3/bf/f4d3bf94944a4a199881500693888516.jpg' }
    ],
    image: 'https://i.pinimg.com/736x/44/06/1b/44061b34060973e422570c0485219c72.jpg'
  },
  {
    id: 22,
    name: 'iPhone 14 pro max',
    isNew: true,
    price: 'From $799',
    category: 'iPhone 14 Pro Max',
    selectedColor: '#fae7e8',
    colors: [
      { name: 'Pink', hex: '#fae7e8', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' },
      { name: 'Yellow', hex: '#f3e8c9', image: 'https://i.pinimg.com/1200x/2c/72/b1/2c72b1c676062281b5b013da3f6f58f0.jpg' },
      { name: 'Green', hex: '#dbe7d9', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' },
      { name: 'Blue', hex: '#d6e0ea', image: 'https://i.pinimg.com/1200x/2c/72/b1/2c72b1c676062281b5b013da3f6f58f0.jpg' },
      { name: 'Black', hex: '#353638', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' }
    ],
    image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg'
  },
  {
    id: 7,
    name: 'iPhone SE',
    isNew: true,
    price: 'From $999',
    category: 'iPhone SE',
    selectedColor: '#c2bcb2',
    colors: [
      { name: 'Natural Titanium', hex: '#c2bcb2', image: 'https://i.pinimg.com/736x/44/06/1b/44061b34060973e422570c0485219c72.jpg' },
      { name: 'Blue Titanium', hex: '#2e3641', image: 'https://i.pinimg.com/736x/f4/d3/bf/f4d3bf94944a4a199881500693888516.jpg' },
      { name: 'White Titanium', hex: '#f2f1ec', image: 'https://i.pinimg.com/736x/44/06/1b/44061b34060973e422570c0485219c72.jpg' },
      { name: 'Black Titanium', hex: '#353638', image: 'https://i.pinimg.com/736x/f4/d3/bf/f4d3bf94944a4a199881500693888516.jpg' }
    ],
    image: 'https://i.pinimg.com/736x/44/06/1b/44061b34060973e422570c0485219c72.jpg'
  },
  {
    id: 8,
    name: 'iPhone 14',
    isNew: true,
    price: 'From $799',
    category: 'iPhone 14',
    selectedColor: '#fae7e8',
    colors: [
      { name: 'Pink', hex: '#fae7e8', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' },
      { name: 'Yellow', hex: '#f3e8c9', image: 'https://i.pinimg.com/1200x/2c/72/b1/2c72b1c676062281b5b013da3f6f58f0.jpg' },
      { name: 'Green', hex: '#dbe7d9', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' },
      { name: 'Blue', hex: '#d6e0ea', image: 'https://i.pinimg.com/1200x/2c/72/b1/2c72b1c676062281b5b013da3f6f58f0.jpg' },
      { name: 'Black', hex: '#353638', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' }
    ],
    image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg'
  },
  {
    id: 9,
    name: 'iPhone 17 Pro Max',
    isNew: true,
    price: 'From $799',
    category: 'iPhone 17 Pro Max',
    selectedColor: '#fae7e8',
    colors: [
      { name: 'Pink', hex: '#fae7e8', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' },
      { name: 'Yellow', hex: '#f3e8c9', image: 'https://i.pinimg.com/1200x/2c/72/b1/2c72b1c676062281b5b013da3f6f58f0.jpg' },
      { name: 'Green', hex: '#dbe7d9', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' },
      { name: 'Blue', hex: '#d6e0ea', image: 'https://i.pinimg.com/1200x/2c/72/b1/2c72b1c676062281b5b013da3f6f58f0.jpg' },
      { name: 'Black', hex: '#353638', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' }
    ],
    image: 'https://i.pinimg.com/1200x/63/6f/51/636f5197727e12959d4b9b9cd94936b4.jpg'
  },
  {
    id: 10,
    name: 'iPhone 17 Pro Max',
    isNew: true,
    price: 'From $799',
    category: 'iPhone 17 Pro Max',
    selectedColor: '#fae7e8',
    colors: [
      { name: 'Pink', hex: '#fae7e8', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' },
      { name: 'Yellow', hex: '#f3e8c9', image: 'https://i.pinimg.com/1200x/2c/72/b1/2c72b1c676062281b5b013da3f6f58f0.jpg' },
      { name: 'Green', hex: '#dbe7d9', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' },
      { name: 'Blue', hex: '#d6e0ea', image: 'https://i.pinimg.com/1200x/2c/72/b1/2c72b1c676062281b5b013da3f6f58f0.jpg' },
      { name: 'Black', hex: '#353638', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' }
    ],
    image: 'https://i.pinimg.com/1200x/cb/13/4e/cb134ed9a8c5f2e141902744b2a8bca3.jpg'
  },
  {
    id: 11,
    name: 'iPhone 17 ',
    isNew: true,
    price: 'From $799',
    category: 'iPhone 17 Pro Max',
    selectedColor: '#fae7e8',
    colors: [
      { name: 'Pink', hex: '#fae7e8', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' },
      { name: 'Yellow', hex: '#f3e8c9', image: 'https://i.pinimg.com/1200x/2c/72/b1/2c72b1c676062281b5b013da3f6f58f0.jpg' },
      { name: 'Green', hex: '#dbe7d9', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' },
      { name: 'Blue', hex: '#d6e0ea', image: 'https://i.pinimg.com/1200x/2c/72/b1/2c72b1c676062281b5b013da3f6f58f0.jpg' },
      { name: 'Black', hex: '#353638', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' }
    ],
    image: 'https://i.pinimg.com/736x/57/cd/91/57cd91258024123d8fa45c65dc5e64aa.jpg'
  },
  {
    id: 12,
    name: 'iPhone 16 Pro Max',
    isNew: true,
    price: 'From $799',
    category: 'iPhone 16 Pro Max',
    selectedColor: '#fae7e8',
    colors: [
      { name: 'Pink', hex: '#fae7e8', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' },
      { name: 'Yellow', hex: '#f3e8c9', image: 'https://i.pinimg.com/1200x/2c/72/b1/2c72b1c676062281b5b013da3f6f58f0.jpg' },
      { name: 'Green', hex: '#dbe7d9', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' },
      { name: 'Blue', hex: '#d6e0ea', image: 'https://i.pinimg.com/1200x/2c/72/b1/2c72b1c676062281b5b013da3f6f58f0.jpg' },
      { name: 'Black', hex: '#353638', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' }
    ],
    image: 'https://i.pinimg.com/736x/b4/7c/03/b47c0372aa7ccf43c55fdcb6c47c9a84.jpg'
  },
  {
    id: 13,
    name: 'iPhone 16 Pro Max',
    isNew: true,
    price: 'From $799',
    category: 'iPhone 16 Pro Max',
    selectedColor: '#fae7e8',
    colors: [
      { name: 'Pink', hex: '#fae7e8', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' },
      { name: 'Yellow', hex: '#f3e8c9', image: 'https://i.pinimg.com/1200x/2c/72/b1/2c72b1c676062281b5b013da3f6f58f0.jpg' },
      { name: 'Green', hex: '#dbe7d9', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' },
      { name: 'Blue', hex: '#d6e0ea', image: 'https://i.pinimg.com/1200x/2c/72/b1/2c72b1c676062281b5b013da3f6f58f0.jpg' },
      { name: 'Black', hex: '#353638', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' }
    ],
    image: 'https://i.pinimg.com/736x/85/a1/c3/85a1c3aa739334fd74c71807b68c7708.jpg'
  },
  {
    id: 14,
    name: 'iPhone 16 Pro Max',
    isNew: true,
    price: 'From $799',
    category: 'iPhone 16 Pro Max',
    selectedColor: '#fae7e8',
    colors: [
      { name: 'Pink', hex: '#fae7e8', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' },
      { name: 'Yellow', hex: '#f3e8c9', image: 'https://i.pinimg.com/1200x/2c/72/b1/2c72b1c676062281b5b013da3f6f58f0.jpg' },
      { name: 'Green', hex: '#dbe7d9', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' },
      { name: 'Blue', hex: '#d6e0ea', image: 'https://i.pinimg.com/1200x/2c/72/b1/2c72b1c676062281b5b013da3f6f58f0.jpg' },
      { name: 'Black', hex: '#353638', image: 'https://i.pinimg.com/1200x/7b/c0/d2/7bc0d2852296b33ce10e0a31c3305870.jpg' }
    ],
    image: 'https://i.pinimg.com/736x/06/b1/54/06b154f154618dce067ba54302524fc5.jpg'
  }
])

const changeColor = (product: Product, color: ProductColor) => {
  product.selectedColor = color.hex
  if (color.image) {
    product.image = color.image
  }
}

const filteredProducts = computed(() => {
  if (activeTab.value === 'All Models') return products.value
  return products.value.filter(p => p.category === activeTab.value)
})
</script>

<template>
  <div class="min-h-screen bg-[#fafafa] text-[#1d1d1f] font-sans pb-24">
    <Header :nav-items="navItems" />
    
    <section class="text-center pt-16 pb-12 px-4 max-w-3xl mx-auto">
      <h1 class="text-5xl font-bold tracking-tight text-gray-900 mb-4">iPhone</h1>
      <p class="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
        Pro. Beyond. Experience the absolute pinnacle of technology in the palm of your hand.
      </p>
    </section>

    <!-- Sub-category Tabs -->
    <div class="flex justify-center items-center space-x-6 text-xs font-semibold mb-12">
      <button 
        v-for="tab in tabs" 
        :key="tab"
        @click="activeTab = tab"
        class="pb-1 transition-colors"
        :class="activeTab === tab ? 'text-black border-b-2 border-black' : 'text-gray-400 hover:text-gray-700'"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Product Grid -->
    <main class="max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="product in filteredProducts" 
          :key="product.id"
          class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md"
        >
          <NuxtLink :to="`/products/${product.id}`" class="w-full flex flex-col items-center group">
            <div class="w-full h-56 bg-white rounded-xl mb-6 overflow-hidden flex items-center justify-center">
              <img :src="product.image" :alt="product.name" class="h-full w-full object-contain p-4 group-hover:scale-105 transition-transform" />
            </div>

            <span class="text-[10px] font-bold text-orange-600 uppercase tracking-wider mb-1">
              {{ product.isNew ? 'NEW' : '' }}
            </span>
            <h3 class="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
              {{ product.name }}
            </h3>
          </NuxtLink>

          <!-- Interactive Color Swatches -->
          <div class="flex items-center gap-2 mb-4">
            <button
              v-for="color in product.colors"
              :key="color.hex"
              @click="changeColor(product, color)"
              class="w-3.5 h-3.5 rounded-full border border-gray-300 transition-transform cursor-pointer"
              :class="{ 'scale-125 ring-2 ring-blue-500 ring-offset-1': product.selectedColor === color.hex }"
              :style="{ backgroundColor: color.hex }"
              :title="color.name"
            ></button>
          </div>

          <p class="text-xs font-medium text-gray-500 mb-6">{{ product.price }}</p>

          <div class="mt-auto w-full space-y-2">
            <NuxtLink 
              :to="`/products/${product.id}`"
              class="block w-full bg-black hover:bg-gray-800 text-white text-xs font-medium py-2.5 rounded-lg text-center transition-colors"
            >
              Buy
            </NuxtLink>
            <NuxtLink 
              :to="`/products/${product.id}`"
              class="block w-full bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 text-xs font-medium py-2.5 rounded-lg text-center transition-colors"
            >
              Learn more
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
  </div>
  <section>
    <AfterFooter/>
  </section>
</template>