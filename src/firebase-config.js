import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoIicvYG2iAWpl7VPXKXG4uQA6SjKmUZQ",
  authDomain: "gotogardens-caf31.firebaseapp.com",
  databaseURL: "https://gotogardens-caf31-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gotogardens-caf31",
  storageBucket: "gotogardens-caf31.appspot.com",
  messagingSenderId: "578896492749",
  appId: "1:578896492749:web:718d955ffa711ffa72d184"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
