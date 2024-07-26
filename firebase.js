// lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDzepW2TXytSWtulZWNZm6EQ5iiVuIierw",
    authDomain: "clubshape-320a4.firebaseapp.com",
    projectId: "clubshape-320a4",
    storageBucket: "clubshape-320a4.appspot.com",
    messagingSenderId: "49147528572",
    appId: "1:49147528572:web:06380d61ad1c2c446510f9",
    measurementId: "G-JQ0M0QYGM4"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta las instancias necesarias
const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage };