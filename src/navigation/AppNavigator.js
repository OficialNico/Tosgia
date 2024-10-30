// AppNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../components/Auth/LoginScreen';
import CreateAccountScreen from '../components/Auth/CreateAccountScreen';
import ForgotPasswordScreen from '../components/Auth/ForgotPasswordScreen';
import TabNavigator from './TabNavigator';
import ProfessionalHomeScreen from '../components/Professional/ProfessionalHomeScreen';
import ChatScreen from '../components/Shared/ChatScreen';

const Stack = createStackNavigator();

const AppNavigator = ({ route }) => {
  const { selectedRole } = route?.params || {};

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
        name="HomeTabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfessionalHome"
        component={ProfessionalHomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{ headerShown: true, title: 'Chat' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
