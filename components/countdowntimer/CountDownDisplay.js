import React from 'react';
import {Text} from 'react-native';

const CountDownDisplay = (props) => {
  let findCorrectTime = () => {
    if (
      props.timeToDisplay.currentProcess === 'run' ||
      props.timeToDisplay.currentProcess === 'idle'
    ) {
      return props.timeToDisplay.lengthOfRun - props.timeToDisplay.timerTime;
    } else if (props.timeToDisplay.currentProcess === 'rest') {
      return props.timeToDisplay.lengthOfRest - props.timeToDisplay.timerTime;
    }
  };

  let countDownTimeInSeconds = findCorrectTime();

  let appTimerCurrentTime = {
    seconds:
      0 || ('0' + (Math.floor(countDownTimeInSeconds / 1000) % 60)).slice(-2),
    minutes:
      0 || ('0' + (Math.floor(countDownTimeInSeconds / 60000) % 60)).slice(-2),
    hours: 0 || ('0' + Math.floor(countDownTimeInSeconds / 3600000)).slice(-2),
  };

  return (
    <>
      <Text style={counterStyle}>
        {appTimerCurrentTime.hours} : {appTimerCurrentTime.minutes} :{' '}
        {appTimerCurrentTime.seconds} on {props.timeToDisplay.currentProcess}{' '}
        stage
      </Text>
    </>
  );
};

let counterStyle = {
  fontSize: 28,
  paddingTop: 2,
  paddingBottom: 5,
};

export default CountDownDisplay;
