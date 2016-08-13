/* @flow */
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {RootContainer} from 'react-relay'

import CourseList from './CourseList'
import CoursesRoute from '../routes/Courses'

export default class CourseContainer extends Component {
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
    marginTop: 65,
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
})
