import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importación de Ionicons
import HomeScreen from "../components/User/UserHomeScreen";
import NetworkScreen from "../components/User/NetworkScreen"; // Pantalla ficticia para "Mi Red"
import ExploreScreen from "../components/User/ExploreScreen"; // Pantalla ficticia para "Explorar"
import NotificationScreen from "../components/User/NotificationScreen"; // Pantalla ficticia para "Notificaciones"
import ProfileScreen from "../components/User/ProfileScreen"; // Pantalla de perfil

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Inicio") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Mi Red") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "Explorar") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Notificaciones") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (route.name === "Perfil") {
            iconName = focused ? "person" : "person-outline";
          }

          // Devuelve el ícono usando Ionicons
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007AFF", // Color cuando el botón está activo
        tabBarInactiveTintColor: "#8e8e93", // Color cuando el botón está inactivo
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
          backgroundColor: "#f8f8f8",
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Mi Red" component={NetworkScreen} />
      <Tab.Screen name="Explorar" component={ExploreScreen} />
      <Tab.Screen name="Notificaciones" component={NotificationScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
