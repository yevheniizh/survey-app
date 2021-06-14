import React, { useContext, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { MyContext } from '../..';

const Authorized = () => {
    const {auth} = useContext(MyContext);
    // const [user] = useAuthState(auth);
    return (
        <div>
            <h2>Authorized User!</h2>
            <button type='button' onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default Authorized;