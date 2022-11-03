//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyDtWqfkg1cVFvOK2jwF0M8Uk5sxzrqy-nM",
    authDomain: "dtc12-d1bf8.firebaseapp.com",
    projectId: "dtc12-d1bf8",
    storageBucket: "dtc12-d1bf8.appspot.com",
    messagingSenderId: "923467683487",
    appId: "1:923467683487:web:869efe7a5a6044088af4aa"
};



//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();