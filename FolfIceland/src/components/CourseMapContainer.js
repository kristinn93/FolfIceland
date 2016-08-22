/* @flow */
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {RootContainer} from 'react-relay'

import CourseMap from './CourseMap'
import CourseRoute from '../routes/Course'

export default class CourseContainer extends Component {
  render() {
    const {navigationState} = this.props
    return (
      <View style={styles.container}>
        <RootContainer
          Component={CourseMap}
          route={new CourseRoute({query: navigationState.query})}
          renderFetched={(data) => <CourseMap {...this.props} {...data} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
})
