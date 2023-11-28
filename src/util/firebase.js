import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const getDataFromFirebase = async (table) => {
  const querySnapshot = await getDocs(collection(db, table));
  const data = querySnapshot.docs
    .map((doc) => doc.data())
    .sort((a, b) => (a.id < b.id ? 1 : a.id > b.id ? -1 : 0));
  return data;
};

export { getDataFromFirebase };
