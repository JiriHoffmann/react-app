import {getApps, initializeApp} from 'firebase/app';
import {getAuth, signInWithPopup, GoogleAuthProvider, setPersistence, browserSessionPersistence} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


const firebase_config = {
    apiKey: "AIzaSyByjxkitus73UxbX_hE-kyNyIjqM5EHxig",
    authDomain: "final-346218.firebaseapp.com",
    projectId: "final-346218",
    storageBucket: "final-346218.appspot.com",
    messagingSenderId: "246761804196",
    appId: "1:246761804196:web:41fe0fbc0ca3137ddff131",
    measurementId: "G-2PPZJG1KXR"
  }

const _ = getApps().length === 0 && initializeApp(firebase_config);

export const firestoreDB = getFirestore();

export const auth = getAuth();
const googleProvider = new GoogleAuthProvider()
setPersistence(auth, browserSessionPersistence)


export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider).then((res) => {
    // user object
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}
export const logOut = () => {
  auth.signOut().then(()=> {
    console.log('logged out')
  }).catch((error) => {
    console.log(error.message)
  })
}