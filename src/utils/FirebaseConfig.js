// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsbXn94J95bAbtjOfrIYkX0XouyReX5Ig",
  authDomain: "coleccion-jb.firebaseapp.com",
  projectId: "coleccion-jb",
  storageBucket: "coleccion-jb.appspot.com",
  messagingSenderId: "72816919753",
  appId: "1:72816919753:web:762cad51ed19214e1cf918"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
