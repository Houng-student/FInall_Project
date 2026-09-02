<script setup lang="ts">
    type accessories = {
        id:number,
        image : string,
        name: string
    }
    const Accessories : accessories[] = 
    [
        {   
            id:1,
            image: "https://i.pinimg.com/736x/6b/25/a4/6b25a43a5a8ef63d5280d644c9e52f4f.jpg",
            name:"Apple"
        },
        {   
            id:2,
            image: "https://i.pinimg.com/736x/62/d0/00/62d000cf5e662f18d76d0946d485d351.jpg",
            name:"Headphone"
        },
        {   
            id:3,
            image: "https://i.pinimg.com/1200x/fa/15/d2/fa15d22acf9d940eaa0af58f91fe5e02.jpg",
            name:"Bags & Sleeve"
        },
        {   
            id:4,
            image: "https://i.pinimg.com/736x/ae/e5/5c/aee55cfbb89cb7b8b8a2d9d3f56817b9.jpg",
            name:"Cables & Adapters"
        },
        {   
            id:5,
            image: "https://i.pinimg.com/736x/c7/59/f7/c759f72cef6de6d92c200a9c8db4698f.jpg",
            name:"Cases & Protection"
        },
        {   
            id:6,
            image: "https://i.pinimg.com/736x/c7/59/f7/c759f72cef6de6d92c200a9c8db4698f.jpg",
            name:"Power Banks"
        }
    ]
</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6  gap-3 max-w-7xl mx-auto px-7">
        <div v-for="acc in Accessories" :key="acc.id" class="bg-white  rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
            <div class="h-45 flex items-center justify-center bg-white object-cover group-hover:scale-105 transition duration-300">
                <img :src="acc.image" :alt=" acc.name">
            </div>
            <div class="text-center text-md py-10">
                <p>{{ acc.name }}</p>
            </div>
        </div>
    </div>
</template>