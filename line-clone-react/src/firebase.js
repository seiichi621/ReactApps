import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDELI15KuXu6mLgVe3I6SqvSaqoUad2QVs",
  authDomain: "line-clone-yt-93cfd.firebaseapp.com",
  projectId: "line-clone-yt-93cfd",
  storageBucket: "line-clone-yt-93cfd.appspot.com",
  messagingSenderId: "391118173442",
  appId: "1:391118173442:web:2a27ef0a78052841d9be1b"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth}