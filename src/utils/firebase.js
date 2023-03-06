// Import the functions you need from the SDKs you need
import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq8LR2GvXqVeuP_h-pk7KOD5dAZbRvr4Y",
  authDomain: "heritage-clothing-store.firebaseapp.com",
  projectId: "heritage-clothing-store",
  storageBucket: "heritage-clothing-store.appspot.com",
  messagingSenderId: "972740366708",
  appId: "1:972740366708:web:06c9f31a81a3cbc1ffdc21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/* creat una instancia de la base de datos */

export const db = getFirestore(app);