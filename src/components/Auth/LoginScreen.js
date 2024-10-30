import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [selectedRole, setSelectedRole] = useState(null); // Guarda si es 'user' o 'professional'
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Función para manejar la redirección según el rol
  const handleLogin = () => {
    if (selectedRole === "user") {
      navigation.replace("HomeTabs", { screen: "UserHome" });
    } else if (selectedRole === "professional") {
      navigation.replace("HomeTabs", { screen: "ProfessionalHome" });
    } else {
      alert("Por favor, selecciona tu rol antes de iniciar sesión.");
    }
  };

  const handleCreateAccount = () => {
    navigation.navigate("CreateAccount"); // Navegar a la pantalla de crear cuenta
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword"); // Navegar a la pantalla de recuperación de contraseña
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tosgia</Text>
      <Text style={styles.subtitulo}>Inicio de sesión</Text>
      

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
        placeholder="Usuario o Correo electronico"
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

      {/* Botón de olvidó la contraseña */}
      <TouchableOpacity style={styles.forgotPasswordButton} onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>    

      {/* Botón para crear cuenta */}
      <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
        <Text style={styles.createAccountButtonText}>Crear Cuenta</Text>
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
    backgroundColor: "#1ff"
  },
  titulo: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 70
  },
  subtitulo: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 40
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
    backgroundColor: "#333"
  },
  selectedRoleButton: {
    backgroundColor: "#e00", // Color para el botón seleccionado
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
    alignItems: "center",
    marginBottom: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  createAccountButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#333",
    backgroundColor: "#fff",
  },
  createAccountButtonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPasswordButton: {
    marginTop: 15,
  },
  forgotPasswordText: {
    color: "#e91e63",
    fontSize: 12,
  },
});
