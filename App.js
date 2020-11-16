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
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Header from './components/header/Header.js';
import CountDownTimer from './components/countdowntimer/CountDownTimer.js';
import Dashboard from './components/dashboard/Dashboard.js';

const App: () => React$Node = () => {
  let fakeState = {
    lengthOfRun: 3,
    lengthOfRest: 1,
    totalNumbOfIntvls: 3,
    remainingNumbIntvls: 3,
    countDownTimer: 3.33,
    currentTime: '3:45:32',
    currentProcess: 'idle',
    nextProcess: 'run',
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

            {/* Dashboard */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Run Info</Text>
              <Text style={styles.sectionDescription}>
                <Dashboard fakeState={fakeState} />
              </Text>
            </View>

            {/* CountDownTimer */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Remaning Time:</Text>
              <Text style={styles.sectionDescription}>
                <CountDownTimer timeToDisplay={fakeState.countDownTimer} />
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
};

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
