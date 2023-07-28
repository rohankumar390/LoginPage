// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoOpHMiljt0FpwQkPxikSBJVY93EOsPa0",
  authDomain: "recipefinder-9b07f.firebaseapp.com",
  projectId: "recipefinder-9b07f",
  storageBucket: "recipefinder-9b07f.appspot.com",
  messagingSenderId: "772536009496",
  appId: "1:772536009496:web:b022f4a8b041c68d9c546d",
  measurementId: "G-E8NV3BNZFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
