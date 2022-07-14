
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDgpQK8fE-wfVXT2ouWNJC-7XC7HjNLFqE",
    authDomain: "employee-details-de39a.firebaseapp.com",
    projectId: "employee-details-de39a",
    storageBucket: "employee-details-de39a.appspot.com",
    messagingSenderId: "760403374548",
    appId: "1:760403374548:web:dd0600d29735538bcd6641",
    measurementId: "G-H9B5HC72XB"


};
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);






