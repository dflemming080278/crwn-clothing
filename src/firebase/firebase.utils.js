import { initializeApp } from 'firebase/app';
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from 'firebase/auth';
 import {
     getFirestore,
//     collection,
//      addDoc,
//     query,
//     orderBy,
//     limit,
       onSnapshot,
       getDoc,
       setDoc,
//     updateDoc,
     doc,
//     serverTimestamp,
 } from 'firebase/firestore';
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
let handleUnsubscribeFromAuth = null

// Initialize firebase auth
export function init(appHandleCurrentUser) {
    handleCurrentUser = appHandleCurrentUser;
    initFirebaseAuth();
}

// Listen to auth state changes.
export function initFirebaseAuth() {
    handleUnsubscribeFromAuth = onAuthStateChanged(auth, authStateObserver);
}

// Listen to Snapshot changes.
export function initFirebaseSnapshot(userAuth) {
    const db = getFirestore();
    const userRef = doc(db,`users/${ userAuth.uid }`);
    
    onSnapshot(userRef, firebaseOnSnapshot);
}

export function unSubscribeFromAuth() {
    handleUnsubscribeFromAuth();
}

async function authStateObserver(user) {
    handleCurrentUser(user);

    if (user) {
//console.log('1. user.uid:- ' + user.uid);
        initFirebaseSnapshot ( user ); 
    }
}

// Sign in Firebase using popup auth and Google as the identity provider.
export async function firebaseEmailAndPasswordSignIn(email, password) {

    try {
        await signInWithEmailAndPassword(getAuth(), email, password);
    }catch(error) {
        console.log(error.message);
    }
}

// Sign in Firebase using popup auth and Google as the identity provider.
export async function firebaseGoogleSignIn() {
    var provider = new GoogleAuthProvider();

    try {
        await signInWithPopup(getAuth(), provider);
    }catch(error) {
        console.log(error.message);
    }
}

// Sign out of Firebase.
export function firebaseSignOut() {
    signOut(auth);
}

export async function firebaseCreateUserWithEmailAndPassword(displayName, email, password) {
    try {

        const { user } = await createUserWithEmailAndPassword(
            auth,
            email, 
            password
        );
        user.displayName = displayName;

        return user;
    }catch(error) {
        console.log(error.message);
    }
}



export async function createUserProfileDocument(userAuth)  {
    if (!userAuth) return;


    const db = getFirestore();

    const userRef = doc(db,`users/${ userAuth.uid }`);

    const snapShot = await getDoc(userRef);

    if(!snapShot.exists()) {
        
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
           if (userAuth.uid) {
                await setDoc(userRef, {
                    displayName,
                    email,
                    createdAt
                });
            }
        } catch(error) {
            console.log('error creating user:- ', error.message);
        }
    }

    return userRef;
  }

export async function firebaseOnSnapshot(userSnap) {
    
    if (userSnap.exists) {
//console.log("Snapshot data changed:", userSnap.data());

        handleCurrentUser({
            id: userSnap.id,
            ...userSnap.data()
        });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
}

// // Return Firbase Collection object
// export async function firebaseCollection(name) {
//     return collection(name);
// }

// Return Firebase Document object
export function firebaseDoc(name) {
    return doc(name);
}




