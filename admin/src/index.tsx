import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/auth';
import reportWebVitals from './reportWebVitals';

firebase.initializeApp({
  apiKey: "AIzaSyCQ5D2Djy95Gie0bl11uGRLykARDWT8k_4",
  authDomain: "survey-i.firebaseapp.com",
  projectId: "survey-i",
  storageBucket: "survey-i.appspot.com",
  messagingSenderId: "445296628160",
  appId: "1:445296628160:web:0e0d416c2e4293d0a53825",
  measurementId: "G-LLBYXC6D6K"
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
