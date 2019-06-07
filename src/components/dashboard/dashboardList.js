import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import {cryptoToCurrency,getTopCurrencyByMarketCap} from "../../api/api"

export default class DashboardList extends React.Component {
  
  constructor(){
    super();
    this.state={
      data:{},
      quantityList:10,
      isLoading:true
    }
  }


  componentDidMount= async ()=>{
  const {quantityList} = this.state
   const response = await getTopCurrencyByMarketCap("USD",quantityList)
   await this.setState({
     data:response.data,
   },()=>console.log(this.state.data))
  }

  renderRows =()=>{
    const data = Array.isArray(this.state.data.Data) ? this.state.data.Data.map(item=>{
      return (<View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:300}}>
        <Text>{item.CoinInfo.FullName}</Text>
        <Text>{item.DISPLAY.USD.PRICE}</Text>
      </View>)
    }) : <View></View>

    return data;
  }

  render() {
    const {quantityList} = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Top {quantityList} List </Text>
         {
          this.renderRows()
        } 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    display:"flex",
    justifyContent:"center",
    fontSize:14,
    marginBottom:50,
  }
});
