<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Products</h1>

    <div v-if="pending">Loading products...</div>
    <div v-else-if="error" class="text-red-500">
      Error loading products: {{ error.message }}
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div 
        v-for="product in products" 
        :key="product.productId" 
        class="border rounded-lg p-4 shadow"
      >
        <img 
          :src="product.image" 
          :alt="product.name" 
          class="w-full h-48 object-cover rounded mb-2" 
        />
        <h2 class="text-xl font-semibold">{{ product.name }}</h2>
        <p class="text-gray-600">{{ product.chipName }} ({{ product.ramGb }}GB RAM)</p>
        <p class="text-sm text-gray-500">{{ product.displayName }}</p>
        <p class="text-sm text-gray-500">Camera: {{ product.mainCameraMp }} MP</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Define TypeScript interface based on your database schema
interface Product {
  productId: number
  name: string
  chipName: string
  cpuCores: string
  gpuCores: string
  ramGb: number
  displayName: string
  displayResolution: string
  mainCameraMp: number
  frontCameraMp: number
  osVersion: string
  image: string
  isArchived: boolean
}

// Fetch data from local .NET API
const { data: products, pending, error } = await useFetch<Product[]>('https://localhost:7234/api/products')
console.log('Fetched products:', products.value)
</script>