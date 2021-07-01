import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <AppRouter />
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
