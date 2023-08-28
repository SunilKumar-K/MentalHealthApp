// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzAQiEY0pKgzAYBdiAbTcrZCyqYg5C0mU",
  authDomain: "mental-health-app-aad94.firebaseapp.com",
  projectId: "mental-health-app-aad94",
  storageBucket: "mental-health-app-aad94.appspot.com",
  messagingSenderId: "158840501852",
  appId: "1:158840501852:web:1e9fd2cb09c5b5cc379899",
  measurementId: "G-CG0Z5JRW34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);