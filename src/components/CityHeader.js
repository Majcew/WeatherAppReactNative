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
        onChangeText={(text) => onChangeText(text)}
        value={city}
      />
      <TouchableOpacity>
        <Text>{city}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputCity: {
    fontSize: 30,
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    color: '#fff',
  },
});

export default CityHeader;
