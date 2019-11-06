import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBpRCwDTh02d0ptHSdkRSHJzYEblBiPkBw",
    authDomain: "zero-db.firebaseapp.com",
    databaseURL: "https://zero-db.firebaseio.com",
    projectId: "zero-db",
    storageBucket: "zero-db.appspot.com",
    messagingSenderId: "685772051247",
    appId: "1:685772051247:web:0d13b38cad456cf26e07da",
    measurementId: "G-RQ3YLXH0CZ"
  };

  //export const createUserProfileDocument = async(userAuth, additionalData) => {
    //if(!userAuth)
   // {
    //  return;
   // }
   /// const userRef = firebase.doc('users/128jbhgklsj');
   // const snapShot = await userRef.get();

  //  console.log(snapShot);
  //};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

