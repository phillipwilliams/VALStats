import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { initializeApp } from "firebase/app";


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

createApp(App).use(router).mount('#app')
