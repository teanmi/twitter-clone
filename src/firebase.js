import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "twitter-clone-ea158.firebaseapp.com",
  projectId: "twitter-clone-ea158",
  storageBucket: "twitter-clone-ea158.appspot.com",
  messagingSenderId: "233019399841",
  appId: "1:233019399841:web:e247a851d85f9049c4dae0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);