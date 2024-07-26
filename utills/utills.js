import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  collection,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgFoHyxZSC2w8NABxjfXJxydoj07c9Vns",
  authDomain: "e-commerce-website-cf228.firebaseapp.com",
  projectId: "e-commerce-website-cf228",
  storageBucket: "e-commerce-website-cf228.appspot.com",
  messagingSenderId: "1025914022056",
  appId: "1:1025914022056:web:916dbd968640fe9989ba9d",
  measurementId: "G-Q7FF0V1ENL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const analytics = getAnalytics(app);

export {
  auth,
  db,
  storage,
  app,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  ref,
  uploadBytes,
  getDownloadURL,
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  addDoc,
  onAuthStateChanged,
  signOut,
  collection

};
