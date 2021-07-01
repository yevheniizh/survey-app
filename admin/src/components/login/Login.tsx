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

