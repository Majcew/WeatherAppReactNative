import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View, Platform} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Geolocation from '@react-native-community/geolocation';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

const Location = (props) => {
  const [permresult, setPermresult] = useState(RESULTS.DENIED);

  const permission = Platform.select({
    // sprawdza na jakiej platformie działa aplikacja
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  });

  const getLocationCoords = () => {
    if (permresult === RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(
        (info) => {
          props.locationSet(info.coords.latitude, info.coords.longitude);
        },
        (error) => console.log(error),
        {enableHighAccuracy: true},
      );
    } else {
      request(permission);
    }
  };

  useEffect(() => {
    // Podczas wywołania sprawdza czy aplikacja posiada potrzebujące pozwolenia
    check(permission).then((status) => {
      setPermresult(status);
    });
  });

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
