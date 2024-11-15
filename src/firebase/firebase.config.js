// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH4kr3QgoQ9hRIg47cMnKlyvWxgQ3cCZQ",
  authDomain: "dragon-news-481c5.firebaseapp.com",
  projectId: "dragon-news-481c5",
  storageBucket: "dragon-news-481c5.firebasestorage.app",
  messagingSenderId: "102809179558",
  appId: "1:102809179558:web:c33af0d80944b061d76b67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app