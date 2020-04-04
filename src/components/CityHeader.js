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
  const [showInput, setShowInput] = useState(false);

  const onChangeText = (text) => {
    setCity(text);
  };

  const toggleInput = () => {
    // setShowInput(!showInput);
  };

  return (
    <View style={styles.headerContainer}>
      <TextInput
        style={styles.inputCity}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="City"
        placeholderTextColor="#fff"
        value={city}
        onChangeText={(text) => onChangeText(text)}
      />
      <TouchableOpacity style={styles.inputButton}>
        <Text style={styles.inputText}>Press me!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputCity: {
    width: 250,
    fontSize: 30,
    borderRadius: 25,
    backgroundColor: '#6f77c6',
    color: '#fff',
    paddingVertical: 10,
    marginVertical: 30,
    textAlign: 'center',
  },
  inputButton: {
    backgroundColor: '#010d79',
    borderRadius: 25,
    width: 250,
    paddingVertical: 10,
    marginVertical: 20,
  },
  inputText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default CityHeader;
