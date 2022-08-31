// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDo-15zWj49WVQ_tqY-EKiAz9QijV8FX70',
  authDomain: 'evernote-clone-3648d.firebaseapp.com',
  projectId: 'evernote-clone-3648d',
  storageBucket: 'evernote-clone-3648d.appspot.com',
  messagingSenderId: '623807002330',
  appId: '1:623807002330:web:492996b896ebe9327917e3',
  measurementId: 'G-VSHH3THRC4',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)

// Use this to initialize the firebase App
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const app = initializeApp(firebaseConfig)

// export { auth, db };

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
// export const database = getFirestone(app)
