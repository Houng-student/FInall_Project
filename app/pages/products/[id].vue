<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { A, H } from 'vue-router/dist/index-BN0B0y8a.js'
import { useCartStore } from '~/stores/cart'
import Header from '~/layouts/Header.vue'
import AfterFooter from '~/layouts/AfterFooter.vue'

const route = useRoute()
const productId = Number(route.params.id)
const cartStore = useCartStore()

const fromCategory = (route.query.from as string) || ''
const getBackPath = () => {
  if (!fromCategory || fromCategory.toLowerCase() === 'home') return '/'
  return `/${fromCategory.toLowerCase()}`
}
const activeTab = ref('specs')
const selectedColor = ref('Natural Titanium')
const selectedStorage = ref('256GB')
const activeImageIndex = ref(0)

// Detailed Mock Database
const allProducts = [
  {
    id: 301,
    name: 'Apple iPhone 15 Pro Max',
    price: 1000, // ដកសញ្ញា $ ចេញដើម្បីងាយស្រួលគណនាក្នុង Cart (ប៉ុន្តែពេលបង្ហាញ UI បន្ថែម $ ធម្មតា)
    priceDisplay: '$1000',
    monthlyPrice: '80 $/mo',
    category: 'iPhone',
    images: [
      'https://i.pinimg.com/1200x/3c/da/92/3cda92d33c5411eef69b3387de362dba.jpg',
      'https://i.pinimg.com/736x/ae/a0/68/aea06803e988d5a1791d2631c944b9f1.jpg',
      'https://i.pinimg.com/1200x/3c/da/92/3cda92d33c5411eef69b3387de362dba.jpg'
    ],
    colors: [
      { name: 'Natural Titanium', hex: '#BEBDB8' },
      { name: 'White Titanium', hex: '#F2F1EC' },
      { name: 'Blue Titanium', hex: '#2B3441' },
      { name: 'Black Titanium', hex: '#3B3A38' }
    ],
    storageOptions: ['256GB', '512GB', '1TB'],
    specs: {
      general: {
        warranty: '1 Year',
        country: 'China',
        os: 'iOS',
        model: 'iPhone 15 Pro Max'
      },
      processor: {
        type: 'A17 Pro',
        cores: '6'
      },
      display: {
        resolution: '2796x1290 px',
        size: '6.7"',
        type: 'OLED',
        refreshRate: '120 Hz',
        brightness: '2000 nits'
      },
      camera: {
        opticalZoom: '5x',
        mainResolution: '48 MP'
      }
    },
    description: 'The iPhone 15 Pro Max features a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a 6.7-inch Super Retina XDR display with ProMotion and an advanced A17 Pro chip for next-level gaming performance.',
    stores: [
      { name: 'Central Mall Store', address: '123 Tech Street, Suite 4', status: 'In Stock', count: 'High' },
      { name: 'Downtown Plaza', address: '456 Commercial Ave', status: 'Low Stock', count: 'Limited' },
      { name: 'Suburban Hub', address: '789 Main Boulevard', status: 'Out of Stock', count: 'None' }
    ]
  }
]

const product = computed(() => {
  const found = allProducts.find(p => p.id === productId)
  return found || allProducts[0] // Fallback demo product if ID isn't found
})

// Cross-sell & Related items mock data
const addOns = [
  { id: 401, name: '20W USB-C Power Adapter', price: 25, priceDisplay: '$25', image: 'https://i.pinimg.com/1200x/7b/82/14/7b82142c1c12db484c175e4b4dac6c17.jpg' },
  { id: 402, name: 'iPhone 16 Pro Max Case', price: 35, priceDisplay: '$35', image: 'https://i.pinimg.com/736x/fa/a0/eb/faa0eb96723f24c590ab65fd5ed6f745.jpg' },
  { id: 403, name: 'MagSafe Charger', price: 39, priceDisplay: '$39', image: 'https://i.pinimg.com/736x/5e/fa/b6/5efab697bccfddab13ec2d4d262b02ec.jpg' }
]

