import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8cjvnAilZJ4qegzklRD0tfcEcWpHQpIY",
  authDomain: "bakery-69696.firebaseapp.com",
  projectId: "bakery-69696",
  storageBucket: "bakery-69696.firebasestorage.app",
  messagingSenderId: "577363964703",
  appId: "1:577363964703:web:ef989a8548a25caa60362a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);