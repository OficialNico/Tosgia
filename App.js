// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator'; // Ajusta la ruta según tu estructura de carpetas
import { DarkModeProvider } from './src/context/DarkModeContext'; // Asegúrate de importar el proveedor de modo oscuro

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
