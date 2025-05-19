<template>
  <Navbar />
  <div class="container mt-4">
    <div class="row">
      <div class="col-2">
        <Clock/>
      </div>
      <div class="col-10">
        <RouterView :key="$route.fullPath" />
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Home from "@/views/Home.vue";
import Clock from "@/components/Clock.vue";

export default {
  name: "Main",
  components: {
    Clock,
    Navbar,
    Home
  },
}
</script>


<style>
</style>
