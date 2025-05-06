<template>
  <div class="container my-5">
    <h2 class="mb-4 text-center">💼 Open Jobs for You</h2>
    <div v-if="loading" class="text-center">Loading jobs...</div>
    <div v-else>
      <div v-if="filteredJobs.length === 0" class="text-center">
        No jobs match your preferences.
      </div>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        <div class="col mb-4" v-for="job in filteredJobs" :key="job.id">
          <div class="card shadow-sm">
            <img :src="job.company_logo" :alt="job.company" class="card-img-top"
                 style="height: 200px; object-fit: contain;">
            <div class="card-body">
              <h5 class="card-title">{{ job.title }}</h5>
              <p class="card-text">{{ job.company }}</p>
              <p v-if="job.salary_min && job.salary_max">
                <strong>Salary:</strong> ${{ job.salary_min }} - ${{ job.salary_max }}
              </p>
              <p v-else="job.salary_min && job.salary_max">
                <strong>Salary:</strong>
                <p>Negotiote</p>
              </p>
              <button class="btn btn-info" @click="goToDetails(job)">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      jobs: [],
      filteredJobs: [],
      selectedJob: null,
      loading: true,
    };
  },
  mounted() {
    this.fetchJobs();
  },
  methods: {
    async fetchJobs() {
      try {
        const response = await axios.get("https://remoteok.com/api");
        this.jobs = response.data.slice(1); // Skip first element (metadata)
        this.filterJobs();
      } catch (err) {
        console.error("Failed to load jobs:", err);
      } finally {
        this.loading = false;
      }
    },

    filterJobs() {
      const profile = JSON.parse(localStorage.getItem("profile"));
      if (!profile) return;

      const {skills} = profile;
      this.filteredJobs = this.jobs.filter(job => {
        const jobSkills = job.tags || [];

        return skills.some(skill => jobSkills.includes(skill));
      });
    },
    goToDetails(job) {
      localStorage.setItem('currentJob', JSON.stringify(job));
      this.$router.push({name: 'jobDetails', params: {id: job.id}});
    },
  },
};
</script>

<style scoped>
.card-img-top {
  height: 150px;
  padding: 10px;
  object-fit: scale-down;
}
</style>