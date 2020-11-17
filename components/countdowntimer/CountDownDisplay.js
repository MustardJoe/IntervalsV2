import React from 'react';
import {Text} from 'react-native';

const CountDownDisplay = (props) => {
  // const {timeToDisplay} = props.timeToDisplay;
  console.log(props, 'hi');

  return (
    <>
      <Text>
        {props.timeToDisplay.minutes}:{props.timeToDisplay.seconds} to{' '}
        {props.timeToDisplay.rawAppState.currentProcess}
      </Text>
    </>
  );
};

// const CountDownTimer = () => {
//   return <Text>time is here!</Text>;
// };

export default CountDownDisplay;
