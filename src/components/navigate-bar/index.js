import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { StyleSheet } from 'react-native'


function NavigateBar(props) {

  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'Top', title: 'Top', icon: 'trending-up' },
    { key: 'Follow', title: 'Follow', icon: 'heart-outline' },
    { key: 'Wallet', title: 'Wallet', icon: 'wallet-outline' },
  ]);

  const { scenes } = props

  const renderScene = BottomNavigation.SceneMap(scenes)

  return (
    <BottomNavigation
      barStyle={styles.container}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor={'#000000'}
      inactiveColor={'#bdc3c7'}
    />
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF'
  },
});

export default NavigateBar
