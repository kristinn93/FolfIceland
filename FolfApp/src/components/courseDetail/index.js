import React from 'react';
import { Text, View } from 'react-native';

import { gql, graphql } from 'react-apollo';

class CourseDetail extends React.Component {
  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text
          delayLongPress={500000}
          onPress={() => this.props.navigator.pop()}
        >
          CourseDetail
        </Text>
      </View>
    );
  }
}

export default graphql(gql`
  query {folf {courses {name}}}
`)(CourseDetail);
