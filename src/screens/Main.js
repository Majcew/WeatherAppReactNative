import React, {useEffect, useState, Component} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import CityHeader from '../components/CityHeader';

export default class Main extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#010d79" />
        <CityHeader city="" />
        <View>
          <TouchableOpacity
            onPress={() => {
              console.log('dupa');
              navigation.navigate('About');
              console.log('nawigejszyn', navigation);
            }}>
            <Text>Press me!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0032b4',
  },
});
