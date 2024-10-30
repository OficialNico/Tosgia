import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ForgotPasswordScreen = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handleSend = () => {
    // Lógica para enviar el código de verificación
    alert('Código enviado. Por favor verifica tu correo o teléfono.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico o número telefónico"
        value={emailOrPhone}
        onChangeText={setEmailOrPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Código de verificación"
        value={verificationCode}
        onChangeText={setVerificationCode}
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendButtonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    borderColor: '#333',
    borderWidth: 1,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  sendButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
