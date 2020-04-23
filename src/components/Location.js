import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Geolocation from '@react-native-community/geolocation';

const Location = (props) => {
  const getLocationCoords = () => {
    Geolocation.getCurrentPosition(
      (info) => {
        props.locationSet(info.coords.latitude, info.coords.longitude);
      },
      (error) => console.log(error),
      {enableHighAccuracy: true},
    );
  };

  return (
    <View>
      <TouchableOpacity
        style={(styles.icon, {backgroundColor: 'red'})}
        onPress={getLocationCoords}>
        <Image style={styles.icon} source={require('../img/icongps.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    marginTop: 8,
    marginHorizontal: 5,
  },
});

export default Location;
