// contains data that is synced with firebase

import firebase from 'firebase/app';
import 'firebase/firestore'



firebase.initializeApp({
  apiKey: "AIzaSyA1G05BhsyLuC5HqUYvfOVbDjKzxiC-Pts",
  authDomain: "garden-c398b.firebaseapp.com",
  projectId: "garden-c398b"
});
const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});


function readCollection(col, callback) {
  db.collection(col).get().then(snapshot => {
    let ret = {};
    snapshot.forEach(doc => ret[doc.id] = doc.data());

    callback(ret);
  })
}


function addCollection(item, col, callback) {
  db.collection(col).add(item).then(ref => callback(ref));
}


export { readCollection, addCollection };
