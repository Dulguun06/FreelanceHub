<template>
  <Navbar />
  <div class="container mt-4">
    <RouterView :key="$route.fullPath" />
  </div>
</template>


<script>
import Navbar from "@/components/Navbar.vue";
import Home from "@/views/Home.vue";

export default {
  name: "Main",
  components: {
    Navbar,
    Home
  },
}
</script>


<style>
</style>
