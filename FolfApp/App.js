import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {comp as Root} from './lib/js/src/Root.js';

export default class App extends React.Component {
  render() {
    return <Root message="Hello world" />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
