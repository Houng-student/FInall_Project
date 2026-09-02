<script setup lang="ts">
type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

const Products: Product[] = [
  {
    id: 1,
    name: "MacBook Neo 13-inch",
    price: "From $799",
    image: "https://i.pinimg.com/736x/ac/c2/e7/acc2e74b3da541155f5286f80c12b8ac.jpg",
  },
  {
    id: 2,
    name: "iPad Air 13-inch (M4)",
    price: "From $1079",
    image: "https://i.pinimg.com/736x/65/16/99/651699975e151d5c7f9b0956e785a8ec.jpg",
  },
  {
    id: 3,
    name: "iPhone 17e",
    price: "From $779",
    image: "https://i.pinimg.com/736x/b9/f8/4a/b9f84ae8d614165e2311035848bab0b5.jpg",
  },
  {
    id: 4,
    name: "Apple Watch Series 11",
    price: "From $479",
    image: "https://i.pinimg.com/736x/65/16/99/651699975e151d5c7f9b0956e785a8ec.jpg",
  },
];
</script>

<template>
  <section class="max-w-7xl mx-auto px-8 py-12">
    <h1 class="text-2xl font-medium text-gray-800 mb-8">
      Explore the latest Apple products
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div 
        v-for="pro in Products" 
        :key="pro.id"  class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
        <div class="p-4">
          <div class="h-40 flex items-center justify-center mb-6">
            <img 
              :src="pro.image" 
              :alt="pro.name" 
              class="max-h-full max-w-full object-contain"
            />
          </div>

          <!-- Product Info -->
          <h2 class="text-xl font-medium text-slate-800 leading-snug">
            {{ pro.name }}
          </h2>
          <p class="text-slate-400 font-normal mt-3 text-base">
            {{ pro.price }}
          </p>
        </div>
        <div class="bg-slate-50/70 border-t border-slate-100 px-6 py-3.5 flex justify-end items-center">
          <button class="text-slate-700 hover:text-blue-600 font-medium text-sm flex items-center gap-1 transition-colors">
            <span>Learn More</span>
            <i class="pi pi-angle-right text-base text-slate-600"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>