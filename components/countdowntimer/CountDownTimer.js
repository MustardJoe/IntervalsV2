import React from 'react';
import {Text} from 'react-native';

const CountDownTimer = (props) => {
  return <Text>{props.timeToDisplay}</Text>;

};

// const CountDownTimer = () => {
//   return <Text>time is here!</Text>;
// };

export default CountDownTimer;
