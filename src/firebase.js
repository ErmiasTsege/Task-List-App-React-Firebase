// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyB5NtTn7h0LVs-UMUf8SgGtP9gF-aXFMrA",
    authDomain: "task-list-55ee2.firebaseapp.com",
    projectId: "task-list-55ee2",
    storageBucket: "task-list-55ee2.appspot.com",
    messagingSenderId: "23108986496",
    appId: "1:23108986496:web:bd75e1f5ea3aa926a1e865",
    measurementId: "G-9FF0P4W857"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
//   const auth=firebase.auth();
  //const provider=new firebase.auth.GoogleAuthProvider();
 // export {auth,provider};
  export default db;