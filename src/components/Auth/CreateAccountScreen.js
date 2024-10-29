import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CreateAccountScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [commune, setCommune] = useState('');
  const [offerService, setOfferService] = useState(false);
  const [serviceType, setServiceType] = useState('');
  const [serviceLocation, setServiceLocation] = useState('');

  const handleRegister = () => {
    if (
      !name ||
      !surname ||
      !email ||
      !confirmEmail ||
      !password ||
      !confirmPassword ||
      !birthDay ||
      !birthMonth ||
      !birthYear ||
      !gender ||
      !country ||
      !region ||
      !commune ||
      (offerService && (!serviceType || !serviceLocation))
    ) {
      Alert.alert('Error', 'Por favor, completa todos los campos para continuar.');
      return;
    }

    Alert.alert('Registro Exitoso', 'Tu cuenta ha sido creada con éxito.');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Crear Cuenta Nueva</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={surname}
        onChangeText={setSurname}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar Correo Electrónico"
        value={confirmEmail}
        onChangeText={setConfirmEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar Contraseña"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <View style={styles.birthContainer}>
        <TextInput
          style={[styles.input, styles.birthInput]}
          placeholder="DIA"
          value={birthDay}
          onChangeText={setBirthDay}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.birthInput]}
          placeholder="MES"
          value={birthMonth}
          onChangeText={setBirthMonth}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.birthInput]}
          placeholder="AÑO"
          value={birthYear}
          onChangeText={setBirthYear}
          keyboardType="numeric"
        />
      </View>

      <Picker
        selectedValue={gender}
        style={styles.input}
        onValueChange={(itemValue) => setGender(itemValue)}
      >
        <Picker.Item label="Seleccionar Género" value="" />
        <Picker.Item label="Femenino" value="femenino" />
        <Picker.Item label="Masculino" value="masculino" />
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="País"
        value={country}
        onChangeText={setCountry}
      />

      <TextInput
        style={styles.input}
        placeholder="Región"
        value={region}
        onChangeText={setRegion}
      />

      <TextInput
        style={styles.input}
        placeholder="Comuna"
        value={commune}
        onChangeText={setCommune}
      />

      <View style={styles.offerServiceContainer}>
        <Text style={styles.offerServiceText}>¿Quieres Ofrecer Tus Servicios?</Text>
        <TouchableOpacity
          style={[
            styles.offerServiceButton,
            offerService && styles.selectedOfferServiceButton,
          ]}
          onPress={() => setOfferService(true)}
        >
          <Text style={styles.offerServiceOption}>Sí</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.offerServiceButton,
            !offerService && styles.selectedOfferServiceButton,
          ]}
          onPress={() => setOfferService(false)}
        >
          <Text style={styles.offerServiceOption}>No</Text>
        </TouchableOpacity>
      </View>

      {offerService && (
        <>
          <Picker
            selectedValue={serviceType}
            style={styles.input}
            onValueChange={(itemValue) => setServiceType(itemValue)}
          >
            <Picker.Item label="Seleccionar Tipo de Servicio" value="" />
            <Picker.Item label="Masaje" value="masaje" />
            <Picker.Item label="Barbería" value="barberia" />
            <Picker.Item label="Estética" value="estetica" />
          </Picker>

          <Picker
            selectedValue={serviceLocation}
            style={styles.input}
            onValueChange={(itemValue) => setServiceLocation(itemValue)}
          >
            <Picker.Item label="¿Dónde realizarás tus servicios?" value="" />
            <Picker.Item label="A Domicilio" value="domicilio" />
            <Picker.Item label="En Local" value="local" />
            <Picker.Item label="Ambos" value="ambos" />
          </Picker>
        </>
      )}

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Registrarse</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreateAccountScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#1ff',
    paddingBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    borderColor: '#333',
    borderWidth: 1,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  birthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  birthInput: {
    width: '30%',
  },
  offerServiceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  offerServiceText: {
    marginRight: 10,
    fontSize: 12,
  },
  offerServiceButton: {
    marginHorizontal: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  selectedOfferServiceButton: {
    backgroundColor: '#e00',
  },
  offerServiceOption: {
    color: '#333',
  },
  registerButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
