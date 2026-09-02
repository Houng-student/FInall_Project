<script setup lang="ts">

    type iphone = {
        id:number,
        image: string,
        name:string,
        price:string,
        oldPrice:string,
        discount:string,
        reviews:number
    }
    const promoProducts = ref([
    { id: 1, name: 'Samsung Galaxy S24 Ultra', price: '1 049', oldPrice: '1 249', discount: '-16%', reviews: 120, image: 'https://i.pinimg.com/1200x/d3/a8/cf/d3a8cff17a11fb159161bc6d895c97cb.jpg' },
    { id: 2, name: 'iPhone 14', price: '729', oldPrice: '849', discount: '-14%', reviews: 95, image: 'https://i.pinimg.com/736x/57/cd/91/57cd91258024123d8fa45c65dc5e64aa.jpg' },
    { id: 3, name: 'Google Pixel 8', price: '599', oldPrice: '699', discount: '-14%', reviews: 74, image: 'https://i.pinimg.com/1200x/ed/93/e5/ed93e514854b5aac82409189a813db4e.jpg' },
    { id: 4, name: 'Xiaomi 13T Pro', price: '549', oldPrice: '649', discount: '-15%', reviews: 88, image: 'https://i.pinimg.com/1200x/aa/7a/ad/aa7aad823f3ef787cbef7b545f261eb3.jpg' },
    ]);
</script>
<template>
    <section class="max-w-7xl mx-auto px-8 py-12">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">Promotions</h2>
        <a href="#" class="text-sm text-blue-600 hover:underline font-medium">Voir toutes les promotions</a>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="product in promoProducts" :key="product.id" class="relative border border-gray-200 rounded-xl p-4 flex flex-col items-center hover:shadow-lg transition">
          <span class="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">
            Promo
          </span>
          <button class="absolute top-3 right-3 text-gray-400 hover:text-red-500">♡</button>
          <img :src="product.image" :alt="product.name" class="w-36 h-36 object-contain my-4" />
          <h3 class="text-sm font-semibold text-center line-clamp-1">{{ product.name }}</h3>
          <div class="text-yellow-400 text-xs my-2">★★★★★ <span class="text-gray-400">({{ product.reviews }})</span></div>
          <div class="flex items-center space-x-2 mt-auto">
            <span class="font-bold text-base">{{ product.price }} $</span>
            <span class="line-through text-xs text-gray-400">{{ product.oldPrice }} $</span>
            <span class="text-xs font-bold text-red-600">{{ product.discount }}</span>
          </div>
        </div>
      </div>
    </section>
</template>