import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCHthe5oOjkmrBFWOHsSdaQ2GugMxxoVMI",
    authDomain: "the-lost-cards.firebaseapp.com",
    projectId: "the-lost-cards",
    storageBucket: "the-lost-cards.appspot.com",
    messagingSenderId: "134373181955",
    appId: "1:134373181955:web:ce4066dae50fa9316c5c36",
    measurementId: "G-D8XJ6NS9E0"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)