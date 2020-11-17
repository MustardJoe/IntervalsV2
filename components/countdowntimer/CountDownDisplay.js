import React from 'react';
import {Text} from 'react-native';

const CountDownDisplay = (props) => {
  // const {timeToDisplay} = props.timeToDisplay;

  return (
    <>
      <Text>
        {props.timeToDisplay.remainingTime} on your{' '}
        {props.timeToDisplay.rawAppState.currentProcess} stage
      </Text>
    </>
  );
};

export default CountDownDisplay;
