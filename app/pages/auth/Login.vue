<template>
  <div class="container">
    <form class="frm" @submit.prevent="login">
      <h1>Login Form</h1>

      <div class="main-div">
        <input
          type="email"
          v-model="email"
          placeholder="Enter email"
        />
        <i class="fa-solid fa-envelope icon"></i>
      </div>

      <div class="main-div">
        <input
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
          placeholder="Enter password"
        />
        <i
          class="fa-solid"
          :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"
          @click="showPassword = !showPassword"
          style="cursor: pointer"
        ></i>
      </div>

      <div class="rem">
        <div class="remember">
          <input type="checkbox" v-model="remember" />
          <label>Remember Me</label>
        </div>

        <a href="#">Forgot Password?</a>
      </div>

      <button type="submit">Login</button>

      <p class="register">
        Don't have an account?
        <a href="#">Register</a>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const remember = ref(false);
const showPassword = ref(false);

const login = async () => {
    
  const response = await fetch("https://localhost:7234/api/Auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });

  const data = await response.json();
  if(data.token){
    localStorage.setItem("token", data.token);
    navigateTo("/");
  }
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background-image: url("https://t4.ftcdn.net/jpg/09/75/18/39/360_F_975183910_o0fNlKQtI5UoMxRBkECtGuIDrQZDWeL8.jpg");
  background-size: cover;
  background-position: center;
}

.frm {
  width: 450px;
  padding: 25px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid white;
  border-radius: 15px;
}

.frm h1 {
  text-align: center;
  color: white;
  font-size: 40px;
  margin-bottom: 20px;
}

.main-div {
  position: relative;
  margin-top: 25px;
}

.main-div input {
  width: 100%;
  padding: 15px 50px 15px 15px;
  background: transparent;
  border: 2px solid white;
  outline: none;
  border-radius: 10px;
  color: white;
  font-size: 18px;
}

.main-div input:focus {
  border-color: orange;
}

.main-div i {
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-size: 20px;
}

::placeholder {
  color: white;
}

.rem {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.remember {
  display: flex;
  align-items: center;
  gap: 8px;
}

.rem a {
  color: white;
  text-decoration: underline;
}

button {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 15px;
  margin-top: 25px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: 0.3s;
}

button:hover {
  background: orange;
  color: white;
  transform: translateY(-2px);
}

.register {
  margin-top: 20px;
  text-align: center;
  color: white;
}

.register a {
  color: white;
  font-weight: bold;
  text-decoration: underline;
}
</style>