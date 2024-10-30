import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (selectedRole === "user" || selectedRole === "professional") {
      navigation.replace("Main");
    } else {
      alert("Por favor, selecciona tu rol antes de iniciar sesión.");
    }
  };

  const handleCreateAccount = () => {
    navigation.navigate("CreateAccount");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tosgia</Text>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[
            styles.roleButton,
            selectedRole === "user" && styles.selectedRoleButton,
          ]}
          onPress={() => setSelectedRole("user")}
        >
          <Text style={styles.roleText}>Usuario</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.roleButton,
            selectedRole === "professional" && styles.selectedRoleButton,
          ]}
          onPress={() => setSelectedRole("professional")}
        >
          <Text style={styles.roleText}>Profesional</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Usuario o Correo electrónico"
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

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
        <Text style={styles.createAccountButtonText}>Crear Cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};

// Definir estilos para LoginScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#1ff",
  },
  titulo: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 10,
  },
  roleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  roleButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333",
    marginHorizontal: 5,
    backgroundColor: "#333",
  },
  selectedRoleButton: {
    backgroundColor: "#e00",
  },
  roleText: {
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: 10,
    borderRadius: 5,
    borderColor: "#333",
    borderWidth: 1,
    marginBottom: 15,
    backgroundColor: "#fff",
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
});

export default LoginScreen;
