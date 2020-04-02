import React from 'react';
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native';
import { TextInput, Button } from 'react-native-paper'
import { getTopCurrencyByMarketCap } from "../../api/api"
import Card from "../../components/card/card"
import NavigateBar from '../../components/navigate-bar/navigate-bar'
import CoinDetail from '../../components/coin-detail/coin-detail'

export default class Dashboard extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      dataCopy: [],
      isLoading: false,
      cryptoQuantity: 10,
      searchInput: '',
      openDetail: false,
      detailData: {}
    }
  }

  componentDidMount = () => {
    const { cryptoQuantity } = this.state
    this.getTopListData(cryptoQuantity)
  }


  getTopListData = (top) => {
    this.setState({
      isLoading: true,
    }, async () => {
      const response = await getTopCurrencyByMarketCap("USD", top)
      this.setState({
        data: response.data.Data,
        dataCopy: response.data.Data
      }, () => this.setState({
        isLoading: false
      }))
    })
  }

  handleCoinDetail = (e, item) => {
    this.setState({
      openDetail: !this.state.openDetail,
      detailData: item ? {
        name: item.CoinInfo.Name,
        fullName: item.CoinInfo.FullName,
        uri: "https://www.cryptocompare.com" + item.CoinInfo.ImageUrl
      } : {}
    })
  }


  renderRows = () => {
    const data = this.state.data.map((item, index) => {
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
    return data;
  }

  handleLoadMore = () => {
    this.setState({
      cryptoQuantity: this.state.cryptoQuantity + 10
    }, () => {
      this.getTopListData(this.state.cryptoQuantity)
    })
  }

  handleRefresh = () => {
    this.getTopListData(this.state.cryptoQuantity)
  }

  handleInputs = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    }, () => {
      if (name === 'searchInput')
        this.handleSearch()
    })
  }

  handleSearch = () => {
    const { searchInput, dataCopy } = this.state
    if (searchInput) {
      const re = new RegExp('\w*' + searchInput.toLocaleLowerCase() + '\w*');
      this.setState({
        data: dataCopy.filter(item => (item.CoinInfo.Name.toLocaleLowerCase()).match(re)
          || item.CoinInfo.FullName.toLocaleLowerCase().match(re))
      })
    }
    else this.setState({
      data: dataCopy
    })
  }

  renderTopScene = () => {
    const { isLoading, searchInput, openDetail, detailData } = this.state
    return (<View >
      <TextInput
        label={'search'}
        value={searchInput}
        name={'searchInput'}
        style={styles.searchInput}
        onChangeText={text => this.handleInputs({ target: { name: 'searchInput', value: text } })}
      />

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={this.handleRefresh}
          />
        }
      >
        {this.renderRows()}
        <Button
          buttonStyle={styles.moreButton}
          onPress={this.handleLoadMore}
          title="more">
        </Button>
      </ScrollView>
      <CoinDetail
        open={openDetail}
        handleCoinDetail={this.handleCoinDetail}
        {...detailData}
      />
    </View >
    )
  }

  render() {
    return (
      <NavigateBar
        TopScene={
          this.renderTopScene()
        }
      />
    );
  }
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
    backgroundColor: '#bdc3c7',
    color: '#000000',
    alignSelf: 'center',
    height: 70,
    width: 70,
    borderRadius: 50,
    borderWidth: 1,
    margin: 10
  }
});
