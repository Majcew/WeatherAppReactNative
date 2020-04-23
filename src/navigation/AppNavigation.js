import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '../screens/Main';
import About from '../screens/About';
import WeatherForecast from '../screens/WeaterForecast'

const defaultNavigationOptions = {
  defaultNavigationOptions: {
    headerShown: null,
  },
};

const AppNavigator = createStackNavigator(
  {
    Weather: Main,
    About: About,
    WeatherForecast: WeatherForecast,
  },
  defaultNavigationOptions,
);

export default createAppContainer(AppNavigator);
