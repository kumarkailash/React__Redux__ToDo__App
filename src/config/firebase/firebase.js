import firebase from 'firebase'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyAlRCrttKa24f1WcLKHw1bktg2uxoHEpC8",
    authDomain: "react-redux-todo-172d7.firebaseapp.com",
    databaseURL: "https://react-redux-todo-172d7.firebaseio.com",
    projectId: "react-redux-todo-172d7",
    storageBucket: "",
    messagingSenderId: "1069804459602",
    appId: "1:1069804459602:web:520773ea82fae773aab18b"
};
// Initialize Firebase
const firebaseApp =  firebase.initializeApp(firebaseConfig);

export default firebaseApp