import React, {Component, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const OpenURLText = ({url, children}) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Text style={{color:'blue'}} onPress={handlePress}>{children}</Text>;
};

const About = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <View style={{marginLeft: 22}}>
          <Icon name="umbrella" size={128} color="rgb(88, 86, 214)" />
        </View>
        <Text style={{color: 'rgb(88, 86, 214)', fontSize: 28}}>
          WeatherAPP
        </Text>
      </View>
      <View
        style={{
          marginTop: 40,
          marginHorizontal: 40,
          marginVertical: 20,
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold'}}>O aplikacji:</Text>
        <Text>
          Aplikacja pogodynka prezentująca aktualne dane pogodowe wraz z
          prognoza pogody na następne dni
        </Text>
      </View>
      <View style={{marginVertical: 20}}>
        <Text style={{fontWeight: 'bold'}}>Twórcy aplikacji:</Text>
        <Text>Szymon Joszko</Text>
        <Text>Krzysztof Dragon</Text>
        <Text>Wiktor Hosumbek</Text>
        <Text>Szymon Babula</Text>
      </View>
      <View>
        <Text style={{fontWeight: 'bold'}}>Kontakt:</Text>
        <OpenURLText url={'https://github.com/Majcew/WeatherAppReactNative'}>
          GitHub
        </OpenURLText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    marginRight: 10,
    width: 30,
    height: 30,
  },
});

About.navigationOptions = ({navigation}) => ({
  headerRight: (
    <TouchableOpacity
      onPress={() => {
        navigation.openDrawer();
      }}>
      <Image style={styles.drawer} source={require('../img/menu.png')} />
    </TouchableOpacity>
  ),
});

export default About;
