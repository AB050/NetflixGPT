import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDd9mZoH27Wgglz4AQbQSuDwE_d8gTAUH4",
  authDomain: "netflixgpt-63de3.firebaseapp.com",
  projectId: "netflixgpt-63de3",
  storageBucket: "netflixgpt-63de3.appspot.com",
  messagingSenderId: "196447105481",
  appId: "1:196447105481:web:841cf5143caf1dd6eaf818",
  measurementId: "G-8RNB2WXCZR",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
