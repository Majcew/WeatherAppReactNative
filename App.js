import React, {useState, useContext} from 'react';

import AppNavigation from './src/navigation/AppNavigation';
import {CurrentCoords} from './src/context/Coords';

export default function App() {
  const [currentCoords, setCurrentCoords] = useState({lat: 0, lon: 0});
  return (
    <CurrentCoords.Provider value={[currentCoords, setCurrentCoords]}>
      <AppNavigation />
    </CurrentCoords.Provider>
  );
}
