import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBtiKOxaGzznFs0IjxXKfZGrdpFKYnkwVw",
    authDomain: "chatroom-fc335.firebaseapp.com",
    projectId: "chatroom-fc335",
    storageBucket: "chatroom-fc335.appspot.com",
    messagingSenderId: "393282248112",
    appId: "1:393282248112:web:6cf0540c5c76e88d9e8a75"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;