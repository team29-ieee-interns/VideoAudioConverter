import { mdiv } from "./progressbar.svelte";

let metadata;
var fileItem, fileName;

// Importing and Initializing Firebase
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_TiC8wB6WJrCO4vkw3740Q9GHgEaZyQk",
  authDomain: "ieee-intern.firebaseapp.com",
  projectId: "ieee-intern",
  storageBucket: "ieee-intern.appspot.com",
  messagingSenderId: "1077448448762",
  appId: "1:1077448448762:web:8e47030b7afe59563ec743",
};
const app = initializeApp(firebaseConfig);
export function getFile(event, folder) {
  fileItem = event.target.files[0]; // event.target.files returns a filelist
  fileName = fileItem.name;
  metadata = { contentType: fileItem.type };
  Uploadtostorage(folder);
}
function Uploadtostorage(folder) {
  const storage = getStorage(app);
  const storageRef = ref(storage, folder + fileName);
  const uploadTask = uploadBytesResumable(storageRef, fileItem, metadata);

  uploadTask.on("state_changed", (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    mdiv.style.width = `${progress}%`;

    if (progress==100) {
      mdiv.innerText="Done";
    }
  });
}
