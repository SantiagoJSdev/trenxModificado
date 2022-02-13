






// import { getAuth, signInWithPopup, GoogleAuthProvider, updateProfile, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";




import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, updateProfile, signInWithEmailAndPassword} from "firebase/auth";
import { provider } from "../firebaseConfig";

import { types } from "../types/types";
import { startLoading } from "./uiLoading";







export const startGoogleLogin =()=>{

    return (dispatch)=>{


        const auth = getAuth();
        signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
           
            const user = result.user;
            // console.log(user.uid)
            dispatch(login(user.uid, user.displayName))
            dispatch(startLoading())
          })
          .catch((error) => {
   
            const errorCode = error.code;
            const errorMessage = error.message;
          
            const email = error.email;
         
            const credential = GoogleAuthProvider.credentialFromError(error);
         
          });

    }
}


export const startRegisterWithEmailPasswordName =(email,password,name)=>{

  return (dispatch)=>{
    


const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then(async(userCredential) => {
    
    const user = userCredential.user;
    
    const auth1 = getAuth();
    await updateProfile(auth1.currentUser, {
      displayName: name
    })
    dispatch(login(user.uid, user.displayName))
    dispatch(startLoading())
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }


}


export const startLoginEmailPassword = (email,password) => {

  return (dispatch) => {

    

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
  
        const user = userCredential.user;
        dispatch(login(user.uid, user.displayName))
        dispatch(startLoading())
     
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

}


export const login = (uid, displayName) => {

    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }

}

export const startLogout = () => {

  return async(dispatch)=>{
    

    const auth = getAuth();
    signOut(auth).then(() => {
      dispatch(logout())
  
}).catch((error) => {
 
});

   
  }
}

export const logout = () => ({

  
  type: types.logout

 
})
