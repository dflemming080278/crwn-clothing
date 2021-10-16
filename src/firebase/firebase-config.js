const config = {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyAPCLRj3O58GHm1Id6ht36nr2vXX9M8hH8",
    authDomain: "crwn-db-2b716.firebaseapp.com",
    projectId: "crwn-db-2b716",
    storageBucket: "crwn-db-2b716.appspot.com",
    messagingSenderId: "928331630609",
    appId: "1:928331630609:web:b71f1b6066e9c2e0b0c9b0",
    measurementId: "G-4PFGE50EVJ"
  };
  
  export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
      throw new Error('No Firebase configuration object provided.' + 
      'Add your web apps configuration object to firebase-config.js');
    } else {
      return config;
    }
  }