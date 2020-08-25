import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { StyleSheet } from 'react-native'


function NavigateBar(props) {

  const [index, setIndex] = useState(0)
  const [routes, setRoutes] = useState([
    { key: 'Top', title: 'Top', icon: 'trending-up' },
    { key: 'Follow', title: 'Follow', icon: 'heart-outline' },
    { key: 'Wallet', title: 'Wallet', icon: 'wallet-outline' },
  ])

  renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'Top':
        return props.TopScene
    }
  }
  return (
    <BottomNavigation
      barStyle={styles.container}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={this.renderScene}
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
