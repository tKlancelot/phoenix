// import { initializeApp } from "firebase/app";
import firebase from 'firebase/firebase'
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBShsvDLSmogqHDP6Fuips1F5mvErxHUc4",
  authDomain: "blog-tarik.firebaseapp.com",
  databaseURL: "https://blog-tarik-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "blog-tarik",
  storageBucket: "blog-tarik.appspot.com",
  messagingSenderId: "710101497910",
  appId: "1:710101497910:web:b107f88d6c9fd6e658c097"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

export const database = firebase.database();