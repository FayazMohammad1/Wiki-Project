

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMKrfhIEEAszkiX_N7e_3mmgwmKGKS13M",
  authDomain: "wiki-prod1.firebaseapp.com",
  projectId: "wiki-prod1",
  storageBucket: "wiki-prod1.appspot.com",
  messagingSenderId: "456438647825",
  appId: "1:456438647825:web:cc4b10796d57bf9f6eb5b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);