// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu38AOCFW_6ZyL8adFL4asGvjuBlCYB5Q",
  authDomain: "router2-2-dajung.firebaseapp.com",
  projectId: "router2-2-dajung",
  storageBucket: "router2-2-dajung.firebasestorage.app",
  messagingSenderId: "493222639161",
  appId: "1:493222639161:web:47650338a4df9a04383fe8",
  measurementId: "G-0MK9N4BFK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);