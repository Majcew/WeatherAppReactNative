import React, {useState, useContext} from 'react';

import AppNavigation from './src/navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {CurrentCoords} from './src/context/Coords';
import {ThemeContext} from 'react-native-elements';
import {lightTheme, darkTheme} from './src/style/themes';
import {StatusBar, useColorScheme} from 'react-native';

export default function App() {
  const [currentCoords, setCurrentCoords] = useState({lat: 0, lon: 0});
  const colorScheme = useColorScheme();
  return (
    <CurrentCoords.Provider value={[currentCoords, setCurrentCoords]}>
      <NavigationContainer
        theme={colorScheme === 'light' ? lightTheme : darkTheme}>
        <AppNavigation />
      </NavigationContainer>
    </CurrentCoords.Provider>
  );
}
