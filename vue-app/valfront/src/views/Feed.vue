<template>
<h1>User Profile</h1>
<p> Choose which match you would like to view</p>
<div>
<center>
<select
    style="width:300px;"
    v-model="selected">
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
    <b> {{matches[selected][7]}}</b>
    <button @click="gotoMatch" id="submit"> Select</button>
     </pre>
    </p>
</template>

<script>
export const matchdata = ref(null);
export const chosenmatch = ref(null);

</script>
<script setup>
  import { getAuth} from "firebase/auth";
  import { onMounted, ref } from 'vue';
  import { doc, getDoc } from "firebase/firestore"; 
  import {db} from "../main"
  import router from '../router';
  

  let curruser = getAuth().currentUser.email;
  let valname, valregion;
  const updated = ref(false);
  const matches = []
  let userteam;
  let winner;
  let elim;
  let death;
  let assist;
  let agent;

const selected = ref('0')

const options = ref([
  { text: 'Match 1', value: '0' },
  { text: 'Match 2', value: '1' },
  { text: 'Match 3', value: '2' },
  { text: 'Match 4', value: '3' },
  { text: 'Match 5', value: '4' }
])


  

async function getData(url){

}

onMounted(async ()  =>{
  const docRef = doc(db, "users", curruser);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()){
    
    valname = docSnap.data().ValID;
    valregion = docSnap.data().ValRegion;
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
                        agent = userteam = obj.data[i].players.all_players[j].character
                        elim = obj.data[i].players.all_players[j].stats.kills
                        death = obj.data[i].players.all_players[j].stats.deaths
                        assist = obj.data[i].players.all_players[j].stats.assists
                    }
                }
                
                if(obj.data[i].teams.red.rounds_won > obj.data[i].teams.blue.rounds_won) winner = "Red"
                else winner = "Blue"
                
                winner = (winner == userteam) ? "Won" : "Lost" 
                

                matches.push([obj.data[i].metadata.map, obj.data[i].metadata.game_start_patched, agent, elim, death, assist, obj.data[i].teams.red.rounds_won, obj.data[i].teams.blue.rounds_won, winner])
                matchdata.value = obj.data
            }
            updated.value = true;
        })
        })

const gotoMatch = () => {
    chosenmatch.value = selected.value
    router.push('/match')
    
}



</script>

