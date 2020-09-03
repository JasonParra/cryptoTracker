import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native';
import { Searchbar, Button } from 'react-native-paper'
import { getCryptos } from "../../redux/actions/crypto"
import RowTop from "../../components/row-top"
import CoinCard from '../../components/coin-card'
import { useDispatch, useSelector } from 'react-redux'


function Top() {

  const [isLoading, setIsLoading] = useState(true)
  const [cryptoQuantity, setCryptoQuantity] = useState(10)
  const [searchInput, setSearchInput] = useState('')
  const [openDetail, setOpenDetail] = useState(false)
  const [coin, setCoin] = useState({})
  const cryptos = useSelector(state => state.crypto.cryptos)
  const followingCoins = useSelector(state => state.crypto.followingCoins)
  const dispatch = useDispatch()

  useEffect(() => {
    setIsLoading(true)
    dispatch(getCryptos("USD", cryptoQuantity))
    setIsLoading(false)
  }, [cryptoQuantity])

  handleCoinCard = (e, item) => {
    e.preventDefault()
    e.stopPropagation()
    setOpenDetail(!openDetail)
    setCoin(item)
  }

  renderCryptosRows = () => {
    let cryptosFiltered = []

    if (searchInput) {
      const re = new RegExp('\w*' + searchInput.toLocaleLowerCase() + '\w*');
      cryptosFiltered = cryptos.filter(item => (item.CoinInfo.Name.toLocaleLowerCase()).match(re)
        || item.CoinInfo.FullName.toLocaleLowerCase().match(re))
    }

    return (searchInput ? cryptosFiltered : cryptos).map((item, index) => {
      return (
        <RowTop
          onPress={(e) => this.handleCoinCard(e, item)}
          key={index}
          name={item.CoinInfo.Name}
          fullName={item.CoinInfo.FullName}
          price={item.DISPLAY.USD.PRICE}
          changePtc24={item.DISPLAY.USD.CHANGEPCT24HOUR}
          uri={"https://www.cryptocompare.com" + item.CoinInfo.ImageUrl}
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
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={() => setCryptoQuantity(cryptoQuantity)}
        />
      }>
      {this.renderCryptosRows()}
      {!searchInput ?
        <Button
          contentStyle={styles.moreButton}
          onPress={() => setCryptoQuantity(cryptoQuantity + 10)}
        >
          Ver Mas
        </Button> : null
      }
    </ScrollView>
    {openDetail ?
      <CoinCard
        open={openDetail}
        handleCoinCard={this.handleCoinCard}
        item={coin}
        following={followingCoins.includes(coin)}
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

export default Top
