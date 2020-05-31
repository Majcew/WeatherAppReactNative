import React, {useState, useContext} from 'react';
import {View, TouchableOpacity, Image, StyleSheet, Picker} from 'react-native';
import {WebView} from 'react-native-webview';
import Slider from '@react-native-community/slider';
import html_map from '../components/WeatherMap';
import {CurrentCoords} from '../context/Coords';

const DATA = [
  {
    id: 0,
    title: 'Map',
  },
  {
    id: 1,
    title: 'Temperature',
  },
  {
    id: 2,
    title: 'Pressure',
  },
  {
    id: 3,
    title: 'Clouds',
  },
  {
    id: 4,
    title: 'Precipitation',
  },
  {
    id: 5,
    title: 'Wind',
  },
];

const Map = ({navigation}) => {
  const [currentCoords, setCurrentCoords] = useContext(CurrentCoords);
  const [layer = 0, setLayer] = useState();
  const [zoom = 9, setZoom] = useState();
  const latitude = currentCoords.lat;
  const longitude = currentCoords.lon;

  return (
    <>
      <View style={{alignItems: 'center'}}>
        <Picker
          selectedValue={layer}
          style={{width: '50%'}}
          onValueChange={(itemValue, itemIndex) => setLayer(itemIndex)}>
          {DATA.map((element) => {
            return <Picker.Item label={element.title} value={element.id} />;
          })}
        </Picker>
      </View>
      <Slider
        style={{width: '100%', height: '5%'}}
        value={zoom}
        minimumValue={1}
        maximumValue={18}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={(sliderValue) => setZoom(sliderValue)}
        step={1}
        thumbTintColor="dodgerblue"
      />
      <WebView source={{html: html_map(latitude, longitude, zoom, layer)}} />
    </>
  );
};

const styles = StyleSheet.create({
  drawer: {
    marginRight: 10,
    width: 30,
    height: 30,
  },
});

Map.navigationOptions = ({navigation}) => ({
  headerRight: (
    <TouchableOpacity
      onPress={() => {
        navigation.openDrawer();
      }}>
      <Image style={styles.drawer} source={require('../img/menu.png')} />
    </TouchableOpacity>
  ),
});

export default Map;
