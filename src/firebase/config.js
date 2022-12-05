import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAxuUCMpHB3pAU8EnQLXE-ii-5aoJSXaj0",
    authDomain: "chatsite-60730.firebaseapp.com",
    projectId: "chatsite-60730",
    storageBucket: "chatsite-60730.appspot.com",
    messagingSenderId: "715819770316",
    appId: "1:715819770316:web:b5998bb51bdd95c4313d69"
  };

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth= firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth }