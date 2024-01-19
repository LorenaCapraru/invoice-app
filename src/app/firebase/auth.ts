import {
  getAuth,
  Auth,
  UserCredential,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

const authInstance: Auth = auth;

// Sign Up/In with Google
export async function signUpWithGoogle(): Promise<UserCredential> {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(authInstance, provider);
    return result;
  } catch (error: any) {
    console.error("Error signing up with Google:", error.message);
    throw error;
  }
}

//sign out
export async function signOutUser(): Promise<void> {
  const auth: Auth = getAuth();
  try {
    await signOut(auth);
  } catch (error: any) {
    console.error("Error signing out:", error.message);
    throw error;
  }
}
