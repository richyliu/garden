// contains data that is synced with firebase

import firebase from 'firebase/app';
import 'firebase/firestore'

import home from '../pages/home';

firebase.initializeApp({
  apiKey: "AIzaSyA1G05BhsyLuC5HqUYvfOVbDjKzxiC-Pts",
  authDomain: "garden-c398b.firebaseapp.com",
  projectId: "garden-c398b"
});

const db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true
});

// db.collection('test').add({
//   first: 'foo',
//   last: 'bar',
//   age: 21
// }).then(docRef => {
//   console.log('docRef', docRef);
// }).catch(error => {
//   console.log('error adding doc', error);
// });

export default () => {
  console.log('in database.js', this);
  console.log('home.methods', home.methods);
  home.methods.addDescription(0, 'hi');
};
