<template>
<h1>User Profile</h1>
<p> Choose which match you would like to view</p>
<div>
<center>
<select
    style="width:300px;"
    v-model="selected">
    <option value="" disabled> Select a Match</option>
    <option v-for="option in options" :value="option.value">
    {{ option.text }}
  </option>
</select>
</center>

</div>

<p v-if="updated" ><pre>
    <b>Map: </b>{{matches[selected][0]}} 
    <b>Date: </b>{{matches[selected][1]}}
    <b>Agent: </b>{{matches[selected][2]}}
    <b>KDA: </b>{{matches[selected][3]}}/{{matches[selected][4]}}/{{matches[selected][5]}}
    <b>score: </b>{{matches[selected][6]}}-{{matches[selected][7]}}
    <b> {{matches[selected][8]}}</b>
    <button @click="gotoMatch" id="submit"> Select</button>
     </pre>
    </p>
</template>

<script>
export const matchdata = ref(null);
export var chosenmatch;
export let userpid;
export let valname;
export let winner;
export let playerindex;

</script>
<script setup>
  import { getAuth} from "firebase/auth";
  import { onMounted, ref } from 'vue';
  import { doc, getDoc } from "firebase/firestore"; 
  import {db} from "../main"
  import router from '../router';
  

  let curruser = getAuth().currentUser.email;
  let valregion;
  const updated = ref(false);
  const matches = []
  let userteam;
  let elim;
  let death;
  let assist;
  let agent;
  let userindex;

const selected = ref('0')

const options = ref([
  { text: 'Match 1', value: '0' },
  { text: 'Match 2', value: '1' },
  { text: 'Match 3', value: '2' },
  { text: 'Match 4', value: '3' },
  { text: 'Match 5', value: '4' }
])


  



onMounted(async ()  =>{
  const docRef = doc(db, "users", curruser);
  try{
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()){
    
    valname = docSnap.data().ValID;
    valregion = docSnap.data().ValRegion;
  }
  } catch(e){
    alert("Firebase Error, please retry")
    router.push('/')
  }
  

  const reqmsg = "https://api.henrikdev.xyz/valorant/v3/matches/na/" + valname + "/" + valregion + "?filter=competitive";
    
    fetch(reqmsg)
        .then(function(response)  {
           return response.json();
        })
        .then(function(obj){
            for(let i = 0; i < obj.data.length; i++){
                for(let j = 0; j <obj.data[i].players.all_players.length; j++ ){
                    if (obj.data[i].players.all_players[j].name.toLowerCase() == valname.toLowerCase()){
                        userteam = obj.data[i].players.all_players[j].team
                        agent = obj.data[i].players.all_players[j].character
                        elim = obj.data[i].players.all_players[j].stats.kills
                        death = obj.data[i].players.all_players[j].stats.deaths
                        assist = obj.data[i].players.all_players[j].stats.assists
                        userpid = obj.data[i].players.all_players[j].puuid
                        userindex = j;
                    }
                }
                if(obj.data[i].teams.red.rounds_won > obj.data[i].teams.blue.rounds_won) winner = "Red"
                else winner = "Blue"
                
                winner = (winner == userteam) ? "Won" : "Lost" 
                

                matches.push([obj.data[i].metadata.map, obj.data[i].metadata.game_start_patched, agent, elim, death, assist, obj.data[i].teams.red.rounds_won, obj.data[i].teams.blue.rounds_won, winner, userindex])
                matchdata.value = obj
            }
            updated.value = true;
        })
        .catch((error) =>{
            alert("Valorant API Error, please retry");
            router.push("/");
          });
        })

const gotoMatch = () => {
    chosenmatch = selected.value
    playerindex = matches[chosenmatch][9]
    
    router.push('/match')
    
}



</script>

