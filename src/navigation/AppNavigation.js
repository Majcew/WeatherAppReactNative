import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Main from '../screens/Main';
import About from '../screens/About';
import UVIndex from '../screens/UVIndex';
import WeatherForecast from '../screens/WeaterForecast';
import Map from '../screens/Map';
import LoadingScreen from '../screens/LoadingScreen';
import NoConnection from '../screens/NoConnection';

const AppNavigator = createStackNavigator({
  Weather: Main,
  Map: Map,
  WeatherForecast: WeatherForecast,
  UVIndex: UVIndex,
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
        drawerLabel: 'Weather',
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
    UVIndex: {
      screen: UVIndex,
      navigationOptions: {
        drawerLabel: 'UV Index',
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

export default createAppContainer(
  createSwitchNavigator({
    Loading: LoadingScreen,
    NoConnection: NoConnection,
    Main: DrawerNav,
  }),
);
