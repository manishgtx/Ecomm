import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBS7LFgFOuHVu-Skwlb_lxVEWLeDmd0dso",
  authDomain: "ecommerce-915f7.firebaseapp.com",
  projectId: "ecommerce-915f7",
  storageBucket: "ecommerce-915f7.appspot.com",
  messagingSenderId: "216857357208",
  appId: "1:216857357208:web:cb4c7f92282738a3c199ed"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);