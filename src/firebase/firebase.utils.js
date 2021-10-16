import { initializeApp } from 'firebase/app';
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
  } from 'firebase/auth';
// import {
//     getFirestore,
//     collection,
//     addDoc,
//     query,
//     orderBy,
//     limit,
//     onSnapshot,
//     setDoc,
//     updateDoc,
//     doc,
//     serverTimestamp,
// } from 'firebase/firestore';
// import {
//     getStorage,
//     ref,
//     uploadBytesResumable,
//     getDownloadURL,
//   } from 'firebase/storage';
// import { getMessaging, getToken, onMessage } from 'firebase/messaging';
// import { getPerformance } from 'firebase/performance';

import { getFirebaseConfig } from './firebase-config';



const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);

const auth = getAuth();

let handleCurrentUser = null;

// Initialize firebase auth
export function initFirebaseAuth(appHandleCurrentUser, appUnsubscribeFromAuth) {

    handleCurrentUser = appHandleCurrentUser;

    // Listen to auth state changes.
    appUnsubscribeFromAuth = onAuthStateChanged(auth, authStateObserver);
}

function authStateObserver(user) {
    handleCurrentUser(user);
}

// Signs-in Friendly Chat.
export async function firebaseSignIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    var provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
}

// Signs-out of Friendly Chat.
export function firebaseSignOut() {
    // Sign out of Firebase.
    signOut(getAuth());
}




