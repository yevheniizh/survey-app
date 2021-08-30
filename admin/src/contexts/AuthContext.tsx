import * as React from 'react';
import { fireAuth } from '@zzzhyrov/my-perfect-package';
import Loader from '../components/Loader';

export const AuthContext = React.createContext({} as any);

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [pending, setPending] = React.useState(true);

  React.useEffect(() => {
    fireAuth.currentUser !== null
      ? setPending(false)
      : fireAuth.onAuthStateChanged((user: any) => {
          setCurrentUser(user);

          // delay page rendering until Loader finish spinning min for 1 sec
          setTimeout(() => {
            setPending(false);
          }, 1000);
        });
  }, []);

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
