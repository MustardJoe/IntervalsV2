/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/*
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import ControlPanel from './components/controlpanel/ControlPanel.js';
import CountDownDisplay from './components/countdowntimer/CountDownDisplay.js';
import Dashboard from './components/dashboard/Dashboard.js';
import Header from './components/header/Header.js';

import intervalSwitcher from './services/IntervalSwitcher.js';
import PlaySound from './services/playSoundFunc.js';

class App extends Component {
  state = {
    lengthOfRun: 5000,
    lengthOfRest: 6000,
    remainingNumbIntvls: 3,
    currentProcess: 'idle',
    nextProcess: 'run',
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
  };

  /////////////////////// INTERVAL SETTING FUNCTIONS ///////////////////////
  timerSetButtonsFunc = {
    maxTime: 7200000,
    incMinutesRun: () => {
      const { timerOn, lengthOfRun } = this.state;
      if (!timerOn) {
        return this.setState({ lengthOfRun: lengthOfRun + 60000 });
      }
    },
    decMinutesRun: () => {
      const { timerOn, lengthOfRun } = this.state;
      if (!timerOn) {
        return this.setState({ lengthOfRun: lengthOfRun - 60000 });
      }
    },
    incMinutesRest: () => {
      const { timerOn, lengthOfRest } = this.state;
      if (!timerOn) {
        return this.setState({ lengthOfRest: lengthOfRest + 60000 });
      }
    },
    decMinutesRest: () => {
      const { timerOn, lengthOfRest } = this.state;
      if (!timerOn) {
        return this.setState({ lengthOfRest: lengthOfRest - 60000 });
      }
    },
    incSecondsRun: () => {
      const { timerOn, lengthOfRun } = this.state;
      if (!timerOn) {
        return this.setState({ lengthOfRun: lengthOfRun + 1000 });
      }
    },
    decSecondsRun: () => {
      const { timerOn, lengthOfRun } = this.state;
      if (!timerOn) {
        return this.setState({ lengthOfRun: lengthOfRun - 1000 });
      }
    },
    incSecondsRest: () => {
      const { timerOn, lengthOfRest } = this.state;
      if (!timerOn) {
        return this.setState({ lengthOfRest: lengthOfRest + 1000 });
      }
    },
    decSecondsRest: () => {
      const { timerOn, lengthOfRest } = this.state;
      if (!timerOn) {
        return this.setState({ lengthOfRest: lengthOfRest - 1000 });
      }
    },
  }

//////////////////////////////// TIMER FUNCTIONS //////////////////////////////////////
  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerStart: 0,
        timerTime: 0,
      });
    }
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime,
      currentProcess: 'run',
    });
    console.log('top of startTimer, after setting state', this.state.timerTime, this.state.timerStart, this.state.currentProcess);
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime + 1000;

      if (newTime - this.state.timerTime >= 0) {
        this.setState({
          timerTime: newTime,
        });
      }

      //Interval Switching Logic - going from run to rest
      if (this.state.timerTime >= this.state.lengthOfRun && this.state.currentProcess === 'run' && this.state.remainingNumbIntvls > 1) {
        let intervalUpdate = intervalSwitcher(this.state);
        console.log('checking return object from Interval Switcher',intervalUpdate.currentProcess);
        // PlaySound.play(); not how to play a sound
        this.setState({
          currentProcess: intervalUpdate.currentProcess,
          remainingNumbIntvls: intervalUpdate.remainingNumbIntvls,
          timerTime: 0,
          timerStart: 0,
        });
      }

      //Interval Switching Logic - going from rest to run
      if (this.state.timerTime >= this.state.lengthOfRest && this.state.currentProcess === 'rest') {
        let intervalUpdate = intervalSwitcher(this.state);
        console.log('checking return object from Interval Switcher, IN REST SWITCHING LOGIC',intervalUpdate.currentProcess);
        // PlaySound.play();  not how to play a sound
        this.setState({
          currentProcess: intervalUpdate.currentProcess,
          remainingNumbIntvls: intervalUpdate.remainingNumbIntvls,
          timerTime: 0,
          timerStart: 0,
        });
      }

      //Final conditional test: are we all the way done with everything?
      else if (this.state.timerTime >= this.state.lengthOfRun
        && this.state.remainingNumbIntvls === 1 && this.state.currentProcess === 'run') {
          let intervalUpdate = intervalSwitcher(this.state);
          clearInterval(this.timer);
          this.setState({
            timerOn: false,
            currentProcess: intervalUpdate.currentProcess,
            remainingNumbIntvls: intervalUpdate.remainingNumbIntvls,
            timerTime: 0,
            timerStart: 0,
        });
        // eslint-disable-next-line no-alert
        alert('You are the winner now');
      }
      console.log('timerTime, end of set interval',  this.state.timerTime, 'TIMER START', this.state.timerStart, 'current process', this.state.currentProcess);
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };

  render() {
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
                    timeToDisplay={this.state}
                  />
                </Text>
              </View>

              {/* Conditionally rendered Timer buttons */}
              <View style={styles.sectionContainer}>
              {this.state.timerOn === false && this.state.timerTime === 0 && (
                <Button
                  onPress={this.startTimer}
                  title="Start Intervals"
                  accessibilityLabel="Press the start button to start your interval timer."
                />
              )}
              {this.state.timerOn === true && (
                <Button
                  onPress={this.stopTimer}
                  title="Stop"
                  accessibilityLabel="Stop the interval timer."
                />
              )}
              {this.state.timerOn === false && this.state.timerTime > 0 && (
                <Button
                  onPress={this.startTimer}
                  title="Resume"
                  accessibilityLabel="Resume interval training without reseting your current timer."
                />
              )}
              {this.state.timerOn === false && this.state.timerTime > 0 && (
                <Button
                  onPress={this.resetTimer}
                  title="Reset"
                  accessibilityLabel="Reset the timer to enter new interval times."
                />
              )}
              </View>

              {/* Dashboard */}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Interval Details</Text>
                <Text style={styles.sectionDescription}>
                  <Dashboard timerStateToDash={this.state} />
                </Text>
              </View>

              {/* Control Panel - Set Time for Intervals */}
              <View style={styles.sectionContainer}>
                <ControlPanel
                  incMinutesRun={this.timerSetButtonsFunc.incMinutesRun}
                  decMinutesRun={this.timerSetButtonsFunc.decMinutesRun}
                  incSecondsRun={this.timerSetButtonsFunc.incSecondsRun}
                  decSecondsRun={this.timerSetButtonsFunc.decSecondsRun}
                  incMinutesRest={this.timerSetButtonsFunc.incMinutesRest}
                  decMinutesRest={this.timerSetButtonsFunc.decMinutesRest}
                  incSecondsRest={this.timerSetButtonsFunc.incSecondsRest}
                  decSecondsRest={this.timerSetButtonsFunc.decSecondsRest}
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
    marginTop: 16,
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
