import React from 'react';
import {Text} from 'react-native';

const CountDownDisplay = (props) => {
  // let countDownTimeInSeconds = () => {
  //   if (props.timeToDisplay.currentProcess === 'run') {
  //     return props.timeToDisplay.lengthOfRun - props.timeToDisplay.timerTime;
  //   } else if (props.timeToDisplay.currentProcess === 'rest') {
  //     return props.timeToDisplay.lengthOfRest - props.timeToDisplay.timerTime;
  //   }
  // };

  let countDownTimeInSeconds =
    props.timeToDisplay.lengthOfRun - props.timeToDisplay.timerTime;

  let appTimerCurrentTime = {
    seconds:
      0 || ('0' + (Math.floor(countDownTimeInSeconds / 1000) % 60)).slice(-2),
    minutes:
      0 || ('0' + (Math.floor(countDownTimeInSeconds / 60000) % 60)).slice(-2),
    hours: 0 || ('0' + Math.floor(countDownTimeInSeconds / 3600000)).slice(-2),
  };

  return (
    <>
      <Text>
        {appTimerCurrentTime.hours} : {appTimerCurrentTime.minutes} :{' '}
        {appTimerCurrentTime.seconds} on {props.timeToDisplay.currentProcess}{' '}
        stage
      </Text>
    </>
  );
};

export default CountDownDisplay;
