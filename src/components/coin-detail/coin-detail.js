import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Modal, Portal, Button, Provider, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, View } from 'react-native'

export class CoinDetail extends PureComponent {

  state = {
    following: false
  }

  followCoin = () => {
    this.setState({
      following: !this.state.following
    })
  }

  render() {
    const { open, uri, name, fullName, handleCoinDetail } = this.props
    const { following } = this.state
    return (
      <Provider >
        <Portal>
          <Modal visible={open} onDismiss={handleCoinDetail}>
            <View style={styles.card}>
              <Card>
                <Card.Cover style={styles.cover} source={{ uri: uri }} />
                <Card.Title title={fullName} subtitle={name} />
                <Card.Content>
                  {/* <Paragraph>Card content</Paragraph> */}
                </Card.Content>
                <Card.Actions style={styles.actionButtons}>
                  <Button icon="close" mode="text" color={'grey'} onPress={() => handleCoinDetail()}>Close</Button>
                  <Button icon={following ? "heart" : "heart-outline"} mode="text" color={following ? 'red' : 'grey'} onPress={() => this.followCoin()} >
                    {following ? "Following" : "Follow"}
                  </Button>
                </Card.Actions>
              </Card>
            </View>
          </Modal>
        </Portal>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  cover: {
    paddingLeft: 60,
    paddingRight: 60,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  }
});

CoinDetail.propTypes = {
  uri: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  // handleCoinDetail: PropTypes.func.handleCoinDetail.isRequired
}

export default CoinDetail;