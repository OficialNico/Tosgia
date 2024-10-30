import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import UserHomeScreen from '../components/User/UserHomeScreen';
import ProfessionalHomeScreen from '../components/Professional/ProfessionalHomeScreen';
import ProfileScreen from '../components/User/ProfileScreen';
import ChatScreen from '../components/Shared/ChatScreen';
import NetworkScreen from '../components/User/NetworkScreen';  // Nueva importación para la sección "Mi Red"
import ExploreScreen from '../components/User/ExploreScreen';  // Nueva importación para la sección "Explorar"
import NotificationScreen from '../components/User/NotificationScreen';  // Nueva importación para la sección "Notificación"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const UserHomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserHome"
        component={UserHomeScreen}
        options={{
          headerRight: () => (
            <Ionicons
              name="chatbubble-outline"
              size={24}
              color="#000"
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate('Chat')}
            />
          ),
        }}
      />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

const ProfessionalHomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfessionalHome"
        component={ProfessionalHomeScreen}
        options={{
          headerRight: () => (
            <Ionicons
              name="chatbubble-outline"
              size={24}
              color="#000"
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate('Chat')}
            />
          ),
        }}
      />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'UserHome') {
            iconName = 'home-outline';
          } else if (route.name === 'Network') {
            iconName = 'people-outline';
          } else if (route.name === 'Explore') {
            iconName = 'search-outline';
          } else if (route.name === 'Notification') {
            iconName = 'notifications-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="UserHome" component={UserHomeStack} options={{ title: 'Inicio' }} />
      <Tab.Screen name="Network" component={NetworkScreen} options={{ title: 'Mi Red' }} />
      <Tab.Screen name="Explore" component={ExploreScreen} options={{ title: 'Explorar' }} />
      <Tab.Screen name="Notification" component={NotificationScreen} options={{ title: 'Notificación' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
