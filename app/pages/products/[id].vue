<template>
  <Header />
  <div class="max-w-6xl mx-auto px-4 py-8 text-gray-800 font-sans">
    <nav class="mb-6">
      <NuxtLink
        :to="getBackPath()"
        class="text-xs text-gray-400 hover:text-black transition-colors inline-flex items-center gap-1"
      >
        &larr; Back {{ fromCategory ? `to ${fromCategory}` : "" }}
      </NuxtLink>
    </nav>

    <!-- Loading State -->
    <div v-if="pending" class="text-center py-20 text-gray-500 font-medium">
      Loading product details...
    </div>

    <!-- Error State -->
    <div
      v-else-if="error || !product"
      class="text-center py-20 text-red-500 font-medium"
    >
      Failed to load product details. Please ensure your backend server
      (https://localhost:7234) is running and accessible.
    </div>

    <!-- Product View -->
    <div v-else class="space-y-16">
      <section class="grid grid-cols-1 md:grid-cols-12 gap-10">
        <!-- Thumbnail Gallery -->
        <div
          v-if="productImages.length > 1"
          class="md:col-span-2 flex md:flex-col gap-3 order-2 md:order-1"
        >
          <button
            v-for="(img, idx) in productImages"
            :key="idx"
            @click="activeImageIndex = idx"
            :class="[
              'border rounded-xl p-2 bg-gray-50 overflow-hidden transition-all',
              activeImageIndex === idx
                ? 'border-black'
                : 'border-gray-200 opacity-60',
            ]"
          >
            <img :src="img" class="w-full h-16 object-contain" />
          </button>
        </div>

        <!-- Main Product Image -->
        <div
          :class="[
            productImages.length > 1 ? 'md:col-span-5' : 'md:col-span-7',
            'bg-gray-50 rounded-2xl p-6 flex items-center justify-center order-1 md:order-2',
          ]"
        >
          <img
            :src="productImages[activeImageIndex] || product.image"
            :alt="product.name"
            class="max-h-96 object-contain"
          />
        </div>

        <!-- Product Actions & Options -->
        <div class="md:col-span-5 space-y-6 order-3">
          <div>
            <h1 class="text-2xl font-bold text-gray-900 leading-snug">
              {{ product.name }}
              {{
                selectedVariant?.capacityName
                  ? `(${selectedVariant.capacityName})`
                  : ""
              }}
            </h1>
            <p
              v-if="selectedVariant?.colorName"
              class="text-sm text-gray-400 mt-1"
            >
              {{ selectedVariant.colorName }}
            </p>
          </div>

          <div class="space-y-1">
            <div class="text-3xl font-extrabold text-gray-900">
              ${{ selectedVariant?.price ?? product.price ?? "N/A" }}
            </div>
            <p
              v-if="selectedVariant"
              class="text-xs font-semibold"
              :class="
                (selectedVariant.stockQuantity ?? 0) > 0
                  ? 'text-green-600'
                  : 'text-red-500'
              "
            >
              {{
                (selectedVariant.stockQuantity ?? 0) > 0
                  ? `In Stock (${selectedVariant.stockQuantity} available)`
                  : "Out of Stock"
              }}
            </p>
          </div>

          <!-- Separate Color & Capacity Selectors -->
          <div
            v-if="product.variants && product.variants.length > 0"
            class="space-y-6 pt-2"
          >
            <!-- 1. Color Selector -->
            <div>
              <label
                class="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2"
              >
                Finish:
                <span class="text-black font-bold">{{
                  selectedVariant?.colorName
                }}</span>
              </label>
              <div class="flex items-center gap-3">
                <button
                  v-for="color in availableColors"
                  :key="color.id"
                  @click="selectedColorId = color.id"
                  class="w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center"
                  :class="
                    selectedColorId === color.id
                      ? 'ring-2 ring-black ring-offset-2 border-transparent scale-105'
                      : 'border-gray-300 hover:scale-105'
                  "
                  :title="color.name"
                >
                  <span
                    class="w-full h-full rounded-full border border-gray-200"
                    :style="{ backgroundColor: getColorHex(color.name) }"
                  ></span>
                </button>
              </div>
            </div>

            <!-- 2. Capacity Selector -->
            <div>
              <label
                class="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2"
              >
                Storage Capacity
              </label>
              <div class="grid grid-cols-2 gap-3">
                <button
                  v-for="cap in availableCapacities"
                  :key="cap.id"
                  @click="selectedCapacityId = cap.id"
                  :class="[
                    'p-3 rounded-xl border text-center transition-all',
                    selectedCapacityId === cap.id
                      ? 'border-black bg-black text-white font-bold'
                      : 'border-gray-200 text-gray-800 hover:border-gray-400',
                  ]"
                >
                  <div class="text-sm">{{ cap.name }}</div>
                </button>
              </div>
            </div>
          </div>

          <div class="flex gap-3 pt-2">
            <button
              @click="handleAddToCart"
              :disabled="
                Boolean(
                  product.variants?.length &&
                  (!selectedVariant || selectedVariant.stockQuantity === 0),
                )
              "
              class="flex-1 bg-black hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
            >
              🛒 Add to Cart
            </button>
            <button
              class="p-3.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            >
              &#9825;
            </button>
          </div>
        </div>
      </section>

      <!-- Tabs Navigation -->
      <section class="border-b border-gray-200">
        <div class="flex gap-8 text-sm font-medium">
          <button
            @click="activeTab = 'specs'"
            :class="[
              'pb-3 border-b-2 transition-colors',
              activeTab === 'specs'
                ? 'border-black text-black'
                : 'border-transparent text-gray-400',
            ]"
          >
            Specifications
          </button>
          <button
            @click="activeTab = 'about'"
            :class="[
              'pb-3 border-b-2 transition-colors',
              activeTab === 'about'
                ? 'border-black text-black'
                : 'border-transparent text-gray-400',
            ]"
          >
            About Product
          </button>
        </div>
      </section>

      <!-- Specs Tab -->
      <section v-if="activeTab === 'specs'" class="space-y-6">
        <h3 class="text-lg font-bold">Technical Specifications</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm">
          <div class="space-y-3">
            <h4
              class="font-semibold text-gray-400 text-xs uppercase tracking-wider"
            >
              Performance & System
            </h4>
            <div class="flex justify-between py-1 border-b border-gray-100">
              <span class="text-gray-500">Chipset</span
              ><span>{{ product.chipName || "N/A" }}</span>
            </div>
            <div class="flex justify-between py-1 border-b border-gray-100">
              <span class="text-gray-500">CPU Cores</span
              ><span>{{ product.cpuCores || "N/A" }}</span>
            </div>
            <div class="flex justify-between py-1 border-b border-gray-100">
              <span class="text-gray-500">GPU Cores</span
              ><span>{{ product.gpuCores || "N/A" }}</span>
            </div>
            <div class="flex justify-between py-1 border-b border-gray-100">
              <span class="text-gray-500">RAM</span
              ><span>{{ product.ramGb ? `${product.ramGb} GB` : "N/A" }}</span>
            </div>
            <div class="flex justify-between py-1 border-b border-gray-100">
              <span class="text-gray-500">OS</span
              ><span>{{ product.osVersion || "N/A" }}</span>
            </div>
          </div>

          <div class="space-y-3">
            <h4
              class="font-semibold text-gray-400 text-xs uppercase tracking-wider"
            >
              Display & Camera
            </h4>
            <div class="flex justify-between py-1 border-b border-gray-100">
              <span class="text-gray-500">Display Type</span
              ><span>{{ product.displayName || "N/A" }}</span>
            </div>
            <div class="flex justify-between py-1 border-b border-gray-100">
              <span class="text-gray-500">Resolution</span
              ><span>{{ product.displayResolution || "N/A" }}</span>
            </div>
            <div class="flex justify-between py-1 border-b border-gray-100">
              <span class="text-gray-500">Main Camera</span
              ><span>{{
                product.mainCameraMp ? `${product.mainCameraMp} MP` : "N/A"
              }}</span>
            </div>
            <div class="flex justify-between py-1 border-b border-gray-100">
              <span class="text-gray-500">Front Camera</span
              ><span>{{
                product.frontCameraMp ? `${product.frontCameraMp} MP` : "N/A"
              }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- About Tab -->
      <section
        v-if="activeTab === 'about'"
        class="max-w-2xl space-y-3 text-sm text-gray-600 leading-relaxed"
      >
        <h3 class="text-lg font-bold text-gray-900">Product Overview</h3>
        <p>
          The {{ product.name }} is powered by the
          {{ product.chipName || "N/A" }} chip, featuring
          {{ product.cpuCores || "N/A" }} CPU cores and
          {{ product.gpuCores || "N/A" }} GPU cores with
          {{ product.ramGb || "N/A" }}GB of memory running
          {{ product.osVersion || "N/A" }}.
        </p>
      </section>

      <!-- Frequently Bought Together -->
      <section class="space-y-4 pt-8 border-t">
        <h3 class="text-lg font-bold">Frequently Bought Together</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            v-for="item in addOns"
            :key="item.id"
            class="border rounded-xl p-4 flex flex-col justify-between space-y-3"
          >
            <img :src="item.image" class="h-28 object-contain mx-auto" />
            <div>
              <p class="text-xs font-semibold line-clamp-1">{{ item.name }}</p>
              <p class="text-sm font-bold mt-1">${{ item.price }}</p>
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

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useCartStore } from "~/stores/cart";
import Header from "~/layouts/Header.vue";
import AfterFooter from "~/layouts/AfterFooter.vue";

