import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Geolocation from '@react-native-community/geolocation';

const Location = (props) => {
  const [state, setState] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    // przy przypinaniu komponentu wywołuje się raz
    getLocationCoords();
  }, []);

  const getLocationCoords = () => {
    Geolocation.getCurrentPosition(
      (info) => {
        //tutaj nalezy dodać odpowiedni try-catch dla błedów typu "brak pozwoleń" oraz "nie odnaleziono koordynatów"
        setState({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });
      },
      (error) => console.log(error),
      {enableHighAccuracy: true, timeout: 5000},
    );
  };
  return (
    <View>
      <TouchableOpacity
        style={(styles.icon, {backgroundColor: 'red'})}
        onPress={() => props.locationSet(state.latitude, state.longitude)}>
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
