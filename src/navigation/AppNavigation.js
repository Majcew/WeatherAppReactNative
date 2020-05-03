import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Main from '../screens/Main';
import About from '../screens/About';

const AppNavigator = createDrawerNavigator({
  Weather: {
    screen: Main,
    navigationOptions: {
      drawerLabel: 'Wheater',
    },
  },
  About: {
    screen: About,
    navigationOptions: {
      drawerLabel: 'About',
    },
  },
});

export default createAppContainer(AppNavigator);
