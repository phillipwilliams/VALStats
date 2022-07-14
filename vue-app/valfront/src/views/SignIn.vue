<template>
  <h1>Sign In to your Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input v-on:keyup.enter="register" type="password" placeholder="Password" v-model="password" /></p>
  <p v-if="errMsg">{{ errMsg}}</p>
  <p><button @click="register" id="submit">Submit</button></p>
</template>

<script setup>
  import { ref } from 'vue';
  import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
  import router from '../router';
  
  const email = ref('');
  const password = ref('');
  const errMsg = ref();
  const register = () => {
      signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Successfully registered!");
            router.push('/feed')
        })
        .catch((error) =>{
            console.log(error.code);
            switch (error.code){
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect Password";
                    break;
                default:
                    errMsg.value = "Email or password incorrect";
                    break;
               
            }
            
        });
  };
</script>
