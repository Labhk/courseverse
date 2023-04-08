import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAne7NJG8chQpI5ZYgmXx-v4ddPlaLFJps",
  authDomain: "courseverse-auth.firebaseapp.com",
  projectId: "courseverse-auth",
  storageBucket: "courseverse-auth.appspot.com",
  messagingSenderId: "415122961849",
  appId: "1:415122961849:web:942f8710cfb9d98e993268",
  measurementId: "G-MZS1H4V7TW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider}