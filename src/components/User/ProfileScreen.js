import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DarkModeContext } from '../../context/DarkModeContext';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { isDarkMode, toggleDarkMode, resetDarkMode } = useContext(DarkModeContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleLogout = () => {
    resetDarkMode();
    navigation.replace('Login');
  };

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <View style={styles.header}>
        <Text style={[styles.text, isDarkMode && styles.textDark]}>Perfil del Usuario</Text>
        <TouchableOpacity onPress={() => setIsMenuVisible(true)}>
          <Ionicons name="menu-outline" size={28} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>

      {/* Menú Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isMenuVisible}
        onRequestClose={() => setIsMenuVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.menuContainer, isDarkMode && styles.menuContainerDark]}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsMenuVisible(false)}
            >
              <Ionicons name="close-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
            </TouchableOpacity>
            <Text style={[styles.menuItem, isDarkMode && styles.menuItemDark]}>Ayuda</Text>
            <Text style={[styles.menuItem, isDarkMode && styles.menuItemDark]}>Configuración</Text>
            <View style={styles.menuItemSwitch}>
              <Text style={[styles.menuItem, isDarkMode && styles.menuItemDark]}>Modo Oscuro</Text>
              <Switch
                value={isDarkMode}
                onValueChange={toggleDarkMode}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
              />
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  containerDark: {
    backgroundColor: '#333',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 530,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  textDark: {
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  menuContainerDark: {
    backgroundColor: '#444',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  menuItem: {
    fontSize: 18,
    paddingVertical: 10,
    color: '#000',
  },
  menuItemDark: {
    color: '#fff',
  },
  menuItemSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#ff3333',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
