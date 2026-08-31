<script setup lang="ts">
const cards = [
  {
    image: 'https://i.pinimg.com/1200x/2d/98/ec/2d98ec2e3419aac43b7654e9213a4f74.jpg',
    title: 'iOne Shopping',
    buttonText: 'iOne Shopping'
  },
  {
    image: 'https://i.pinimg.com/1200x/2d/98/ec/2d98ec2e3419aac43b7654e9213a4f74.jpg',
    title: 'iOne Installment',
    buttonText: 'Installment Plan'
  },
  {
    image: 'https://i.pinimg.com/1200x/2d/98/ec/2d98ec2e3419aac43b7654e9213a4f74.jpg',
    title: 'iOne Service',
    buttonText: 'Trade-In Service'
  }
]
</script>
<template>
    <div>
        <div class="text-center mx-20 my-30">
            <p class="font-bold text-2xl">Apple Authorized Reseller in Cambodia</p>
            <h1 class="text-purple-700 text-6xl mt-10 font-bold">Visit our Phnom Penh Stores</h1>
            <div class="text-gray-400 text-3xl mt-10 font-bold">iOne operate two boutique Apple Reseller stores in Phnom Penh <br>premier AOEN mega malls</div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mx-55 ">
            <div 
                v-for="(card, index) in cards" 
                :key="index" 
                class="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-1"
                >
                <div class="h-96 w-full">
                    <img 
                    :src="card.image" 
                    :alt="card.title" 
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                <div class="absolute inset-0 bg-white from-black/60 via-transparent to-transparent"></div>

                <div class="absolute bottom-6 left-1/2 -translate-x-1/2 w-4/5">
                    <button class="w-full rounded-xl bg-white/90 py-3 px-4 font-semibold text-gray-900 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:shadow-xl active:scale-95">
                    {{ card.buttonText }}
                    </button>
                </div>
                </div>
            </div>
        </div>
</template>