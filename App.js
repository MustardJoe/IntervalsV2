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

import moment from 'moment';

import Header from './components/header/Header.js';
import CountDownDisplay from './components/countdowntimer/CountDownDisplay.js';
import Dashboard from './components/dashboard/Dashboard.js';



class App extends Component {
  state = {
    lengthOfRun: 120000,
    lengthOfRest: 60000,
    totalNumbOfIntvls: 3,
    remainingNumbIntvls: 3,
    countDownTimer: 0,
    currentProcess: 'idle',
    nextProcess: 'run',
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    ourMoment: moment().format(),
  };

  adjustTimer = input => {
    const { timerTime, timerOn } = this.state;
    const max = 216000000;
    if (!timerOn) {
      if (input === 'incHours' && timerTime + 3600000 < max) {
        this.setState({ timerTime: timerTime + 3600000 });
      } else if (input === 'decHours' && timerTime - 3600000 >= 0) {
        this.setState({ timerTime: timerTime - 3600000 });
      } else if (input === 'incMinutes' && timerTime + 60000 < max) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === 'decMinutes' && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === 'incSeconds' && timerTime + 1000 < max) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === 'decSeconds' && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };

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
    });
    console.log('top of startTimer, after setting state', this.state.timerTime, this.state.timerStart);
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime + 1000;

        if (newTime - this.state.timerTime >= 0) {
          this.setState({
            timerTime: newTime,
          });
        }
      // newTime.add(1, 's');
      // console.log('timerTime in startTimer', this.state.timerTime, 'newTime', newTime);

      // console.log('all the stuff',this.state.timerStart,
      // this.state.lengthOfRun, this.state.timerTime,
      // this.state.timerStart + this.state.lengthOfRun >= this.state.timerTime);

      // if (newTime.subtract(1, 's')  >= moment().format()) {
      //   this.setState({
      //     timerTime: newTime,
      //   });
      // }

      //This is where we will add in interval tracking stuff once basic countdown timer works
      else if (this.state.timerTime >= this.state.lengthOfRun) {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        // eslint-disable-next-line no-alert
        alert('You are the winner now');
      }

      // this.setState({
      //   timerTime: {
      //     minutes: moment().minutes(),
      //     hour: moment().hour(),
      //     seconds: moment().second(),
      //   },
      // });

      console.log('timerTime, end of startTimer',  this.state.timerTime, 'TIMER START', this.state.timerStart);
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };

  talk = () => {
    console.log('hi, i work!');
  }

  render() {
    const { timerTime } = this.state;

    let appTimerCurrentTime = {
      centiseconds: ('0' + (Math.floor(timerTime / 10) % 100)).slice(-2),
      seconds: ('0' + (Math.floor(timerTime / 1000) % 60)).slice(-2),
      minutes: ('0' + (Math.floor(timerTime / 60000) % 60)).slice(-2),
      hours: ('0' + Math.floor(timerTime / 3600000)).slice(-2),
      rawAppState: {...this.state},
      remainingTime: (this.state.timerStart + this.state.lengthOfRun) - this.state.timerTime,
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
                <Text style={styles.sectionTitle}>Run Info</Text>
                <Text style={styles.sectionDescription}>
                  <Dashboard fakeState={this.state} />
                </Text>
              </View>

              {/* Set Time for Intervals */}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Set Time for Intervals</Text>
                <Text>Active Time:</Text>
                  {/* <Button
                    onPress={this.adjustTimer('incHours')}
                    title="&#8679"
                    accessibilityLabel="Add 1 hour to time."
                  />

                  <Button
                    onPress={this.adjustTimer('incMinutes')}
                    title="&#8679"
                    accessibilityLabel="Add 1 hour to time."
                  />

                  <Button
                    onPress={this.adjustTimer('incSeconds')}
                    title="&#8679"
                    accessibilityLabel="Add 1 hour to time."
                  />

                  <Button
                    onPress={this.adjustTimer('decHours')}
                    title="&#8679"
                    accessibilityLabel="Add 1 hour to time."
                  />

                  <Button
                    onPress={this.adjustTimer('decMinutes')}
                    title="&#8679"
                    accessibilityLabel="Add 1 hour to time."
                  />

                  <Button
                    onPress={this.adjustTimer('decSeconds')}
                    title="&#8679"
                    accessibilityLabel="Add 1 hour to time."
                  /> */}
              </View>


              {/* Garbage text input comp */}
              <View style={styles.sectionContainer}>
                <TextInput
                  style={{
                    height: 80, borderColor: 'gray', borderWidth: 1,
                    backgroundColor: 'gold',
                  }}
                  defaultValue="You can type in me... but I don't do anything..."
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
