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
    return () => {
      props.locationSet(state.latitude, state.longitude);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const getLocationCoords = async () => {
    return new Promise(function (resolve, reject) {
      Geolocation.getCurrentPosition(resolve, reject);
    });
  };

  // TODO: POZWOLENIAAAAAAAAAAAAAAAAAAAA

  const getLocation = async () => {
    let data = await getLocationCoords()
      .then((info) => {
        setState({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });
      })
      .catch((error) => {
        console.log(error); //ani się nie waz to usunąć bo Cię skrzywdzę
      });
  };
  return (
    <View>
      <TouchableOpacity
        style={(styles.icon, {backgroundColor: 'red'})}
        onPress={getLocation}>
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
