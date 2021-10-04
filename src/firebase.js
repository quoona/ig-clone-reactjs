import firebase from "firebase/app";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKP1mmUuKGfnDfdmUU1DwMEPCpv5mBvWY",
  authDomain: "ig-clone-81ac0.firebaseapp.com",
  projectId: "ig-clone-81ac0",
  storageBucket: "ig-clone-81ac0.appspot.com",
  messagingSenderId: "714029017194",
  appId: "1:714029017194:web:deea578ecb2fed2122c213",
  measurementId: "G-LF1BE2M5YY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
