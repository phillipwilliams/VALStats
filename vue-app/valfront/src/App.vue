<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { routeLocationKey } from 'vue-router';
import router from './router';

const isLoggedIn = ref(false);
let auth;
onMounted(() =>{
  auth = getAuth();
  onAuthStateChanged(auth, (user) =>{
    if (user){
      isLoggedIn.value = true;
    }
    else{
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() =>{
    router.push("/");
  })
}

</script>

<template>
  <div>
    <nav>
      <router-link to="/"> Home </router-link> |
<<<<<<< Updated upstream
      <router-link to="/feed"> Feed </router-link> |
=======
      <router-link to="/feed"> Profile </router-link> |
>>>>>>> Stashed changes
      <router-link to="/register"> Register </router-link> |
      <router-link to="/sign-in"> Login </router-link> |
      <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
