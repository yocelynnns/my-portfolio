import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8HzxOvfeBAtzMz4RIUB9YdwEp5I6QpUM",
  authDomain: "yocelyn-portfolio.firebaseapp.com",
  projectId: "yocelyn-portfolio",
  storageBucket: "yocelyn-portfolio.firebasestorage.app",
  messagingSenderId: "859125173772",
  appId: "1:859125173772:web:2193a543d59f7b0ed5e829",
  measurementId: "G-V9J26NZJ29"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

export default app;