import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCcMK5Cl6CLeaj0D9kwQaL6m5y0LHPEFQ8",
  authDomain: "library-app-c6bf9.firebaseapp.com",
  projectId: "library-app-c6bf9",
  storageBucket: "library-app-c6bf9.appspot.com",
  messagingSenderId: "753532143496",
  appId: "1:753532143496:web:9f5a161193b715d2d9dc3d",
  measurementId: "G-X3RD6GG3P2"
};

const app = initializeApp(firebaseConfig);

//for authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

//for database
export const db = getFirestore(app);

// for storage
export const storage = getStorage(app);