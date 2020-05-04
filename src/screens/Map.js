import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const Map = ({navigation}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Image style={styles.drawer} source={require('../img/menu.png')} />
      </TouchableOpacity>
      <Text>Mapka kurła</Text>
    </>
  );
};

const styles = StyleSheet.create({
  drawer: {
    width: 40,
    height: 40,
  },
});

export default Map;
