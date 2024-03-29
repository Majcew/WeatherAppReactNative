import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import * as API from '../utils/API';
import moment from 'moment';
import WeatherImage from '../components/WeatherImage';
import {CurrentCoords} from '../context/Coords';

const WeatherForecast = ({navigation}) => {
  const [forecast, setForecast] = useState();
  const [ready, setready] = useState(false);
  const [currentCoords, setCurrentCoords] = useContext(CurrentCoords);
  const latitude = currentCoords.lat;
  const longitude = currentCoords.lon;

  const getAllInOne = async (latitude, longitude) => {
    try {
      const fetchedWeather = await API.getAllInOne(latitude, longitude);
      if (fetchedWeather) {
        setForecast(fetchedWeather.daily);
      }
    } catch (err) {}
  };

  useEffect(() => {
    //getAllInOne(navigation.getParam('lat', 50), navigation.getParam('lon', 10));
    getAllInOne(latitude, longitude);
    setTimeout(handleLoading, 1000);
  }, []);

  const handleLoading = () => {
    setready(true);
  };

  if (!ready) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else
    return (
      <View>
        <FlatList
          data={forecast}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.listRow}>
              <View style={styles.dateTime}>
                <Text style={styles.day}>
                  {moment(item.dt * 1000 + 2 * 3600 * 1000).format('ddd')}
                </Text>
                <Text style={styles.date}>
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
              <Text style={styles.weaterDescription}>
                {item.weather[0].main}
              </Text>
              <View style={styles.temperatures}>
                <Text style={styles.temperatureDay}>
                  {Math.round(item.temp.day) + '\u00B0'}
                </Text>
                <View style={styles.horizontalLine} />
                <Text style={styles.temperatureNight}>
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
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  centerView: {
    height: 20,
    borderRadius: 4,
  },
  listRow: {
    backgroundColor: 'white',
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
  date: {
    color: '#484848',
  },
  weatherImage: {
    width: 68,
    height: 68,
    margin: 5,
    marginHorizontal: 10,
  },
  weaterDescription: {
    alignSelf: 'center',
    marginHorizontal: 10,
    color: '#484848',
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
  temperatureNight: {
    fontSize: 18,
    color: '#484848',
    textAlign: 'center',
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  drawer: {
    marginRight: 10,
    width: 30,
    height: 30,
  },
});

WeatherForecast.navigationOptions = ({navigation}) => ({
  headerRight: (
    <TouchableOpacity
      onPress={() => {
        navigation.openDrawer();
      }}>
      <Image style={styles.drawer} source={require('../img/menu.png')} />
    </TouchableOpacity>
  ),
});

export default WeatherForecast;
