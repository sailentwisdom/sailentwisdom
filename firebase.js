import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCAiVIIUuZubBm-XzjVKDXmSHMx8jD-tL0",
  authDomain: "sailentwisdom.firebaseapp.com",
  databaseURL: "https://sailentwisdom-default-rtdb.firebaseio.com",
  projectId: "sailentwisdom",
  storageBucket: "sailentwisdom.firebasestorage.app",
  messagingSenderId: "752511369760",
  appId: "1:752511369760:web:f59db804b3fa856cf13245"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export { db, collection, getDocs };
