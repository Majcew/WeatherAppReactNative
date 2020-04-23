import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const About = ({naviation}) => {
  const [dayforecast, setDayforecast] = useState([
    {name: 'burza', temp: '7', key: '1'},
    {name: 'slonce', temp: '8', key: '2'},
    {name: 'deszcz', temp: '9', key: '3'},
    {name: 'dupa', temp: '2', key: '4'},
    {name: 'cyce', temp: '4', key: '5'},
  ]);

  return (
    <View>
      <Text>dadada</Text>
    </View>
  );
};

export default About;
