<template>
  <div class="container mt-5" style="max-width: 400px;">
    <h2 class="text-center mb-4">Login</h2>
    <div class="form-floating mb-3">
      <input v-model="email" type="email" class="form-control" id="emailInput" placeholder="Email">
      <label for="emailInput">Email</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="password" type="password" class="form-control" id="passwordInput" placeholder="Password">
      <label for="passwordInput">Password</label>
    </div>
    <button @click="login" class="btn btn-primary w-100">Login</button>
    <p>Don't have account? <router-link to="/signUp">Sign Up</router-link></p>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const res = await axios.post('http://localhost:8080/api/auth/login', {
          email: this.email,
          password: this.password
        });

        // Save session
        localStorage.setItem('user', JSON.stringify(res.data)); // could include token, username, etc

        // Redirect
        this.$router.push('/openJobs');
      } catch (err) {
        alert('Login failed');
      }
    }
  }
}
</script>


<style scoped>

</style>
