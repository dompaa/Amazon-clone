// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC9BXwwQTFHOiUlvQ3c44PYgg5qIxWbKkQ",
  authDomain: "clone-7f680.firebaseapp.com",
  databaseURL: "https://clone-7f680.firebaseio.com",
  projectId: "clone-7f680",
  storageBucket: "clone-7f680.appspot.com",
  messagingSenderId: "998845386167",
  appId: "1:998845386167:web:12c256d22c27ebf81c2c32",
  measurementId: "G-CZKB3KS4WT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

// to use it outside of the file
export { db, auth };


