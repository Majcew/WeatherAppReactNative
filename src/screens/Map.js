import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import html_map from '../components/WeatherMap';

const Map = ({navigation}) => {
  console.log(navigation);
  const latitude = 53;
  const longitude = 0;
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Image style={styles.drawer} source={require('../img/menu.png')} />
      </TouchableOpacity>
      <WebView source={{html: html_map(latitude, longitude, 13, 1)}} />
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
