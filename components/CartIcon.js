import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function CartIcon() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => {}}>
        Cart ()
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: 'orange',
    height: 32,
    padding: 12,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
