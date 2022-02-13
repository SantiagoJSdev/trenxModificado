import { types } from "../types/types"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";






export const newdata =(data)=>{


    return async(dispatch, getState)=>{
        const uid = getState().auth.uid
        console.log(uid)

        
       
        try {
            const docRef = await addDoc(collection(db, 'usuarios'), data);
            console.log("Document written with ID: ", docRef.id);
            dispatch(addData(data))
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          }

    


    }


export const addData =(data)=> {

    return {
        type: types.newData,
        payload: data
    }


}