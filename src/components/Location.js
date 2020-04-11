import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Geolocation from '@react-native-community/geolocation';

const Location = (props) => {
  const [latitude, setLatitude] = useState(props.latitude);
  const [longitude, setLongitude] = useState(props.longitude);

  const getLocationCoords = () => {
    Geolocation.getCurrentPosition((info) => {
      //tutaj nalezy dodać odpowiedni try-catch dla błedów typu "brak pozwoleń" oraz "nie odnaleziono koordynatów"
      setLatitude(info.coords.latitude);
      setLongitude(info.coords.longitude);
    });
  };
  return (
    <View>
      <TouchableOpacity
        style={(styles.icon, {backgroundColor: 'red'})}
        onPress={() => getLocationCoords()}>
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
