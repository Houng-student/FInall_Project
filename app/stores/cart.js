// app/stores/cart.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  // គណនាចំនួនទំនិញសរុប
  const totalItems = computed(() => {
    return items.value.reduce((total, item) => total + (item.quantity || 1), 0)
  })

  // គណនាតម្លៃសរុប
  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => {
      const priceNum = typeof item.price === 'number' 
        ? item.price 
        : parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0
      return total + (priceNum * (item.quantity || 1))
    }, 0)
  })

  // បន្ថែមទំនិញចូល Cart
  const addToCart = (product) => {
    if (!product) return

    const existingItem = items.value.find(i => i.id === product.id)
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }

  // បន្ថែមចំនួនទំនិញ (+1)
  const increaseQuantity = (id) => {
    const item = items.value.find(i => i.id === id)
    if (item) {
      item.quantity++
    }
  }

  // កាត់បន្ថយចំនួនទំនិញ (-1)
  const decreaseQuantity = (id) => {
    const item = items.value.find(i => i.id === id)
    if (item) {
      if (item.quantity > 1) {
        item.quantity--
      } else {
        removeFromCart(id)
      }
    }
  }

  // លុបទំនិញចេញពី Cart
  const removeFromCart = (id) => {
    items.value = items.value.filter(i => i.id !== id)
  }

  // សម្អាត Cart
  const clearCart = () => {
    items.value = []
  }

  return {
    items,
    totalItems,
    totalPrice,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart
  }
})