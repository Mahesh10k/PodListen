import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDtEI2ARNm8VPlowcN_xU2BT1YcyWIVn0w",
  authDomain: "podlisten-98c8a.firebaseapp.com",
  projectId: "podlisten-98c8a",
  storageBucket: "podlisten-98c8a.firebasestorage.app",
  messagingSenderId: "801799475519",
  appId: "1:801799475519:web:14f35e345eb60afe4c438a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export default app;
