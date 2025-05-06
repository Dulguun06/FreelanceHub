<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 sticky-top">
    <router-link to="/" class="navbar-brand fs-3">FreelanceHub</router-link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto align-items-center">
        <li class="nav-item">
          <router-link to="/" class="nav-link fs-5 px-3">Home</router-link>
        </li>
        <template v-if="isLoggedIn">
          <li class="nav-item">
            <router-link to="/openJobs" class="nav-link fs-5 px-3">Open Jobs</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/profile" class="nav-link fs-5 px-3">User Profile</router-link>
          </li>
          <li class="nav-item">
            <button class="btn btn-outline-light fs-6 ms-2 px-3 py-1" @click="logout">Logout</button>
          </li>
        </template>
        <template v-else>
          <li class="nav-item">
            <router-link to="/login" class="nav-link fs-5 px-3">Login</router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>


<script>
export default {
  name: "Navbar",
  data() {
    return {
      isLoggedIn: false,
    }
  },
  mounted() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      this.isLoggedIn = !!localStorage.getItem('user');
    },
    logout() {
      localStorage.removeItem('user');
      this.isLoggedIn = false;
      this.$router.push('/login');
    }
  },
  watch: {
    '$route'() {
      this.checkLogin();
    }
  }
}
</script>
