import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDW7mvzIlkgqtcDBTHSZVDEscE-e2XBMqA",
  authDomain: "sda-newsapp.firebaseapp.com",
  projectId: "sda-newsapp",
  storageBucket: "sda-newsapp.appspot.com",
  messagingSenderId: "323808259305",
  appId: "1:323808259305:web:11eced32435f21d7c75478",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
