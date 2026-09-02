<!-- app/pages/products/[id].vue -->
<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { Product } from '~/types/product'

const route = useRoute()
const productId = route.params.id

// Fetch product by ID from your API
const { data: product, pending, error } = await useFetch<Product>(`/api/products/${productId}`)
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-12">
    <!-- Back Button -->
    <NuxtLink to="/iphone" class="text-sm text-gray-500 hover:text-black mb-6 inline-block">
      &larr; Back to iPhone
    </NuxtLink>

    <!-- Loading State -->
    <div v-if="pending" class="text-center py-12">Loading product...</div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center text-red-500 py-12">
      Failed to load product details.
    </div>

    <!-- Detail View -->
    <div v-else-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="bg-gray-100 rounded-2xl p-8 flex justify-center">
        <img :src="product.image" :alt="product.name" class="max-h-96 object-contain" />
      </div>

      <div class="space-y-4">
        <h1 class="text-4xl font-bold text-gray-900">{{ product.name }}</h1>
        <p class="text-2xl font-semibold text-gray-700">{{ product.price }}</p>
        
        <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-colors">
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>