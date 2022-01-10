import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBvIU7LqETyuITr1-dI8z4MKAgC7COacfU',
  authDomain: 'linkedin-clone-ikramov.firebaseapp.com',
  projectId: 'linkedin-clone-ikramov',
  storageBucket: 'linkedin-clone-ikramov.appspot.com',
  messagingSenderId: '96668940365',
  appId: '1:96668940365:web:1bb8d418059b75b091c404',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
