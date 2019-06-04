import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import {getRequest} from "../../api/api"
import axios from "axios"

// const list = [
//   {
//     name: 'Amy Farha',
//     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//     subtitle: 'Vice President'
//   },
//   {
//     name: 'Chris Jackson',
//     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//     subtitle: 'Vice Chairman'
//   }
// ]

export default class DashboardList extends React.Component {
  
  constructor(){
    super();
    this.state={
      data:{}
    }
  }


  componentDidMount= async ()=>{
    await this.getData()
  }

  getData = ()=>{
    axios.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR&api_key={e49f0c3d16d1d870dd7935b2964b0439059d9bd1601ecb1c64950a102f04ce6b}")
    .then(response=>{
      console.log(response.data)
      this.setState({
        data: response.data
      })
    })
  }

  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.state.data)}</Text>
         {/* {
          list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
              subtitle={l.subtitle}
            />
            ))
          } */}
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
