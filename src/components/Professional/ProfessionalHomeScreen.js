// Ruta: src/components/Professional/ProfessionalHomeScreen.js

import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

const ProfessionalHomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput style={styles.searchInput} placeholder="Buscar..." />
        <TouchableOpacity>
          <Text style={styles.menuIcon}>≡</Text>
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

      <View style={styles.formContainer}>
        <Text style={styles.label}>Descripción</Text>
        <TextInput style={styles.input} placeholder="Escribe una descripción" />

        <Text style={styles.label}>Servicios</Text>
        <TextInput style={styles.input} placeholder="Agregar Servicios" />

        <Text style={styles.label}>Horario Laboral</Text>
        <TextInput style={styles.input} placeholder="00:00 a 00:00" />
      </View>

      <View style={styles.adContainer}>
        <Text style={styles.adText}>Espacio Publicitario</Text>
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

export default ProfessionalHomeScreen;

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
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#333',
    padding: 8,
    marginRight: 10,
    borderRadius: 5,
  },
  menuIcon: {
    fontSize: 24,
    fontWeight: 'bold',
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
  formContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  adContainer: {
    backgroundColor: '#bada55',
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  adText: {
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
