// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxQazot3kxpU1j863-E1PFHHQY3gEHwVQ",
  authDomain: "auth-e88bc.firebaseapp.com",
  projectId: "auth-e88bc",
  storageBucket: "auth-e88bc.appspot.com",
  messagingSenderId: "625228457699",
  appId: "1:625228457699:web:54ac636312d88afa2087d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
