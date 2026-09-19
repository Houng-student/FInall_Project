<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10 text-center">
    <h2 class="text-xl font-bold mb-4">Bakong KHQR Payment</h2>

    <div v-if="khqrString" class="flex justify-center border p-4 rounded-lg my-4">
      <qrcode-vue :value="khqrString" :size="240" level="H" render-as="svg" />
    </div>
  </div>
</template>

<script setup>
import QrcodeVue from 'qrcode.vue';

const route = useRoute();
const khqrString = ref('');

onMounted(() => {
  const orderId = String(route.params.id || 'ORDER-000');
  khqrString.value = `BAKONG|merchant=Rann Tharath|bill=${orderId}|amount=0.00|currency=USD|store=IRCT SHOP|terminal=WebQR`;
});
</script>