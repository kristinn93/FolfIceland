/* @flow */
import React, {Component} from 'react'
import {
  MapView,
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
    const mapRegion = {
      latitude: parseFloat(course.location.lat),
      longitude: parseFloat(course.location.long),
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }
    return (
      <View>
        <MapView
          style={styles.map}
          region={mapRegion}
          annotations={[{latitude: course.location.lat, longitude: course.location.long}]}
          showsUserLocation
        />
        <Text>Name: {course.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    height: 450,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
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
