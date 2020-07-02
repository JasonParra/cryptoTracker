import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { StyleSheet } from 'react-native'


export default class NavigateBar extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'Top', title: 'Top', icon: 'trending-up' },
      { key: 'Follow', title: 'Follow', icon: 'heart-outline' },
      { key: 'Wallet', title: 'Wallet', icon: 'wallet-outline' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'Top':
        return this.props.TopScene

    }
  }
  render() {
    return (
      <BottomNavigation
        barStyle={styles.container}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this.renderScene}
        activeColor={'#000000'}
        inactiveColor={'#bdc3c7'}
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF'
  },
});
