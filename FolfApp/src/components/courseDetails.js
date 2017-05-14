import React from 'react';
import {Linking, Platform} from 'react-native';
import {gql, graphql} from 'react-apollo';
import {
  comp as CourseDetailsRe,
} from '../../lib/js/src/components/courseDetails.js';

class CourseDetail extends React.Component {
  static navigationOptions = {
    title: 'Course Details',
  };
  redirectToMap(location) {
    if (Platform.OS === 'ios') {
      Linking.canOpenURL(
        `http://maps.apple.com/?daddr=${location.lat},${location.long}`
      )
        .then(supported => {
          if (supported) {
            Linking.openURL(
              `http://maps.apple.com/?daddr=${location.lat},${location.long}`
            );
          } else {
            console.log("Don't know how to go");
          }
        })
        .catch(err => console.error('An error occurred', err));
    } else {
      Linking.canOpenURL(`geo:${location.lat},${location.long}`)
        .then(supported => {
          if (supported) {
            Linking.openURL(`geo:${location.lat},${location.long}`);
          } else {
            console.log("Don't know how to go");
          }
        })
        .catch(err => console.error('An error occurred', err));
    }
  }

  render() {
    return (
      <CourseDetailsRe
        course={this.props.data && this.props.data.course}
        loading={this.props.data && this.props.data.loading}
        openMaps={location => this.redirectToMap(location)}
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
