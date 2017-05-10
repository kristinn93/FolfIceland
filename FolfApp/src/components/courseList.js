import React from 'react';
import { View, Button } from 'react-native'; //TODO REMOVE ME
import { gql, graphql } from 'react-apollo';
import {
  comp as CourseListRe,
} from '../../lib/js/src/components/courseList.js';

class CourseList extends React.Component {
  static navigationOptions = {
    title: 'Course List',
  };
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('play')}
          title="PlayScreen"
        />
        <CourseListRe
          courses={
            this.props.data &&
              this.props.data.folf &&
              this.props.data.folf.courses
          }
          navigate={(destination, route) =>
            this.props.navigation.navigate(destination, route)}
        />
      </View>
    );
  }
}

export default graphql(gql`
  query {folf {courses {name}}}
`)(CourseList);
