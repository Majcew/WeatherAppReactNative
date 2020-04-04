import React, {useEffect, useState} from 'react';
import {Text, StyleSheet} from 'react-native';

import CityHeader from '../components/CityHeader';

const Main = (props) => {
  return <Text style={styles.container}>Siema</Text>;
};

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#fff',
    backgroundColor: '#0032b4',
  },
});

export default Main;