interface Variant {
  productVariantId: number;
  price: number;
  stockQuantity: number;
  colorId: number;
  colorName: string;
  capacityId: number;
  capacityName: string;
  image?: string;
}

interface ProductDetail {
  productId?: number;
  id?: number;
  name: string;
  price?: number;
  image: string;
  images?: string[];
  chipName?: string;
  cpuCores?: string;
  gpuCores?: string;
  ramGb?: number;
  displayName?: string;
  displayResolution?: string;
  mainCameraMp?: number;
  frontCameraMp?: number;
  osVersion?: string;
  variants?: Variant[];
}

const route = useRoute();
const productId = route.params.id;
const cartStore = useCartStore();

const fromCategory = (route.query.from as string) || "";
const getBackPath = () => {
  if (!fromCategory || fromCategory.toLowerCase() === "home") return "/";
  return `/${fromCategory.toLowerCase()}`;
};

const activeTab = ref("specs");
const activeImageIndex = ref(0);

const selectedColorId = ref<number | null>(null);
const selectedCapacityId = ref<number | null>(null);

// Fetch API
const {
  data: product,
  pending,
  error,
} = await useFetch<ProductDetail>(
  `https://localhost:7234/api/Product/${productId}`,
);

// Extract Available Colors and Capacities
const availableColors = computed(() => {
  if (!product.value?.variants) return [];
  const map = new Map<number, { id: number; name: string }>();
  product.value.variants.forEach((v) => {
    if (!map.has(v.colorId)) {
      map.set(v.colorId, { id: v.colorId, name: v.colorName });
    }
  });
  return Array.from(map.values());
});

