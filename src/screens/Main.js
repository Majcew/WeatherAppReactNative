import React, {useEffect, useState} from 'react';
import {
  StatusBar, 
  StyleSheet, 
  View,
  SafeAreaView,
  Image,
  Dimensions,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import CityHeader from '../components/CityHeader';
import { TextInput } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

const Main = (props) => {
  return (

      <View style={{flex:1}}>
        <View style={styles.mainView}>
          <View style={styles.topBar}>            
            <TextInput 
                underlineColorAndroid='transparent'
                placeholder="miasto piekne podaj swe"
                style={styles.cityInput}
                />
            <Image 
              style={styles.iconTopBar}
              source={require('../img/icongps.png')}
            />
            <Image 
              style={styles.iconTopBar}
              source={require('../img/iconsearch.png')}
            />
          </View>
          <View style={styles.centerView}>
            <Text style={styles.dateTime}>21 May 2020</Text>
            <Image 
              style={styles.weatherImg}
              source={require('../img/sunny.png')}
            />
          </View>
          <View style={styles.weatherDescription}>
            <Text style={styles.weatherTemp}>18{'\u00B0'}</Text>
            <View>
            <Text style={styles.weatherDescriptionText}> Sunny</Text>
            <Text style={styles.weatherDescriptionTextDetails}> Jest fajnie miło i cieplo</Text>
            </View>

          </View>
          <View style={styles.horizontalLine}/>


        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0032b4',
  },
  mainView: {
    height:Dimensions.get('window').height, 
    backgroundColor: 'white',
  },
  topBar: {
    flexDirection:'row',
    marginHorizontal:20,
    marginVertical:20,
    paddingLeft:10,
    borderBottomWidth:1,
    borderBottomColor:'#8d8d8d',       
  },
  cityInput: {
    flex: 1,
    fontWeight: '700',
    backgroundColor: 'white',
    borderBottomWidth:0.15,
  },
  iconTopBar: {
    width: 25, 
    height: 25,
    marginTop:8,
    marginHorizontal:5,
  },
  centerView: {
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom:20,
  },
  dateTime: {
    color:'#8d8d8d',
    marginBottom:30,
  },
  weatherImg: {
    width: 155, 
    height: 155,
    marginTop:8,
    marginHorizontal:5,
    backgroundColor:'white',
  },
  weatherDescription: {
    flexDirection:'row',
    marginHorizontal:20,
  },
  weatherTemp: {
    fontSize:48,
    color:'#484848',
  },
  weatherDescriptionText: {
    marginTop:0,
    fontSize:24,
  },
  weatherDescriptionTextDetails: {
    marginTop:0,
    fontSize:16,
    color:'#8d8d8d',
  },
  horizontalLine: { 
    borderBottomColor: '#8d8d8d',
    borderBottomWidth: 1,
    marginHorizontal:20,
  }
});

export default Main;
