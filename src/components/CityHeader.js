import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const CityHeader = (props) => {
  const [city, setCity] = useState(props.city);
  const onChangeText = (text) => {
    setCity(text);
  };

  const toggleInput = () => {
    props.getWeatherCityName(city);
  };

  const hasNumber = (String) => {
    return /\d/.test(String);
  };
  const hasSpecialCharacter = (string) => {
    return /[`~?^!*&$%#@,.<>;':\\"\/\[\]\|{}()=_+-]/.test(string);
  };

  useEffect(() => {
    setCity(props.city);
  }, [props.city]);

  return (
    <View style={styles.headerContainer}>
      <TextInput
        style={styles.inputCity}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="City"
        placeholderTextColor="black"
        value={city}
        onChangeText={(text) => {
          if (hasNumber(text) || hasSpecialCharacter(text)) {
            return;
          }
          onChangeText(text);
        }}
        onSubmitEditing={toggleInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  inputCity: {
    fontSize: 24,
    color: 'black',
    backgroundColor: 'white',
    borderBottomWidth: 0.15,
  },
});

export default CityHeader;
