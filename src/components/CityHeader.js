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

  const toggleInput = () => {
    props.getWeatherCityName(city);
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
        onChangeText={(text) => onChangeText(text)}
        onSubmitEditing={toggleInput}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor:'red'
  },
  inputCity: {
    fontSize: 18,
    color: 'black',
    backgroundColor: 'white',
    borderBottomWidth: 0.15,
  },
  
});

export default CityHeader;
