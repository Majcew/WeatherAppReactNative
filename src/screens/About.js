import React, {useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Linking,
  Alert,
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

  return (
    <Text style={{color: 'blue'}} onPress={handlePress}>
      {children}
    </Text>
  );
};

const About = () => {
  return (
    <View style={styles.mainView}>
      <View>
        <View style={styles.icon}>
          <Icon name="umbrella" size={128} color="rgb(88, 86, 214)" />
        </View>
        <Text style={styles.appName}>WeatherAPP</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textHeader}>About App:</Text>
        <Text>
          Weather application presenting actual weather data with the forecast
          for a few next day.
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textHeader}>Contributors:</Text>
        <Text>Szymon Joszko</Text>
        <Text>Krzysztof Dragon</Text>
        <Text>Wiktor Hosumbek</Text>
        <Text>Szymon Babula</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textHeader}>Links:</Text>
        <OpenURLText url={'https://github.com/Majcew/WeatherAppReactNative'}>
          GitHub
        </OpenURLText>
      </View>
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
