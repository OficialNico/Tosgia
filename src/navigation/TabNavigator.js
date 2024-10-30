// Ruta: src/navigation/TabNavigator.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import UserHomeScreen from '../components/User/UserHomeScreen';
import ProfessionalHomeScreen from '../components/Professional/ProfessionalHomeScreen';
import ProfileScreen from '../components/User/ProfileScreen';
import NotificationScreen from '../components/User/NotificationScreen';
import NetworkScreen from '../components/User/NetworkScreen';
import ExploreScreen from '../components/User/ExploreScreen';


const Tab = createBottomTabNavigator();

const TabNavigator = ({ route }) => {
  const { selectedRole } = route.params; // Obtiene el rol seleccionado desde los parámetros

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Network') {
            iconName = 'people-outline';
          } else if (route.name === 'Notifications') {
            iconName = 'notifications-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          } else if (route.name === 'Explore') {
            iconName = 'compass-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      {selectedRole === 'user' ? (
        <Tab.Screen name="Home" component={UserHomeScreen} />
      ) : (
        <Tab.Screen name="Home" component={ProfessionalHomeScreen} />
      )}
      <Tab.Screen name="Network" component={NetworkScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
