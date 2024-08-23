import Rebase from 're-base';
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD4Ns4V4WiA2NZe18n0-gSkNJ9s8mP7n4k",
  authDomain: "recettes-app-5884d.firebaseapp.com",
  databaseURL: "https://recettes-app-5884d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "recettes-app-5884d",
  storageBucket: "recettes-app-5884d.appspot.com",
  messagingSenderId: "599821981344",
  appId: "1:599821981344:web:7753fc46166a9ae3a71bc5",
  measurementId: "G-JK4XPK961M"
}
)
const base = firebaseApp.database()

// This is a named export
export { firebaseApp }

// this is a default export
export default base;
