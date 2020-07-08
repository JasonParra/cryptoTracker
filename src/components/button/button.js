import React from 'react'
import { Button } from 'react-native-paper';

function button(props) {
  return (
    <div>
      <Button onPress={props.onPress}>{props.text}</Button>
    </div>
  )
}

export default button
