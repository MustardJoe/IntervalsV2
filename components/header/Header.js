/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Text} from 'react-native';

const Header = () => {
  return <Text style={headStyle}>Intervals by Rachel & Jon</Text>;
};

let headStyle = {
  fontSize: 32,
  padding: 60,
};

export default Header;
