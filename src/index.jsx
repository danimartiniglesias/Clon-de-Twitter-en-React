import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'


// Initialize Firebase
var config = {
    apiKey: 'AIzaSyBNyJLcV5BtsNfiDP3Jvv02wt3-ZKMRbCQ',
    authDomain: 'curso-react-clon-de-twitter.firebaseapp.com',
    databaseURL: 'https://curso-react-clon-de-twitter.firebaseio.com',
    projectId: 'curso-react-clon-de-twitter',
    storageBucket: 'curso-react-clon-de-twitter.appspot.com',
    messagingSenderId: '92359537699'
};
firebase.initializeApp(config);

import App from './components/App'

render (<App />, document.getElementById('root'))