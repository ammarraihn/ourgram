import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB4tyDzg08STXZe-VF3lKhCVqBVPYpu_IM",
  authDomain: "ourgram-da0c0.firebaseapp.com",
  projectId: "ourgram-da0c0",
  storageBucket: "ourgram-da0c0.appspot.com",
  messagingSenderId: "247468036551",
  appId: "1:247468036551:web:508acb10fa6a02bfd989e2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

