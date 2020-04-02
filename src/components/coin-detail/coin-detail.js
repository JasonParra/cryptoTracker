import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Modal, Portal, Button, Provider, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, View } from 'react-native'

export class CoinDetail extends PureComponent {
  render() {
    const { open, uri, name, fullName, handleCoinDetail, algo } = this.props
    return (
      <Provider >
        <Portal>
          <Modal visible={open} onDismiss={handleCoinDetail}>
            <View style={styles.card}>
              <Card>
                <Card.Cover style={styles.cover} source={{ uri: uri }} />
                <Card.Title title={fullName} subtitle={name} />
                <Card.Content>
                  <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Actions>
                  <Button onPress={handleCoinDetail}>close</Button>
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
  }
});


CoinDetail.propTypes = {
  uri: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  handleCoinDetail: PropTypes.func.handleCoinDetail
}

export default CoinDetail;