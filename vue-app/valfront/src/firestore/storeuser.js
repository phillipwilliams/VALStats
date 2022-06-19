import { collection, addDoc, query, where, doc, setDoc, getDocs } from "firebase/firestore"; 
import {db} from "../main"
import {getAuth} from "firebase/auth";


 var usrname = ""

async function addacc(valorantid, RegionID){
try {

    
    const docRef = await setDoc(doc(db, "users", getAuth().currentUser.email),{
    userid: getAuth().currentUser.uid,
      ValID: valorantid,
      ValRegion: RegionID
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function queryacc(){
  const userref = collection(db, "users");
  const q = query(userref, where("userid", "==", getAuth().currentUser.uid))


  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  usrname = doc.data().ValID
});
}



  export{
    addacc,
    queryacc,
    usrname
  }