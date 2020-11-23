import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
   apiKey: "",
   authDomain: "",
   databaseURL: "",
   projectId: "",
   storageBucket: "",
   messagingSenderId: "",
   appId: "",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database;
