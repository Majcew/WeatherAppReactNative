import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0032b4',
  },
});

export default About;
