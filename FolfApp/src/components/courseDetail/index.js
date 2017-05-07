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

export default graphql(gql`
  query {folf {courses {name}}}
`)(CourseDetail);
