import { HOME_ROUTE, LOGIN_ROUTE, SIGN_UP_ROUTE } from './utils/consts';
import { Wrapper as SurveyEditor } from './components/SurveyEditor';
import { Wrapper as SurveyList } from './components/SurveyList';
import Login from './pages/Login';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: SIGN_UP_ROUTE,
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: HOME_ROUTE,
    Component: SurveyList,
  },
  {
    path: '/surveys/:id',
    Component: SurveyEditor,
  },
];
