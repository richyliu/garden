// contains data that is synced with firebase

import firebase from 'firebase/app';
import 'firebase/firestore'
import * as Static from './static';
import _ from 'lodash';



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
  }).catch(failure);
}


function addCollection(item, col, success, failure=()=>{}) {
  db
    .collection(col)
    .add(item)
    .then(success)
    .catch(failure);
}


function deleteDocument(col, item, success=()=>{}, failure=()=>{}) {
  db
    .collection(col)
    .doc(item)
    .delete()
    .then(success)
    .catch(failure);
}


export { readCollection, addCollection, deleteDocument };