const availableCapacities = computed(() => {
  if (!product.value?.variants) return [];
  const map = new Map<number, { id: number; name: string }>();
  product.value.variants.forEach((v) => {
    if (!map.has(v.capacityId)) {
      map.set(v.capacityId, { id: v.capacityId, name: v.capacityName });
    }
  });
  return Array.from(map.values());
});

// Match active variant based on selected color and storage
const selectedVariant = computed(() => {
  if (!product.value?.variants) return null;
  return (
    product.value.variants.find(
      (v) =>
        v.colorId === selectedColorId.value &&
        v.capacityId === selectedCapacityId.value,
    ) || product.value.variants[0]
  );
});

// Color hex helper for UI dots
const getColorHex = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes("black") || lower.includes("space gray")) return "#1c1c1e";
  if (lower.includes("white") || lower.includes("silver")) return "#f2f2f2";
  if (lower.includes("natural") || lower.includes("gold")) return "#bebbb4";
  if (lower.includes("blue")) return "#2a3b50";
  return "#888888";
};

// Single source of truth for gallery
const productImages = computed(() => {
  if (!product.value) return [];

  if (product.value.images && product.value.images.length > 0) {
    return product.value.images;
  }

  const variantImages =
    product.value.variants
      ?.map((v) => v.image)
      .filter((img): img is string => !!img) || [];

  if (variantImages.length > 0 && product.value.image) {
    return Array.from(new Set([product.value.image, ...variantImages]));
  }

  return product.value.image ? [product.value.image] : [];
});

