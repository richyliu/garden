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


function readCollection(col, success, failure=()=>{}) {
  db.collection(col).get().then(snapshot => {
    let ret = {};
    snapshot.forEach(doc => ret[doc.id] = doc.data());

    success(ret);
  }).catch(error => {
    failure(error);
  })
}


function addCollection(item, col, success, failure=()=>{}) {
  db
    .collection(col)
    .add(item)
    .then(ref => success(ref))
    .catch(error => failure(error));
}


function serializeAction(input) {
  // TODO: finish serialization
}


function deserializeAction(input) {

}


export { readCollection, addCollection };
