import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyAtK0akO01LLj_EKvr9hOWi1kkgKAb9YA4",
   authDomain: "dilo-firebase-react-native.firebaseapp.com",
   databaseURL: "https://dilo-firebase-react-native.firebaseio.com",
   projectId: "dilo-firebase-react-native",
   storageBucket: "dilo-firebase-react-native.appspot.com",
   messagingSenderId: "971825074095",
   appId: "1:971825074095:web:d16678208683b811cb695a",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.database();
