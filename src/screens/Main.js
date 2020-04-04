import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import CityHeader from '../components/CityHeader';

const Main = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#010d79" />
      <CityHeader city="" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0032b4',
  },
});

export default Main;
