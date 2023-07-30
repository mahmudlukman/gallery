// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnY2zbBOacJZMcpftLXnoOj_EkSsSshrc",
  authDomain: "react-firebase-gallery-1c4fd.firebaseapp.com",
  projectId: "react-firebase-gallery-1c4fd",
  storageBucket: "react-firebase-gallery-1c4fd.appspot.com",
  messagingSenderId: "565451930669",
  appId: "1:565451930669:web:aab21542e86f186e398ca4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage()
export const db = getFirestore()