// Auto sync gallery index on variant switch
watch(selectedVariant, (newVariant) => {
  if (newVariant?.image) {
    const imgIdx = productImages.value.indexOf(newVariant.image);
    if (imgIdx !== -1) {
      activeImageIndex.value = imgIdx;
    }
  }
});

// Auto select default color and capacity when data arrives
watch(
  product,
  (newProduct) => {
    if (newProduct?.variants && newProduct.variants.length > 0) {
      const firstVariant = newProduct.variants[0];

      if (firstVariant) {
        selectedColorId.value = firstVariant.colorId;
        selectedCapacityId.value = firstVariant.capacityId;
      }
    }
  },
  { immediate: true },
);

// Cross-sell items
const addOns = [
  {
    id: 401,
    name: "20W USB-C Power Adapter",
    price: 25,
    image:
      "https://i.pinimg.com/1200x/7b/82/14/7b82142c1c12db484c175e4b4dac6c17.jpg",
  },
  {
    id: 402,
    name: "Case",
    price: 35,
    image:
      "https://i.pinimg.com/736x/fa/a0/eb/faa0eb96723f24c590ab65fd5ed6f745.jpg",
  },
  {
    id: 403,
    name: "NEW Semiconductor Magnetic Clip Phone Cooler with Digital Display Temperature RGB Lights Compatible",
    price: 39,
    image:
      "https://i.pinimg.com/1200x/fc/8b/ce/fc8bcef93ab5fdc5a9f07b206cd10764.jpg",
  },
  {
    id: 404,
    name: "Mouse Pad",
    price: 20,
    image:
      "https://i.pinimg.com/736x/28/70/69/287069643dcc763a9bb64b3a7ddc13eb.jpg",
  },
  {
    id: 405,
    name: "Best Wifi Router For Apartment in 2026 | Smarthomerv",
    price: 50,
    image:
      "https://i.pinimg.com/736x/be/17/bb/be17bbaf3d4fc5fc3fdc6aa2f98e13b2.jpg",
  },
];

const handleAddToCart = () => {
  if (!product.value) return;

  const pId = product.value.productId ?? product.value.id ?? productId;
  const variant = selectedVariant.value;

  const itemToCart = {
    id: variant ? `${pId}-${variant.productVariantId}` : `${pId}`,
    productId: pId,
    name: variant
      ? `${product.value.name} (${variant.capacityName}, ${variant.colorName})`
      : product.value.name,
    title: variant
      ? `${product.value.name} (${variant.capacityName}, ${variant.colorName})`
      : product.value.name,
    price: variant ? variant.price : (product.value.price ?? 0),
    image: variant?.image || product.value.image,
    color: variant?.colorName || "",
    storage: variant?.capacityName || "",
  };

  cartStore.addToCart(itemToCart);
};

const handleAddAddOn = (item: any) => {
  cartStore.addToCart({
    id: item.id,
    productId: item.id,
    name: item.name,
    title: item.name,
    price: item.price,
    image: item.image,
  });
};
</script>
