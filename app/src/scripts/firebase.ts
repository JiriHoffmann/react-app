import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG!);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAnalytics = getAnalytics(FirebaseApp);

export const signInWithGoogle = signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    // The signed-in user info.
    const user = result.user;

    return {
      user,
      token,
    };
  })
