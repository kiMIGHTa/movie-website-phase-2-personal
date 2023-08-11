import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCnSU9wCx87rLYXIv_0HRxTJG42dffdiDM",
    authDomain: "movie-website-ec131.firebaseapp.com",
    projectId: "movie-website-ec131",
    storageBucket: "movie-website-ec131.appspot.com",
    messagingSenderId: "423032548768",
    appId: "1:423032548768:web:db085173bd60524b2e48c5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {auth}

  export default db