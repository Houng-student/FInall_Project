<!-- app/components/CartDrawer.vue -->
<script setup lang="ts">
import { useCartStore } from '~/stores/cart'

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits(['close'])
const cartStore = useCartStore()

const closeDrawer = () => {
  emit('close')
}
</script>

<template>
  <div>
    <div 
      v-if="isOpen" 
      @click="closeDrawer"
      class="fixed inset-0 z-40"
    ></div>
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 scale-95 -translate-y-2"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 -translate-y-2"
    >
      <div 
        v-if="isOpen" 
        class="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden"
      >
        <!-- Header -->
        <div class="px-4 py-3 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div class="flex items-center gap-2">
            <span class="text-sm font-bold text-gray-800">Your Cart</span>
            <span class="bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              {{ cartStore.totalItems }}
            </span>
          </div>
          <button @click="closeDrawer" class="text-gray-400 hover:text-black text-lg">
            &times;
          </button>
        </div>
        <div class="max-h-60 overflow-y-auto p-3 space-y-3">
          <div v-if="cartStore.items.length === 0" class="py-6 text-center text-gray-400 text-xs">
            កន្ត្រកទំនេរ
          </div>

          <div 
            v-for="item in cartStore.items" 
            :key="item.id" 
            class="flex items-center gap-3 p-2 bg-gray-50 rounded-xl"
          >
            <img :src="item.image" :alt="item.name" class="w-12 h-12 object-contain bg-white rounded-lg p-1" />
            <div class="flex-1 min-w-0">
              <h4 class="text-xs font-semibold text-gray-800 truncate">{{ item.name || item.title }}</h4>
              <p class="text-xs font-bold text-orange-600 mt-0.5">${{ item.price }}</p>
            </div>
            <div class="flex items-center gap-1.5 bg-white px-2 py-1 rounded-md border text-xs">
              <button @click="cartStore.decreaseQuantity(item.id)" class="text-gray-500 font-bold hover:text-black">-</button>
              <span class="font-semibold px-1">{{ item.quantity || 1 }}</span>
              <button @click="cartStore.increaseQuantity(item.id)" class="text-gray-500 font-bold hover:text-black">+</button>
            </div>
          </div>
        </div>
      <div v-if="cartStore.items.length > 0" class="p-3 border-t border-gray-100 bg-white space-y-2">
          <div class="flex justify-between text-xs font-bold text-gray-800">
            <span>Total:</span>
            <span class="text-orange-600">${{ cartStore.totalPrice }}</span>
          </div>

          <button 
            @click="alert('Checkout!'); closeDrawer()"
            class="w-full bg-black hover:bg-gray-800 text-white text-xs font-medium py-2.5 rounded-xl transition-all"
          >
           Checkout ➔
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>