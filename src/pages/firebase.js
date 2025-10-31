// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC58_oOsTDME0Lt3dEMbrlEoI2X84j3_w8",
  authDomain: "router2-2-dajung2.firebaseapp.com",
  projectId: "router2-2-dajung2",
  storageBucket: "router2-2-dajung2.firebasestorage.app",
  messagingSenderId: "756615961897",
  appId: "1:756615961897:web:3e4a6186593308b2efeb38",
  measurementId: "G-CXJGS4QJDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);