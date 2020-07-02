import React from 'react';
import PropTypes from 'prop-types'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';


const card = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.card} >
        <View style={styles.itemHorizontal}>
          <Image
            style={styles.icon}
            source={{ uri: props.uri }}
          />
          <View styles={styles.itemVertical}>
            <Text style={styles.fullName}>{props.fullName}</Text>
            <Text style={styles.name}>{props.name}</Text>
          </View>
        </View>
        <View styles={styles.itemVertical}>
          <Text style={styles.price}>{props.price}</Text>
          <Text style={props.changePtc24 > 0 ? styles.changePtc24Positive : styles.changePtc24Negative}>
            {props.changePtc24 + "%"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

card.propTypes = {
  uri: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
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
    width: 35,
    height: 35,
  },
  price: {
    fontWeight: '600',
    fontFamily: 'Roboto'
  },
  changePtc24Positive: {
    alignSelf: 'flex-end',
    marginTop: 4,
    fontWeight: '300',
    fontFamily: 'Roboto',
    color: '#2ecc71'
  },
  changePtc24Negative: {
    alignSelf: 'flex-end',
    marginTop: 4,
    fontWeight: '300',
    fontFamily: 'Roboto',
    color: '#cc0000'
  },
  name: {
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

export default card;