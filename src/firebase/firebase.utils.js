import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCqKHsGQnunN13n9jmLI_lx4cFKtMhHIO4',
  authDomain: 'crown-db-2acd9.firebaseapp.com',
  databaseURL: 'https://crown-db-2acd9.firebaseio.com',
  projectId: 'crown-db-2acd9',
  storageBucket: 'crown-db-2acd9.appspot.com',
  messagingSenderId: '257006104173',
  appId: '1:257006104173:web:77bd32d6b3947ee64c9964'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
