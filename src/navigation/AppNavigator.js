import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../components/Auth/LoginScreen'; // Asegúrate de tener las rutas correctas
import CreateAccountScreen from '../components/Auth/CreateAccountScreen'; // Asegúrate de tener las rutas correctas
import MainScreen from '../components/User/MainScreen'; // Asegúrate de tener la ruta correcta para MainScreen

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
