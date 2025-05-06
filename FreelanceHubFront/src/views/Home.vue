<template>
  <div class="container my-5">
    <div class="text-center">
      <img src="../assets/Logo.png" alt="Logo" class="mb-4" style="max-width: 120px;" />
      <h1 class="mb-3">Welcome to JobMatch!</h1>
      <p class="lead">
        🎯 We're here to help you find freelance jobs that match <strong>your unique skills</strong> and <strong>interests</strong>.
      </p>
    </div>

    <div class="card mt-5 p-4 shadow-sm">
      <h3>How It Works</h3>
      <ol class="mt-3">
        <li>Tell us what you're good at by filling out your preferences.</li>
        <li>We’ll match you with relevant freelance jobs from RemoteOK.</li>
        <li>You can explore job descriptions, see salaries, and apply directly.</li>
      </ol>
      <p class="mt-3">
        Ready to start your journey? ✨
      </p>
      <router-link to="/profile" class="btn btn-primary mt-2">
        Set Your Job Preferences
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
ol {
  padding-left: 1.2rem;
}
</style>
