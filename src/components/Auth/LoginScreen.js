import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (selectedRole === "user" || selectedRole === "professional") {
      navigation.replace("Main"); // Navegar a la navegación principal tras el login
    } else {
      alert("Por favor, selecciona tu rol antes de iniciar sesión.");
    }
  };

  const handleCreateAccount = () => {
    navigation.navigate("CreateAccount"); // Navegar a la pantalla de crear cuenta
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tosgia</Text>
      <Text style={styles.title}>Iniciar Sesión</Text>
      
      {/* Seleccionar rol */}
      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[styles.roleButton, selectedRole === "user" && styles.selectedRoleButton]}
          onPress={() => setSelectedRole("user")}
        >
          <Text style={styles.roleText}>Usuario</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleButton, selectedRole === "professional" && styles.selectedRoleButton]}
          onPress={() => setSelectedRole("professional")}
        >
          <Text style={styles.roleText}>Profesional</Text>
        </TouchableOpacity>
      </View>

      {/* Entrada de usuario y contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Usuario o Correo electronico"
        value={username}
        onChangeText={setUsername}
      />
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

      {/* Botón para crear cuenta */}
      <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
        <Text style={styles.createAccountButtonText}>Crear Cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

// Aquí estarían los estilos (los mismos que ya tenías antes)
