import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Dimensions, Text, Button} from 'react-native';

import CityHeader from '../components/CityHeader';
import * as API from '../utils/API';
import {ScrollView} from 'react-native-gesture-handler';
import DetailsBar from '../components/DetailsBar';
import BasicWeather from '../components/BasicWeather';

const Main = ({navigation}) => {
  const [weather, setWeather] = useState();
  const [latitude, setlatitude] = useState();
  const [longitude, setLongitude] = useState();

  const getWeatherCityNameHandler = async (cityName) => {
    try {
      const fetchedWeather = await API.getWeatherCityName(cityName);
      if (fetchedWeather) {
        setWeather(fetchedWeather);
        setlatitude(weather?.coord?.lat);
        setLongitude(weather?.coord?.lon);
      }
    } catch (err) {}
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={styles.mainView}>
          <View style={styles.topBar}>
            <CityHeader
              city={weather?.name}
              getWeatherCityName={getWeatherCityNameHandler}
            />
            <Image
              style={styles.iconTopBar}
              source={require('../img/icongps.png')}
            />
            <Image
              style={styles.iconTopBar}
              source={require('../img/iconsearch.png')}
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
          <View style={{marginHorizontal: 20, marginTop: 40}}>
            <Button
              title="Przechodzi do Pokoju twojej starej"
              onPress={() =>
                navigation.navigate('WeatherForecast', {
                  lat: weather?.coord?.lat,
                  lon: weather?.coord?.lon,
                })
              }></Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0032b4',
  },
  mainView: {
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
  },
  topBar: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
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
});

export default Main;
