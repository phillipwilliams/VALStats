import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", name: 'home', component: Home},
        {path: "/login", name: 'login', component: Login}

        
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
