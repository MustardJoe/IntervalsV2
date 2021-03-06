import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class ControlPanel extends Component {
  render() {
    return (
      <View style={styles.controlPanel}>
        <Text style={styles.sectionTitle}>Set Time for Intervals</Text>
        <Text>Active Time:</Text>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.controlPanelButtons}
            onPress={this.props.incMinutesRun}
            title="+ Min Run"
            color="#00B0FF"
            accessibilityLabel="Add 1 minute to active time."
          />
          <Button
            style={styles.controlPanelButtons}
            onPress={this.props.decMinutesRun}
            title="- Min Run"
            color="#00B0FF"
            accessibilityLabel="Subtract 1 minute to active time."
          />

          <Button
            style={styles.controlPanelButtons}
            onPress={this.props.incSecondsRun}
            title="+ Sec Run"
            color="#00B0FF"
            accessibilityLabel="Add 1 second to active time."
          />
          <Button
            style={styles.controlPanelButtons}
            onPress={this.props.decSecondsRun}
            title="- Sec Run"
            color="#00B0FF"
            accessibilityLabel="Subtract 1 second from active time."
          />
        </View>

        <Text>Rest Time:</Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.props.incMinutesRest}
            title="+ Min Rest"
            color="#00B0FF"
            accessibilityLabel="Add 1 minute to rest time."
          />
          <Button
            onPress={this.props.decMinutesRest}
            title="- Min Rest"
            color="#00B0FF"
            accessibilityLabel="Subtract 1 minute to rest time."
          />

          <Button
            onPress={this.props.incSecondsRest}
            title="+ Sec Rest"
            color="#00B0FF"
            accessibilityLabel="Add 1 second to rest time."
          />
          <Button
            onPress={this.props.decSecondsRest}
            title="- Sec Rest"
            color="#00B0FF"
            accessibilityLabel="Subtract 1 second from rest time."
          />
        </View>
        <View>
          <Text>Change Number of Intervals:</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.props.decIntervals}
            title="↓"
            color="#00B0FF"
            accessibilityLabel="Subtract 1 interval."
          />
          <Button
            onPress={this.props.incIntervals}
            title="↑"
            color="#00B0FF"
            accessibilityLabel="Add 1 interval."
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  controlPanelButtons: {
    maxWidth: 10,
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  controlPanel: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
});

export default ControlPanel;
