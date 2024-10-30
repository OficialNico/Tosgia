// Ruta: src/components/User/UserHomeScreen.js

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const UserHomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Inicio</Text>
        <TouchableOpacity>
          <Text style={styles.chatIcon}>💬</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <Image source={{ uri: 'placeholder_image_url' }} style={styles.profileImage} />
        <Text style={styles.profileName}>NOMBRE APELLIDO</Text>
        <Text style={styles.about}>Sobre mi</Text>
      </View>

      <View style={styles.galleryContainer}>
        <Text style={styles.galleryText}>Galería</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>INICIO</Text>
        <Text style={styles.footerText}>MI RED</Text>
        <Text style={styles.footerText}>EXPLORAR</Text>
        <Text style={styles.footerText}>NOTIFICACIÓN</Text>
        <Text style={styles.footerText}>PERFIL</Text>
      </View>
    </View>
  );
};

export default UserHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1ff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  chatIcon: {
    fontSize: 24,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ddd',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  about: {
    fontSize: 14,
  },
  galleryContainer: {
    backgroundColor: '#fff',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  galleryText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
