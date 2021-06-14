import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/auth';
import reportWebVitals from './reportWebVitals';

firebase.initializeApp({
  apiKey: 'AIzaSyCyOmMmGAUnFhWdnIBLPPPrKR8Vq0_VjRI',
  authDomain: 'test-auth-140e7.firebaseapp.com',
  projectId: 'test-auth-140e7',
  storageBucket: 'test-auth-140e7.appspot.com',
  messagingSenderId: '706853856585',
  appId: '1:706853856585:web:383a516d62efbe56d12698',
  measurementId: 'G-M5H68X08ZR',
});

export const MyContext = createContext({} as any);

const auth = firebase.auth();

ReactDOM.render(
  <React.StrictMode>
    <MyContext.Provider
      value={{
        auth,
        firebase,
      }}
    >
      <App />
    </MyContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
