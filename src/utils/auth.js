import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

const provider = new GoogleAuthProvider();

export const loginWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export const logout = () => {
  return signOut(auth);
};