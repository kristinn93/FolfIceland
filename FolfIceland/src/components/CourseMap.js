/* @flow */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import MapView from 'react-native-maps'
import Relay from 'react-relay'
import CourseMarker from './CourseMarker'

import type {Course as CourseType} from '../../../server/schemas/flow/course'
type Props = {
  course: CourseType,
}

class CourseMap extends Component<void, Props, void> {
  props: Props

  _findEdgeCoordinates(baskets) {
    const longitudes = [].concat.apply([], baskets.map((basket) => {
      const {red, white, blue} = basket.teePads
      return [red && red.location.long, white && white.location.long, blue && blue.location.long]
    })).filter((v) => v !== null)
    const latitudes = [].concat.apply([], baskets.map((basket) => {
      const {red, white, blue} = basket.teePads
      return [red && red.location.lat, white && white.location.lat, blue && blue.location.lat]
    })).filter((v) => v !== null)
    const maxLat = Math.max(...latitudes)
    const minLat = Math.min(...latitudes)
    const maxLong = Math.max(...longitudes)
    const minLong = Math.min(...longitudes)
    return [
      (maxLat + minLat) / 2,
      (maxLong + minLong) / 2,
      maxLat - minLat + 0.001,
      maxLong - minLong + 0.001,
    ]
  }

  render() {
    const {course} = this.props
    const [lat, long, deltaLat, deltaLong] = this._findEdgeCoordinates(course.baskets)
    const mapRegion = {
      latitude: lat,
      longitude: long,
      latitudeDelta: deltaLat,
      longitudeDelta: deltaLong,
    }
    const redTeePads = course.baskets.map(
      (basket) => basket.teePads.red && {...basket.teePads.red, number: basket.number}
    ).filter((v) => v !== null)
    const whiteTeePads = course.baskets.map(
      (basket) => basket.teePads.white && {...basket.teePads.white, number: basket.number}
    ).filter((v) => v !== null)
    const blueTeePads = course.baskets.map(
      (basket) => basket.teePads.blue && {...basket.teePads.blue, number: basket.number}
    ).filter((v) => v !== null)
    const basketLocations = course.baskets.map((basket) => {
      return {location: basket.location, number: basket.number}
    })
    return (
      <View style={styles.container}>
        <MapView
          mapType="hybrid"
          style={styles.map}
          initialRegion={mapRegion}
          showsUserLocation
        >
          {redTeePads.map((teePad) => {
            return (
              <MapView.Marker
                key={teePad.location.lat + teePad.location.long}
                coordinate={{latitude: teePad.location.lat, longitude: teePad.location.long}}
              >
                <CourseMarker
                  key={teePad.location.lat + teePad.location.long}
                  color="#FF6666"
                  courseNumber={teePad.number}
                />
              </MapView.Marker>
            )
          })}
          {whiteTeePads.map((teePad) => {
            return (
              <MapView.Marker
                key={teePad.location.lat + teePad.location.long}
                coordinate={{latitude: teePad.location.lat, longitude: teePad.location.long}}
              >
                <CourseMarker
                  key={teePad.location.lat + teePad.location.long}
                  color="#FBFBFF"
                  courseNumber={teePad.number}
                />
              </MapView.Marker>
            )
          })}
          {blueTeePads.map((teePad) => {
            return (
              <MapView.Marker
                key={teePad.location.lat + teePad.location.long}
                coordinate={{latitude: teePad.location.lat, longitude: teePad.location.long}}
              >
                <CourseMarker
                  key={teePad.location.lat + teePad.location.long}
                  backgroundColor="#01BAEF"
                  courseNumber={teePad.number}
                />
              </MapView.Marker>
            )
          })}
          {basketLocations.map((basket) => {
            return (
              <MapView.Marker
                key={basket.location.lat + basket.location.long}
                coordinate={{latitude: basket.location.lat, longitude: basket.location.long}}
              >
                <CourseMarker
                  key={basket.location.lat + basket.location.long}
                  backgroundColor="#20BF55"
                  color="#FBFBFF"
                  borderColor="#137233"
                  courseNumber={basket.number}
                />
              </MapView.Marker>
            )
          })}
        </MapView>
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
})

export default Relay.createContainer(CourseMap, {
  fragments: {
    course: () => Relay.QL`
      fragment on Course {
        baskets {
          number
          teePads {
            red {par location {lat long}}
            white {par location {lat long}}
            blue {par location {lat long}}
          }
          location {lat long}
        }
      }
    `,
  },
})
