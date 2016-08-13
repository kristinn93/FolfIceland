/* @flow */
import React, {Component} from 'react'
import {AppRegistry, StyleSheet, Text, View} from 'react-native'
import {RootContainer} from 'react-relay'

import CourseList from './src/components/Course'
import CoursesRoute from './src/routes/Courses'

import setupRelay from './src/utils/relay'

class FolfIceland extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RootContainer
          Component={CourseList}
          route={new CoursesRoute()}
          renderFetched={(data) => <CourseList {...this.props} {...data} />}
        />
        <Text style={styles.welcome}>
          Welcome to React Native
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

setupRelay()
AppRegistry.registerComponent('FolfIceland', () => FolfIceland)
