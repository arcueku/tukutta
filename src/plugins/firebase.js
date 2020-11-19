import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyBo4D5fmrE9N_ROPZBlR0OEfHcmja5pRbY",
    authDomain: "tukutta-efdd8.firebaseapp.com",
    databaseURL: "https://tukutta-efdd8.firebaseio.com",
    projectId: "tukutta-efdd8",
    storageBucket: "tukutta-efdd8.appspot.com",
    messagingSenderId: "747000350758",
    appId: "1:747000350758:web:2ab4fcef06dbc40c013ee7",
    measurementId: "G-RQ4QHWB4L3",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { firebase, db };
