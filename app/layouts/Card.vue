<script setup lang="ts" >
    
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
            image:
            "https://i.pinimg.com/736x/31/51/40/315140a9705a6788c2c6e20b5c4723a5.jpg",
        },
        {
            id: 2,
            name: "iPad Air 13-inch (M4)",
            price: "From $1079",
            image:
            "https://i.pinimg.com/736x/65/16/99/651699975e151d5c7f9b0956e785a8ec.jpg",
        },
        {
            id: 3,
            name: "iPhone 17e",
            price: "From $779",
            image:
            "https://i.pinimg.com/736x/b9/f8/4a/b9f84ae8d614165e2311035848bab0b5.jpg",
        },
        {
            id: 4,
            name: "Apple Watch Series 11",
            price: "From $479",
            image:
            "https://i.pinimg.com/736x/65/16/99/651699975e151d5c7f9b0956e785a8ec.jpg",
        },
        ];
</script>
<template>
    <section>
    <h1 class="text-4xl text-center my-10">Explore the latest Apple products</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-55">
      <div v-for="pro in Products" :key="pro.id" class="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
        <div class="h-50 flex items-center justify-center bg-white">
          <img :src="pro.image" :alt="pro.name" class="h-44 object-contain group-hover:scale-105 transition duration-300"/>
        </div>

        <div class="px-6 py-5">
          <h2 class="text-2xl font-medium text-gray-800">
            {{ pro.name }}
          </h2>

          <p class="text-gray-400 mt-4 text-lg">
            {{ pro.price }}
          </p>
        </div>

        <div class="border-t px-6 py-3 flex justify-end items-center cursor-pointer hover:bg-gray-50">
          <button
            class="text-blue-600 font-medium flex items-center gap-2"
          >
            Learn More
            <span class="text-xl">›</span>
          </button>
        </div>

      </div>

    </div>
  </section>
</template>