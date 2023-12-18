import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { db, storage } from "./firebase";

const getDataFromFirebase = async (table) => {
  const querySnapshot = await getDocs(collection(db, table));
  const data = querySnapshot.docs
    .map((doc) => doc.data())
    .sort((a, b) => (a.id < b.id ? 1 : a.id > b.id ? -1 : 0));
  return data;
};

//暫時用不到
const getAllImageFromStorage = async (file) => {
  const storageRef = ref(storage, file);
  const res = await listAll(storageRef);
};
const getImageURLFromStorage = async (file, image) => {
  const spaceRef = ref(storage, `${file}/${image}`);
  const url = await getDownloadURL(spaceRef);
  return url;
};

export { getDataFromFirebase, getImageURLFromStorage, getAllImageFromStorage };
