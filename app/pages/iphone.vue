<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import AfterFooter from "~/layouts/AfterFooter.vue";
import Header from "~/layouts/Header.vue";
import { getProducts } from "~/services/productService";

const route = useRoute();

const activeTab = ref("All Models");
const tabs = [
  "All Models",
  "iPhone 17 Pro Max",
  "iPhone 16 Pro Max",
  "iPhone 15 Pro Max",
  "iPhone 14 Pro Max",
  "iPhone 13 Pro Max",
  "iPhone SE",
];

const navItems = [
  { name: "Home", path: "/" },
  { name: "Mac", path: "/mac" },
  { name: "IPad", path: "/ipad" },
  { name: "IPhone", path: "/iphone" },
  { name: "Accessories", path: "/accessories" },
  { name: "Service", path: "/service" },
  { name: "Offers", path: "/offers" },
  { name: "Stores", path: "/stores" },
];

type ProductColor = {
  name: string;
  hex: string;
  image?: string;
};

type Product = {
  productId: number;
  id: number;
  name: string;
  isNew: boolean;
  price: string | number;
  category: string;
  selectedColor: string;
  colors: ProductColor[];
  image: string;
  categoryName: string;
};

const products = ref<Product[]>([]);

onMounted(async () => {
  const response = await getProducts();
  const safeProducts = Array.isArray(response) ? response : [];

  products.value = safeProducts.map((product, index) => {
    const productId = Number(product.productId ?? product.id ?? index + 1);

    return {
      ...product,
      id: Number(product.id ?? productId),
      productId,
      name: String(product.name ?? `iPhone ${index + 1}`),
      isNew: Boolean(product.isNew),
      price: product.price ?? "$999",
      category: String(product.category ?? "iphone"),
      selectedColor: String(
        product.selectedColor ?? product.colors?.[0]?.hex ?? "#000000",
      ),
      colors:
        Array.isArray(product.colors) && product.colors.length
          ? product.colors
          : [{ name: "Black", hex: "#000000" }],
      image: String(
        product.image ??
          "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
      ),
      categoryName: String(
        product.categoryName ?? product.category ?? "iphone",
      ),
    };
  });
});

const iphoneProducts = computed(() =>
  products.value.filter(
    (product) =>
      (product.categoryName ?? product.category ?? "").toLowerCase() ===
      "iphone",
  ),
);

const changeColor = (product: Product, color: ProductColor) => {
  product.selectedColor = color.hex;
  if (color.image) {
    product.image = color.image;
  }
};

const filteredProducts = computed(() => {
  const list = iphoneProducts.value;

  if (activeTab.value === "All Models") return list;

  return list.filter((product) => {
    const productName = (product.name ?? "").toLowerCase();
    const modelName = activeTab.value.toLowerCase();
    return (
      productName.includes(modelName) ||
      (product.category ?? "").toLowerCase() === modelName
    );
  });
});
</script>

<template>
  <div class="min-h-screen bg-[#fafafa] text-[#1d1d1f] font-sans pb-24">
    <Header :nav-items="navItems" />

    <section class="text-center pt-16 pb-12 px-4 max-w-3xl mx-auto">
      <h1 class="text-5xl font-bold tracking-tight text-gray-900 mb-4">
        iPhone
      </h1>
      <p
        class="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto"
      >
        Pro. Beyond. Experience the absolute pinnacle of technology in the palm
        of your hand.
      </p>
    </section>

    <!-- Sub-category Tabs -->
    <div
      class="flex justify-center items-center space-x-6 text-xs font-semibold mb-12"
    >
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="activeTab = tab"
        class="pb-1 transition-colors"
        :class="
          activeTab === tab
            ? 'text-black border-b-2 border-black'
            : 'text-gray-400 hover:text-gray-700'
        "
      >
        {{ tab }}
      </button>
    </div>

    <!-- Product Grid -->
    <main class="max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="product in filteredProducts"
          :key="product.productId ?? product.id ?? product.name"
          class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md"
        >
          <NuxtLink
            :to="`/products/${product.id}`"
            class="w-full flex flex-col items-center group"
          >
            <div
              class="w-full h-56 bg-white rounded-xl mb-6 overflow-hidden flex items-center justify-center"
            >
              <img
                :src="product.image"
                :alt="product.name"
                class="h-full w-full object-contain p-4 group-hover:scale-105 transition-transform"
              />
            </div>

            <span
              class="text-[10px] font-bold text-orange-600 uppercase tracking-wider mb-1"
            >
              {{ product.isNew ? "NEW" : "" }}
            </span>
            <h3
              class="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1"
            >
              {{ product.name }}
            </h3>
          </NuxtLink>

          <!-- Interactive Color Swatches -->
          <div class="flex items-center gap-2 mb-4">
            <button
              v-for="color in product.colors ?? []"
              :key="color.hex"
              @click="changeColor(product, color)"
              class="w-3.5 h-3.5 rounded-full border border-gray-300 transition-transform cursor-pointer"
              :class="{
                'scale-125 ring-2 ring-blue-500 ring-offset-1':
                  product.selectedColor === color.hex,
              }"
              :style="{ backgroundColor: color.hex }"
              :title="color.name"
            ></button>
          </div>

          <p class="text-xs font-medium text-gray-500 mb-6">
            {{ product.price }}
          </p>

          <div class="mt-auto w-full space-y-2">
            <NuxtLink
              :to="`/products/${product.productId ?? product.id}`"
              class="block w-full bg-black hover:bg-gray-800 text-white text-xs font-medium py-2.5 rounded-lg text-center transition-colors"
            >
              Buy
            </NuxtLink>
            <NuxtLink
              :to="`/products/${product.productId ?? product.id}`"
              class="block w-full bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 text-xs font-medium py-2.5 rounded-lg text-center transition-colors"
            >
              Learn more
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
  </div>
  <section>
    <AfterFooter />
  </section>
</template>
