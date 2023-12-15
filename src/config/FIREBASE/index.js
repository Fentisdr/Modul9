import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyAJ_r7aWr014q49z1WDxPZWgQsooDYKLII",
  authDomain: "modul9-b6794.firebaseapp.com",
  databaseURL: "https://modul9-b6794-default-rtdb.firebaseio.com",
  projectId: "modul9-b6794",
  storageBucket: "modul9-b6794.appspot.com",
  messagingSenderId: "1088246307022",
  appId: "1:1088246307022:web:189a0a4adbd852cc08989f"
});

const FIREBASE = firebase;

export default FIREBASE;