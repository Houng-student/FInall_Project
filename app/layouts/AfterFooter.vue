<template>
  <footer class="bg-[#2d3238] text-gray-300 py-12 px-6 font-sans">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      <div class="space-y-4">
        <div class="flex items-center space-x-2">
          <span class="text-3xl font-extrabold text-white tracking-tight">ETEC</span>
          <span class="text-xs text-gray-400 block leading-tight">The One You Trust</span>
        </div>
        <p class="text-sm leading-relaxed text-gray-300">
          ETEC is Cambodia's largest Apple Authorized Reseller with premium high-traffic stores in AEON Mall Phnom Penh and AEON Mall Sen Sok. We are proudly serving our customers in Cambodia since 2006. Technical support is available at our Apple Service Provider in the ETEC HQ Building.
        </p>
        <div class="pt-2">
          <span class="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            +20 Etex Academy Certified Technicians
          </span>
        </div>
      </div>

      <div>
        <h3 class="text-white font-semibold text-lg mb-4">Apple Products</h3>
        <ul class="space-y-3 text-sm">
          <li v-for="product in products" :key="product.name">
            <Nuxtlink :to="product.link" class="flex items-center space-x-3 hover:text-white transition">
              <component :is="product.icon" class="w-5 h-5 text-gray-400" />
              <span>{{ product.name }}</span>
            </Nuxtlink>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-white font-semibold text-lg mb-4">Our Services</h3>
        <ul class="space-y-3 text-sm">
          <li v-for="service in services" :key="service.name">
            <Nuxtlink :href="service.link" class="flex items-center space-x-3 hover:text-white transition">
              <component :is="service.icon" class="w-5 h-5 text-gray-400" />
              <span>{{ service.name }}</span>
            </Nuxtlink>
          </li>
        </ul>
      </div>

      <div class="space-y-4 text-sm">
        <h3 class="text-white font-semibold text-lg mb-4">Get in Touch</h3>
        
        <div class="space-y-3">
          <div class="flex items-start space-x-3">
            <MapPinIcon class="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
            <div>
              <p class="font-medium text-white">Etec Sothearos</p>
              <Nuxtlink to="tel:023993181" class="flex items-center space-x-2 text-gray-300 hover:text-white mt-1">
                <PhoneIcon class="w-4 h-4 text-gray-400" />
                <span>023 99 31 81</span>
              </Nuxtlink>
            </div>
          </div>

          <div class="flex items-start space-x-3">
            <MapPinIcon class="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
            <div>
              <p class="font-medium text-white">Etec Sen Sok</p>
              <Nuxtlink to="tel:023993161" class="flex items-center space-x-2 text-gray-300 hover:text-white mt-1">
                <PhoneIcon class="w-4 h-4 text-gray-400" />
                <span>023 99 31 61</span>
              </Nuxtlink>
            </div>
          </div>

          <div class="flex items-start space-x-3">
            <MapPinIcon class="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
            <div>
              <p class="font-medium text-white">Etec Service Center</p>
              <Nuxtlink to="tel:023997575" class="flex items-center space-x-2 text-gray-300 hover:text-white mt-1">
                <PhoneIcon class="w-4 h-4 text-gray-400" />
                <span>023 99 75 75</span>
              </Nuxtlink>
            </div>
          </div>

          <div class="flex items-center space-x-3 pt-1">
            <EnvelopeIcon class="w-5 h-5 text-gray-400 shrink-0" />
            <Nuxtlink to="mailto:information@etec.com" class="hover:text-white transition">
              information@etec.com
            </Nuxtlink>
          </div>
        </div>

        <div class="flex space-x-4 pt-4">
          <Nuxtlink to="#" class="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition">
            <FacebookIcon class="w-4 h-4" />
          </Nuxtlink>
          <Nuxtlink to="#" class="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition">
            <InstagramIcon class="w-4 h-4" />
          </Nuxtlink>
          <Nuxtlink to="/contact" class="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition">
            <PaperAirplaneIcon class="w-4 h-4" />
          </Nuxtlink>
          <Nuxtlink to="#" class="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition">
            <TiktokIcon class="w-4 h-4" />
          </Nuxtlink>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  PaperAirplaneIcon, 
  CogIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  
} from '@heroicons/vue/24/outline'

// const products = [
//   { name: 'Mac', icon: MacIcon, link: '#' },
//   { name: 'iPad', icon: IpadIcon, link: '#' },
//   { name: 'iPhone', icon: IphoneIcon, link: '#' },
//   { name: 'Watch', icon: WatchIcon, link: '#' },
// ]

const services = [
  { name: 'Service Center', icon: CogIcon, link: '#' },
  { name: 'Trade-In', icon: CurrencyDollarIcon, link: '#' },
  { name: 'Easy Payment', icon: CreditCardIcon, link: '#' },
  { name: 'Device Protection Plan', icon: ShieldCheckIcon, link: '#' },
  { name: 'Workshops', icon: AcademicCapIcon, link: '#' },
]
</script>