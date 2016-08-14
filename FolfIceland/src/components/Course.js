/* @flow */
import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Relay from 'react-relay'

import type {Course as CourseType} from '../../../server/schemas/flow/course'
type Props = {
  course: CourseType,
}

class CourseDetails extends Component<void, Props, void> {
  props: Props

  render() {
    const {course} = this.props
    return (
      <View>
        <Text>Name: {course.name}</Text>
        <Text>Location: {'{lat: '}{course.location.lat} long: {course.location.long}}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
})

export default Relay.createContainer(CourseDetails, {
  initialVariables: {
    query: '',
  },

  fragments: {
    course: () => Relay.QL`
      fragment on Course {
        name
        location {
          lat
          long
        }
      }
    `,
  },
})
