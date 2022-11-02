//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBZBr4gqWFNiT4gDwjYFoCFDFgK0tYzOQs",
    authDomain: "dtc12-1800projects.firebaseapp.com",
    projectId: "dtc12-1800projects",
    storageBucket: "dtc12-1800projects.appspot.com",
    messagingSenderId: "658051082773",
    appId: "1:658051082773:web:9755ddef80ebc100f6fc1c"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();