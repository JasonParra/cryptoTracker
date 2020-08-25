import React from 'react'
import { Button } from 'react-native-paper';

const button = (props) => {
  return (
    <div>
      <Button icon={props.icon} onPress={props.onPress}>{props.text}</Button>
    </div>
  )
}

export default button
