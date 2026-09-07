<template>
  <Header />

  <div class="bg-slate-50 font-sans min-h-screen text-slate-900 pb-24">
    
    <section class="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-20 px-4 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div class="max-w-4xl mx-auto text-center relative z-10 space-y-4">
        <span class="inline-block bg-purple-500/20 text-purple-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-purple-500/30 uppercase tracking-widest backdrop-blur-md">
          ✨ Special Promotions & Bundles
        </span>
        <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Mac & Apple Exclusive Offers
        </h1>
        <p class="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Discover special offers, amazing discounts, and exclusive Apple product bundles right here.
        </p>
      </div>
    </section>

    <div class="max-w-6xl mx-auto px-4 -mt-10 space-y-12 relative z-20">
      
      <div class="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div class="space-y-4 max-w-lg text-center lg:text-left">
          <span class="bg-purple-100 text-purple-700 text-xs font-bold px-3.5 py-1.5 rounded-xl uppercase tracking-wider">
            LIMITED TIME DEAL
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            MacBook Air & Pro Bundle Offers
          </h2>
          <p class="text-slate-500 text-sm sm:text-base leading-relaxed">
            Get a free laptop sleeve, power adapter, or special discounts on accessories when you purchase selected Mac models.
          </p>
          <div class="pt-2">
            <button class="bg-slate-900 hover:bg-purple-600 text-white font-medium px-7 py-3.5 rounded-2xl transition-all shadow-lg cursor-pointer">
              View Eligible Models
            </button>
          </div>
        </div>
        
        <div class="w-full lg:w-1/2 flex items-center justify-center bg-slate-50/80 rounded-2xl p-6 border border-slate-100 h-72">
          <img 
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80" 
            alt="MacBook Air Offer" 
            class="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500" 
          />
        </div>
      </div>

      <div class="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 text-sm font-medium">
        <button class="bg-slate-900 text-white px-5 py-2.5 rounded-xl whitespace-nowrap shadow-sm cursor-pointer">All Offers</button>
        <button class="bg-white hover:bg-slate-100 text-slate-600 px-5 py-2.5 rounded-xl border border-slate-200 whitespace-nowrap transition-all cursor-pointer">Mac Bundles</button>
        <button class="bg-white hover:bg-slate-100 text-slate-600 px-5 py-2.5 rounded-xl border border-slate-200 whitespace-nowrap transition-all cursor-pointer">Student Discount</button>
        <button class="bg-white hover:bg-slate-100 text-slate-600 px-5 py-2.5 rounded-xl border border-slate-200 whitespace-nowrap transition-all cursor-pointer">Free Gifts</button>
        <button class="bg-white hover:bg-slate-100 text-slate-600 px-5 py-2.5 rounded-xl border border-slate-200 whitespace-nowrap transition-all cursor-pointer">Installment 0%</button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Card 1 -->
        <div class="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group">
          <div>
            <div class="h-48 w-full bg-slate-50 rounded-2xl overflow-hidden mb-5 relative">
              <img src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=80" alt="MacBook Pro" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                Promo
              </span>
            </div>
            <div class="space-y-2">
              <span class="text-xs font-bold text-rose-500 bg-rose-50 px-2.5 py-1 rounded-lg">SAVE $150</span>
              <h3 class="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">Back to School Mac Promo</h3>
              <p class="text-slate-500 text-sm leading-relaxed">
                Special discounts for students and teachers on the purchase of any MacBook M2 or M3 models.
              </p>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span class="text-slate-400 text-xs font-medium">Valid until Oct 30</span>
            <a href="#" class="text-purple-600 font-semibold text-sm hover:underline inline-flex items-center gap-1">
              View Details →
            </a>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group">
          <div>
            <div class="h-48 w-full bg-slate-50 rounded-2xl overflow-hidden mb-5 relative">
              <img src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80" alt="iPad Pro" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                Bundle
              </span>
            </div>
            <div class="space-y-2">
              <span class="text-xs font-bold text-emerald-500 bg-emerald-50 px-2.5 py-1 rounded-lg">FREE GIFT</span>
              <h3 class="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">iPad Pro & Air Accessories</h3>
              <p class="text-slate-500 text-sm leading-relaxed">
                Receive a free Apple Pencil or Smart Folio Case instantly when purchasing new iPad models with us.
              </p>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span class="text-slate-400 text-xs font-medium">Limited Stock</span>
            <a href="#" class="text-purple-600 font-semibold text-sm hover:underline inline-flex items-center gap-1">
              View Details →
            </a>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group">
          <div>
            <div class="h-48 w-full bg-slate-50 rounded-2xl overflow-hidden mb-5 relative">
              <img src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=500&q=80" alt="Installment" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                Finance
              </span>
            </div>
            <div class="space-y-2">
              <span class="text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-lg">0% INTEREST</span>
              <h3 class="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">Easy Installment Plan</h3>
              <p class="text-slate-500 text-sm leading-relaxed">
                Enjoy 0% interest installment plans over flexible terms with our major partner banks nationwide.
              </p>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span class="text-slate-400 text-xs font-medium">Easy Plan</span>
            <a href="#" class="text-purple-600 font-semibold text-sm hover:underline inline-flex items-center gap-1">
              View Details →
            </a>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group">
          <div>
            <div class="h-48 w-full bg-slate-50 rounded-2xl overflow-hidden mb-5 relative">
              <img src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=80" alt="Trade In" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                Upgrade
              </span>
            </div>
            <div class="space-y-2">
              <span class="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg">TRADE-IN BONUS</span>
              <h3 class="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">Mac & iPhone Trade-In</h3>
              <p class="text-slate-500 text-sm leading-relaxed">
                Trade in your old device for a new model and get an extra trade-in bonus or high valuation price.
              </p>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span class="text-slate-400 text-xs font-medium">Extra $50</span>
            <a href="#" class="text-purple-600 font-semibold text-sm hover:underline inline-flex items-center gap-1">
              View Details →
            </a>
          </div>
        </div>

        <!-- Card 5 -->
        <div class="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group">
          <div>
            <div class="h-48 w-full bg-slate-50 rounded-2xl overflow-hidden mb-5 relative">
              <img src="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=500&q=80" alt="AirPods" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                Accessory
              </span>
            </div>
            <div class="space-y-2">
              <span class="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">AIRPODS DEAL</span>
              <h3 class="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">Audio Bundle Promo</h3>
              <p class="text-slate-500 text-sm leading-relaxed">
                Get 30% off AirPods or Beats Headphones with the purchase of any Mac or iPad model.
              </p>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span class="text-slate-400 text-xs font-medium">Save 30%</span>
            <a href="#" class="text-purple-600 font-semibold text-sm hover:underline inline-flex items-center gap-1">
              View Details →
            </a>
          </div>
        </div>

        <!-- Card 6 -->
        <div class="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group">
          <div>
            <div class="h-48 w-full bg-slate-50 rounded-2xl overflow-hidden mb-5 relative">
              <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=500&q=80" alt="Protection Plan" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                Warranty
              </span>
            </div>
            <div class="space-y-2">
              <span class="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg">VIP WARRANTY</span>
              <h3 class="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">ETEC Care+ Protection</h3>
              <p class="text-slate-500 text-sm leading-relaxed">
                Get up to 2 full years of accidental damage and liquid protection at a special rate when buying new devices.
              </p>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span class="text-slate-400 text-xs font-medium">Care+ Plan</span>
            <a href="#" class="text-purple-600 font-semibold text-sm hover:underline inline-flex items-center gap-1">
              View Details →
            </a>
          </div>
        </div>

      </div>

    </div>
  </div>

  <AfterFooter />
</template>

<script setup lang="ts">
import Header from '~/layouts/Header.vue'
import AfterFooter from '~/layouts/AfterFooter.vue'
</script>