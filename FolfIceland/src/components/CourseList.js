/* @flow */
import React, {Component} from 'react'
import {
  ListView,
  RecyclerViewBackedScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import {Actions} from 'react-native-router-flux'
import Relay from 'react-relay'

import type {Course} from '../../../server/schemas/flow/course'
type Props = {
  courses: Array<Course>,
}

class CourseList extends Component<void, Props, void> {

  props: Props

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    const {courses} = this.props.courses
    for (let i = 0; i < 10; i++) {
      courses.push(courses[0])
    }
    return (
      <ListView
        dataSource={ds.cloneWithRows(courses)}
        renderRow={this._renderRow}
        renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
        renderSeparator={this._renderSeparator}
      />
    )
  }

  _renderRow(
    rowData: Course, sectionID: number, rowID: number,
    highlightRow: (sectionID: number, rowID: number) => void
  ) {
    return (
      <TouchableHighlight
        onPress={() => {
          Actions.course()
          highlightRow(sectionID, rowID)
        }}
      >
        <View>
          <View style={styles.row}>
            <Text style={styles.text}>
              {rowData.name}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: adjacentRowHighlighted ? 4 : 1,
          backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  text: {
    flex: 1,
  },
})

export default Relay.createContainer(CourseList, {
  fragments: {
    courses: () => Relay.QL`
      fragment on Folf {
        courses(query: "") {
          name
        }
      }
    `,
  },
})
