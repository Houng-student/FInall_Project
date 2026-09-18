<script setup lang="ts">
import { ref } from 'vue'
import AfterFooter from '~/layouts/AfterFooter.vue'
import Header from '~/layouts/Header.vue'

// Active Tab Menu
const activeTab = ref('general')

// Mock Profile State
const profile = ref({
  fullName: 'Sok San',
  username: 'soksan_etec',
  email: 'soksan@example.com',
  phone: '+855 12 345 678',
  bio: 'Apple ecosystem enthusiast and digital creator.',
  avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=SokSan',
  accountType: 'Apple Authorized Member',
  joinedDate: 'September 2026'
})

// Action States
const isSaved = ref(false)
const isLoading = ref(false)

const handleSave = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    isSaved.value = true
    setTimeout(() => { isSaved.value = false }, 3000)
  }, 800)
}
</script>

<template>
  <Header />

  <!-- ប្រើ Background ធម្មតា (bg-white) និងដក Space ទំនេរខាងលើចេញ (pt-4) -->
  <div class="min-h-screen bg-white text-gray-900 pt-4 pb-12 px-4 sm:px-6 lg:px-8 font-sans antialiased">
    <div class="max-w-5xl mx-auto space-y-6">
      
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b border-gray-200">
        <div>
          <span class="text-xs font-semibold tracking-wider text-gray-400 uppercase">Account Settings</span>
          <h1 class="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-1">
            Personal Profile
          </h1>
        </div>
        <NuxtLink 
          to="/" 
          class="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group"
        >
          <span>Continue Shopping</span>
          <i class="pi pi-arrow-right text-xs transition-transform group-hover:translate-x-0.5"></i>
        </NuxtLink>
      </div>

      <!-- Main Layout Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        <!-- Sidebar Navigation -->
        <aside class="lg:col-span-3">
          <nav class="space-y-1 bg-gray-50 p-2 rounded-2xl border border-gray-100">
            <button 
              @click="activeTab = 'general'"
              class="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200"
              :class="activeTab === 'general' ? 'bg-blue-600 text-white font-semibold' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'"
            >
              <i class="pi pi-user text-base"></i>
              <span>Personal Info</span>
            </button>

            <button 
              @click="activeTab = 'security'"
              class="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200"
              :class="activeTab === 'security' ? 'bg-blue-600 text-white font-semibold' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'"
            >
              <i class="pi pi-shield text-base"></i>
              <span>Password & Security</span>
            </button>

            <button 
              @click="activeTab = 'orders'"
              class="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200"
              :class="activeTab === 'orders' ? 'bg-blue-600 text-white font-semibold' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'"
            >
              <i class="pi pi-box text-base"></i>
              <span>Purchase History</span>
            </button>
          </nav>
        </aside>

        <!-- Main Content Area -->
        <main class="lg:col-span-9">
          <div class="bg-gray-50/50 rounded-2xl p-6 sm:p-8 border border-gray-200">
            
            <!-- TAB 1: PERSONAL INFO -->
            <div v-if="activeTab === 'general'" class="space-y-6">
              
              <!-- Notification Toast -->
              <Transition
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="transform -translate-y-2 opacity-0"
                enter-to-class="transform translate-y-0 opacity-100"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="transform translate-y-0 opacity-100"
                leave-to-class="transform -translate-y-2 opacity-0"
              >
                <div v-if="isSaved" class="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-900 text-sm">
                  <i class="pi pi-check-circle text-emerald-600 text-lg"></i>
                  <span>Your profile changes have been saved successfully.</span>
                </div>
              </Transition>

              <!-- Profile Avatar Header Section -->
              <div class="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-6 border-b border-gray-200">
                <div class="relative group">
                  <img 
                    :src="profile.avatar" 
                    alt="Avatar" 
                    class="w-20 h-20 rounded-full object-cover bg-white border border-gray-200"
                  />
                  <button 
                    type="button" 
                    class="absolute bottom-0 right-0 p-1.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform active:scale-90"
                    title="Change Photo"
                  >
                    <i class="pi pi-camera text-xs"></i>
                  </button>
                </div>

                <div class="text-center sm:text-left space-y-0.5">
                  <h2 class="text-lg font-bold text-gray-900">{{ profile.fullName }}</h2>
                  <p class="text-xs font-medium text-gray-500">{{ profile.accountType }}</p>
                  <p class="text-xs text-gray-400 pt-0.5">Member since {{ profile.joinedDate }}</p>
                </div>
              </div>

              <!-- Form Fields -->
              <form @submit.prevent="handleSave" class="space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  <!-- Full Name -->
                  <div class="space-y-1.5">
                    <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Full Name</label>
                    <input 
                      v-model="profile.fullName" 
                      type="text" 
                      class="w-full px-4 py-2.5 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 transition-all outline-none"
                    />
                  </div>

                  <!-- Username -->
                  <div class="space-y-1.5">
                    <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Username</label>
                    <input 
                      v-model="profile.username" 
                      type="text" 
                      class="w-full px-4 py-2.5 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 transition-all outline-none"
                    />
                  </div>

                  <!-- Email Address -->
                  <div class="space-y-1.5">
                    <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address</label>
                    <input 
                      v-model="profile.email" 
                      type="email" 
                      class="w-full px-4 py-2.5 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 transition-all outline-none"
                    />
                  </div>

                  <!-- Phone Number -->
                  <div class="space-y-1.5">
                    <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone Number</label>
                    <input 
                      v-model="profile.phone" 
                      type="text" 
                      class="w-full px-4 py-2.5 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 transition-all outline-none"
                    />
                  </div>
                </div>

                <!-- Bio -->
                <div class="space-y-1.5">
                  <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">About You</label>
                  <textarea 
                    v-model="profile.bio" 
                    rows="3" 
                    class="w-full px-4 py-2.5 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <!-- Action Buttons -->
                <div class="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
                  <button 
                    type="button" 
                    class="px-5 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Cancel
                  </button>
                  
                  <button 
                    type="submit" 
                    :disabled="isLoading"
                    class="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 active:scale-95 transition-all disabled:opacity-50"
                  >
                    <span v-if="isLoading" class="flex items-center gap-2">
                      <i class="pi pi-spin pi-spinner text-xs"></i>
                      <span>Saving...</span>
                    </span>
                    <span v-else>Save Changes</span>
                  </button>
                </div>
              </form>

            </div>

            <!-- TAB 2: SECURITY -->
            <div v-else-if="activeTab === 'security'" class="space-y-5">
              <div>
                <h3 class="text-lg font-bold text-gray-900">Password & Security</h3>
                <p class="text-xs text-gray-500 mt-0.5">Manage your password and authentication methods.</p>
              </div>
              
              <form @submit.prevent class="space-y-4 max-w-md pt-2">
                <div class="space-y-1.5">
                  <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Current Password</label>
                  <input type="password" class="w-full px-4 py-2.5 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none" />
                </div>
                <div class="space-y-1.5">
                  <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">New Password</label>
                  <input type="password" class="w-full px-4 py-2.5 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none" />
                </div>
                <button type="button" class="mt-2 px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all active:scale-95">
                  Update Password
                </button>
              </form>
            </div>

            <!-- TAB 3: ORDERS -->
            <div v-else-if="activeTab === 'orders'" class="space-y-5">
              <div>
                <h3 class="text-lg font-bold text-gray-900">Purchase History</h3>
                <p class="text-xs text-gray-500 mt-0.5">View and track your previous orders.</p>
              </div>

              <div class="py-10 text-center bg-white rounded-2xl border border-dashed border-gray-300">
                <i class="pi pi-box text-3xl text-gray-300 mb-2"></i>
                <p class="text-sm font-medium text-gray-500">No order history found.</p>
              </div>
            </div>

          </div>
        </main>
      </div>

    </div>
  </div>
  <section>
    <AfterFooter />
  </section>
</template>