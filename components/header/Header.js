/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={headStyle}>
      <Text style={title}>Excercise Intervals</Text>
      <View>
        <Text>by Rachel & Jon, AKA the hacker collective</Text>
      </View>
      <View>
        <Text style={name}>Crypto_Terror_Encryption</Text>
      </View>
    </View>
  );
};

let headStyle = {
  fontSize: 32,
  paddingTop: 2,
  paddingBottom: 5,
};

let title = {
  fontSize: 32,
};

let name = {
  fontSize: 20,
  paddingBottom: 8,
  paddingTop: 10,
};

export default Header;
