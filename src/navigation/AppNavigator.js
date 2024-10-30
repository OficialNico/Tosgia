import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../components/Auth/LoginScreen';
import CreateAccountScreen from '../components/Auth/CreateAccountScreen';
import ForgotPasswordScreen from '../components/Auth/ForgotPasswordScreen';
import MainScreen from '../components/Main/MainScreen'; // Asegúrate de que esta ruta es correcta y que MainScreen está exportado correctamente

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
