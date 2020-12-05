import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAg48IVypfQg9ca9OqdT1zJT-gEIbaUlas',
  authDomain: 'portles-uk-db.firebaseapp.com',
  projectId: 'portles-uk-db',
  storageBucket: 'portles-uk-db.appspot.com',
  messagingSenderId: '418470143068',
  appId: '1:418470143068:web:edf655e9c2d4394b0db299',
  measurementId: 'G-5JLWQH4188',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  const userReference = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userReference.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userReference.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('An error occured creating the user.', error);
    }
  }

  return userReference;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
