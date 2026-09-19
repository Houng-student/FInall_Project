<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-2">
        Create Account
      </h1>
      <p class="text-center text-gray-500 mb-8">
        Register a new account
      </p>

      <form @submit.prevent="registerUser" class="space-y-5">
        <!-- Username -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Username
          </label>
          <input
            v-model="form.username"
            type="text"
            placeholder="Enter username"
            class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            v-model="form.email"
            type="email"
            placeholder="user@example.com"
            class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          />
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            v-model="form.password"
            type="password"
            placeholder="Enter password"
            class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          />
        </div>

        <!-- Confirm Password -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>
          <input
            v-model="form.confirm_password"
            type="password"
            placeholder="Confirm password"
            class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          />
        </div>

        <!-- Register Button -->
        <!-- <button
          type="submit"
          class="w-full bg-red-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Register
        </button>
         -->
        <button type="submit" class="border">register</button>
      </form>

      <p class="text-center text-gray-500 mt-6">
        Already have an account?
        <NuxtLink
          to="/login"
          class="text-blue-600 font-semibold hover:underline"
        >
          Login
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
  username: "",
  email: "",
  password: "",
  confirm_password: "",
});

const registerUser = async () => {
  if (form.password !== form.confirm_password) {
    alert("Passwords do not match!");
    return;
  }



  // Example API
  
  const response = await fetch("https://localhost:7234/api/Auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const data = await response.json();
  if(data.token){
    localStorage.setItem("token", data.token);
    navigateTo("/");
  }

};
</script>