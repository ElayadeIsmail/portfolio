import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACBg7QfBMC_B0oJeycmwGRt8pUX0F-Hwg",
  authDomain: "portfoloi-submition.firebaseapp.com",
  databaseURL: "https://portfoloi-submition.firebaseio.com",
  projectId: "portfoloi-submition",
  storageBucket: "portfoloi-submition.appspot.com",
  messagingSenderId: "928477783276",
  appId: "1:928477783276:web:7171f77b4da05a816cb1c9",
  measurementId: "G-J1Z6JK614S",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// ref

export const messageRef = firebase.database().ref("messages");
