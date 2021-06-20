import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { HOME_ROUTE, LOGIN_ROUTE, SIGN_UP_ROUTE } from './utils/consts';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: SIGN_UP_ROUTE,
    Component: SignUp,
  },
];

export const privateRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
];
