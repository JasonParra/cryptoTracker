import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native';
import { Searchbar } from 'react-native-paper'
import RowFollow from '../../components/row-follow'
import CoinCard from '../../components/coin-card'
import { useSelector } from 'react-redux'

function Follow() {

  const followingCoins = useSelector(state => state.crypto.followingCoins)
  const [searchInput, setSearchInput] = useState('')
  const [openDetail, setOpenDetail] = useState(false)
  const [coin, setCoin] = useState({})


  handleCoinCard = (e, item) => {
    e.preventDefault()
    e.stopPropagation()
    setOpenDetail(!openDetail)
    setCoin(item)
  }

  refresh = () => {

  }

  renderFollowRows = () => {
    let cryptosFiltered = []

    if (searchInput) {
      const re = new RegExp('\w*' + searchInput.toLocaleLowerCase() + '\w*');
      cryptosFiltered = followingCoins.filter(item => (item.CoinInfo.Name.toLocaleLowerCase()).match(re)
        || item.CoinInfo.FullName.toLocaleLowerCase().match(re))
    }

    return (searchInput ? cryptosFiltered : followingCoins).map((item, index) => {
      return (
        <RowFollow
          onPress={(e) => this.handleCoinCard(e, item)}
          key={index}
          name={item.CoinInfo.Name}
          price={item.DISPLAY.USD.PRICE}
          uri={"https://www.cryptocompare.com" + item.CoinInfo.ImageUrl}
        />
      )
    })
  }

  return (
    <View >
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
            onRefresh={() => this.refresh()}
          />
        }>
        {this.renderFollowRows()}
      </ScrollView>
      {openDetail ?
        <CoinCard
          open={openDetail}
          handleCoinCard={this.handleCoinCard}
          item={coin}
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


export default Follow

