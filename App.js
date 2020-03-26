import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './src/containers/dashboard/dashboard';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Dashboard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15
  },
});
