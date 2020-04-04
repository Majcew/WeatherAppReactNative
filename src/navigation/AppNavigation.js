import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '../screens/Main';

const defaultNavigationOptions = {
  defaultNavigationOptions: {
    headerShown: false,
  },
};

const AppNavigator = createStackNavigator(
  {
    Weather: Main,
  },
  defaultNavigationOptions,
);

export default createAppContainer(AppNavigator);
