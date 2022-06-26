<template>
<h1>User Profile</h1>
<p> Choose which match you would like to view</p>

<v-container fluid>
    <v-row align="center">
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="items"
          label="Standard"
        ></v-select>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="items"
          filled
          label="Filled style"
        ></v-select>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="items"
          label="Outlined style"
          outlined
        ></v-select>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="items"
          label="Solo field"
          solo
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
  import { getAuth} from "firebase/auth";
  import { onMounted, ref } from 'vue';
  import { doc, getDoc } from "firebase/firestore"; 
  import {db} from "../main"
  

  let curruser = getAuth().currentUser.email;
  let valname, valregion;
  const updated = ref(false);
  const matches = []
  let userteam;
  let winner;
  let elim;
  let death;
  let assist;


onMounted(async ()  =>{
  const docRef = doc(db, "users", curruser);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()){
    
    valname = docSnap.data().ValID;
    valregion = docSnap.data().ValRegion;
    console.log(valname)
    console.log(valregion)
  }



  const reqmsg = "https://api.henrikdev.xyz/valorant/v3/matches/na/" + valname + "/" + valregion;
    fetch(reqmsg)
        .then(function(response)  {
           return response.json();
        })
        .then(function(obj){
            for(let i = 0; i < obj.data.length; i++){
                for(let j = 0; j <obj.data[i].players.all_players.length; j++ ){
                    if (obj.data[i].players.all_players[j].name.toLowerCase() == valname){
                        userteam = obj.data[i].players.all_players[j].team
                        elim = obj.data[i].players.all_players[j].stats.kills
                        death = obj.data[i].players.all_players[j].stats.deaths
                        assist = obj.data[i].players.all_players[j].stats.assists
                    }
                }
                
                if(obj.data[i].teams.red.rounds_won > obj.data[i].teams.blue.rounds_won) winner = "Red"
                else winner = "Blue"
                
                winner = (winner == userteam) ? "won" : "lost" 
                

                matches.push([obj.data[i].metadata.map, obj.data[i].metadata.game_start_patched, elim, death, assist, obj.data[i].teams.red.rounds_won, obj.data[i].teams.blue.rounds_won, winner])
            }
            console.log(matches[0])
            updated.value = true;
        })
        })


</script>