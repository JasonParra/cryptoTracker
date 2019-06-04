import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DashboardList from "../../components/dashboard/dashboardList"

export default class Dashboard extends React.Component {
  render() {
    return (
      <View>
        <DashboardList/>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
