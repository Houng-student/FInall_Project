<!-- app/components/CartButton.vue -->
<script setup lang="ts">
import { useCartStore } from '~/stores/cart'

const props = defineProps<{
  product: any
  selectedColor?: string
  selectedStorage?: string
}>()

const cartStore = useCartStore()

const handleAddToCart = (e: Event) => {
  // ទប់មិនឱ្យលោត Page
  e.preventDefault()
  e.stopPropagation()

  if (!props.product) return

  // បង្កើត Object ទិន្នន័យសម្រាប់ Add to Cart
  const itemToAdd = {
    id: `${props.product.id || 'item'}-${props.selectedColor || ''}-${props.selectedStorage || ''}`,
    productId: props.product.id,
    name: `${props.product.name || props.product.title} ${props.selectedStorage ? `(${props.selectedStorage})` : ''}`,
    price: props.product.price,
    image: props.product.images?.[0] || props.product.image || '',
    color: props.selectedColor,
    storage: props.selectedStorage
  }

  cartStore.addToCart(itemToAdd)
}
</script>

<template>
  <button 
    @click="handleAddToCart"
    v-bind="$attrs"
  >
    <slot>🛒 Add to Cart</slot>
  </button>
</template>