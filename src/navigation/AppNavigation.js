import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Main from '../screens/Main';
import About from '../screens/About';
import WeatherForecast from '../screens/WeaterForecast';
import Map from '../screens/Map';

const AppNavigator = createStackNavigator({
  Weather: Main,
  Map: Map,
  WeatherForecast: WeatherForecast,
  About: About,
});

const DrawerNav = createDrawerNavigator(
  {
    AppNavigator: {
      screen: AppNavigator,
    },
    Weather: {
      screen: Main,
      navigationOptions: {
        drawerLabel: 'Wheater',
      },
    },

    Map: {
      screen: Map,
      navigationOptions: {
        drawerLabel: 'Map',
      },
    },
    WeatherForecast: {
      screen: WeatherForecast,
      navigationOptions: {
        drawerLabel: 'WeatherForecast',
      },
    },
    About: {
      screen: About,
      navigationOptions: {
        drawerLabel: 'About',
      },
    },
  },
  {
    drawerPosition: 'right',
  },
);

export default createAppContainer(DrawerNav);
