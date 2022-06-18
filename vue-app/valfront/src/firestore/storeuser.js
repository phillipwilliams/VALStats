import { collection, addDoc } from "firebase/firestore"; 
import {db} from "../main"
import {getAuth} from "firebase/auth";



function addacc(valorantid, RegionID){
try {

    const docRef =  addDoc(collection(db, "users"), {
      userid: getAuth().currentUser.uid,
      ValID: valorantid,
      ValRegion: RegionID
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

}

  export{
    addacc
  }