// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt5ZVnT3CrDrrmvuJ7omI3UFjuSUCp6Y8",
  authDomain: "fir-auth-shopping.firebaseapp.com",
  projectId: "fir-auth-shopping",
  storageBucket: "fir-auth-shopping.appspot.com",
  messagingSenderId: "985696210738",
  appId: "1:985696210738:web:b573b1ef38f77591fa112b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app  