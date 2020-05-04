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

      <WebView source={{html: html_map(latitude, longitude, 5, layer)}} />
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
    fontSize: 28,
  },
});

export default Map;
