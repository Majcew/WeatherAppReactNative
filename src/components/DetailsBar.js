import React, {useState, useEffect} from 'react';
import moment from 'moment';

import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

const DetailsBar = (props) => {
    const [sunriseTime, setSunriseTime] = useState(props.sunriseTime);
    const [sunsetTime, setSunsetTime] = useState(props.sunsetTime);
    const [airPressure, setAirPressure] = useState(props.airPressure);
    const [humidity, setHumidity] = useState(props.humidity);
    
    
  
    useEffect(() => { 
        setSunriseTime(moment(props.sunriseTime*1000+2*3600*1000).format('HH:mm')); //tutaj super biblioteka moment do konwejsji timestamp
        setSunsetTime(moment(props.sunsetTime*1000+2*3600*1000).format('HH:mm'));
        setAirPressure(props.airPressure);
        setHumidity(props.humidity);
      }, [props.sunriseTime,props.sunsetTime,props.airPressure,props.humidity]);
  
      
    
    return (
        <View style={styles.iconBox}>
        <View>
          <View style={styles.box1}>
            <Image
              style={styles.iconInSquare}
              source={require('../img/sunsetup.png')}
            />
          </View>
    <Text style={{textAlign: 'center'}}>{sunriseTime}</Text>
        </View>
        <View>
          <View style={styles.box2}>
            <Image
              style={styles.iconInSquare}
              source={require('../img/sunsetdown.png')}
            />
          </View>
          <Text style={{textAlign: 'center'}}>{sunsetTime}</Text>
        </View>
        <View>
          <View style={styles.box3}>
            <Image
              style={styles.iconInSquare}
              source={require('../img/hpa.png')}
            />
          </View>
          <Text style={{textAlign: 'center'}}>{airPressure}</Text>
        </View>
        <View>
          <View style={styles.box4}>
            <Image
              style={styles.iconInSquare}
              source={require('../img/humidity.png')}
            />
          </View>
          <Text style={{textAlign: 'center'}}>{humidity + " %"}</Text>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    iconInSquare: {
        width: 35,
        height: 35,
        marginLeft: 8,
        marginTop: 6,
      },
      iconBox: {
        marginTop: 25,
        marginHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      box1: {
        width: 50,
        height: 50,
        backgroundColor: 'rgb(10, 132, 255)',
        borderRadius: 4,
      },
      box2: {
        width: 50,
        height: 50,
        backgroundColor: 'rgb(48, 209, 88)',
        borderRadius: 4,
      },
      box3: {
        width: 50,
        height: 50,
        backgroundColor: 'rgb(94, 92, 230)',
        borderRadius: 4,
      },
      box4: {
        width: 50,
        height: 50,
        backgroundColor: 'rgb(255, 159, 10)',
        borderRadius: 4,
      },
  });

  export default DetailsBar;