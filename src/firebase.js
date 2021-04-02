import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCI4F83-XvvN9f7t5NOvJAsw5jNY-OMF8Q",
  authDomain: "imessage-clone-7ed22.firebaseapp.com",
  projectId: "imessage-clone-7ed22",
  storageBucket: "imessage-clone-7ed22.appspot.com",
  messagingSenderId: "908006269483",
  appId: "1:908006269483:web:887695eb6b65990df1006e",
  measurementId: "G-MW5PSYMETK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
