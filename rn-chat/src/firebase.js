import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import config from "../firebase.json";

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

  const user = auth.currentUser;
  const ref = app.storage().ref(`/profile/${user.uid}/photo/png`);
  const snapshot = await ref.put(blob, { contentType: "image/png" });
  blob.close();

  return await snapshot.ref.getDownloadURL();
};

export const signup = async ({ name, email, password, photo }) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  const photoURL = await uploadImage(photo);
  await user.updateProfile({ displayName: name, photoURL });
};
