// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../components/Auth/LoginScreen';
import CreateAccountScreen from '../components/Auth/CreateAccountScreen';
import UserHomeScreen from '../components/User/UserHomeScreen';
import ProfessionalHomeScreen from '../components/Professional/ProfessionalHomeScreen';
import ProfileScreen from '../components/User/ProfileScreen';
import NotificationScreen from '../components/User/NotificationScreen';
import NetworkScreen from '../components/User/NetworkScreen';
import ExploreScreen from '../components/User/ExploreScreen';
import ChatScreen from '../components/Shared/ChatScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator para la navegación principal entre diferentes pantallas
const MainTabNavigator = ({ route }) => {
  const role = route.params?.role;

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Inicio" component={role === 'user' ? UserHomeScreen : ProfessionalHomeScreen} />
      <Tab.Screen name="Mi Red" component={NetworkScreen} />
      <Tab.Screen name="Explorar" component={ExploreScreen} />
      <Tab.Screen name="Notificaciones" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

// Stack Navigator para la navegación general de la aplicación
const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Stack.Screen name="Main" component={MainTabNavigator} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
