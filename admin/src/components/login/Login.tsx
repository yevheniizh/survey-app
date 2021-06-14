import React, { useContext } from 'react';
import {MyContext} from '../../index';
import firebase from 'firebase';

const Login = () => {
    const {auth} = useContext(MyContext);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
        console.log(user);
    }
    return (
        <div>
            <h2>Log in!</h2>
            <button onClick={login} type='button'>Log in.</button>
        </div>
    )
}

export default Login;


function Context(Context: any): { auth: any; } {
    throw new Error('Function not implemented.');
}
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.6.5/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/8.6.5/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>

// npm install -g firebase-tools

// You can deploy now or later. To deploy now, open a terminal window, then navigate to or create a root directory for your web app.

// Sign in to Google
// firebase login
// Initiate your project
// Run this command from your app’s root directory:

// firebase init
// When you’re ready, deploy your web app
// Put your static files (e.g., HTML, CSS, JS) in your app’s deploy directory (the default is “public”). Then, run this command from your app’s root directory:

// firebase deploy
// After deploying, view your app at test-auth-140e7.web.app

// Need help? Check out the Hosting docs