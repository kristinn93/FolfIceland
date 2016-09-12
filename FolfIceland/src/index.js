/* @flow */
import React, {Component} from 'react'
import Relay, {DefaultNetworkLayer} from 'react-relay'
import {Router, Scene} from 'react-native-router-flux'

import {DeviceEventEmitter} from 'react-native'
import Discovery from 'react-native-discovery'
const discoveryUUID = '80dbd6ce-4f4c-4d90-a7ec-eea8a138e830'

import CourseListContainer from './components/CourseListContainer'
import CourseDetailsContainer from './components/CourseDetailsContainer'
import CourseMapContainer from './components/CourseMapContainer'
import LogCourse from './components/LogCourse'

Relay.injectNetworkLayer(new DefaultNetworkLayer('http://api.folf.tech/graphql'))

export default class FolfIceland extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="courses" component={CourseListContainer} title="Courses" />
          <Scene key="course" component={CourseDetailsContainer} title="Course" />
          <Scene key="courseMap" component={CourseMapContainer} title="Course" />
          <Scene key="logCourse" component={LogCourse} title="Log Course" />
        </Scene>
      </Router>
    )
  }
}

// Discovery with react-native-discovery

Discovery.initialize(
  discoveryUUID,
  'FolfUser'
)

Discovery.setShouldAdvertise(true)
Discovery.setShouldDiscover(true)

DeviceEventEmitter.addListener(
  'discoveredUsers',
  (data) => {
    if (data.uuid === discoveryUUID) {
      if (data.didChange || data.usersChanged) {
        // slight callback discrepancy between the iOS and Android libraries
        console.log('Found users')
        console.log(data.users)
      }
    }
  }
)

// Listen for bluetooth state changes
DeviceEventEmitter.addListener(
  'bleStateChanged',
  (event) => {
    console.log('BLE is on: ')
    console.log(event.isOn)
  }
)
