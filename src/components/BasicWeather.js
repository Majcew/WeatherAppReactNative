import React, {useState, useEffect} from 'react';
import moment from 'moment';

import {View, Text, StyleSheet, Image} from 'react-native';

const BasicWeather = (props) => {
  const [updateTime, setUpdateTime] = useState(props.updateTime);
  const [temperature, setTemperature] = useState(props.temperature);
  const [basicWeatherDescription, setBasicWeatherDescription] = useState(
    props.basicWeatherDescription,
  );
  const [advancedWeatherDescription, setAdvancedWeatherDescription] = useState(
    props.advancedWeatherDescription,
  );

  useEffect(() => {
    setUpdateTime(moment(props.updateTime * 1000 + 2 * 3600 * 1000).format('DD MMM HH:mm'));
    setTemperature(Math.round(props.temperature) + "\u00B0");
    setBasicWeatherDescription(props.basicWeatherDescription);
    setAdvancedWeatherDescription(props.advancedWeatherDescription);
  }, [
    props.updateTime,
    props.temperature,
    props.basicWeatherDescription,
    props.advancedWeatherDescription,
  ]);

  return (
    <View>
      <View style={styles.centerView}>
        <Text style={styles.dateTime}>{updateTime}</Text>
        <Image
          style={styles.weatherImg}
          source={require('../img/cloudy.png')}
        />
      </View>
      <View style={styles.weatherDescription}>
        <Text style={styles.weatherTemp}>{temperature}</Text>
        <View>
          <Text style={styles.weatherDescriptionText}>
            {basicWeatherDescription}
          </Text>
          <Text style={styles.weatherDescriptionTextDetails}>
            {advancedWeatherDescription}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    paddingLeft:8,
  },
  weatherDescriptionTextDetails: {
    marginTop: 0,
    fontSize: 16,
    color: '#8d8d8d',
    paddingLeft:8,
  },
});

export default BasicWeather;
