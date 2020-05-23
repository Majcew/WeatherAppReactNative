import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import CityHeader from '../components/CityHeader';
import Location from '../components/Location';
import * as API from '../utils/API';
import DetailsBar from '../components/DetailsBar';
import BasicWeather from '../components/BasicWeather';
import {CurrentCoords} from '../context/Coords';
import {ScrollView} from 'react-native-gesture-handler';

const Main = ({navigation}) => {
  const [weather, setWeather] = useState();
  const [latitude, setlatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [currentCoords, setCurrentCoords] = useContext(CurrentCoords);

  const getWeatherCityNameHandler = async (cityName) => {
    try {
      const fetchedWeather = await API.getWeatherCityName(cityName);
      if (fetchedWeather && fetchedWeather.cod === 200) {
        setWeather(fetchedWeather);
        setlatitude(fetchedWeather?.coord?.lat);
        setLongitude(fetchedWeather?.coord?.lon);
        setCurrentCoords(fetchedWeather?.coord);
      } else {
        Alert.alert('The city does not exist');
      }
    } catch (err) {}
  };
  const getWeatherFromCoords = async (latitude, longitude) => {
    try {
      const fetchedWeather = await API.getWeatherFromCoords(
        latitude,
        longitude,
      );
      //const fetchedWeather = await API.getAllInOne(latitude, longitude);
      if (fetchedWeather) {
        console.log(fetchedWeather);
        setWeather(fetchedWeather);
        setCurrentCoords({lat: latitude, lon: longitude});
      }
    } catch (err) {}
  };

  return (
    <View style={styles.flexTape}>
      <ScrollView>
        <View style={styles.mainView}>
          <View style={styles.topBar}>
            {console.log(weather?.name)}
            <CityHeader
              city={weather?.name}
              getWeatherCityName={getWeatherCityNameHandler}
            />
            <Location
              style={styles.iconTopBar}
              locationSet={getWeatherFromCoords}
            />
          </View>
          <BasicWeather
            updateTime={weather?.dt}
            temperature={weather?.main?.temp}
            basicWeatherDescription={weather?.weather[0]?.main}
            advancedWeatherDescription={weather?.weather[0]?.description}
          />

          <View style={styles.horizontalLine} />
          <DetailsBar
            sunriseTime={weather?.sys?.sunrise}
            sunsetTime={weather?.sys?.sunset}
            airPressure={weather?.main?.pressure}
            humidity={weather?.main?.humidity}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  flexTape: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#0032b4',
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
});

export default Main;

Main.navigationOptions = ({navigation}) => ({
  headerRight: (
    <TouchableOpacity
      onPress={() => {
        navigation.openDrawer();
      }}>
      <Image style={styles.drawer} source={require('../img/menu.png')} />
    </TouchableOpacity>
  ),
});
