import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import { getTopCurrencyByMarketCap } from "../../api/api"
import Card from "../../components/card/card"
export default class Dashboard extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: false,
      cryptoQuantity: 10
    }
  }


  componentDidMount = () => {
    const { cryptoQuantity } = this.state
    this.getTopListData(cryptoQuantity)
  }

  handleInputs = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  getTopListData = (top) => {
    this.setState({
      isLoading: true,
    }, async () => {
      const response = await getTopCurrencyByMarketCap("USD", top)
      this.setState({
        data: response.data.Data,
      }, () => this.setState({
        isLoading: false
      }))
    })
  }


  renderRows = () => {
    const data = this.state.data.map((item, key) => {
      return (
        <Card
          key={key}
          name={item.CoinInfo.Name}
          subName={item.CoinInfo.FullName}
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

  render() {
    const { isLoading } = this.state
    return (
      <View style={styles.container}>
        <View>
          <ScrollView>
            {this.renderRows()}
            <Button
              buttonStyle={styles.moreButton}
              onPress={this.handleLoadMore}
              loading={isLoading}
              title="more">
            </Button>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    color: '#ecf0f1'
  },
  title: {
    flex: 1,
    justifyContent: "center",
    fontSize: 14,
    fontWeight: 'bold',
  },
  picker: {
    height: 50,
    width: 100
  },
  moreButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 70,
    width: 70,
    borderRadius: 50,
    borderWidth: 1,
    margin: 10
  }
});
