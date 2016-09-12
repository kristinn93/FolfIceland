/* @flow */
import React, {Component} from 'react'
import {AppRegistry} from 'react-native'
import App from './src'
import Discovery from './src/ios/BLE'

Discovery()

class FolfIceland extends Component {
  render() {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('FolfIceland', () => FolfIceland)
