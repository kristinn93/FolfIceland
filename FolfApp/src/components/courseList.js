import React from 'react';
import {gql, graphql} from 'react-apollo';
import {app as CourseListRe} from '../../lib/js/folfApp/src/components/courseList.js';

class CourseList extends React.Component {
  static navigationOptions = {
    title: 'Course List',
  };
  render() {
    return (
      <CourseListRe
        courses={
          this.props.data &&
          this.props.data.folf &&
          this.props.data.folf.courses
        }
        navigate={(destination, route) =>
          this.props.navigation.navigate(destination, route)}
      />
    );
  }
}

export default graphql(gql`
  query {folf {courses {name}}}
`)(CourseList);
