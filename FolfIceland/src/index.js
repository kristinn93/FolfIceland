/* @flow */
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import Relay, {DefaultNetworkLayer, RootContainer} from 'react-relay'

import CourseList from './components/CourseList'
import CoursesRoute from './routes/Courses'

Relay.injectNetworkLayer(new DefaultNetworkLayer('http://localhost:3000/graphql'))

export default class FolfIceland extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RootContainer
          Component={CourseList}
          route={new CoursesRoute()}
          renderFetched={(data) => <CourseList {...this.props} {...data} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
})
