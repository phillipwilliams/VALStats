import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { initializeApp } from "firebase/app";
import VueNavigationBar from 'vue-navigation-bar';
import 'vue-navigation-bar/dist/vue-navigation-bar.css';


const firebaseConfig = {
    apiKey: "AIzaSyCBuA1ZQbdDAxGbvYRe4isGeV1o5Jlo4eM",
    authDomain: "valdb-3b36d.firebaseapp.com",
    projectId: "valdb-3b36d",
    storageBucket: "valdb-3b36d.appspot.com",
    messagingSenderId: "59622579519",
    appId: "1:59622579519:web:8f4d1e89fb6d2251bd478a",
    measurementId: "G-PGS46EXKVS"
  };

initializeApp(firebaseConfig);
const app = createApp(App);
app.use(router);
app.component('vue-navigation-bar', VueNavigationBar);

app.mount('#app');
