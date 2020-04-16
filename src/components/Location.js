import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Geolocation from '@react-native-community/geolocation';

const Location = (props) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [step, setStep] = useState(false);

  useEffect(() => {
    return () => {
      props.locationSet(latitude, longitude);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const getLocationCoords = async () => {
    await Geolocation.getCurrentPosition(
      (info) => {
        //tutaj nalezy dodać odpowiedni try-catch dla błedów typu "brak pozwoleń" oraz "nie odnaleziono koordynatów"
        setLatitude(info.coords.latitude);
        setLongitude(info.coords.longitude);
      },
      (error) => console.log(error),
      {enableHighAccuracy: true, timeout: 5000},
    );
    setStep(step ? false : true);
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
