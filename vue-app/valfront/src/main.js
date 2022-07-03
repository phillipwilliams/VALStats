import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
import vSelect from 'vue-select'
import {Tabs, Tab} from 'vue3-tabs-component';
import 'vue-select/dist/vue-select.css';


const firebaseConfig = {
    apiKey: "AIzaSyCBuA1ZQbdDAxGbvYRe4isGeV1o5Jlo4eM",
    authDomain: "valdb-3b36d.firebaseapp.com",
    projectId: "valdb-3b36d",
    storageBucket: "valdb-3b36d.appspot.com",
    messagingSenderId: "59622579519",
    appId: "1:59622579519:web:8f4d1e89fb6d2251bd478a",
    measurementId: "G-PGS46EXKVS"
  };


  

const fbdb = initializeApp(firebaseConfig);
const db = getFirestore(fbdb)

export{
  db
}
const myapp = createApp(App)
myapp.component('tabs', Tabs)
myapp.component('tab', Tab)
myapp.component('v-select', vSelect)
myapp.use(router).mount('#app')
