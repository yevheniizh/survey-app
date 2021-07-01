import React from 'react';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE, SIGN_UP_ROUTE } from '../../utils/consts';

const Home = () => {
    return (
        <div>
            <h2>Home!</h2>
            <NavLink to={LOGIN_ROUTE}>
                <button type='button'>Log In</button>
            </NavLink>
            <NavLink to={SIGN_UP_ROUTE}>
                <button type='button'>Sign Up</button>
            </NavLink>
        </div>
    )
}

export default Home;