// ២. Function សម្រាប់បន្ថែមទំនិញចូល Cart (រួមទាំង Color និង Storage ដែលជ្រើសរើស)
const handleAddToCart = () => {
  if (!product.value) return

  const itemToCart = {
    id: `${product.value.id}-${selectedColor.value}-${selectedStorage.value}`,
    productId: product.value.id,
    name: `${product.value.name} (${selectedStorage.value})`,
    title: `${product.value.name} (${selectedStorage.value})`,
    price: product.value.price,
    image: product.value.images[0],
    color: selectedColor.value,
    storage: selectedStorage.value
  }

  cartStore.addToCart(itemToCart)
}

// Function សម្រាប់ Add Add-ons
const handleAddAddOn = (item: any) => {
  cartStore.addToCart({
    id: item.id,
    productId: item.id,
    name: item.name,
    title: item.name,
    price: item.price,
    image: item.image
  })
}
</script>

<template>
  <Header />
  <div class="max-w-6xl mx-auto px-4 py-8 text-gray-800 font-sans">
    <nav class="mb-6">
      <NuxtLink :to="getBackPath()" class="text-xs text-gray-400 hover:text-black transition-colors inline-flex items-center gap-1">
        &larr; Back {{ fromCategory ? `to ${fromCategory}` : '' }}
      </NuxtLink>
    </nav>

    <div v-if="product" class="space-y-16">
      <section class="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div class="md:col-span-2 flex md:flex-col gap-3 order-2 md:order-1">
          <button 
            v-for="(img, idx) in product.images" 
            :key="idx"
            @click="activeImageIndex = idx"
            :class="['border rounded-xl p-2 bg-gray-50 overflow-hidden transition-all', activeImageIndex === idx ? 'border-black' : 'border-gray-200 opacity-60']"
          >
            <img :src="img" class="w-full h-16 object-contain" />
          </button>
        </div>
        <div class="md:col-span-5 bg-gray-50 rounded-2xl p-6 flex items-center justify-center order-1 md:order-2">
          <img :src="product.images[activeImageIndex]" :alt="product.name" class="max-h-96 object-contain" />
        </div>
        <div class="md:col-span-5 space-y-6 order-3">
          <div>
            <h1 class="text-2xl font-bold text-gray-900 leading-snug">{{ product.name }} {{ selectedStorage }}</h1>
            <p class="text-sm text-gray-400 mt-1">{{ selectedColor }}</p>
          </div>

          <div class="space-y-1">
            <div class="text-3xl font-extrabold text-gray-900">{{ product.priceDisplay || `$${product.price}` }}</div>
            <p v-if="product.monthlyPrice" class="text-xs text-gray-400">or {{ product.monthlyPrice }} with installments</p>
          </div>
          <div class="space-y-2">
            <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Color: {{ selectedColor }}</label>
            <div class="flex gap-3">
              <button
                v-for="color in product.colors"
                :key="color.name"
                @click="selectedColor = color.name"
                :class="['w-8 h-8 rounded-full border-2 transition-transform', selectedColor === color.name ? 'scale-110 border-black' : 'border-transparent']"
                :style="{ backgroundColor: color.hex }"
              />
            </div>
          </div>

          <div class="space-y-2">
            <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Storage Capacity</label>
            <div class="grid grid-cols-3 gap-2">
              <button
                v-for="size in product.storageOptions"
                :key="size"
                @click="selectedStorage = size"
                :class="['py-2 text-sm rounded-lg border font-medium transition-all', selectedStorage === size ? 'border-black bg-black text-white' : 'border-gray-200 text-gray-700 hover:border-gray-400']"
              >
                {{ size }}
              </button>
            </div>
          </div>

          <div class="flex gap-3 pt-2">
            <button 
              @click="handleAddToCart"
              class="flex-1 bg-black hover:bg-gray-800 text-white py-3.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
            >
              🛒 Add to Cart
            </button>
            <button class="p-3.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              &#9825;
            </button>
          </div>
        </div>
      </section>

      <section class="border-b border-gray-200">
        <div class="flex gap-8 text-sm font-medium">
          <button 
            @click="activeTab = 'specs'" 
            :class="['pb-3 border-b-2 transition-colors', activeTab === 'specs' ? 'border-black text-black' : 'border-transparent text-gray-400']"
          >
            Specifications
          </button>
          <button 
            @click="activeTab = 'about'" 
            :class="['pb-3 border-b-2 transition-colors', activeTab === 'about' ? 'border-black text-black' : 'border-transparent text-gray-400']"
          >
            About Product
          </button>
          <button 
            @click="activeTab = 'availability'" 
            :class="['pb-3 border-b-2 transition-colors', activeTab === 'availability' ? 'border-black text-black' : 'border-transparent text-gray-400']"
          >
            Store Availability
          </button>
        </div>
      </section>

      <section v-if="activeTab === 'specs'" class="space-y-6">
        <h3 class="text-lg font-bold">Technical Specifications</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm">
          
          <div class="space-y-3">
            <h4 class="font-semibold text-gray-400 text-xs uppercase tracking-wider">General Information</h4>
            <div class="flex justify-between py-1 border-b border-gray-100"><span class="text-gray-500">Warranty</span><span>{{ product.specs.general.warranty }}</span></div>
            <div class="flex justify-between py-1 border-b border-gray-100"><span class="text-gray-500">Country of Origin</span><span>{{ product.specs.general.country }}</span></div>
            <div class="flex justify-between py-1 border-b border-gray-100"><span class="text-gray-500">OS</span><span>{{ product.specs.general.os }}</span></div>
          </div>

          <div class="space-y-3">
            <h4 class="font-semibold text-gray-400 text-xs uppercase tracking-wider">Display</h4>
            <div class="flex justify-between py-1 border-b border-gray-100"><span class="text-gray-500">Resolution</span><span>{{ product.specs.display.resolution }}</span></div>
            <div class="flex justify-between py-1 border-b border-gray-100"><span class="text-gray-500">Screen Size</span><span>{{ product.specs.display.size }}</span></div>
            <div class="flex justify-between py-1 border-b border-gray-100"><span class="text-gray-500">Refresh Rate</span><span>{{ product.specs.display.refreshRate }}</span></div>
          </div>

        </div>
      </section>

      <section v-if="activeTab === 'about'" class="max-w-2xl space-y-3 text-sm text-gray-600 leading-relaxed">
        <h3 class="text-lg font-bold text-gray-900">Product Overview</h3>
        <p>{{ product.description }}</p>
      </section>

      <!-- Tab 3: Store Availability -->
      <section v-if="activeTab === 'availability'" class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="store in product.stores" :key="store.name" class="p-4 border rounded-xl bg-gray-50 space-y-2">
          <div class="flex justify-between items-start">
            <h4 class="font-semibold text-sm">{{ store.name }}</h4>
            <span :class="['text-xs px-2 py-0.5 rounded-full font-medium', store.status === 'In Stock' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700']">
              {{ store.status }}
            </span>
          </div>
          <p class="text-xs text-gray-400">{{ store.address }}</p>
        </div>
      </section>

      <!-- Add-Ons Section -->
      <section class="space-y-4 pt-8 border-t">
        <h3 class="text-lg font-bold">Frequently Bought Together</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div v-for="item in addOns" :key="item.id" class="border rounded-xl p-4 flex flex-col justify-between space-y-3">
            <img :src="item.image" class="h-28 object-contain mx-auto" />
            <div>
              <p class="text-xs font-semibold line-clamp-1">{{ item.name }}</p>
              <p class="text-sm font-bold mt-1">{{ item.priceDisplay || `$${item.price}` }}</p>
            </div>
            <button 
              @click="handleAddAddOn(item)"
              class="w-full text-xs bg-gray-100 hover:bg-black hover:text-white py-2 rounded-lg font-medium transition-colors"
            >
              Add Item
            </button>
          </div>
        </div>
      </section>

    </div>
  </div>
  <section>
    <AfterFooter />
  </section>
</template>