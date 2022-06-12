<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
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
      <header><router-link to="/" style="font-family:Valfont; text-decoration: none; font-size: 50px; color: white; text-align: right;" ><span style="color: #dc3d4b">V</span>ALSTATS</router-link>
      <router-link to="/feed"> Feed </router-link> |
      <router-link to="/sign-in"> Login </router-link> |
      <router-link to="/register"> Register </router-link> |
      <button @click="handleSignOut" v-if="isLoggedIn" name="signout">Sign out</button>
      </header>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, "Valfont";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header{
    height: 50px;
    background: black;
    margin-top: -8px;
    margin-left: -8px;
    margin-right: -8px;
    text-align: left;
    color: white;
    }

@font-face {
  font-family: "Valfont";
  src: local("Valfont"),
   url(./fonts/valfont.ttf) format("truetype");
}
a:visited { 
 text-decoration: none; 
 color: rgb(255, 255, 255); 
}
h1{
    margin-top: 0;
}
</style>
