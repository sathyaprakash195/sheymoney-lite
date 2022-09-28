import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZyk3huEAJ3TgAfQvSN43D57rwZr5Zjow",
  authDomain: "sheymoney-lite.firebaseapp.com",
  projectId: "sheymoney-lite",
  storageBucket: "sheymoney-lite.appspot.com",
  messagingSenderId: "21872573747",
  appId: "1:21872573747:web:101b006e8a31a64eba5246",
  measurementId: "G-CQZFVN20M8",
};

const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);

export { fireDb, app };
