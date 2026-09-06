<template>
  <Header/>
  <div class="bg-[#FBFBFD] font-sans text-[#1D1D1F] selection:bg-indigo-500/20 selection:text-indigo-600">

    <!-- ================= 1. PAGE HERO HEADER (ENGLISH ONLY & COMPACT) ================= -->
    <section class="pt-12 pb-14 px-4 sm:px-6 lg:px-10 max-w-[1280px] mx-auto text-center space-y-3">
      <span class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-medium tracking-wide border border-indigo-100/80 backdrop-blur-sm">
        <svg class="w-3 h-3 fill-current text-indigo-600" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
        ETEC Ecosystem & Authorised Services
      </span>

      <h1 class="text-2xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
        Services & Solutions from <span class="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent font-bold">ETEC Store</span>
      </h1>

      <p class="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-normal">
        Explore our official premium services — Easy Installments, Trade-In programs, ETEC Care protection, certified repair center, and enterprise IT solutions.
      </p>
    </section>

    <!-- ================= 2. SERVICES QUICK NAV TAB BAR ================= -->
    <nav class="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-y border-slate-200/80 shadow-sm py-2.5 px-4">
      <div class="max-w-[1280px] mx-auto flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
        <a 
          v-for="item in allServices" 
          :key="item.id" 
          :href="'#' + item.id"
          class="px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600 text-slate-600 flex items-center gap-1.5 border border-transparent hover:border-indigo-100"
        >
          <component :is="item.icon" class="w-3.5 h-3.5 text-indigo-600" />
          {{ item.title }}
        </a>
      </div>
    </nav>

    <!-- ================= 3. SERVICES GRID SECTION ================= -->
    <section class="py-14 px-4 sm:px-6 lg:px-10 max-w-[1280px] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- 1. Easy Payment -->
        <div id="easy-payment" class="bg-white rounded-2xl border border-slate-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-indigo-200 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
          <div>
            <div class="h-44 w-full overflow-hidden relative">
              <img src="https://i.pinimg.com/736x/a2/10/3f/a2103fa832bd0d89acc07c331b8a588c.jpg" alt="Easy Payment" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent"></div>
              <div class="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md text-indigo-600 flex items-center justify-center shadow-md">
                <EasyPaymentIcon class="w-4 h-4 fill-current" />
              </div>
            </div>
            <div class="p-5 space-y-2.5">
              <div class="flex items-center justify-between">
                <h3 class="text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">Easy Payment</h3>
                <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 uppercase tracking-wider">Financial</span>
              </div>
              <p class="text-[13px] text-slate-500 leading-relaxed font-normal">
                កម្មវិធីបង់រំលោះងាយៗ ជាមួយដៃគូធនាគារជាច្រើន អត្រាការប្រាក់ទាប និងលក្ខខណ្ឌងាយស្រួល ដើម្បីទទួលបានឧបករណ៍ Apple & High-Tech ភ្លាមៗ។
              </p>
              <ul class="space-y-1.5 pt-2 text-[12px] text-slate-600 border-t border-slate-100 font-normal">
                <li class="flex items-center gap-2"><CheckIcon /> 0% Interest rates available (ការប្រាក់ 0%)</li>
                <li class="flex items-center gap-2"><CheckIcon /> Leading local bank partners</li>
                <li class="flex items-center gap-2"><CheckIcon /> Fast document approval (ដំណើរការរហ័ស)</li>
              </ul>
            </div>
          </div>
          <div class="px-5 pb-5 pt-1">
            <a href="#inquiry-form" class="text-xs font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">Calculate Installment &rarr;</a>
          </div>
        </div>

        <!-- 2. Trade-In -->
        <div id="trade-in" class="bg-white rounded-2xl border border-slate-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-indigo-200 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
          <div>
            <div class="h-44 w-full overflow-hidden relative">
              <img src="https://i.pinimg.com/1200x/85/1d/49/851d49c1d06214a7812aba37fee893fc.jpg" alt="Trade In" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent"></div>
              <div class="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md text-indigo-600 flex items-center justify-center shadow-md">
                <TradeInIcon class="w-4 h-4 fill-current" />
              </div>
            </div>
            <div class="p-5 space-y-2.5">
              <div class="flex items-center justify-between">
                <h3 class="text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">Trade-In Service</h3>
                <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-purple-50 text-purple-600 uppercase tracking-wider">Upgrade</span>
              </div>
              <p class="text-[13px] text-slate-500 leading-relaxed font-normal">
                យកឧបករណ៍ចាស់មកវាយតម្លៃនៅ ETEC ដើម្បីដោះដូើយក iPhone, iPad ឬ Mac ស៊េរីថ្មី ដោយទទួលបានតម្លៃខ្ពស់សមរម្យ។
              </p>
              <ul class="space-y-1.5 pt-2 text-[12px] text-slate-600 border-t border-slate-100 font-normal">
                <li class="flex items-center gap-2"><CheckIcon /> Instant device evaluation (វាយតម្លៃភ្លាមៗ)</li>
                <li class="flex items-center gap-2"><CheckIcon /> Best trade-in value guaranteed</li>
                <li class="flex items-center gap-2"><CheckIcon /> 100% Secure data erasure (សុវត្ថិភាពទិន្នន័យ)</li>
              </ul>
            </div>
          </div>
          <div class="px-5 pb-5 pt-1">
            <a href="#inquiry-form" class="text-xs font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">Check Trade-In Value &rarr;</a>
          </div>
        </div>

        <!-- 3. Device Protection Plan -->
        <div id="device-protection" class="bg-white rounded-2xl border border-slate-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-indigo-200 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
          <div>
            <div class="h-44 w-full overflow-hidden relative">
              <img src="https://i.pinimg.com/1200x/7c/63/e0/7c63e0b06e42560fa1909689efd8b6d8.jpg" alt="Protection Plan" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent"></div>
              <div class="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md text-indigo-600 flex items-center justify-center shadow-md">
                <ProtectionIcon class="w-4 h-4 fill-current" />
              </div>
            </div>
            <div class="p-5 space-y-2.5">
              <div class="flex items-center justify-between">
                <h3 class="text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">ETEC Care+</h3>
                <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-600 uppercase tracking-wider">Protection</span>
              </div>
              <p class="text-[13px] text-slate-500 leading-relaxed font-normal">
                កញ្ចប់ការពារឧបករណ៍បន្ថែម ប្រឆាំងនឹងការធ្លាក់បែក អេក្រង់ ការខូចខាតដោយចៃដន្យ និងជួយឱ្យអ្នកប្រើប្រាស់ដោយទំនុកចិត្ត។
              </p>
              <ul class="space-y-1.5 pt-2 text-[12px] text-slate-600 border-t border-slate-100 font-normal">
                <li class="flex items-center gap-2"><CheckIcon /> Screen crack coverage (ការពារការធ្លាក់បែក)</li>
                <li class="flex items-center gap-2"><CheckIcon /> Accidental damage protection</li>
                <li class="flex items-center gap-2"><CheckIcon /> Express replacement service</li>
              </ul>
            </div>
          </div>
          <div class="px-5 pb-5 pt-1">
            <a href="#inquiry-form" class="text-xs font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">Get Protection Plan &rarr;</a>
          </div>
        </div>

        <!-- 4. Service Center -->
        <div id="service-center" class="bg-white rounded-2xl border border-slate-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-indigo-200 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
          <div>
            <div class="h-44 w-full overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80" alt="Service Center" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent"></div>
              <div class="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md text-indigo-600 flex items-center justify-center shadow-md">
                <ServiceCenterIcon class="w-4 h-4 fill-current" />
              </div>
            </div>
            <div class="p-5 space-y-2.5">
              <div class="flex items-center justify-between">
                <h3 class="text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">Service Center</h3>
                <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 uppercase tracking-wider">Repair</span>
              </div>
              <p class="text-[13px] text-slate-500 leading-relaxed font-normal">
                មជ្ឈមណ្ឌលជួសជុលទទួលស្គាល់ផ្លូវការ ប្រើប្រាស់គ្រឿងបន្លាស់សុទ្ធ Genuine 100% ដោយក្រុមបច្ចេកទេសករជំនាញ professional។
              </p>
              <ul class="space-y-1.5 pt-2 text-[12px] text-slate-600 border-t border-slate-100 font-normal">
                <li class="flex items-center gap-2"><CheckIcon /> 100% Genuine original parts</li>
                <li class="flex items-center gap-2"><CheckIcon /> Certified Apple/Tech engineers</li>
                <li class="flex items-center gap-2"><CheckIcon /> Official repair warranty kept</li>
              </ul>
            </div>
          </div>
          <div class="px-5 pb-5 pt-1">
            <a href="#inquiry-form" class="text-xs font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">Book a Repair &rarr;</a>
          </div>
        </div>

        <!-- 5. Workshops -->
        <div id="workshops" class="bg-white rounded-2xl border border-slate-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-indigo-200 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
          <div>
            <div class="h-44 w-full overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" alt="Workshops" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent"></div>
              <div class="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md text-indigo-600 flex items-center justify-center shadow-md">
                <WorkshopIcon class="w-4 h-4 fill-current" />
              </div>
            </div>
            <div class="p-5 space-y-2.5">
              <div class="flex items-center justify-between">
                <h3 class="text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">Workshops & Events</h3>
                <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-600 uppercase tracking-wider">Learning</span>
              </div>
              <p class="text-[13px] text-slate-500 leading-relaxed font-normal">
                ថ្នាក់បណ្តុះបណ្តាល និងសិក្ខាសាលាឥតគិតថ្លៃ Free workshops ស្តីពីការប្រើប្រាស់ Apple Features, Photography, Productivity & Coding.
              </p>
              <ul class="space-y-1.5 pt-2 text-[12px] text-slate-600 border-t border-slate-100 font-normal">
                <li class="flex items-center gap-2"><CheckIcon /> iPhone Photography & Video tips</li>
                <li class="flex items-center gap-2"><CheckIcon /> Mac Productivity for Professionals</li>
                <li class="flex items-center gap-2"><CheckIcon /> Free registration for all users</li>
              </ul>
            </div>
          </div>
          <div class="px-5 pb-5 pt-1">
            <a href="#inquiry-form" class="text-xs font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">Register Workshop &rarr;</a>
          </div>
        </div>

        <!-- 6. Portfolio / Enterprise -->
        <div id="portfolio" class="bg-white rounded-2xl border border-slate-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-indigo-200 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
          <div>
            <div class="h-44 w-full overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Enterprise Solutions" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent"></div>
              <div class="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md text-indigo-600 flex items-center justify-center shadow-md">
                <PortfolioIcon class="w-4 h-4 fill-current" />
              </div>
            </div>
            <div class="p-5 space-y-2.5">
              <div class="flex items-center justify-between">
                <h3 class="text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">Enterprise & B2B</h3>
                <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-rose-50 text-rose-600 uppercase tracking-wider">Solutions</span>
              </div>
              <p class="text-[13px] text-slate-500 leading-relaxed font-normal">
                ដំណោះស្រាយបច្ចេកវិទ្យាសម្រាប់ក្រុមហ៊ុន Enterprise, Education & Small Business ដោយមានការ Support ពេញលេញ។
              </p>
              <ul class="space-y-1.5 pt-2 text-[12px] text-slate-600 border-t border-slate-100 font-normal">
                <li class="flex items-center gap-2"><CheckIcon /> Apple at Work (Enterprise Hardware)</li>
                <li class="flex items-center gap-2"><CheckIcon /> Education institution discounts</li>
                <li class="flex items-center gap-2"><CheckIcon /> Full-suite Dedicated IT Support</li>
              </ul>
            </div>
          </div>
          <div class="px-5 pb-5 pt-1">
            <a href="#inquiry-form" class="text-xs font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">Explore B2B Solutions &rarr;</a>
          </div>
        </div>

      </div>
    </section>

    <!-- ================= 4. CLEAN INQUIRY FORM ================= -->
    <section id="inquiry-form" class="py-14 px-4 sm:px-6 lg:px-10 border-t border-slate-200/60 bg-gradient-to-b from-slate-50/50 to-indigo-50/20">
      <div class="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        <!-- Info Column -->
        <div class="lg:col-span-5 space-y-4 lg:sticky lg:top-20">
          <span class="text-xs font-semibold text-indigo-600 uppercase tracking-wider">ETEC Customer Care</span>
          <h2 class="text-xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug">
            Get in Touch with <span class="text-indigo-600 font-bold">ETEC</span>
          </h2>
          <p class="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
            Please fill out the form below. Our dedicated support team will reach out to you within 24 hours.
          </p>

          <div class="space-y-2 pt-1 text-xs text-slate-600 font-normal">
            <p class="flex items-center gap-2.5">
              <svg class="w-3.5 h-3.5 text-indigo-600 shrink-0 fill-current" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              ETEC Flagship Store, Monivong Blvd, Phnom Penh
            </p>
            <p class="flex items-center gap-2.5">
              <svg class="w-3.5 h-3.5 text-indigo-600 shrink-0 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              +855 (0)23 999 888 | info@etec.com.kh
            </p>
          </div>
        </div>

        <!-- Form Column -->
        <div class="lg:col-span-7 bg-white/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-lg shadow-indigo-500/5">
          <form @submit.prevent="handleBooking" class="space-y-4">
            <div>
              <label class="block text-[11px] font-semibold text-slate-700 uppercase mb-1.5">Select Service</label>
              <select v-model="form.serviceType" required class="w-full h-10 px-3.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 text-xs transition-all">
                <option value="" disabled>Select a service option</option>
                <option value="easy-payment">Easy Payment (ការបង់រំលោះ)</option>
                <option value="trade-in">Trade-In Service (ដោះដូរស៊េរី)</option>
                <option value="device-protection">ETEC Care+ Protection Plan</option>
                <option value="service-center">Authorised Service Center (ការជួសជុល)</option>
                <option value="workshops">Workshops & Learning Sessions</option>
                <option value="portfolio">Enterprise & B2B Solutions</option>
              </select>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label class="block text-[11px] font-semibold text-slate-700 uppercase mb-1.5">Full Name</label>
                <input v-model="form.name" type="text" placeholder="John Doe" required class="w-full h-10 px-3.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 text-xs transition-all" />
              </div>
              <div>
                <label class="block text-[11px] font-semibold text-slate-700 uppercase mb-1.5">Phone Number</label>
                <input v-model="form.phone" type="tel" placeholder="012 345 678" required class="w-full h-10 px-3.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 text-xs transition-all" />
              </div>
            </div>

            <div>
              <label class="block text-[11px] font-semibold text-slate-700 uppercase mb-1.5">Additional Notes</label>
              <textarea v-model="form.notes" rows="2.5" placeholder="Specify device model or any specific request..." class="w-full p-3.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 text-xs transition-all resize-y"></textarea>
            </div>

            <button type="submit" class="w-full py-3 bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 hover:from-indigo-700 hover:to-blue-700 active:scale-[0.99] text-white font-semibold text-xs rounded-xl transition-all shadow-md hover:shadow-indigo-500/25">
              Submit Request
            </button>
          </form>
        </div>

      </div>
    </section>

  </div>

  <section>
    <AfterFooter/>
  </section>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import Header from '~/layouts/Header.vue'
