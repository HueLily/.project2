import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD6--bGIg7oCVXJWkf5NsbJ23V5FWOgKso",
  authDomain: "hobbyhub-ac78e.firebaseapp.com",
  projectId: "hobbyhub-ac78e",
  storageBucket: "hobbyhub-ac78e.firebasestorage.app",
  messagingSenderId: "49878550340",
  appId: "1:49878550340:web:747088770a579b4be23911",
  measurementId: "G-TGK4QY8MKS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
