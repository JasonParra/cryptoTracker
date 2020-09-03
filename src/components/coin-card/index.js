import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Modal, Portal, Button, Provider, Card } from 'react-native-paper';
import { StyleSheet, View } from 'react-native'

//Redux
import { useDispatch } from 'react-redux'
import { followCryptyo, unfollowCryptyo } from '../../redux/actions/crypto'

function CoinCard(props) {

  const [following, setFollowing] = useState(false)
  const { open, item, handleCoinCard } = props
  const dispatch = useDispatch()

  handleFollow = () => {
    if (!following) {
      dispatch(followCryptyo(item))
    } else {
      dispatch(unfollowCryptyo(item))
    }
    setFollowing(!following)
  }

  useEffect(() => {
    const { following } = props
    setFollowing(following)
  }, [])

  if (open)
    return (
      <Provider >
        <Portal>
          <Modal visible={open} onDismiss={handleCoinCard}>
            <View style={styles.card}>
              <Card>
                <Card.Cover style={styles.cover} source={{ uri: "https://www.cryptocompare.com" + item.CoinInfo.ImageUrl }} />
                <Card.Title title={item.CoinInfo.FullName} subtitle={item.CoinInfo.Nam} />
                <Card.Content>
                </Card.Content>
                <Card.Actions style={styles.actionButtons}>
                  <Button icon="close" mode="text" color={'grey'} onPress={handleCoinCard}>Close</Button>
                  <Button icon={following ? "heart" : "heart-outline"} mode="text" color={following ? 'black' : 'grey'}
                    onPress={() => handleFollow()} >
                    {following ? "Following" : "Follow"}
                  </Button>
                </Card.Actions>
              </Card>
            </View>
          </Modal>
        </Portal>
      </Provider>
    )
  else return null
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

CoinCard.propTypes = {
  item: PropTypes.object.isRequired,
}

export default CoinCard;