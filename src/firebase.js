import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0G5AIUWDh9hWralXQ8bQbrUGgxid4YnQ",
  authDomain: "clone-react-7fbb6.firebaseapp.com",
  projectId: "clone-react-7fbb6",
  storageBucket: "clone-react-7fbb6.appspot.com",
  messagingSenderId: "524893168859",
  appId: "1:524893168859:web:6a372e3293bf549f4c18fe",
  measurementId: "G-P7VLKHWJWQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
