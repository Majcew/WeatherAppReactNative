import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const About = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Image style={styles.drawer} source={require('../img/menu.png')} />
      </TouchableOpacity>
      <Text>
        Tutaj będzie bardzo piękny tekst na temat naszej apki (nie wazne w tej
        chwili)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    width: 40,
    height: 40,
  },
});

export default About;
