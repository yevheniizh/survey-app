import Authorized from "./components/authorized/Authorized";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import SignUp from "./components/signUp/SignUp";
import { AUTHORIZED_ROUTE, HOME_ROUTE, LOGIN_ROUTE, SIGN_UP_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: SIGN_UP_ROUTE,
        Component: SignUp
    }
];

export const privateRoutes = [
    {
        path: AUTHORIZED_ROUTE,
        Component: Authorized
    }
]