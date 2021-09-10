import * as React from 'react';
import { useDispatch } from 'react-redux';
import { fireAuth } from '@zzzhyrov/my-perfect-package';
import Loader from '../components/Loader';
import { getProfile } from '../redux/actions/auth.actions';

export const AuthContext = React.createContext({} as any);

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [pending, setPending] = React.useState(true);
  const dispatch = useDispatch();

  React.useEffect(() => {
    fireAuth.currentUser !== null
      ? setPending(false)
      : fireAuth.onAuthStateChanged((user: any) => {
          setCurrentUser(user);
          dispatch(getProfile(user));

          setTimeout(() => {
            setPending(false);
          }, 1000);
        });
  }, [dispatch]);

  if (pending) return <Loader />;

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
