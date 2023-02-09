import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import config from "../firebase.json";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const app = initializeApp(config);

const auth = getAuth(app);

export const signin = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

const uploadImage = async (uri) => {
  if (uri.startsWith("https")) {
    return uri;
  }

  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function () {
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });

  const { uid } = auth.currentUser;

  const storage = getStorage(app);
  const storageRef = ref(storage, `/profile/${uid}/photo.png`);

  await uploadBytes(storageRef, blob, {
    contentType: "image/png",
  });

  return await getDownloadURL(storageRef);

  // const snapshot = await ref.put(blob, { contentType: "image/png" });
  // blob.close();
  // return await snapshot.ref.getDownloadURL();
};

export const signup = async ({ name, email, password, photo }) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  const photoURL = await uploadImage(photo);
  await user.updateProfile({ displayName: name, photoURL });
};
