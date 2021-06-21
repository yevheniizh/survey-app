import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
