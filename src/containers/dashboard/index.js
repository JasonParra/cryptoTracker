import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native';
import { TextInput, Button } from 'react-native-paper'
import { getCryptos } from "../../redux/actions/crypto"
import Card from "../../components/card"
import NavigateBar from '../../components/navigate-bar'
import CoinDetail from '../../components/coin-detail'
import { useDispatch, useSelector } from 'react-redux'

function Dashboard() {

  const [isLoading, setIsLoading] = useState(false)
  const [cryptoQuantity, setCryptoQuantity] = useState(10)
  const [searchInput, setSearchInput] = useState('')
  const [openDetail, setOpenDetail] = useState(false)
  const [detailData, setDetailData] = useState({})
  const data = useSelector(state => state.cryptos.cryptos)
  const dataCopy = useSelector(state => state.cryptos.cryptos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCryptos("USD", cryptoQuantity))
  }, [cryptoQuantity])

  handleCoinDetail = (e, item) => {
    setOpenDetail(!openDetail)
    setDetailData(item ? {
      name: item.CoinInfo.Name,
      fullName: item.CoinInfo.FullName,
      algo: item.CoinInfo.Algorithm,
      uri: "https://www.cryptocompare.com" + item.CoinInfo.ImageUrl
    } : {}
    )
  }

  renderRows = () => {
    return (data ? data.data.Data : []).map((item, index) => {
      return (
        <Card
          onPress={(e) => this.handleCoinDetail(e, item)}
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


  handleSearchInput = (e) => {
    const { name, value } = e.target
    setSearchInput(value)
    this.handleSearch(value)
  }


  handleSearch = (value) => {
    if (value) {
      const re = new RegExp('\w*' + searchInput.toLocaleLowerCase() + '\w*');
      setData(dataCopy.filter(item => (item.CoinInfo.Name.toLocaleLowerCase()).match(re)
        || item.CoinInfo.FullName.toLocaleLowerCase().match(re)))
    }
    else setData(dataCopy)
  }

  renderTopScene = () => {
    return (<View >
      <TextInput
        label={'search'}
        value={searchInput}
        name={'searchInput'}
        style={styles.searchInput}
        onChangeText={text => this.handleSearchInput({ target: { name: 'searchInput', value: text } })}
      />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => setCryptoQuantity(cryptoQuantity)}
          />
        }>
        {this.renderRows()}
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
        <CoinDetail
          open={openDetail}
          handleCoinDetail={this.handleCoinDetail}
          {...detailData}
        /> : null
      }

    </View >
    )
  }

  return (
    <NavigateBar
      TopScene={
        this.renderTopScene()
      }
    />
  );
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
    // backgroundColor: '#bdc3c7',
    // color: '#000000',
    alignSelf: 'center',
    // height: 70,
    // width: 70,
    // borderRadius: 50,
    // borderWidth: 1,
    // margin: 10,
    height: 70,
    marginBottom: 70
  }
});

export default Dashboard;

