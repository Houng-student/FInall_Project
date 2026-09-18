<script setup lang="ts">
import { ref, computed } from 'vue'

// --- 1. STATE MANAGEMENT (ផ្អែកលើ SCHEMA របស់អ្នក) ---

// DeliveryLocation State
const deliveryLocation = ref({
  deliveryLocationId: 1,
  userId: 101,
  contactName: '',
  phoneNumber: '',
  city: 'Phnom Penh',
  district: '',
  address: ''
})

// DeliveryMethod (ENUM: 'STANDARD' | 'EXPRESS')
const deliveryMethod = ref<'STANDARD' | 'EXPRESS'>('STANDARD')

// Delivery Fee logic ផ្អែកលើ DeliveryMethod
const deliveryFee = computed(() => {
  return deliveryMethod.value === 'EXPRESS' ? 3.00 : 1.50
})

// PaymentMethod State
const selectedPaymentMethodId = ref<number>(1)
const paymentMethods = ref([
  { paymentMethodId: 1, bankName: 'ABA Bank / KHQR', icon: '💳' },
  { paymentMethodId: 2, bankName: 'Wing Bank', icon: '💸' },
  { paymentMethodId: 3, bankName: 'Cash on Delivery (COD)', icon: '💵' }
])

// OrderItems Dummy Data (Mock Data)
const orderItems = ref([
  {
    orderItemId: 1,
    productVariantId: 501,
    name: 'Apple iPhone 15 Pro Max 256GB - Natural Titanium',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=300&q=80',
    quantity: 1,
    unitPrice: 1000.00
  },
  {
    orderItemId: 2,
    productVariantId: 502,
    name: 'USB-C to Lightning Cable (1m)',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=300&q=80',
    quantity: 2,
    unitPrice: 19.00
  }
])

// --- 2. CALCULATIONS (SUBTOTAL & TOTAL) ---
const subTotal = computed(() => {
  return orderItems.value.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0)
})

const totalAmount = computed(() => {
  return subTotal.value + deliveryFee.value
})

// Processing States
const isSubmitting = ref(false)
const orderSuccessData = ref<any>(null)

