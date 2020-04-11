import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Dimensions, Text, Button} from 'react-native';

import CityHeader from '../components/CityHeader';
import Location from '../components/Location';
import * as API from '../utils/API';
import {ScrollView} from 'react-native-gesture-handler';

const Main = ({navigation}) => {
  const [weather, setWeather] = useState();

  const getWeatherCityNameHandler = async (cityName) => {
    try {
      const fetchedWeather = await API.getWeatherCityName(cityName);
      if (fetchedWeather) {
        setWeather(fetchedWeather);
      }
    } catch (err) {}
  };
  const getWeatherFromCoords = async (latitude, longitude) => {
    try {
      const fetchedWeather = await API.getWeatherFromCoords(
        latitude,
        longitude,
      );
      if (fetchedWeather) {
        console.log(fetchedWeather);
        setWeather(fetchedWeather);
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
            <Location
              latitude={0}
              longitude={0}
              locationSet={getWeatherFromCoords}
            />
            <Image
              style={styles.iconTopBar}
              source={require('../img/iconsearch.png')}
            />
          </View>
          <View style={styles.centerView}>
            <Text style={styles.dateTime}>21 May 2020</Text>
            <Image
              style={styles.weatherImg}
              source={require('../img/cloudy.png')}
            />
          </View>
          <View style={styles.weatherDescription}>
            <Text style={styles.weatherTemp}>18{'\u00B0'}</Text>
            <View>
              <Text style={styles.weatherDescriptionText}> Cloudy</Text>
              <Text style={styles.weatherDescriptionTextDetails}>
                {' '}
                Weather is cloudy blabla
              </Text>
            </View>
          </View>
          <View style={styles.horizontalLine} />
          <View style={styles.iconBox}>
            <View>
              <View style={styles.box1}>
                <Image
                  style={styles.iconInSquare}
                  source={require('../img/sunsetup.png')}
                />
              </View>
              <Text style={{textAlign: 'center'}}>7:25</Text>
            </View>
            <View>
              <View style={styles.box2}>
                <Image
                  style={styles.iconInSquare}
                  source={require('../img/sunsetdown.png')}
                />
              </View>
              <Text style={{textAlign: 'center'}}>19:30</Text>
            </View>
            <View>
              <View style={styles.box3}>
                <Image
                  style={styles.iconInSquare}
                  source={require('../img/hpa.png')}
                />
              </View>
              <Text style={{textAlign: 'center'}}>997 hPa</Text>
            </View>
            <View>
              <View style={styles.box4}>
                <Image
                  style={styles.iconInSquare}
                  source={require('../img/humidity.png')}
                />
              </View>
              <Text style={{textAlign: 'center'}}>50 %</Text>
            </View>
          </View>
          <View style={{marginHorizontal: 20, marginTop: 40}}>
            <Button
              title="Przechodzi do About"
              onPress={() => navigation.navigate('About')}></Button>
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
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  dateTime: {
    color: '#8d8d8d',
    marginBottom: 30,
  },
  weatherImg: {
    width: 155,
    height: 155,
    marginTop: 8,
    marginHorizontal: 5,
    backgroundColor: 'white',
  },
  weatherDescription: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  weatherTemp: {
    fontSize: 48,
    color: '#484848',
  },
  weatherDescriptionText: {
    marginTop: 0,
    fontSize: 24,
  },
  weatherDescriptionTextDetails: {
    marginTop: 0,
    fontSize: 16,
    color: '#8d8d8d',
  },
  horizontalLine: {
    borderBottomColor: '#8d8d8d',
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  iconInSquare: {
    width: 35,
    height: 35,
    marginLeft: 8,
    marginTop: 6,
  },
  iconBox: {
    marginTop: 25,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  box1: {
    width: 50,
    height: 50,
    backgroundColor: 'rgb(10, 132, 255)',
    borderRadius: 4,
  },
  box2: {
    width: 50,
    height: 50,
    backgroundColor: 'rgb(48, 209, 88)',
    borderRadius: 4,
  },
  box3: {
    width: 50,
    height: 50,
    backgroundColor: 'rgb(94, 92, 230)',
    borderRadius: 4,
  },
  box4: {
    width: 50,
    height: 50,
    backgroundColor: 'rgb(255, 159, 10)',
    borderRadius: 4,
  },
});

export default Main;
