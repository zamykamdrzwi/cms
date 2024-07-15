import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import LoginPage from './pages/LoginPage.vue';
import HomePage from './pages/HomePage.vue';
import HeaderLayout from './components/layouts/HeaderLayout.vue';

import router from './router.js';

const app = createApp(App);

app.component('LoginPage', LoginPage);
app.component('HomePage', HomePage);
app.component('HeaderLayout', HeaderLayout);

app.use(router);

app.mount('#app');