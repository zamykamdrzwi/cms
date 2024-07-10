import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';
import RegisterPage from './pages/RegisterPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/Register',
    name: 'RegisterPage',
    component: RegisterPage,
  },
];

const BASE_URL = '';

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
});

export default router;