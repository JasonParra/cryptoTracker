import React from 'react';
import PropTypes from 'prop-types'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';


const WalletCoin = (props) => {
  const { key, onPress, uri, fullName, amount, totalValue } = props

  return (
    <TouchableOpacity key={key} style={styles.container} onPress={onPress}>
      <View style={styles.card} >
        <View style={styles.itemHorizontal}>
          <Image
            style={styles.icon}
          // source={{ uri: uri }}
          />
          <View styles={styles.itemVertical}>
            <Text style={styles.fullName}>{fullName}</Text>
            <Text style={styles.quantity}>{amount}</Text>
          </View>
        </View>
        <View styles={styles.itemVertical}>
          <Text style={styles.amount}>{totalValue}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

WalletCoin.propTypes = {
  uri: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  totalValue: PropTypes.string.isRequired,
  Key: PropTypes.number
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  card: {
    borderColor: '#ddd',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 70
  },
  itemHorizontal: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemVertical: {
    flex: 1,
    flexDirection: 'column'
  },
  icon: {
    width: 100,
    height: 100,
  },
  amount: {
    fontWeight: '600',
    fontFamily: 'Roboto'
  },
  quantity: {
    marginLeft: 15,
    marginTop: 5,
    fontWeight: '300',
    fontFamily: 'Roboto'
  },
  fullName: {
    marginLeft: 15,
    fontWeight: '600',
    fontFamily: 'Roboto'
  }
});

export default WalletCoin;