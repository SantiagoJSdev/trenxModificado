import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";



export const moduloPrueba = async() => {
    
    const newDatosService = {
        name:"san",
        email:"san",
        phone:"",
        message:"",
        street:"",
        city:"s",
        region:"s",
        postal:"123456"
        // date: new Date().getTime()
    }

try {
  const docRef = await addDoc(collection(db, "users"), newDatosService);
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
}
  