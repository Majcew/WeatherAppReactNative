import React, {Component} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#FFFFFF" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0032b4',
  },
});
