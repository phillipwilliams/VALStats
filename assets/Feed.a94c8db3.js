import{r as h,g as B,i as F,I,j as L,h as p,k as N,o as d,c as i,a,l as E,m as R,n as o,t as n,d as U,F as V,p as q,w as P,q as z,u as K}from"./index.9a079c21.js";const T=a("h1",null,"User Profile",-1),W=a("p",null," Choose which match you would like to view",-1),G=a("option",{value:"",disabled:""}," Select a Match",-1),H=["value"],J={key:0},O=o("    "),Q=a("b",null,"Map: ",-1),X=a("b",null,"Date: ",-1),Y=a("b",null,"Agent: ",-1),Z=a("b",null,"KDA: ",-1),$=a("b",null,"score: ",-1),b=o(`\r
    `),j=o(`\r
     `),ee=h(null);var C;let te,_,u,ae;const re={__name:"Feed",setup(le){let D=B().currentUser.email,v;const m=h(!1),s=[];let y,f,w,x,g,M;const l=h("0"),S=h([{text:"Match 1",value:"0"},{text:"Match 2",value:"1"},{text:"Match 3",value:"2"},{text:"Match 4",value:"3"},{text:"Match 5",value:"4"}]);F(async()=>{const k=I(q,"users",D);try{const e=await L(k);e.exists()&&(_=e.data().ValID,v=e.data().ValRegion)}catch{alert("Firebase Error, please retry"),p.push("/")}const c="https://api.henrikdev.xyz/valorant/v3/matches/na/"+_+"/"+v+"?filter=competitive";fetch(c).then(function(e){return e.json()}).then(function(e){for(let t=0;t<e.data.length;t++){for(let r=0;r<e.data[t].players.all_players.length;r++)e.data[t].players.all_players[r].name.toLowerCase()==_.toLowerCase()&&(y=e.data[t].players.all_players[r].team,g=e.data[t].players.all_players[r].character,f=e.data[t].players.all_players[r].stats.kills,w=e.data[t].players.all_players[r].stats.deaths,x=e.data[t].players.all_players[r].stats.assists,te=e.data[t].players.all_players[r].puuid,M=r);e.data[t].teams.red.rounds_won>e.data[t].teams.blue.rounds_won?u="Red":u="Blue",u=u==y?"Won":"Lost",s.push([e.data[t].metadata.map,e.data[t].metadata.game_start_patched,g,f,w,x,e.data[t].teams.red.rounds_won,e.data[t].teams.blue.rounds_won,u,M]),ee.value=e}m.value=!0}).catch(e=>{alert("Valorant API Error, please retry"),p.push("/")})});const A=()=>{C=l.value,ae=s[C][9],p.push("/match")};return(k,c)=>{const e=N("center");return d(),i(V,null,[T,W,a("div",null,[E(e,null,{default:R(()=>[P(a("select",{style:{width:"300px"},"onUpdate:modelValue":c[0]||(c[0]=t=>l.value=t)},[G,(d(!0),i(V,null,K(S.value,t=>(d(),i("option",{value:t.value},n(t.text),9,H))),256))],512),[[z,l.value]])]),_:1})]),m.value?(d(),i("p",J,[a("pre",null,[O,Q,o(n(s[l.value][0])+` \r
    `,1),X,o(n(s[l.value][1])+`\r
    `,1),Y,o(n(s[l.value][2])+`\r
    `,1),Z,o(n(s[l.value][3])+"/"+n(s[l.value][4])+"/"+n(s[l.value][5])+`\r
    `,1),$,o(n(s[l.value][6])+"-"+n(s[l.value][7])+`\r
    `,1),a("b",null," "+n(s[l.value][8]),1),b,a("button",{onClick:A,id:"submit"}," Select"),j])])):U("",!0)],64)}}};export{C as chosenmatch,re as default,ee as matchdata,ae as playerindex,te as userpid,_ as valname,u as winner};
