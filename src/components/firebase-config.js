// Import the functions you need from the SDKs you need
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs97pkAPR1YH-6wdMffv1hkA-VtEX27f8",
  authDomain: "hek-social.firebaseapp.com",
  projectId: "hek-social",
  storageBucket: "hek-social.appspot.com",
  messagingSenderId: "385887794796",
  appId: "1:385887794796:web:55e481bb7643ead63c4a49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const signInPopup = signInWithPopup
export const auth = getAuth(app)