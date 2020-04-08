import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '../screens/Main';
import About from '../screens/About';

const defaultNavigationOptions = {
  defaultNavigationOptions: {
    headerShown: false,
  },
};

const AppNavigator = createStackNavigator(
  {
    Weather: Main,
    Info: About,
  },
  defaultNavigationOptions,
);

export default createAppContainer(AppNavigator);
