import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import * as API from '../utils/API';
import {CurrentCoords} from '../context/Coords';

const UVIndex = () => {
  const [currentCoords] = useContext(CurrentCoords);
  const [UVi = 0, setUVi] = useState();

  const getUVi = async () => {
    try {
      const uvi = await API.getUVIndex(currentCoords.lat, currentCoords.lon);
      if (uvi) {
        await setUVi(uvi.value);
      }
    } catch (err) {
      console.log('Error in UVIndex#getUVi: ', err);
    }
  };
  getUVi();
  return (
    <View style={styles.mainView}>
      <Text>{UVi}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40,
  },
  icon: {
    marginLeft: 22,
  },
  appName: {
    color: 'rgb(88, 86, 214)',
    marginBottom: 40,
    fontSize: 28,
  },
  textView: {
    marginVertical: 10,
    alignItems: 'center',
  },
  textHeader: {
    fontWeight: 'bold',
  },
  drawer: {
    marginRight: 10,
    width: 30,
    height: 30,
  },
});

UVIndex.navigationOptions = ({navigation}) => ({
  headerRight: (
    <TouchableOpacity
      onPress={() => {
        navigation.openDrawer();
      }}>
      <Image style={styles.drawer} source={require('../img/menu.png')} />
    </TouchableOpacity>
  ),
});

export default UVIndex;
