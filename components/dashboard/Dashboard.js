import React from 'react';
import {View, Text} from 'react-native';

const Dashboard = (props) => {
  return (
    <View>
      <Text>Right now you are: {props.timerStateToDash.currentProcess}</Text>
      <Text>Run Lenght: {props.timerStateToDash.lengthOfRun}</Text>
      <Text>Rest Lenght: {props.timerStateToDash.lengthOfRest}</Text>
      <Text>
        Remaining Intervals: {props.timerStateToDash.remainingNumbIntvls}
      </Text>
    </View>
  );
};

export default Dashboard;
