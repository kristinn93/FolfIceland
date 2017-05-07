import React from 'react';
import { Text, View } from 'react-native';

import { gql, graphql } from 'react-apollo';

class CourseList extends React.Component {
  render() {
    console.log(this.props.data);
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text
          delayLongPress={500000}
          onPress={() => this.props.navigator.push('details')}
        >
          CourseList
        </Text>
      </View>
    );
  }
}

export default graphql(gql`
  query {folf {courses {name}}}
`)(CourseList);
