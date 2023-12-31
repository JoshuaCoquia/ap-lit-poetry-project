
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGHWpFMRmkpAdqdaM1sXjtnOIWFA6nOB4",
    authDomain: "joshuacoquia-aplitpoetry.firebaseapp.com",
    projectId: "joshuacoquia-aplitpoetry",
    storageBucket: "joshuacoquia-aplitpoetry.appspot.com",
    messagingSenderId: "785519734499",
    appId: "1:785519734499:web:e5dcd53e19533a286b9fd6",
    measurementId: "G-9GW4L3LBFR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

