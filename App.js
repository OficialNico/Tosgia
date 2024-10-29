import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    // El único NavigationContainer debe estar dentro del AppNavigator o en App.js.
    <AppNavigator />
  );
};

export default App;
