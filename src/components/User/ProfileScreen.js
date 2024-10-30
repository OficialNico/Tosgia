import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DarkModeContext } from '../../context/DarkModeContext';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { isDarkMode, resetDarkMode } = useContext(DarkModeContext);

  const handleLogout = () => {
    resetDarkMode(); // Restablece el modo oscuro
    navigation.replace('Login'); // Navegar a la pantalla de inicio de sesión
  };

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <Text style={[styles.text, isDarkMode && styles.textDark]}>Perfil del Usuario</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
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
  containerDark: {
    backgroundColor: '#333',
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
  textDark: {
    color: '#fff',
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#ff3333',
    padding: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
