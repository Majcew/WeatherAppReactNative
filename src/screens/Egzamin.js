import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import md5 from 'md5';

import CityHeader from '../components/CityHeader';
import Location from '../components/Location';
import * as API from '../utils/API';
import DetailsBar from '../components/DetailsBar';
import BasicWeather from '../components/BasicWeather';
import {CurrentCoords} from '../context/Coords';
import {ScrollView} from 'react-native-gesture-handler';

const Egzamin = ({navigation}) => {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [code, setCode] = useState();
  const getExamResult = async (text) => {
    try {
      const response = await fetch(
        'http://sroczynski.pl/iosexamrest/examresult/' + text,
      );
      const json = await response.json();
      setCode(json.result);
      console.log('code: ', code);
    } catch (err) {}
  };
  return (
    <View>
      <View style={styles.headerContainer}>
        <TextInput
          style={styles.inputCity}
          placeholder="Imię"
          placeholderTextColor="black"
          value={name ? name : ''}
          onChangeText={(text) => {
            setName(text);
          }}
        />
      </View>
      <View style={styles.headerContainer}>
        <TextInput
          style={styles.inputCity}
          placeholder="Nazwisko"
          placeholderTextColor="black"
          value={surname ? surname : ''}
          onChangeText={(text) => {
            setSurname(text);
          }}
        />
      </View>
      <Button
        title="Zatwierdź"
        onPress={() => {
          getExamResult(md5(surname + ' ' + name));
          console.log('md5: ', md5(surname + ' ' + name));
        }}
      />
      <View style={styles.textView}>
        <Text style={styles.textHeader}>Wynik:</Text>
        <Text>{code}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexTape: {
    flex: 1,
  },
  headerContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainView: {
    height: '100%',
    backgroundColor: 'white',
  },
  topBar: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 30,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#8d8d8d',
  },
  cityInput: {
    flex: 1,
    fontWeight: '700',
    backgroundColor: 'white',
    borderBottomWidth: 0.15,
  },
  aboutButton: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  iconTopBar: {
    width: 25,
    height: 25,
    marginTop: 8,
    marginHorizontal: 5,
  },
  horizontalLine: {
    borderBottomColor: '#8d8d8d',
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  drawer: {
    marginRight: 10,
    width: 30,
    height: 30,
  },
  textView: {
    marginVertical: 10,
    alignItems: 'center',
  },
  textHeader: {
    fontWeight: 'bold',
  },
});

export default Egzamin;

Egzamin.navigationOptions = ({navigation}) => ({
  headerRight: (
    <TouchableOpacity
      onPress={() => {
        navigation.openDrawer();
      }}>
      <Image style={styles.drawer} source={require('../img/menu.png')} />
    </TouchableOpacity>
  ),
});
