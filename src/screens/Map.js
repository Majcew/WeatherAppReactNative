import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import {WebView} from 'react-native-webview';
import Slider from '@react-native-community/slider';
import html_map from '../components/WeatherMap';

const DATA = [
  {
    id: 0,
    title: 'Mapa',
  },
  {
    id: 1,
    title: 'Temperatura',
  },
  {
    id: 2,
    title: 'Ciśnienie',
  },
  {
    id: 3,
    title: 'Chmury',
  },
  {
    id: 4,
    title: 'Opady',
  },
  {
    id: 5,
    title: 'Wiatr',
  },
];

const Map = ({navigation}) => {
  const [layer = 0, setLayer] = useState();
  const [zoom = 9, setZoom] = useState();
  const latitude = 51.5;
  const longitude = -0.12;

  function Item({item}) {
    return (
      <View style={styles.item}>
        <Text style={styles.title} onPress={() => setLayer(item.id)}>
          {item.title}
        </Text>
      </View>
    );
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Image style={styles.drawer} source={require('../img/menu.png')} />
      </TouchableOpacity>
      <View>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Slider
        style={{width: '100%', height: 40}}
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
    width: 40,
    height: 40,
  },
  item: {
    backgroundColor: 'dodgerblue',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 18,
  },
});

export default Map;