import AfterFooter from '~/layouts/AfterFooter.vue'

const EasyPaymentIcon = () => h('svg', { viewBox: '0 0 24 24' }, [
  h('path', { d: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z' })
])

const TradeInIcon = () => h('svg', { viewBox: '0 0 24 24' }, [
  h('path', { d: 'M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z' })
])

const ProtectionIcon = () => h('svg', { viewBox: '0 0 24 24' }, [
  h('path', { d: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z' })
])

const ServiceCenterIcon = () => h('svg', { viewBox: '0 0 24 24' }, [
  h('path', { d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' })
])

const WorkshopIcon = () => h('svg', { viewBox: '0 0 24 24' }, [
  h('path', { d: 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z' })
])

const PortfolioIcon = () => h('svg', { viewBox: '0 0 24 24' }, [
  h('path', { d: 'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z' })
])

const CheckIcon = () => h('svg', { class: 'w-3 h-3 text-indigo-600 shrink-0 fill-current', viewBox: '0 0 24 24' }, [
  h('path', { d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' })
])

const allServices = ref([
  { id: 'easy-payment', title: 'Easy Payment', icon: EasyPaymentIcon },
  { id: 'trade-in', title: 'Trade-In', icon: TradeInIcon },
  { id: 'device-protection', title: 'ETEC Care+', icon: ProtectionIcon },
  { id: 'service-center', title: 'Service Center', icon: ServiceCenterIcon },
  { id: 'workshops', title: 'Workshops', icon: WorkshopIcon },
  { id: 'portfolio', title: 'Enterprise Solutions', icon: PortfolioIcon }
])

const form = ref({
  serviceType: '',
  name: '',
  phone: '',
  notes: ''
})

const handleBooking = () => {
  console.log('Form submitted:', form.value)
}
</script>