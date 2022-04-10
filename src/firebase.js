import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { initializeApp } from "firebase/app";
import { getFirestore}  from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXxZJBnmdjiKhpHVIBhBKEHiY7fcXVJBI",
  authDomain: "app-a17cb.firebaseapp.com",
  projectId: "app-a17cb",
  storageBucket: "app-a17cb.appspot.com",
  messagingSenderId: "360010361300",
  appId: "1:360010361300:web:1a3d81668089becaef0e41",
  measurementId: "G-QCS5G2DR48"
};
// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore(auth);
const auth = firebase.auth();
export { db, auth };
