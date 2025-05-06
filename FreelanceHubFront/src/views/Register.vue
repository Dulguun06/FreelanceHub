<template>
  <div class="container mt-5" style="max-width: 400px;">
    <h2 class="text-center mb-4">Register</h2>
    <div class="form-floating mb-3">
      <input v-model="username" type="text" class="form-control" id="usernameInput" placeholder="Username">
      <label for="usernameInput">Username</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="email" type="email" class="form-control" id="emailInput" placeholder="Email">
      <label for="emailInput">Email</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="password" type="password" class="form-control" id="passwordInput" placeholder="Password">
      <label for="passwordInput">Password</label>
    </div>
    <button @click="register" class="btn btn-success w-100">Register</button>
    <p>Already have account? <router-link to="/login">Login</router-link></p>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async register() {
      const res = await axios.post('http://localhost:8080/api/auth/register', {
        username: this.username,
        email: this.email,
        password: this.password
      });
      alert("Registered: " + res.data.email);
    }
  }
}
</script>


<style scoped>

</style>
