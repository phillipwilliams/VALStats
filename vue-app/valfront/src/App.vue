<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import router from './router';
import {usrname} from "./firestore/storeuser"

const isLoggedIn = ref(false);
let auth;
let inputname = "";
onMounted(() =>{
  auth = getAuth();
  onAuthStateChanged(auth, (user) =>{
    console.log(usrname)
    if (user){
      isLoggedIn.value = true;
      //queryacc()
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
      <header><div class="logo"><router-link to="/" style="font-family:Valfont; text-decoration: none; font-size: 40px; color: white; text-align: left;" ><span style="color: #dc3d4b">V</span>ALSTATS</router-link></div>
      <router-link id="links" to="/feed"> Profile</router-link> 
      <router-link id="links" to="/sign-in"> Login</router-link> 
      <router-link id="links" to="/register"> Register</router-link> 
      <button @click="handleSignOut" v-if="isLoggedIn" id="submit" name="signout">Sign out</button>
      </header>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, "Valfont";
  text-align: center;
  color: #2c3e50;
}
.logo  {
  margin: 0;
  display: flex;
  color: white;
  font-size: 10px;
}

#links{
  display: flex;
  align-items:center;
  padding: 0px 40px;
  justify-content: space-between;
}
header {
  font-family: Valfont, sans-serif;
  min-height: 45px;
  display: flex;
  padding: 0px 50px;
  background-color: #0c0b0b;
  position: sticky;
  flex-flow: wrap;
  padding-bottom: 4px;
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
    font-family: Valfont, sans-serif;
    margin-top: 0;
}

html, body{
  font-family: Valfont, sans-serif;
  scroll-behavior: smooth;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  -moz-text-size-adjust: none;
  margin: 0 !important;
  padding: 0 !important;
  
}
#submit:hover {
  filter: brightness(80%);
}
#submit {
  background-color: #201e1f;
  color: #201e1f;
  height: 40px;
  width: 90px;
  line-height: 8px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: white;
}


</style>
