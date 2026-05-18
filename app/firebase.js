import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBco5nTI1dNHHEJHAjEEU_uImP9m_v_quI",
  authDomain: "aura-live-a4de5.firebaseapp.com",
  projectId: "aura-live-a4de5",
  storageBucket: "aura-live-a4de5.firebasestorage.app",
  messagingSenderId: "217876355979",
  appId: "1:217876355979:web:da1f18bc394f4fc043ad8e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);