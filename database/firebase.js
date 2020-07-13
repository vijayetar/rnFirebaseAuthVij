// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBwbdLVi5SXgfHjENO0rrIVXw6gUcs5Zfo",
    authDomain: "rnfirebaseauthvij-3e62d.firebaseapp.com",
    databaseURL: "https://rnfirebaseauthvij-3e62d.firebaseio.com",
    projectId: "rnfirebaseauthvij-3e62d",
    storageBucket: "rnfirebaseauthvij-3e62d.appspot.com",
    messagingSenderId: "769309358813",
    appId: "1:769309358813:web:52089a42025ffd4c8eb934"
};

firebase.initializeApp(firebaseConfig);

export default firebase;