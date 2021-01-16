import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC59VTF8pgl-Gix2jc47PircwWRD96BJxM",
  authDomain: "firegram-53005.firebaseapp.com",
  projectId: "firegram-53005",
  storageBucket: "firegram-53005.appspot.com",
  messagingSenderId: "640394778004",
  appId: "1:640394778004:web:ea289f2b7970355f3d6b81",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
