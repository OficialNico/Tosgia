// Ruta: src/components/Auth/ForgotPasswordScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handleSendCode = () => {
    // Lógica para enviar el código de verificación
    alert('Código enviado a ' + emailOrPhone);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Contraseña</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico o número de teléfono"
        value={emailOrPhone}
        onChangeText={setEmailOrPhone}
      />

      <TouchableOpacity style={styles.sendButton} onPress={handleSendCode}>
        <Text style={styles.sendButtonText}>Enviar Código</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Código de verificación"
        value={verificationCode}
        onChangeText={setVerificationCode}
      />

      <TouchableOpacity style={styles.sendButton} onPress={() => navigation.goBack()}>
        <Text style={styles.sendButtonText}>Recuperar Contraseña</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  sendButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
