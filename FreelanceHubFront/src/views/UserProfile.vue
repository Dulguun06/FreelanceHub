<template>
  <div class="container my-5">
    <div class="card p-4 shadow-sm">
      <h3 class="text-center mb-4">🎯 Tell Us What You Do</h3>

      <!-- Step 1: Select Category -->
      <div v-if="step === 1">
        <h5>Select a Category</h5>
        <div class="d-flex flex-wrap gap-2">
          <button
              v-for="category in categories"
              :key="category"
              class="btn btn-outline-primary"
              @click="selectCategory(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- Step 2: Select Skills -->
      <div v-else-if="step === 2">
        <h5 class="mb-3">Pick your skills in {{ selectedCategory }}</h5>
        <div class="row">
          <div class="col-md-6" v-for="skill in filteredSkills" :key="skill">
            <div class="form-check">
              <input
                  type="checkbox"
                  class="form-check-input"
                  :id="skill"
                  :value="skill"
                  v-model="selectedSkills"
              />
              <label :for="skill" class="form-check-label">{{ skill }}</label>
            </div>
          </div>
        </div>
        <button class="btn btn-secondary mt-3" @click="step = 1">⬅ Back</button>
        <button class="btn btn-success mt-3 ms-2" @click="saveProfile">✅ Save</button>
      </div>

      <!-- Optional: Confirmation step could go here -->
      <button class="btn btn-danger mt-3 ms-2" @click="clearPreferences">🗑 Clear Preferences</button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      step: 1,
      categories: ['Development', 'Design', 'Marketing', 'Writing', 'Customer Support'],
      selectedCategory: '',
      skillOptions: [],
      selectedSkills: [],
    };
  },
  computed: {
    filteredSkills() {
      // Filter skills by category (simple mapping for now)
      const skillMap = {
        Development: ['JavaScript', 'Vue.js', 'React', 'Spring Boot', 'Node.js', 'Java', 'Python', 'API', 'C','Front','Back'],
        Design: ['UI', 'UX', 'Figma', 'Sketch', 'Photoshop', 'Illustrator', 'InDesign'],
        Marketing: ['SEO', 'Content Marketing', 'Analytics', 'Social Media', 'Email Marketing'],
        Writing: ['Technical Writing', 'Copywriting', 'Blogging', 'Excel', 'Word'],
        'Customer Support': ['Helpdesk', 'CRM', 'Zendesk'],
      };
      return skillMap[this.selectedCategory] || [];
    },
  },
  mounted() {
    const saved = JSON.parse(localStorage.getItem('profile'));
    if (saved) {
      this.selectedSkills = saved.skills || [];
    }
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
      this.step = 2;
    },
    async saveProfile() {
      const lowerCaseSkills = this.selectedSkills.map(skill => skill.toLowerCase());
      localStorage.setItem(
          'profile',
          JSON.stringify({
            category: this.selectedCategory,
            skills: lowerCaseSkills,
          })
      );
      alert('✅ Preferences saved!');
      this.step = 1;
      this.selectedCategory = '';
      this.selectedSkills = [];
      this.$router.push('/openJobs');
    },
    clearPreferences() {
      localStorage.removeItem('profile');
      this.selectedCategory = '';
      this.selectedSkills = [];
      alert('Preferences cleared!');
    }

  },
};
</script>
