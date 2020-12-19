import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyC5DiE7TGGcR8qPj-Dm82rAuJ7Uod4j1qQ",
    authDomain: "login-39a02.firebaseapp.com",
    projectId: "login-39a02",
    storageBucket: "login-39a02.appspot.com",
    messagingSenderId: "69008264991",
    appId: "1:69008264991:web:c4eea1dea6427c7ce5aa2a"
  };
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire