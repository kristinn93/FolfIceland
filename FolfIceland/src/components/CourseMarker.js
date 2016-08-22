/* @flow */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

class CourseMarker extends Component {
  render() {
    const {backgroundColor, color, borderColor} = this.props
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.bubble,
            {backgroundColor: backgroundColor || '#D6D6D6', borderColor: borderColor || '#757575'},
          ]}
        >
          <Text style={[styles.courseNumber, {color: color || '#FF5454'}]}>{this.props.courseNumber}</Text>
        </View>
        <View style={[styles.arrowBorder, {borderTopColor: borderColor || '#757575'}]} />
        <View style={styles.arrow} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#D6D6D6',
    padding: 3,
    borderRadius: 3,
    borderColor: '#757575',
    borderWidth: 0.5,
  },
  courseNumber: {
    color: '#FFFFFF',
    fontSize: 13,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: 'transparent',
    alignSelf: 'center',
    marginTop: -9,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopColor: '#757575',
    alignSelf: 'center',
    marginTop: -0.5,
  },
})

export default CourseMarker
