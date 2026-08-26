<script setup lang="ts">
import App from '~/app.vue';

    type iphone = {
        id:number,
        imageUrl: string,
        name:string
    }
    const iphones :iphone[] = 
    [
        {
            id:1,
            imageUrl:"https://i.pinimg.com/1200x/ec/ae/8e/ecae8e45d9ccb4f11de03a1db60997a6.jpg",
            name:"Iphone Air Magsafe Battery"
        },
        {
            id:2,
            imageUrl:"https://i.pinimg.com/1200x/ec/ae/8e/ecae8e45d9ccb4f11de03a1db60997a6.jpg",
            name:"Iphone Air Magsafe Battery"
        },
        {
            id:3,
            imageUrl:"https://i.pinimg.com/1200x/ec/ae/8e/ecae8e45d9ccb4f11de03a1db60997a6.jpg",
            name:"Iphone Air Magsafe Battery"
        },
        {
            id:4,
            imageUrl:"https://i.pinimg.com/1200x/ec/ae/8e/ecae8e45d9ccb4f11de03a1db60997a6.jpg",
            name:"Iphone Air Magsafe Battery"
        },
    ]
</script>
<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-55">
      <div v-for="pro in iphones" :key="pro.id" class="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
        <div class="h-50 flex items-center justify-center bg-white">
          <img :src="pro.imageUrl" :alt="pro.name" class="h-44 object-contain group-hover:scale-105 transition duration-300"/>
        </div>
        <div class="px-6 py-5">
          <h2 class="text-2xl font-medium text-gray-800">
            {{ pro.name }}
          </h2>
        </div>
    </div>
    </div>
</template>