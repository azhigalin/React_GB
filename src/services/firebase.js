import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHfHWgjXLFsoXEvbDoWRtrY3Upo9w_7Js",
  authDomain: "gb-project-de5a0.firebaseapp.com",
  projectId: "gb-project-de5a0",
  storageBucket: "gb-project-de5a0.appspot.com",
  messagingSenderId: "435484901703",
  appId: "1:435484901703:web:76938281a9715588278c62",
};

firebase?.initializeApp(firebaseConfig);
export const auth = firebase?.auth();
export const database = firebase?.database();

export const signUp = async (email, pass) => {
  await createUserWithEmailAndPassword(auth, email, pass);
};

export const login = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
};

export const signOut = async () => {
  await firebaseSignOut(auth);
};
