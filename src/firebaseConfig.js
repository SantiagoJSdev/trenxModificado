
import { GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBub2N_ICO7pF7yrmnNSUVIPcCLfjlhKJY",
  authDomain: "proyecto-t-c7e72.firebaseapp.com",
  projectId: "proyecto-t-c7e72",
  storageBucket: "proyecto-t-c7e72.appspot.com",
  messagingSenderId: "730870215888",
  appId: "1:730870215888:web:2afeb2ec1b48ade7995ad5",
  measurementId: "G-YJG2R82BR2"
};


const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const db = getFirestore();

export {
    
    app,
    provider,
    db
}