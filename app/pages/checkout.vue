<script setup lang="ts">
import { ref, computed } from "vue";
import QrcodeVue from "qrcode.vue";
import Header from "~/layouts/Header.vue";
import AfterFooter from "~/layouts/AfterFooter.vue";
import { useCartStore } from "~/stores/cart";

type CartItem = {
  id?: number | string;
  productId?: number | string;
  image?: string;
  name?: string;
  title?: string;
  quantity?: number;
  price?: number | string;
};

const cartStore = useCartStore();
const cartItems = computed<CartItem[]>(() => cartStore.items as CartItem[]);
const totalPrice = computed<number>(() => Number(cartStore.totalPrice));

const selectedLocation = ref(1);
const selectedDelivery = ref(1);
const selectedPayment = ref(1);

// Modal state
const showBakongModal = ref(false);
const khqrString = ref("");
const currentBillNumber = ref("");

const deliveryMethods = [
  { id: 1, name: "Standard Delivery", price: 2, description: "2-5 Business Days" },
  { id: 2, name: "Express Delivery", price: 5, description: "1 Business Day" },
];

const paymentMethods = [
  { id: 1, name: "ABA KHQR / Bakong" },
  { id: 2, name: "Credit Card" },
  { id: 3, name: "Cash On Delivery" },
];

const shippingPrice = computed(() => {
  const method = deliveryMethods.find((x) => x.id === selectedDelivery.value);
  return method ? method.price : 0;
});

const grandTotal = computed(() => {
  return Number(totalPrice.value) + shippingPrice.value;
});

// Trigger KHQR Modal on Place Order
const placeOrder = () => {
  if (!cartItems.value.length) {
    alert("Your cart is empty.");
    return;
  }

  currentBillNumber.value = Math.floor(100000000000 + Math.random() * 900000000000).toString();

  const qrPayload = [
    "BAKONG",
    `merchant=Ihoung Chun`,
    `bill=${currentBillNumber.value}`,
    `amount=${Number(grandTotal.value).toFixed(2)}`,
    "currency=USD",
    "store=IRCT SHOP",
    "terminal=WebQR",
  ].join("|");

  khqrString.value = qrPayload;
  showBakongModal.value = true;
};

const confirmPaid = async () => {
  showBakongModal.value = false;
  cartStore.clearCart();
  await navigateTo(`/order-success/${currentBillNumber.value}`);
};
</script>

<template>
  <div class="min-h-screen bg-gray-100 relative">
    <Header />

    <div class="max-w-7xl mx-auto py-10 px-5">
      <h1 class="text-4xl font-bold mb-10">Checkout</h1>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- LEFT COLUMN -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Delivery Location -->
          <div class="bg-white rounded-xl shadow p-6">
            <h2 class="font-bold text-xl mb-4">Delivery Location</h2>
            <label class="flex items-center border rounded-lg p-4 cursor-pointer">
              <input type="radio" v-model="selectedLocation" :value="1" class="mr-3" />
              <div>
                <h3 class="font-semibold">Home</h3>
                <p class="text-gray-500">Phnom Penh, Cambodia</p>
              </div>
            </label>
          </div>

          <!-- Delivery Method -->
          <div class="bg-white rounded-xl shadow p-6">
            <h2 class="font-bold text-xl mb-4">Delivery Method</h2>
            <div v-for="item in deliveryMethods" :key="item.id" class="border rounded-lg p-4 mb-3">
              <label class="flex justify-between cursor-pointer">
                <div class="flex">
                  <input type="radio" v-model="selectedDelivery" :value="item.id" class="mr-3 mt-1" />
                  <div>
                    <h3 class="font-semibold">{{ item.name }}</h3>
                    <p class="text-gray-500 text-sm">{{ item.description }}</p>
                  </div>
                </div>
                <span class="font-bold">${{ item.price }}</span>
              </label>
            </div>
          </div>

          <!-- Payment Method -->
          <div class="bg-white rounded-xl shadow p-6">
            <h2 class="font-bold text-xl mb-4">Payment Method</h2>
            <div v-for="payment in paymentMethods" :key="payment.id" class="border rounded-lg p-4 mb-3">
              <label class="flex items-center cursor-pointer">
                <input type="radio" v-model="selectedPayment" :value="payment.id" class="mr-3" />
                {{ payment.name }}
              </label>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div>
          <div class="bg-white rounded-xl shadow p-6 sticky top-10">
            <h2 class="text-2xl font-bold mb-5">Review Order</h2>

            <div v-for="item in cartItems" :key="item.productId || item.id" class="flex items-center mb-5">
              <img :src="item.image" class="w-20 h-20 object-cover rounded-lg border" />
              <div class="ml-4 flex-1">
                <h3 class="font-semibold">{{ item.name || item.title }}</h3>
                <p class="text-gray-500">Qty : {{ item.quantity }}</p>
              </div>
              <span class="font-bold">${{ item.price }}</span>
            </div>

            <hr class="my-5" />

            <div class="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${{ totalPrice }}</span>
            </div>
            <div class="flex justify-between mb-2">
              <span>Shipping</span>
              <span>${{ shippingPrice }}</span>
            </div>
            <div class="flex justify-between text-2xl font-bold mt-6">
              <span>Total</span>
              <span>${{ grandTotal }}</span>
            </div>

            <button
              @click="placeOrder"
              class="w-full mt-8 bg-black text-white py-4 rounded-xl hover:bg-gray-800 font-semibold"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- BAKONG KHQR MODAL -->
    <div
      v-if="showBakongModal"
      class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
    >
      <div class="bg-white rounded-2xl max-w-sm w-full overflow-hidden shadow-2xl relative border">
        <!-- Header banner matching standard Bakong template -->
        <div class="bg-[#E1251B] text-white text-center py-4 px-6 relative">
          <button
            @click="showBakongModal = false"
            class="absolute top-3 right-4 text-white text-xl font-bold hover:opacity-80"
          >
            ✕
          </button>
          <div class="font-bold text-2xl tracking-wide">BAKONG</div>
          <div class="text-xs uppercase tracking-wider opacity-90">KHQR Payment</div>
        </div>

        <!-- Card Body -->
        <div class="p-6 text-center">
          <div class="text-gray-600 text-sm mb-1">Merchant</div>
          <div class="font-bold text-gray-800 text-lg">Ihoung Chun</div>
          <div class="text-xs text-gray-400 mb-4">ihoungchun@aclb</div>

          <!-- Dynamic QR code display -->
          <div class="bg-white p-3 border-2 border-red-500 rounded-xl inline-block my-2 shadow-sm">
            <qrcode-vue :value="khqrString" :size="200" level="H" render-as="svg" />
          </div>

          <div class="text-2xl font-extrabold text-gray-900 mt-3">${{ grandTotal.toFixed(2) }}</div>
          <div class="text-xs text-gray-400 mt-1">Bill #: {{ currentBillNumber }}</div>

          <button
            @click="confirmPaid"
            class="w-full mt-6 bg-[#E1251B] text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
          >
            I Have Paid
          </button>
        </div>
      </div>
    </div>

    <AfterFooter />
  </div>
</template>