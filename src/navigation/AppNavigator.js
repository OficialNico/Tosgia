import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../components/Auth/LoginScreen';
import CreateAccountScreen from '../components/Auth/CreateAccountScreen';
import ForgotPasswordScreen from '../components/Auth/ForgotPasswordScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
