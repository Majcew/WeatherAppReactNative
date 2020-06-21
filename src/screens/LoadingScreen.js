import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const LoadingScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      NetInfo.addEventListener((state) => {
        navigation.navigate(state.isConnected ? 'Main' : 'NoConnection');
      });
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Loading Weather App!</Text>
      <Image style={styles.umbrella} source={require('../img/umbrella.png')} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  umbrella: {
    marginTop: 15,
    tintColor: 'rgb(88, 86, 214)',
  },
});
