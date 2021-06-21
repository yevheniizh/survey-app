import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
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
