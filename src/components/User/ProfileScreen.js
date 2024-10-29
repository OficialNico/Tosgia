import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Redirigir al usuario a la pantalla de inicio de sesión
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil del Usuario</Text>
      {/* Otros componentes del perfil */}

      {/* Botón para cerrar sesión */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  logoutButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#FF3B30", // Rojo para indicar la opción de cerrar sesión
    alignItems: "center",
    width: "100%",
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
