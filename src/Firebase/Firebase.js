// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_56RZSJnZmyZ2eP_V2cj3T07BA1PXcZc",
    authDomain: "collegeproject-648f4.firebaseapp.com",
    projectId: "collegeproject-648f4",
    storageBucket: "collegeproject-648f4.appspot.com",
    messagingSenderId: "790797630900",
    appId: "1:790797630900:web:57e6923a55a7cd3f4c46e1"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
const reference =ref


export {auth, db, collection, addDoc, getDocs, database, storage, reference, getDownloadURL};
