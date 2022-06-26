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
      <header><div class="logo"><router-link to="/" style="font-family:Valfont; text-decoration: none; font-size: 40px; color: white; text-align: right;" ><span style="color: #dc3d4b">V</span>ALSTATS</router-link></div>
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo router-link {
  transform: translateX(-10px);
  line-height: 20px;
  margin: 0;
  max-width: 4ch;
  color: white;
  font-size: 25px;
  align-self: center;
}
header {
  font-family: Valorant, sans-serif;
  min-height: 50px;
  display: flex;
  align-items:center;
  justify-content: space-between;
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
    font-family: Valorant, sans-serif;
    margin-top: 0;
}

html, body{
  font-family: Valorant, sans-serif;
  scroll-behavior: smooth;
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

input {
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border: 2px solid #201e1f;
  padding: 10px;
  background-color: #201e1f;
  border-radius: 5px;
  outline: none;
  color: white;
  margin: 5px;
  height: 18px;
}
</style>
