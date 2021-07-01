import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/auth';
import reportWebVitals from './reportWebVitals';

firebase.initializeApp({
  apiKey: 'AIzaSyDXd9tTpe3joIJNx3Bqw0WJkhBRpKLqSSU',
  authDomain: 'admin--survey.firebaseapp.com',
  projectId: 'admin--survey',
  storageBucket: 'admin--survey.appspot.com',
  messagingSenderId: '226587562987',
  appId: '1:226587562987:web:19be7a6b3fbf24e9f4ffae',
  measurementId: 'G-C09JY3RV7E',
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
