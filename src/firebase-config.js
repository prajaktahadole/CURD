// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYlhMW6c71sfOHsiM5gblp5aOBky4cCsc",
  authDomain: "blogapp-4af93.firebaseapp.com",
  projectId: "blogapp-4af93",
  storageBucket: "blogapp-4af93.appspot.com",
  messagingSenderId: "453304031958",
  appId: "1:453304031958:web:3949c103904d73a43f4777"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// firebase database
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();