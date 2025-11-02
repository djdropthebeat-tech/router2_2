// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvUZQ_i2IFYCHb0FXtskLx942l6wSYEmk",
  authDomain: "router22-dajung.firebaseapp.com",
  projectId: "router22-dajung",
  storageBucket: "router22-dajung.firebasestorage.app",
  messagingSenderId: "877439416803",
  appId: "1:877439416803:web:defb0ce9d166aecac6c8d6",
  measurementId: "G-4QPHMCZRD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

