import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native';
import { Searchbar, Button } from 'react-native-paper'
import WalletCoin from "../../components/wallet-coin"
import WalletCard from '../../components/wallet-card'
import { useSelector } from 'react-redux'


function Wallet() {

  const [searchInput, setSearchInput] = useState('')
  const [openCard, setOpenCard] = useState(false)
  const [wallet, setWallet] = useState({})
  const wallets = useSelector(state => state.wallet.wallets)

  handleWalletCard = (e, item = {}) => {
    setOpenCard(!openCard)
    setWallet(item)
  }

  renderWalletsRows = () => {
    let walletsFiltered = []

    if (searchInput) {
      const re = new RegExp('\w*' + searchInput.toLocaleLowerCase() + '\w*');
      walletsFiltered = cryptos.filter(item => (item.fullName.toLocaleLowerCase()).match(re)
        || item.fullName.toLocaleLowerCase().match(re))
    }

    return (searchInput ? walletsFiltered : wallets).map((item, index) => {
      return (
        <WalletCoin
          onPress={(e) => this.handleWalletCard(e, item)}
          key={index}
          address={item.address}
          amount={item.amount}
          fullName={item.fullName}
          totalValue={parseInt(item.amount) * parseInt(item.price)}
          price={item.price}
        // uri={"https://www.cryptocompare.com" + item.CoinInfo.ImageUrl}
        />
      )
    })
  }

  return (<View >
    <Searchbar
      label={'search'}
      value={searchInput}
      name={'searchInput'}
      style={styles.searchInput}
      onChangeText={text => setSearchInput(text)}
    />
    <ScrollView
      style={{ height: '100%' }}
    // refreshControl={
    //   <RefreshControl
    //     refreshing={isLoading}
    //     onRefresh={() => setCryptoQuantity(cryptoQuantity)}
    //   />
    // }
    >
      {this.renderWalletsRows()}
      {!searchInput ?
        <Button
          icon='plus'
          contentStyle={styles.moreButton}
          onPress={() => this.handleWalletCard()}
        >
          Add Wallet
        </Button> : null
      }
    </ScrollView>
    {openCard ?
      <WalletCard
        open={openCard}
        handleWalletCard={this.handleWalletCard}
        item={wallet}
      /> : null
    }
  </View >
  )
}

const styles = StyleSheet.create({
  backgroundColor: {
    color: '#000000'
  },
  topContainer: {
    backgroundColor: '#ecf0f1'
  },
  moreButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 70,
    marginBottom: 70
  }
});

export default Wallet
