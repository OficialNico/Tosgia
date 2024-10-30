import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DarkModeContext } from '../../context/DarkModeContext';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    // Desactivar el modo oscuro si está activo
    if (isDarkMode) {
      setIsDarkMode(false);
    }
    // Navegar al inicio de sesión
    navigation.replace('Login');
  };

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <Text style={[styles.title, isDarkMode && styles.titleDark]}>Perfil del Usuario</Text>

      {/* Botón para cerrar sesión */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos para la pantalla de perfil
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  titleDark: {
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
