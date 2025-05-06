import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import OpenJobs from "@/views/OpenJobs.vue";
import UserProfile from "@/views/UserProfile.vue";
import JobDetails from "@/views/JobDetails.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signUp', component: Register },
    { path: '/openJobs', component: OpenJobs, meta: { requiresAuth: true } },
    { path: '/profile', component: UserProfile, meta: { requiresAuth: true } },
    { path: '/job/:id', component: JobDetails, name: 'jobDetails', meta: { requiresAuth: true } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// ✅ GLOBAL GUARD HERE
router.beforeEach((to, from, next) => {
    const user = localStorage.getItem('user');
    const isLoggedIn = !!user;

    if (to.meta.requiresAuth && !isLoggedIn) {
        next('/login');
    } else {
        next();
    }
});

export default router;
