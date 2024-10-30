// src/components/User/NotificationScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserHomeScreen from './UserHomeScreen'; // Ajusta la ruta según la ubicación correcta

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notifications</Text>
      {/* Aquí puedes usar UserHomeScreen si es necesario */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
});

export default NotificationScreen;
