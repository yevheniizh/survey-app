import React, { useEffect, useState } from 'react';
import app from '../services/firebase.service';
import Loader from '../components/Loader';

export const AuthContext = React.createContext({} as any);

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user: any) => {
      setCurrentUser(user);

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
