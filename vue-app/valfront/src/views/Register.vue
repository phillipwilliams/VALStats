<template>
  <h1>Create an Account</h1>
  <p><input type="email" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><input type="valorantid" placeholder="Valorant ID" v-model="valorantid" /></p>
  <p><input v-on:keyup.enter="register" type="regionid" placeholder="Region ID" v-model="regionid" /></p>
  <p v-if="errMsg">{{ errMsg}}</p>
  <p><button @click="register" id="submit">Submit</button></p>
</template>

<script setup>
  import { ref } from 'vue';
  import { addacc } from '../firestore/storeuser';
  import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
  import router from '../router';
  

  const email = ref('');
  const password = ref('');
  const valorantid = ref('');
  const regionid = ref('');
  const errMsg = ref();

 
  const register = async () => {
      let reqmsg = "https://api.henrikdev.xyz/valorant/v1/account/" + valorantid.value + "/" + regionid.value;
      const respon = fetch(reqmsg)
        .then(function(response)  {
          if(response.ok){
            if(response.status == 200){
              createUserWithEmailAndPassword(getAuth(), email.value, password.value)
              .then((data) => {
                addacc(valorantid.value, regionid.value)
                console.log("Successfully registered!");
                router.push('/feed')
              })
          .catch((error) =>{
              console.log(error.code);
              errMsg.value = error.message
          });
           }
           else {

              errMsg.value = "Invalid Valorant ID/ Region ID";
      }
        }
        else {   
          errMsg.value = "Invalid Input"
        }
        
      })
      
    };


</script>
