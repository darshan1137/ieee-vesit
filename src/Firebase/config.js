// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsSSfZCgGwlJTO7-FRZVEbOptBpWDZOW0",
  authDomain: "ieee-vesit-3234d.firebaseapp.com",
  projectId: "ieee-vesit-3234d",
  storageBucket: "ieee-vesit-3234d.appspot.com",
  messagingSenderId: "813369984336",
  appId: "1:813369984336:web:f16a85c32538e697561855",
  measurementId: "G-BBF73P3GXM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
