/* @flow */
import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import MapView from 'react-native-maps'
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
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={mapRegion}
          showsUserLocation
        >
          <MapView.Marker
            coordinate={{latitude: course.location.lat, longitude: course.location.long}}
          />
        </MapView>
        <View style={styles.info}>
          <Text style={styles.name}>{course.name}</Text>
          <Text style={styles.metadata}>{course.city}</Text>
          <Text style={styles.metadata}>Number of baskets:
            <Text style={styles.metadataAttribute}> {course.numberOfBaskets}</Text>
          </Text>
          {course.numberOfBaskets !== 0 && <Text style={styles.par}>Par</Text>}
          {course.par.red && course.par.red !== 0 &&
            <Text style={styles.metadata}>Red:
              <Text style={styles.metadataAttribute}> {course.par.red}</Text>
            </Text>
          }
          {course.par.white && course.par.white !== 0 &&
            <Text style={styles.metadata}>White:
              <Text style={styles.metadataAttribute}> {course.par.white}</Text>
            </Text>
          }
          {course.par.blue && course.par.blue !== 0 &&
            <Text style={styles.metadata}>Blue:
              <Text style={styles.metadataAttribute}> {course.par.blue}</Text>
            </Text>
          }
        </View>
        <TouchableHighlight onPress={() => {}}>
          <Text style={styles.button} >Play this course</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFBFF',
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  map: {
    flex: 1,
  },
  info: {
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
  },
  metadata: {
    fontSize: 14,
  },
  metadataAttribute: {
    fontWeight: 'bold',
  },
  par: {
    fontSize: 18,
  },
  button: {
    color: '#FBFBFF',
    backgroundColor: '#01BAEF',
    padding: 10,
    fontSize: 24,
    textAlign: 'center',
    alignSelf: 'stretch',
    flex: 3,
  },
})

export default Relay.createContainer(CourseDetails, {
  fragments: {
    course: () => Relay.QL`
      fragment on Course {
        name
        city
        numberOfBaskets
        location {lat long}
        par {red white blue}
      }
    `,
  },
})
