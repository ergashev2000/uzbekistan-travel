import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const config = {
  apiKey: "AIzaSyBTnSz0VSZNapY7YcEhFgMnLNtdwmo0670",
  authDomain: "wetravel-uz.firebaseapp.com",
  projectId: "wetravel-uz",
  storageBucket: "wetravel-uz.appspot.com",
  messagingSenderId: "61337953507",
  appId: "1:61337953507:web:a326ff6efc585cf74191d6",
  measurementId: "G-S5FMH1K4QZ",
};

const app = initializeApp(config);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
