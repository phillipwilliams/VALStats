<template>
<h1>User Profile</h1>
<p> Choose which match you would like to view</p>
<div>
<center><v-select
style="width:300px;"

v-model.lazy="selected"
v-on:input="updateValue($event.target.value)"
:options="[
    { label: 'Match 1', id: 0 },
    { label: 'Match 2', id: 1 }, 
    { label: 'Match 3', id: 2 },
    { label: 'Match 4', id: 3 },
    { label: 'Match 5', id: 4 }]" /></center>

</div>

<p v-if="updated" ><pre>
    <b>Map: </b>{{matches[0][0]}} 
    <b>Date: </b>{{matches[0][1]}}
    <b>KDA: </b>{{matches[0][2]}}/{{matches[0][3]}}/{{matches[0][4]}}
    <b>score: </b>{{matches[0][5]}}-{{matches[0][6]}}
    <b> {{matches[0][7]}}</b>
    <button id="submit"> Select</button>
     </pre>
    </p>
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
                
                winner = (winner == userteam) ? "Won" : "Lost" 
                

                matches.push([obj.data[i].metadata.map, obj.data[i].metadata.game_start_patched, elim, death, assist, obj.data[i].teams.red.rounds_won, obj.data[i].teams.blue.rounds_won, winner])
            }
            console.log(matches[0])
            updated.value = true;
            console.log(updated.value)
        })
        })


</script>

