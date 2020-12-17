import firebase from 'firebase'
import 'firebase/auth'
const app = firebase.initializeApp({
    apiKey: "AIzaSyAslqsD_8IJVaGaL5ZKVjyzdUAk3uQ8P2o",
    authDomain: "auth-development-d9464.firebaseapp.com",
    projectId: "auth-development-d9464",
    storageBucket: "auth-development-d9464.appspot.com",
    messagingSenderId: "792964332750",
    appId: "1:792964332750:web:eac981ac3866bd7abbe49f"
  });

  export const auth = app.auth()
  export default app