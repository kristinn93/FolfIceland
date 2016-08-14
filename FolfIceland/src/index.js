/* @flow */
import React, {Component} from 'react'
import Relay, {DefaultNetworkLayer} from 'react-relay'
import {Router, Scene} from 'react-native-router-flux'

import CourseListContainer from './components/CourseListContainer'
import CourseContainer from './components/CourseContainer'

Relay.injectNetworkLayer(new DefaultNetworkLayer('http://localhost:3000/graphql'))

export default class FolfIceland extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="courses" component={CourseListContainer} title="Courses" />
          <Scene key="course" component={CourseContainer} title="Course" />
        </Scene>
      </Router>
    )
  }
}
