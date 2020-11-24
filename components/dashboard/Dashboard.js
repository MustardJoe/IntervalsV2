import React from 'react';
import {View, Text} from 'react-native';

const Dashboard = (props) => {
  let countDownTimeInSeconds =
    props.timerStateToDash.lengthOfRun - props.timerStateToDash.timerTime;

  let appTimerCurrentTime = {
    seconds:
      0 || ('0' + (Math.floor(countDownTimeInSeconds / 1000) % 60)).slice(-2),
    minutes:
      0 || ('0' + (Math.floor(countDownTimeInSeconds / 60000) % 60)).slice(-2),
    hours: 0 || ('0' + Math.floor(countDownTimeInSeconds / 3600000)).slice(-2),
  };

  let formatRunLength = {
    seconds:
      0 ||
      (
        '0' +
        (Math.floor(props.timerStateToDash.lengthOfRun / 1000) % 60)
      ).slice(-2),
    minutes:
      0 ||
      (
        '0' +
        (Math.floor(props.timerStateToDash.lengthOfRun / 60000) % 60)
      ).slice(-2),
    hours:
      0 ||
      ('0' + Math.floor(props.timerStateToDash.lengthOfRun / 3600000)).slice(
        -2,
      ),
  };

  let formatRestLength = {
    seconds:
      0 ||
      (
        '0' +
        (Math.floor(props.timerStateToDash.lengthOfRest / 1000) % 60)
      ).slice(-2),
    minutes:
      0 ||
      (
        '0' +
        (Math.floor(props.timerStateToDash.lengthOfRest / 60000) % 60)
      ).slice(-2),
    hours:
      0 ||
      ('0' + Math.floor(props.timerStateToDash.lengthOfRest / 3600000)).slice(
        -2,
      ),
  };

  return (
    <View>
      <Text>Right now you are: {props.timerStateToDash.currentProcess}</Text>
      <Text>
        Run Lenght: {formatRunLength.minutes} : {formatRunLength.seconds}{' '}
        minutes
      </Text>
      <Text>
        Rest Lenght: {formatRestLength.minutes} : {formatRestLength.seconds}{' '}
        minutes
      </Text>
      <Text>
        Remaining Intervals: {props.timerStateToDash.remainingNumbIntvls}
      </Text>
    </View>
  );
};

export default Dashboard;
