import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View, Platform, ToastAndroid} from 'react-native';
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

  const errorToast = (message) =>
    Platform.select({
      android: ToastAndroid.showWithGravity(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      ),
      ios: {},
    });

  const getLocationCoords = () => {
    if (permresult === RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(
        (info) => {
          props.locationSet(info.coords.latitude, info.coords.longitude);
        },
        (error) => errorToast(error),
        {enableHighAccuracy: false},
      );
    } else {
      request(permission).then((status) => {
        setPermresult(status);
      });
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
      <TouchableOpacity style={styles.iconposition} onPress={getLocationCoords}>
        <Image style={styles.icon} source={require('../img/icongps.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconposition: {
    marginTop: 12,
    marginHorizontal: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Location;
