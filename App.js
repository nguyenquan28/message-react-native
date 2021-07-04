import React from 'react';
import { AuthProvider } from './src/navigation/AuthProvider';
import Routes from './src/navigation/Routers';
const App = () => {

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
