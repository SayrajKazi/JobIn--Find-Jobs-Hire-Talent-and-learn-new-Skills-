// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqjCCSAbgehiCVzuAjZw7hanLym5RB-v4",
  authDomain: "auth-jobl.firebaseapp.com",
  projectId: "auth-jobl",
  storageBucket: "auth-jobl.appspot.com",
  messagingSenderId: "332153639458",
  appId: "1:332153639458:web:356261a21bcfc5133a307b",
  measurementId: "G-PPS4EXZVEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
