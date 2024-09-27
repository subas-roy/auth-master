// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdbUIxfAuaAfRl8E3my-Rdjwpsd-g9I8M",
  authDomain: "auth-master-7c7f0.firebaseapp.com",
  projectId: "auth-master-7c7f0",
  storageBucket: "auth-master-7c7f0.appspot.com",
  messagingSenderId: "1009808988639",
  appId: "1:1009808988639:web:6890a40939261c64ab4c6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;