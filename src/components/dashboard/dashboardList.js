import React from 'react';
import { StyleSheet, Text, View,ScrollView,Picker } from 'react-native';
import { Card,ListItem,Header,Input } from 'react-native-elements'
import {getTopCurrencyByMarketCap} from "../../api/api"

export default class DashboardList extends React.Component {
  
  constructor(){
    super();
    this.state={
      data:{},
      quantityList:10,
      isLoading:true,
      pickerQuantityVale:10
    }
  }


  componentDidMount= ()=>{
  const {quantityList} = this.state
  this.getTopListData(quantityList)
  }

  handleInputs =(e)=>{
    const {name,value}=e.target
    this.setState({
      [name]:value
    })
  }

  handlePicker =(data)=>{
    this.setState({
      pickerQuantityVale:data,
      isLoading:true
    },()=>{this.getTopListData(this.state.pickerQuantityVale)})
  }

  getTopListData=async (top)=>{
    const response = await getTopCurrencyByMarketCap("USD",top)
    await this.setState({
      data:response.data,
    },()=>this.setState({
      isLoading:false
    }))
  } 


  renderRows =()=>{
    const data = this.state.data.Data.map(item=>{
      return (
        <Card key={item.CoinInfo.Name}>
          <ListItem
          key={item.CoinInfo.Name}
          title={item.CoinInfo.Name}
          subtitle={item.CoinInfo.FullName}
          rightTitle={item.DISPLAY.USD.PRICE}  
          leftAvatar={{source:{uri: "https://www.cryptocompare.com" + item.CoinInfo.ImageUrl}}}
          />
        </Card >

      )
    }) 

      return data;
  }

  render() {
    const {quantityList,isLoading} = this.state
    return (
      <View >
        <Header
          placement="left"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={
          <Picker 
          name='pickerQuantityVale'
          style={styles.picker} 
          selectedValue={this.state.pickerQuantityVale} 
          onValueChange={this.handlePicker} >
            <Picker.Item label = " 10" value = "10" />
            <Picker.Item label = " 20" value = "20" />
            <Picker.Item label = " 50" value = "50" />
            <Picker.Item label = " 100" value = "100" />
            <Picker.Item label = " 500" value = "500" />

          </Picker>
          }
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
      {!isLoading?
      <View>
      <Text style={styles.title}>Top {quantityList} List </Text>
      <ScrollView>
      {this.renderRows()}
      </ScrollView>  
      </View>
      :null}
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container:{

  },

  title:{
    flex:1,
    justifyContent:"center",
    fontSize:14,
    fontWeight: 'bold',
  },
  picker:{
    height: 50, 
    width: 100
  }

});
