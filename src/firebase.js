import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD3Zbqg7Wn83_Dq8Ru2ReF9yERUIUmDWMI",
    authDomain: "clone-a5d06.firebaseapp.com",
    databaseURL: "https://clone-a5d06.firebaseio.com",
    projectId: "clone-a5d06",
    storageBucket: "clone-a5d06.appspot.com",
    messagingSenderId: "557903743053",
    appId: "1:557903743053:web:222b3191b87c875d64f404",
    measurementId: "G-LKQN6GTXHK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
