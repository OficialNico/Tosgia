import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [selectedRole, setSelectedRole] = useState(null); // Guarda si es 'user' o 'professional'
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Función para manejar la redirección según el rol
  const handleLogin = () => {
    if (selectedRole === "user" || selectedRole === "professional") {
      navigation.replace("Main"); // Reemplaza la pantalla actual con el navegador principal después del inicio de sesión exitoso
    } else {
      alert("Por favor, selecciona tu rol antes de iniciar sesión.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      
      {/* Botones para seleccionar el rol */}
      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[
            styles.roleButton,
            selectedRole === "user" && styles.selectedRoleButton
          ]}
          onPress={() => setSelectedRole("user")}
        >
          <Text style={styles.roleText}>Usuario</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.roleButton,
            selectedRole === "professional" && styles.selectedRoleButton
          ]}
          onPress={() => setSelectedRole("professional")}
        >
          <Text style={styles.roleText}>Profesional</Text>
        </TouchableOpacity>
      </View>

      {/* Campo de entrada para el nombre de usuario */}
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />
      
      {/* Campo de entrada para la contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Botón de inicio de sesión */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  roleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20
  },
  roleButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333",
    marginHorizontal: 5,
    backgroundColor: "#e0e0e0"
  },
  selectedRoleButton: {
    backgroundColor: "#333", // Color para el botón seleccionado
  },
  roleText: {
    color: "#fff",
    fontWeight: "bold"
  },
  input: {
    width: "100%",
    padding: 10,
    borderRadius: 5,
    borderColor: "#333",
    borderWidth: 1,
    marginBottom: 15,
    backgroundColor: "#fff"
  },
  loginButton: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center"
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});
