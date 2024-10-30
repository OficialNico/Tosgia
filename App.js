import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DarkModeProvider } from './src/context/DarkModeContext';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <DarkModeProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </DarkModeProvider>
  );
};

export default App;
