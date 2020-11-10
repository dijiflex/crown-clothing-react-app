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




firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
