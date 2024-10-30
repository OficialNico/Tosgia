import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DarkModeContext } from '../../context/DarkModeContext'; // Ajusta la ruta según la ubicación de DarkModeContext.js

const UserHomeScreen = ({ navigation }) => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <View style={styles.header}>
        <Text style={[styles.title, isDarkMode && styles.titleDark]}>Inicio</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Ionicons name="chatbubble-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>
      <Text style={[styles.text, isDarkMode && styles.textDark]}>
        Bienvenido al Home del Usuario
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  containerDark: {
    backgroundColor: '#333',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  titleDark: {
    color: '#fff',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: '#000',
  },
  textDark: {
    color: '#fff',
  },
});

export default UserHomeScreen;
