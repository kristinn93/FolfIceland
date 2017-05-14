import React from 'react';

import {gql, graphql} from 'react-apollo';
import {
  comp as CourseDetailsRe,
} from '../../lib/js/src/components/courseDetails.js';

class CourseDetail extends React.Component {
  static navigationOptions = {
    title: 'Course Details',
  };
  render() {
    return (
      <CourseDetailsRe
        course={this.props.data && this.props.data.course}
        loading={this.props.data && this.props.data.loading}
      />
    );
  }
}

export default graphql(
  gql`
  query Courses($name: String!){
  course(name: $name) {
    name
    city
    location {
      lat
      long
    }
    numberOfBaskets
    par {
      red
      white
      blue
    }
  }
}
`,
  {
    options: ownProps => ({
      variables: {
        name: ownProps.navigation.state.params.name,
      },
    }),
  }
)(CourseDetail);
