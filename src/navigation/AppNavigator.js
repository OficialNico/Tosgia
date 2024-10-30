import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../components/Auth/LoginScreen';
import CreateAccountScreen from '../components/Auth/CreateAccountScreen';
import ForgotPasswordScreen from '../components/Auth/ForgotPasswordScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserHome"
        component={TabNavigator}
        options={{ headerShown: false }}
        initialParams={{ selectedRole: 'user' }}
      />
      <Stack.Screen
        name="ProfessionalHome"
        component={TabNavigator}
        options={{ headerShown: false }}
        initialParams={{ selectedRole: 'professional' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
