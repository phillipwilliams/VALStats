<template>
    <div>
    <tabs>
        <tab :name="valname">
            <div>
                <center>
                <table v-if="updated" style="width: 1400px">
                <thead style=" font-family:Valfont;">
                <tr style="font-family:Valfont; text-decoration: none; font-size: 40px;">
                    <th>Map</th>
                    <th>Match Score</th>
                    <th>Agent</th>
                    

                </tr></thead>
                <tbody>
                    <tr style="font-family:Valfont; text-decoration: none; font-size: 40px;">
                        <td><img :src="imageURL" height=220 width=375 />{{map}}</td>
                        <td> <br> <br> {{redteam}} - {{blueteam}}<br> <br> <br> {{winner}}</td>
                        <td><img :src="agentURL" height=220 width=220 /> <br> {{agent}}</td>
                    </tr>
                </tbody>
                </table> 


                <div>
                <table v-if="updated" style="width: 1400px">
                <thead style=" font-family:Valfont;">
                <tr style="font-family:Valfont; text-decoration: none; font-size: 40px;">
                    <th>Map</th>
                    <th>Match Score</th>
                    <th>Agent</th>
                    

                </tr></thead>
                
                </table>
                </div>
                </center>
            </div>
        </tab>
        <tab name="Scoreboard">
            <div>
                <center>
                <table v-if="updated" style="width: 1400px">
                    <thead style=" font-family: Valfont;">
                        <tr>
                            <th>Agent</th>
                            <th>Name</th>
                            <th>Elims</th>
                            <th>Deaths</th>
                            <th>Assists</th>
                            <th>ACS</th>
                        </tr>

                </thead>
                <tbody>
                    <tr v-for="player in playerinfo ">
                    <td :bgcolor="player.team"> <img :src="player.pic" height=75 width=75></td>
                    <td ><b>{{player.name}}</b></td>
                    <td>{{player.elim}}</td>
                    <td>{{player.death}}</td>
                    <td>{{player.assist}}</td>
                    <td>{{player.score}}</td>
                    </tr>
                    
                </tbody>
                </table>
                </center>
            </div>
        </tab>
        <tab name="Round Breakdown">
           <tabs v-if="updated" :options="{ useUrlFragment: false }">
            <tab v-for="index in playerinfo[0].rounds" :id="index" :name="index">{{index}}</tab>
            
           </tabs>
        </tab>
    </tabs>
    
</div>
</template>


<script setup>
import {matchdata, valname, userindex, winner, chosenmatch} from './Feed.vue'
import { onMounted, ref } from 'vue';
 const playerinfo = new Array
  const updated = ref(false);
 let rounds =  0;
 let map = matchdata.value.data[chosenmatch].metadata.map.toLowerCase();
 let mapname = "../assets/" + map + ".png";
 let redteam = matchdata.value.data[chosenmatch].teams.red.rounds_won
 let blueteam = matchdata.value.data[chosenmatch].teams.blue.rounds_won
 let agentpic = matchdata.value.data[chosenmatch].players.all_players[userindex].assets.agent.small
 let agent = matchdata.value.data[chosenmatch].players.all_players[userindex].character


 var imageURL = new URL(mapname, import.meta.url).href
 var agentURL = new URL(agentpic, import.meta.url).href
console.log(mapname)
console.log(winner)

onMounted( () =>{
    const obj = matchdata.value


    for(let i = 0; i <obj.data[chosenmatch].players.all_players.length; i++ ){
        playerinfo[i] = {
            name: obj.data[chosenmatch].players.all_players[i].name,
            elim: obj.data[chosenmatch].players.all_players[i].stats.kills,
            death: obj.data[chosenmatch].players.all_players[i].stats.deaths,
            assist: obj.data[chosenmatch].players.all_players[i].stats.assists,
            score: Math.round(obj.data[chosenmatch].players.all_players[i].stats.score / obj.data[chosenmatch].metadata.rounds_played),
            pic: obj.data[chosenmatch].players.all_players[i].assets.agent.small,
            team: obj.data[chosenmatch].players.all_players[i].team,
            rounds : obj.data[chosenmatch].metadata.rounds_played

        }
        console.log(playerinfo[i].score)
        
    }
    
    
    console.log(redteam + "-" + blueteam)
    


    rounds = obj.data[chosenmatch].metadata.rounds_played
    console.log(rounds)
    updated.value = true;


})



</script>


<style>
.tabs-component {
    margin: 5em 0;
}
table {
  border:3px solid black;
  border-collapse:collapse;
  margin: 4em 0;
}
th, td {
    border:1px solid black;
    max-width: 0px;
    min-width: 0px;
    text-align: center;
}
td:first-child{
    max-width: 0px;
}
.tabs-component-tabs {
    border: solid 1px #ddd;
    border-radius: 6px;
    margin-bottom: 5px;
}


@media (min-width: 700px) {
    .tabs-component-tabs {
        border: 0;
        align-items: stretch;
        display: flex;
        justify-content: flex-start;
        margin-bottom: -1px;
    }
}

.tabs-component-tab {
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 600;
    margin-right: 0;
    list-style: none;
}

.tabs-component-tab:not(:last-child) {
    border-bottom: dotted 1px #ddd;
}

.tabs-component-tab:hover {
    color: #666;
}

.tabs-component-tab.is-active {
    color: #000;
}

.tabs-component-tab.is-disabled * {
    color: #cdcdcd;
    cursor: not-allowed !important;
}

@media (min-width: 700px) {
    .tabs-component-tab {
        background-color: rgb(43, 42, 42);
        border: solid 1px #ddd;
        border-radius: 3px 3px 0 0;
        margin-right: .5em;
        transform: translateY(2px);
        transition: transform .3s ease;
    }

    .tabs-component-tab.is-active {
        border-bottom: solid 1px rgb(44, 40, 40);
        z-index: 2;
        transform: translateY(0);
    }
}

.tabs-component-tab-a {
    align-items: center;
    color: inherit;
    display: flex;
    padding: .75em 1em;
    text-decoration: none;
}

.tabs-component-panels {
    padding: 4em 0;
}


@media (min-width: 700px) {
    .tabs-component-panels {
        background-color: rgb(255, 255, 255);
        border: solid 1px #ddd;
        border-radius: 0 6px 6px 6px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .05);
        padding: 4em 2em;
    }
}
</style>