// ProfileScreen.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Handler para abrir el menú de configuración
  const handleSettingsPress = () => {
    setIsModalVisible(true);
  };

  // Handler para cerrar sesión
  const handleLogout = () => {
    setIsModalVisible(false);
    navigation.replace('Login'); // Navegar a la pantalla de inicio de sesión
  };

  return (
    <View style={styles.container}>
      {/* Header con el botón de Configuración */}
      <View style={styles.header}>
        <Text style={styles.title}>Perfil</Text>
        <TouchableOpacity onPress={handleSettingsPress} style={styles.settingsButton}>
          <Ionicons name="settings-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Contenido del Perfil */}
      <View style={styles.profileContent}>
        {/* Aquí va el contenido del perfil */}
      </View>

      {/* Modal para el menú de configuración */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Configuración de Perfil</Text>

            {/* Botones del menú */}
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Ayuda</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Configuración</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Modo Oscuro</Text>
            </TouchableOpacity>

            {/* Botón de Cerrar Sesión */}
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
            </TouchableOpacity>

            {/* Botón para cerrar el modal */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsModalVisible(false)}
            >
              <Ionicons name="close-circle-outline" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  settingsButton: {
    marginRight: 10,
  },
  profileContent: {
    marginTop: 20,
    // Agregar cualquier estilo para el contenido del perfil
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButton: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalButtonText: {
    fontSize: 16,
    color: '#000',
  },
  logoutButton: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 5,
    marginTop: 20,
  },
  logoutButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 20,
  },
});

export default ProfileScreen;
