// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOrLG9zYQn7A7Xi2v0es9l2k9Dam1tqFc",
  authDomain: "react-mobi-e3fd0.firebaseapp.com",
  projectId: "react-mobi-e3fd0",
  storageBucket: "react-mobi-e3fd0.appspot.com",
  messagingSenderId: "44978812158",
  appId: "1:44978812158:web:64c524ceabf9db6588a1af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);