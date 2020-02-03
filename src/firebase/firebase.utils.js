import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyDkiCeE1TkqEb5l5xV7nF6vbwHmejQ5dZ8",
  authDomain: "crwn-db-839a9.firebaseapp.com",
  databaseURL: "https://crwn-db-839a9.firebaseio.com",
  projectId: "crwn-db-839a9",
  storageBucket: "crwn-db-839a9.appspot.com",
  messagingSenderId: "1025547603059",
  appId: "1:1025547603059:web:e3ea6dc0cad6c26d672e06",
  measurementId: "G-HHN5V1BHWJ"
};

firebase.initializeApp(config)

export const auth = firebase.auth()

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase