import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

//Components
import { TextInput, Card, Modal, Portal, Provider, Searchbar, Subheading, Avatar, Button } from 'react-native-paper'

//Actions
import { addWallet } from '../../redux/actions/wallet'

function WalletCard(props) {

  const [search, setSearch] = useState('')
  const [amount, setAmount] = useState(0)
  const [address, setAddress] = useState('')
  const [totalValue, setTotalValue] = useState(0)
  const dispatch = useDispatch()

  const { open, item, handleWalletCard } = props

  useEffect(() => {
    setSearch(item.fullName)
    setAmount(item.amount)
    setAddress(item.address)
    setTotalValue(item.amount * item.price)
  }, [])

  handleAddWallet = () => {
    const wallet = {
      fullName: search,
      amount: amount,
      address: address,
      price: item.price,
      totalValue: amount * item.price
    }
    dispatch(addWallet(wallet))
    dispatch(handleWalletCard())
  }

  return (
    <Provider >
      <Portal>
        <Modal visible={open} onDismiss={handleCoinCard}>
          <View style={styles.card}>
            <Card>
              {/* <Card.Cover style={styles.cover} source={{ uri: "https://www.cryptocompare.com" + item.CoinInfo.ImageUrl }} /> */}
              <Card.Title title={'Add Wallet Coin'} />
              <Card.Content>
                <Searchbar
                  placeholder={'crypto'}
                  value={search}
                  onChangeText={text => setSearch(text)}
                  style={styles.input}
                />
                <TextInput
                  placeholder={'amount'}
                  value={amount}
                  onChangeText={text => setAmount(text)}
                  style={styles.input}
                />
                <TextInput
                  placeholder={'wallet (optional)'}
                  value={address}
                  onChangeText={text => setAddress(text)}
                  style={styles.input}
                />
                <Subheading>{totalValue || 0.00}</Subheading>
              </Card.Content>
              <Card.Actions style={styles.actionButtons}>
                <Button icon="close" mode="text" color={'grey'} onPress={() => handleWalletCard()}>Close</Button>
                <Button icon={"plus"} onPress={() => this.handleAddWallet()}> Add
                </Button>
              </Card.Actions>
            </Card>
          </View>
        </Modal>
      </Portal>
    </Provider>
  )
}

WalletCard.propTypes = {
  open: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
  handleWalletCard: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  card: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  form: {
    flex: 1,
    flexDirection: 'column',
    height: 200
  },
  input: {
    marginBottom: 10
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  }
})


export default WalletCard

