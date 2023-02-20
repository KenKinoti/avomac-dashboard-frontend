// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc89Q8iJAszfb0lp-tqDrVGMe9QA3hmug",
  authDomain: "avomac-dashboard.firebaseapp.com",
  projectId: "avomac-dashboard",
  storageBucket: "avomac-dashboard.appspot.com",
  messagingSenderId: "1092582469626",
  appId: "1:1092582469626:web:27dd3a911e4c59fcc23e43",
  measurementId: "G-JEHBPJ366F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);