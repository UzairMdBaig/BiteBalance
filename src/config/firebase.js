// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC19Kq6ZEag64dgFQgS4C7jh8Cv8PBLSGI",
  authDomain: "bitebalance-firebase.firebaseapp.com",
  projectId: "bitebalance-firebase",
  storageBucket: "bitebalance-firebase.appspot.com",
  messagingSenderId: "548426852105",
  appId: "1:548426852105:web:7d6bf05bfb2405809ad5d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);