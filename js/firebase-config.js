// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbfe91OPkB15iagdEvOPFdZWWfWC4w3i8",
    authDomain: "tomazela-piscinas-shoope.firebaseapp.com",
    projectId: "tomazela-piscinas-shoope",
    storageBucket: "tomazela-piscinas-shoope.firebasestorage.app",
    messagingSenderId: "34738300134",
    appId: "1:34738300134:web:16cb5f3fd7b2541bd80727",
    measurementId: "G-P5HS8YFDCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Coleções
const produtosCollection = collection(db, 'produtos');
const linksDoc = doc(db, 'config', 'socialLinks');

console.log('🔥 Firebase conectado - Tomazela Piscinas');

export { auth, db, produtosCollection, linksDoc, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, addDoc, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, getDoc, setDoc };