/* @flow */
import React, {Component} from 'react'
import Relay, {DefaultNetworkLayer} from 'react-relay'
import {Router, Scene} from 'react-native-router-flux'

import CourseListContainer from './components/CourseListContainer'
import CourseContainer from './components/CourseContainer'
import LogCourse from './components/LogCourse'

Relay.injectNetworkLayer(new DefaultNetworkLayer('http://localhost:3000/graphql'))

export default class FolfIceland extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="courses" component={CourseListContainer} title="Courses" />
          <Scene key="course" component={CourseContainer} title="Course" />
          <Scene key="logCourse" component={LogCourse} title="Log Course" />
        </Scene>
      </Router>
    )
  }
}
