import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const NoConnection = () => {
  return (
    <View style={styles.container}>
      <Text>Please turn on your WI-FI or Mobile Transfer</Text>
    </View>
  );
};

export default NoConnection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
