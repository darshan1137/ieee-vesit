import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAsSSfZCgGwlJTO7-FRZVEbOptBpWDZOW0",
  authDomain: "ieee-vesit-3234d.firebaseapp.com",
  projectId: "ieee-vesit-3234d",
  storageBucket: "ieee-vesit-3234d.appspot.com",
  messagingSenderId: "813369984336",
  appId: "1:813369984336:web:f16a85c32538e697561855",
  measurementId: "G-BBF73P3GXM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db };