// --- 3. SUBMIT ORDER & TRANSACTION CREATION ---
const handleCheckout = () => {
  // Validate Form
  if (!deliveryLocation.value.contactName || !deliveryLocation.value.phoneNumber || !deliveryLocation.value.address) {
    alert('Please fill in all required delivery details (Name, Phone, Address).')
    return
  }

  isSubmitting.value = true

  // Simulate API Backend Payload
  setTimeout(() => {
    const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000)
    const transactionId = 'TXN-' + Date.now()

    // ឆ្លើយតបការបង្កើត Order + Transaction ដូចក្នុង Schema
    orderSuccessData.value = {
      order: {
        orderId,
        userId: deliveryLocation.value.userId,
        deliveryLocationId: deliveryLocation.value.deliveryLocationId,
        deliveryMethod: deliveryMethod.value,
        deliveryFee: deliveryFee.value,
        subTotal: subTotal.value,
        totalAmount: totalAmount.value,
        createdAt: new Date().toISOString(),
        orderStatus: 'PENDING' // ENUM
      },
      transaction: {
        transactionId,
        orderId,
        paymentMethodId: selectedPaymentMethodId.value,
        amount: totalAmount.value,
        paymentStatus: selectedPaymentMethodId.value === 3 ? 'PENDING' : 'SUCCESS', // ENUM
        transactionRef: 'REF-' + Math.floor(Math.random() * 1000000),
        paidAt: new Date().toISOString()
      }
    }

    isSubmitting.value = false
  }, 1500)
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
    
    <!-- TOP BAR -->
    <header class="bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-30">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-black text-blue-600 tracking-tight">ETEC</NuxtLink>
        <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">Secure Checkout</span>
      </div>
    </header>

    <div class="max-w-6xl mx-auto px-4 pt-8">

      <!-- ================= SUCCESS SCREEN ================= -->
      <div v-if="orderSuccessData" class="max-w-xl mx-auto bg-white rounded-3xl p-8 border border-slate-200 shadow-xl text-center space-y-6">
        <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
          ✓
        </div>
        
        <div>
          <h2 class="text-2xl font-bold text-slate-900">Order Placed Successfully!</h2>
          <p class="text-xs text-slate-500 mt-1">Order ID: <span class="font-mono font-bold text-slate-700">{{ orderSuccessData.order.orderId }}</span></p>
        </div>

        <!-- Order & Transaction Details Summary -->
        <div class="bg-slate-50 rounded-2xl p-4 text-left text-xs space-y-2.5 border border-slate-100">
          <div class="flex justify-between border-b border-slate-200/60 pb-2">
            <span class="text-slate-500">Order Status:</span>
            <span class="font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">{{ orderSuccessData.order.orderStatus }}</span>
          </div>
          <div class="flex justify-between border-b border-slate-200/60 pb-2">
            <span class="text-slate-500">Payment Status:</span>
            <span class="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">{{ orderSuccessData.transaction.paymentStatus }}</span>
          </div>
          <div class="flex justify-between border-b border-slate-200/60 pb-2">
            <span class="text-slate-500">Transaction Ref:</span>
            <span class="font-mono font-medium text-slate-700">{{ orderSuccessData.transaction.transactionRef }}</span>
          </div>
          <div class="flex justify-between pt-1">
            <span class="text-slate-500">Total Paid:</span>
            <span class="font-extrabold text-slate-900 text-sm">${{ orderSuccessData.order.totalAmount.toFixed(2) }}</span>
          </div>
        </div>

        <NuxtLink to="/" class="inline-block w-full bg-slate-900 text-white font-bold text-xs py-3.5 rounded-xl hover:bg-slate-800 transition-colors">
          Continue Shopping
        </NuxtLink>
      </div>

      <!-- ================= CHECKOUT FORM ================= -->
      <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-8">

        <!-- LEFT COLUMN: FORM DATA (7 Cols) -->
        <div class="lg:col-span-7 space-y-6">

          <!-- 1. DELIVERY LOCATION SECTION -->
          <div class="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-3">
              <span class="w-7 h-7 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-bold">1</span>
              <h2 class="text-base font-bold text-slate-900">Delivery Location</h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1">Contact Name *</label>
                <input 
                  v-model="deliveryLocation.contactName"
                  type="text" 
                  placeholder="e.g. John Doe" 
                  class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:border-slate-900 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1">Phone Number *</label>
                <input 
                  v-model="deliveryLocation.phoneNumber"
                  type="tel" 
                  placeholder="e.g. 012 345 678" 
                  class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:border-slate-900 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1">City *</label>
                <input 
                  v-model="deliveryLocation.city"
                  type="text" 
                  class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:border-slate-900 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1">District</label>
                <input 
                  v-model="deliveryLocation.district"
                  type="text" 
                  placeholder="e.g. Chamkarmon" 
                  class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:border-slate-900 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-600 mb-1">Detailed Address *</label>
              <textarea 
                v-model="deliveryLocation.address"
                rows="2" 
                placeholder="House No, Street, Sangkat..." 
                class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:border-slate-900 focus:outline-none transition-all"
              ></textarea>
            </div>
          </div>

          <!-- 2. DELIVERY METHOD ENUM -->
          <div class="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-3">
              <span class="w-7 h-7 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-bold">2</span>
              <h2 class="text-base font-bold text-slate-900">Delivery Option</h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label 
                :class="['p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all', deliveryMethod === 'STANDARD' ? 'border-slate-900 bg-slate-900/5 ring-1 ring-slate-900' : 'border-slate-200 bg-slate-50']"
              >
                <div class="flex items-center gap-3">
                  <input type="radio" v-model="deliveryMethod" value="STANDARD" class="accent-slate-900" />
                  <div>
                    <p class="text-xs font-bold text-slate-900">Standard Delivery</p>
                    <p class="text-[10px] text-slate-400">1 - 2 Days</p>
                  </div>
                </div>
                <span class="text-xs font-bold text-slate-900">$1.50</span>
              </label>

              <label 
                :class="['p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all', deliveryMethod === 'EXPRESS' ? 'border-slate-900 bg-slate-900/5 ring-1 ring-slate-900' : 'border-slate-200 bg-slate-50']"
              >
                <div class="flex items-center gap-3">
                  <input type="radio" v-model="deliveryMethod" value="EXPRESS" class="accent-slate-900" />
                  <div>
                    <p class="text-xs font-bold text-slate-900">Express Delivery</p>
                    <p class="text-[10px] text-slate-400">Same Day Delivery</p>
                  </div>
                </div>
                <span class="text-xs font-bold text-slate-900">$3.00</span>
              </label>
            </div>
          </div>

          <!-- 3. PAYMENT METHOD SECTION -->
          <div class="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-3">
              <span class="w-7 h-7 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-bold">3</span>
              <h2 class="text-base font-bold text-slate-900">Payment Method</h2>
            </div>

            <div class="space-y-2.5">
              <label 
                v-for="pm in paymentMethods" 
                :key="pm.paymentMethodId"
                :class="['p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all', selectedPaymentMethodId === pm.paymentMethodId ? 'border-slate-900 bg-slate-900/5 ring-1 ring-slate-900' : 'border-slate-200 bg-slate-50']"
              >
                <div class="flex items-center gap-3">
                  <input type="radio" v-model="selectedPaymentMethodId" :value="pm.paymentMethodId" class="accent-slate-900" />
                  <span class="text-xl">{{ pm.icon }}</span>
                  <span class="text-xs font-bold text-slate-900">{{ pm.bankName }}</span>
                </div>
                <span v-if="selectedPaymentMethodId === pm.paymentMethodId" class="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">Selected</span>
              </label>
            </div>
          </div>

        </div>

        <!-- RIGHT COLUMN: ORDER & TRANSACTION SUMMARY (5 Cols) -->
        <div class="lg:col-span-5">
          <div class="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm sticky top-24 space-y-6">
            <h2 class="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">Order Summary</h2>

            <!-- ORDER ITEMS LIST -->
            <div class="space-y-4 max-h-64 overflow-y-auto pr-1">
              <div v-for="item in orderItems" :key="item.orderItemId" class="flex gap-3 items-center">
                <img :src="item.image" class="w-14 h-14 object-cover rounded-xl border border-slate-100 bg-slate-50" />
                <div class="flex-1 min-w-0">
                  <h4 class="text-xs font-bold text-slate-800 truncate">{{ item.name }}</h4>
                  <p class="text-[10px] text-slate-400 mt-0.5">Variant ID: {{ item.productVariantId }}</p>
                  <p class="text-xs font-semibold text-slate-500 mt-0.5">${{ item.unitPrice }} × {{ item.quantity }}</p>
                </div>
                <span class="text-xs font-bold text-slate-900">${{ (item.unitPrice * item.quantity).toFixed(2) }}</span>
              </div>
            </div>

            <!-- PRICING BREAKDOWN -->
            <div class="border-t border-slate-100 pt-4 space-y-2.5 text-xs">
              <div class="flex justify-between text-slate-500">
                <span>SubTotal</span>
                <span class="font-bold text-slate-800">${{ subTotal.toFixed(2) }}</span>
              </div>

              <div class="flex justify-between text-slate-500">
                <span>Delivery Fee ({{ deliveryMethod }})</span>
                <span class="font-bold text-slate-800">${{ deliveryFee.toFixed(2) }}</span>
              </div>

              <div class="flex justify-between border-t border-slate-100 pt-3 text-sm">
                <span class="font-extrabold text-slate-900">Total Amount</span>
                <span class="font-black text-blue-600 text-lg">${{ totalAmount.toFixed(2) }}</span>
              </div>
            </div>

            <!-- PLACE ORDER BUTTON -->
            <button 
              @click="handleCheckout"
              :disabled="isSubmitting"
              class="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-bold text-xs tracking-wide transition-all shadow-lg shadow-slate-900/10 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <span v-if="isSubmitting" class="inline-block animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
              <span>{{ isSubmitting ? 'PROCESSING ORDER...' : 'PLACE ORDER NOW →' }}</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>