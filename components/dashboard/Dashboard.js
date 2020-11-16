import React from 'react';
import {View, Text} from 'react-native';

const Dashboard = (props) => {

  return (
    <View>
      <Text>Right now you are: {props.fakeState.currentProcess}</Text>
      <Text>Run Lenght: {props.fakeState.lengthOfRun}</Text>
      <Text>Rest Lenght: {props.fakeState.lengthOfRest}</Text>
      <Text>Remaining Intervals: {props.fakeState.remainingNumbIntvls}</Text>
    </View>
  );
};

export default Dashboard;
