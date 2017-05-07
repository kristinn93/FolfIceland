import React from 'react';
import { Text, View } from 'react-native';

import { gql, graphql } from 'react-apollo';

class CourseDetail extends React.Component {
  static navigationOptions = {
    title: 'Course Details',
  };
  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text>
          Course details for {this.props.navigation.state.params.name}
        </Text>
      </View>
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
