import React, {Component, useState, useEffect, forceUpdate} from 'react';
import {View, Text, FlatList, StyleSheet, Image, Button} from 'react-native';
import * as API from '../utils/API';
import moment from 'moment';
import WeatherImage from '../components/WeatherImage';
import {useTheme} from '@react-navigation/native';

const WeatherForecast = ({navigation}) => {
  const [forecast, setForecast] = useState();
  const [ready, setready] = useState(false);
  const {colors} = useTheme();

  const getAllInOne = async (latitude, longitude) => {
    try {
      const fetchedWeather = await API.getAllInOne(latitude, longitude);
      if (fetchedWeather) {
        setForecast(fetchedWeather.daily);
      }
    } catch (err) {}
  };

  useEffect(() => {
    getAllInOne(navigation.getParam('lat', 50), navigation.getParam('lon', 10));
    setTimeout(handleLoading, 1000);
  }, []);

  const handleLoading = () => {
    setready(true);
  };

  if (!ready) {
    return (
      <View>
        <Text>Laduje się (moze byc jakis obrazek ladowania)</Text>
      </View>
    );
  } else
    return (
      <View style={{backgroundColor: colors.background}}>
        <FlatList
          data={forecast}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.listRow_dark}>
              <View style={styles.dateTime}>
                <Text style={styles.day_dark}>
                  {moment(item.dt * 1000 + 2 * 3600 * 1000).format('ddd')}
                </Text>
                <Text style={styles.date_dark}>
                  {moment(item.dt * 1000 + 2 * 3600 * 1000).format(
                    'DD.MM.YYYY',
                  )}
                </Text>
              </View>
              <Image
                style={styles.weatherImage}
                source={WeatherImage(item.weather[0].main)}
                d
              />
              <Text style={styles.weaterDescription_dark}>
                {item.weather[0].main}
              </Text>
              <View style={styles.temperatures}>
                <Text style={styles.temperatureDay_dark}>
                  {Math.round(item.temp.day) + '\u00B0'}
                </Text>
                <View style={styles.horizontalLine} />
                <Text style={styles.temperatureNight_dark}>
                  {Math.round(item.temp.night)}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  centerView: {
    height: 20,
    borderRadius: 4,
  },
  listRow: {
    backgroundColor: 'black',
    height: 80,
    borderRadius: 4,
    margin: 5,
    elevation: 2,
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 8,
  },
  listRow_dark: {
    backgroundColor: 'black',
    height: 80,
    borderRadius: 4,
    margin: 5,
    elevation: 2,
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 8,
  },
  dateTime: {
    flexDirection: 'column',
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  day: {
    textAlign: 'center',
    fontSize: 20,
    color: '#484848',
  },
  day_dark: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  date: {
    color: '#484848',
  },
  date_dark: {
    color: 'white',
  },
  weatherImage: {
    width: 68,
    height: 68,
    margin: 5,
    marginHorizontal: 10,
    backgroundColor: 'white',
  },
  weaterDescription: {
    alignSelf: 'center',
    marginHorizontal: 10,
    color: '#484848',
    fontSize: 20,
    flex: 1,
  },
  weaterDescription_dark: {
    alignSelf: 'center',
    marginHorizontal: 10,
    color: 'white',
    fontSize: 20,
    flex: 1,
  },
  temperatures: {
    flexDirection: 'column',
    alignSelf: 'center',
    marginHorizontal: 10,
    flex: 0.3,
  },
  temperatureDay: {
    fontSize: 26,
    textAlign: 'center',
  },
  temperatureDay_dark: {
    fontSize: 26,
    textAlign: 'center',
    color: 'white',
  },
  temperatureNight: {
    fontSize: 18,
    color: '#484848',
    textAlign: 'center',
  },
  temperatureNight_dark: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  horizontalLine: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
});

export default WeatherForecast;
