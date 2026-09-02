<script setup lang="ts">

import type { Product } from "~/types/product"

const route = useRoute()

const { data: products } =
  await useFetch<Product[]>("/data/products.json")

const product = computed(() => {

  return products.value?.find(
    item => item.id === Number(route.params.id)
  )

})

</script>


<template>

  <div class="min-h-screen bg-[#faf8f4]">

    <Header />

    <main class="max-w-6xl mx-auto px-6 py-12">

      <div
        v-if="product"
        class="grid grid-cols-2 gap-12"
      >

        <!-- Image -->
        <div>

          <img
            :src="product.image"
            :alt="product.name"
            class="w-full object-cover
                   rounded-2xl"
          />

        </div>


        <!-- Information -->
        <div class="flex flex-col justify-center">

          <p
            class="text-sm uppercase tracking-widest
                   text-gray-400"
          >
            {{ product.brand }}
          </p>

          <h1
            class="text-4xl font-bold mt-3"
          >
            {{ product.name }}
          </h1>

          <p
            class="text-orange-500 text-3xl
                   font-bold mt-5"
          >
            ${{ product.price }}
          </p>

          <p class="text-gray-600 mt-6 leading-7">
            {{ product.description }}
          </p>

          <p class="mt-5">
            Category:
            <span class="font-semibold">
              {{ product.category }}
            </span>
          </p>


          <!-- Add to Cart -->
          <button
            class="mt-8 bg-black text-white
                   py-4 rounded-xl
                   hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>

        </div>

      </div>

      <div v-else>
        Product not found.
      </div>

    </main>

  </div>

</template>