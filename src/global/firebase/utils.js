import { firebaseConfig } from "./config";
import firebase from "firebase/app";
import "firebase/firestore";
// import "firebase/auth";
import "firebase/storage";

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const FieldValue = firebase.firestore.FieldValue;
export const storage = firebase.storage();
