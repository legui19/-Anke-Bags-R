import firebase from 'firebase/app'
import 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyC0HNidfeJvXG3Vw1BtzGmziONZsVNBXFM",
  authDomain: "ankeybags.firebaseapp.com",
  projectId: "ankeybags",
  storageBucket: "ankeybags.appspot.com",
  messagingSenderId: "946458697879",
  appId: "1:946458697879:web:cf97785b0e6e5841b1c9d2"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore() {
  return firebase.firestore(app);
}