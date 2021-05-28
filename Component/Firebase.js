import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlPu8W3_t8D-nRn6RVZ0VNRjweBS6_akE",
  authDomain: "clone-using-react-78d74.firebaseapp.com",
  projectId: "clone-using-react-78d74",
  storageBucket: "clone-using-react-78d74.appspot.com",
  messagingSenderId: "113696505431",
  appId: "1:113696505431:web:06e9e673aa5211c1feed12",
  measurementId: "G-LP5M9R9THV"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };