<script setup lang="ts">

import type { Product } from "~/types/product"

defineProps<{
  product: Product
}>()

</script>

<template>

  <NuxtLink
    :to="`/products/${product.id}`"
    class="block"
  >

    <div
      class="bg-white rounded-xl overflow-hidden
             hover:shadow-xl transition duration-300
             cursor-pointer"
    >

      <!-- Image -->
      <div class="relative">

        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-72 object-cover"
        />

        <!-- Discount -->
        <div class="absolute top-3 left-3 flex gap-2">

          <span
            class="bg-red-400 text-white text-xs
                   px-2 py-1 rounded"
          >
            {{ product.discount }}
          </span>

          <span
            class="bg-gray-800 text-white text-xs
                   px-2 py-1 rounded"
          >
            SALE
          </span>

        </div>

      </div>


      <!-- Information -->
      <div class="p-4">

        <p
          class="text-xs uppercase tracking-widest
                 text-gray-400"
        >
          {{ product.brand }}
        </p>

        <h2 class="font-semibold text-lg mt-1">
          {{ product.name }}
        </h2>

        <p
          class="text-orange-500 text-xl
                 font-bold mt-2"
        >
          ${{ product.price }}
        </p>

      </div>

    </div>

  </NuxtLink>

</template>