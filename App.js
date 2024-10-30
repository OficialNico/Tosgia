import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DarkModeProvider } from './src/context/DarkModeContext'; // Asegúrate de tener el contexto para el modo oscuro
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
