// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6fn6cQzMbByxki2v5jB_an1_WO6zy0Ok",
  authDomain: "clone-b1b01.firebaseapp.com",
  projectId: "clone-b1b01",
  storageBucket: "clone-b1b01.appspot.com",
  messagingSenderId: "181999980251",
  appId: "1:181999980251:web:33dd2dd2fd80e06af986fe",
  measurementId: "G-15065Y4S5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);