/* @flow */
import React, {Component} from 'react'
import Relay, {DefaultNetworkLayer} from 'react-relay'
import {Router, Scene} from 'react-native-router-flux'

import CourseListContainer from './components/CourseListContainer'
import CourseDetailsContainer from './components/CourseDetailsContainer'
import CourseMapContainer from './components/CourseMapContainer'
import LogCourse from './components/LogCourse'

Relay.injectNetworkLayer(new DefaultNetworkLayer('http://104.236.229.101/graphql'))

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
