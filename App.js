/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Header from './components/header/Header.js';
import CountDownDisplay from './components/countdowntimer/CountDownDisplay.js';
import Dashboard from './components/dashboard/Dashboard.js';

const resetTimer = () => {
  this.setState({
    timerStart: 0,
    timerTime: 0,
  });
};

const startTimer = () => {
  this.setState({
    timerOn: true,
    timerTime: this.state.timerTime,
    timerStart: this.state.timerTime,
  });
  this.timer = setInterval(() => {
    this.setState({
      timerTime: Date.now() - this.state.timerStart,
    });
  }, 10);
};

const stopTimer = () => {
  this.setState({ timerOn: false });
  clearInterval(this.timer);
};

class App extends React.Component {
  state = {
    lengthOfRun: 3,
    lengthOfRest: 1,
    totalNumbOfIntvls: 3,
    remainingNumbIntvls: 3,
    countDownTimer: 3.33,
    currentTime: '3:45:32',
    currentProcess: 'idle',
    nextProcess: 'run',
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
  };

  render() {
    const { timerTime } = this.state;

    let appTimerCurrentTime = {
      centiseconds: ('0' + (Math.floor(timerTime / 10) % 100)).slice(-2),
      seconds: ('0' + (Math.floor(timerTime / 1000) % 60)).slice(-2),
      minutes: ('0' + (Math.floor(timerTime / 60000) % 60)).slice(-2),
      hours: ('0' + Math.floor(timerTime / 3600000)).slice(-2),
      rawAppState: {...this.state},
      // centiseconds: 5,
      // seconds: 7,
      // minutes: 7,
      // hours: 3,
    };

    return (
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
              {global.HermesInternal == null ? null : (
                <View style={styles.engine}>
                  <Text style={styles.footer}>Engine: Hermes</Text>
                </View>
              )}
            <View style={styles.body}>

              {/* Header */}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                  <Header />
                </Text>
              </View>

              {/* CountDownDisplay */}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Remaning Time:</Text>
                <Text style={styles.sectionDescription}>
                  <CountDownDisplay
                    timeToDisplay={appTimerCurrentTime}
                    // rawState={this.state}
                  />
                </Text>
              </View>

              {/* Dashboard */}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Run Info</Text>
                <Text style={styles.sectionDescription}>
                  <Dashboard fakeState={this.state} />
                </Text>
              </View>

              <View style={styles.sectionContainer}>
                <TextInput
                  style={{
                    height: 80, borderColor: 'gray', borderWidth: 1,
                    backgroundColor: 'gold',
                  }}
                  defaultValue="You can type in me"
                  />
              </View>

            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'yellowgreen',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'yellowgreen',
    minHeight: 700,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'yellowgreen',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
