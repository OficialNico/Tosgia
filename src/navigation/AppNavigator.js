// Ruta: src/navigation/AppNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../components/Auth/LoginScreen';
import CreateAccountScreen from '../components/Auth/CreateAccountScreen';
import ForgotPasswordScreen from '../components/Auth/ForgotPasswordScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
        initialParams={{ selectedRole: null }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
