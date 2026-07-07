import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCHuTKvBK0R6poomtYMVtbqiamKbsoHX6o',
  authDomain: 'md-reptrack.firebaseapp.com',
  projectId: 'md-reptrack',
  storageBucket: 'md-reptrack.firebasestorage.app',
  messagingSenderId: '196897655189',
  appId: '1:196897655189:web:22859f09e3ce8db015ce9c',
  measurementId: 'G-W271BRRRDE',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
