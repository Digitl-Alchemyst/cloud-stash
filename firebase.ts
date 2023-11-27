import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCTKioQz49yIJllCJJbhTb8ZAEUeZvPc5g',
  authDomain: 'cloud-stash-8e9e0.firebaseapp.com',
  projectId: 'cloud-stash-8e9e0',
  storageBucket: 'cloud-stash-8e9e0.appspot.com',
  messagingSenderId: '887114757129',
  appId: '1:887114757129:web:cc76d987bfe574a362f4d8',
  measurementId: 'G-D9RHX81PX0',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
