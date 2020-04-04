import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';

const CityHeader = (props) => {
  const [city, setCity] = useState(props.city);

  const onChangeText = (text) => {
    setCity(text);
  };

  return <View style={styles.headerContainer}></View>;
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 46,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
