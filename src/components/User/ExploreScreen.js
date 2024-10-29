// NetworkScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NetworkScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Mi Red</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NetworkScreen;
