// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getReactNativePersistence, initializeAuth} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
// Your web app's Firebase configuration
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBIa_sqQ_CikGxLqnYUa-sL5UFnqxQYngU",
  authDomain: "final-chatapp-b5a05.firebaseapp.com",
  projectId: "final-chatapp-b5a05",
  storageBucket: "final-chatapp-b5a05.appspot.com",
  messagingSenderId: "1054129713090",
  appId: "1:1054129713090:web:f646a4f4ff5154a77e305b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth( app,{
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db=getFirestore(App);

export const usersRef = collection(db,'users');
export const roomRef = collection(db,'rooms');
