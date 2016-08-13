/* @flow */
import React, {Component} from 'react'
import {Text} from 'react-native'
import Relay from 'react-relay'

class CourseList extends Component {
  render() {
    const {courses} = this.props.courses
    return (
      <Text>name: {courses.map(c => c.name)}</Text>
    )
  }
}

export default Relay.createContainer(CourseList, {
  fragments: {
    courses: () => Relay.QL`
      fragment on Folf {
        courses(query: "klambra") {
          name
        }
      }
    `,
  },
})
