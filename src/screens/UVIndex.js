import React, {useState, useContext, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Linking,
} from 'react-native';
import * as API from '../utils/API';
import {UVIDesc} from '../utils/UVIndexDesc';
import {CurrentCoords} from '../context/Coords';

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
    <Text
      style={{color: 'blue', fontSize: 10, marginTop: 10}}
      onPress={handlePress}>
      {children}
    </Text>
  );
};

const UVIndex = () => {
  const [currentCoords] = useContext(CurrentCoords);
  const [risk = 0, setRisk] = useState();
  const [UVi = 0, setUVi] = useState();
  const allRisks = ['Low', 'Moderate', 'High', 'Very high', 'Extreme'];
  const allColors = ['green', 'yellow', 'orange', 'red', 'violet'];

  const getUVi = async () => {
    try {
      const uvi = await API.getUVIndex(currentCoords.lat, currentCoords.lon);
      if (uvi) {
        await setUVi(uvi.value);
        await setCurrentRisk(UVi);
      }
    } catch (err) {
      console.log('Error in UVIndex#getUVi: ', err);
    }
  };
  const setCurrentRisk = (UVi) => {
    switch (true) {
      case UVi < 3:
        setRisk(0);
        break;
      case UVi < 6:
        setRisk(1);
        break;
      case UVi < 8:
        setRisk(2);
        break;
      case UVi < 11:
        setRisk(3);
        break;

      default:
        setRisk(4);
        break;
    }
  };

  const setUViStyle = (color) => {
    return {
      color: color,
      marginBottom: 40,
      fontWeight: 'bold',
      fontSize: 48,
    };
  };

  const setRiskStyle = (color) => {
    return {
      color: color,
      marginBottom: 80,
      fontSize: 32,
    };
  };
  getUVi();
  return (
    <View style={styles.mainView}>
      <Text style={setUViStyle(allColors[risk])}>{UVi}</Text>
      <Text style={styles.riskHeader}>
        Risk of harm from unprotected Sun exposure, for the average adult:
      </Text>
      <Text style={setRiskStyle(allColors[risk])}>{allRisks[risk]}</Text>
      <View style={styles.infoView}>
        <Text style={styles.info}>{UVIDesc[risk]}</Text>
        <OpenURLText url={'https://en.wikipedia.org/wiki/Ultraviolet_index'}>
          *Data from wikipedia
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
    position: 'relative',
    top: -50,
  },
  riskHeader: {
    textAlign: 'center',
    fontSize: 18,
  },
  infoView: {
    bottom: -35,
    display: 'flex',
    position: 'absolute',
  },
  info: {
    textAlign: 'justify',
    fontSize: 14,
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
