import firebase from "firebase/compat/app";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3xWYp3JMtKsy_bbI0PeAe3c4mWb60swA",
  authDomain: "leafpredict.firebaseapp.com",
  projectId: "leafpredict",
  storageBucket: "leafpredict.appspot.com",
  messagingSenderId: "831851285178",
  appId: "1:831851285178:web:cbed9cbff2ec9cd7a39083",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const myStorage = firebase.storage();

export default myStorage;
